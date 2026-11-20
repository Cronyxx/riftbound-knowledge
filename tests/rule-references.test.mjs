import assert from 'node:assert/strict'
import test from 'node:test'
import { citationNumber, createRuleLoader } from '../docs/.vitepress/theme/rule-references.mjs'

const origin = 'https://example.test'
const version = '2026-10-09'
const rules = ['811', '811.1', '811.1.b', '811.10', '813'].map((number) => ({
  number, page: 130, paragraphs: [['rule', `Text for ${number}`]]
}))
const response = () => ({ ok: true, json: async () => ({ version, rules }) })

test('recognizes rule citations with a project base and preserves subrule numbering', () => {
  assert.equal(citationNumber('/riftbound-knowledge/reference/core-rules.html#rule-811-1-b', { origin, base: '/riftbound-knowledge/' }), '811.1.b')
  assert.equal(citationNumber('/reference/core-rules#rule-000', { origin }), '000')
})

test('ignores external PDFs, ordinary source links, malformed fragments, and other sites', () => {
  for (const href of ['/sources.html', '/reference/core-rules.html', '/reference/core-rules.html#rule-811-invalid', '/reference/core-rules.pdf#page=130', 'https://other.test/reference/core-rules.html#rule-811', 'http://[']) {
    assert.equal(citationNumber(href, { origin }), null, href)
  }
  assert.equal(citationNumber('/reference/core-rules.html#rule-811', { origin, base: '/project/' }), null)
})

test('a section includes its descendants, but not similarly prefixed siblings', async () => {
  const load = createRuleLoader({ version, fetchImpl: async () => response() })
  assert.deepEqual((await load('811.1')).map((rule) => rule.number), ['811.1', '811.1.b'])
  assert.deepEqual((await load('811.1.b')).map((rule) => rule.number), ['811.1.b'])
})

test('shares in-flight and cached bundle requests across citations', async () => {
  const urls = []
  const load = createRuleLoader({ base: '/project/', version, fetchImpl: async (url) => { urls.push(url); return response() } })
  await Promise.all([load('811'), load('813')])
  await load('811.1.b')
  assert.deepEqual(urls, ['/project/reference/rules/81.json?v=2026-10-09'])
})

test('heading citations include their section across bundle boundaries in source order', async () => {
  const sections = {
    '32': [{ number: '327', level: 3, section: ['327', '328', '330', '340'] }, { number: '328' }],
    '33': [{ number: '330' }],
    '34': [{ number: '340' }, { number: '349' }]
  }
  const load = createRuleLoader({ version, fetchImpl: async (url) => ({ ok: true, json: async () => ({ version, rules: sections[url.match(/\/(\d{2})\.json/)[1]] }) }) })
  assert.deepEqual((await load('327')).map((rule) => rule.number), ['327', '328', '330', '340'])
})

test('allows retry after a failed request', async () => {
  let calls = 0
  const load = createRuleLoader({ version, fetchImpl: async () => ++calls === 1 ? { ok: false } : response() })
  await assert.rejects(load('811'), /could not be loaded/)
  assert.equal((await load('811'))[0].number, '811')
  assert.equal(calls, 2)
})

test('rejects missing rules and mismatched editions instead of showing unrelated text', async () => {
  const load = createRuleLoader({ version, fetchImpl: async () => response() })
  await assert.rejects(load('812'), /not in this edition/)
  await assert.rejects(load('../811'), /Invalid rule/)
  const stale = createRuleLoader({ version: 'new-edition', fetchImpl: async () => response() })
  await assert.rejects(stale('811'), /edition does not match/)
})
