const ruleNumber = /^\d{3}(?:\.(?:\d+|[a-z]))*$/

const normalizePath = (path) => path.replace(/\.html$/, '').replace(/\/$/, '')
const normalizeBase = (base) => {
  const path = base.split('/').filter(Boolean).join('/')
  return path ? `/${path}/` : '/'
}

export function citationNumber(href, { origin, base = '/' }) {
  let url
  try { url = new URL(href, origin) } catch { return null }
  if (url.origin !== origin) return null
  if (normalizePath(url.pathname) !== normalizePath(`${normalizeBase(base)}reference/core-rules`)) return null
  if (!url.hash.startsWith('#rule-')) return null
  const number = url.hash.slice(6).replaceAll('-', '.')
  return ruleNumber.test(number) ? number : null
}

export function createRuleLoader({ base = '/', version, fetchImpl }) {
  const bundles = new Map()
  async function bundle(prefix) {
    if (!bundles.has(prefix)) {
      const pending = (async () => {
        const response = await fetchImpl(`${normalizeBase(base)}reference/rules/${prefix}.json?v=${encodeURIComponent(version)}`)
        if (!response.ok) throw new Error('Rule text could not be loaded')
        const data = await response.json()
        if (data.version !== version || !Array.isArray(data.rules)) throw new Error('Rule edition does not match')
        return data.rules
      })()
      bundles.set(prefix, pending)
      pending.catch(() => { if (bundles.get(prefix) === pending) bundles.delete(prefix) })
    }
    return bundles.get(prefix)
  }
  return async (number) => {
    if (!ruleNumber.test(number)) throw new Error('Invalid rule number')
    const rules = await bundle(number.slice(0, 2))
    const selected = rules.find((rule) => rule.number === number)
    if (!selected) throw new Error('Rule number is not in this edition')
    if (Array.isArray(selected.section)) {
      const prefixes = [...new Set(selected.section.map((n) => n.slice(0, 2)))]
      const context = (await Promise.all(prefixes.map(bundle))).flat()
      const byNumber = new Map(context.map((rule) => [rule.number, rule]))
      return selected.section.map((n) => {
        const rule = byNumber.get(n)
        if (!rule) throw new Error('Section text is incomplete')
        return rule
      })
    }
    const entries = rules.filter((rule) => rule.number === number || rule.number.startsWith(`${number}.`))
    return entries
  }
}
