# Riftbound Notes

A Markdown documentation site for Riftbound rules and card interactions, built with VitePress and deployed to GitHub Pages.

Includes full-text local search, topic navigation, dark mode, source guidance, and a reusable rules-note template. The initial topic pages are explicitly marked as awaiting notes; this is a documentation foundation, not a completed rulebook.

## Develop locally

Use Node.js 22 or newer.

```sh
npm ci
npm run docs:dev
```

The command prints a local preview URL. To check the production site:

```sh
npm run docs:build
npm run docs:preview
```

## Publish to GitHub Pages

1. Create or choose a GitHub repository and push these files to its `main` branch. A public repository works with GitHub Free.
2. Open the repository’s **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. Open **Actions → Build and deploy documentation → Run workflow** if the initial push happened before Pages was enabled.
4. After the workflow completes, open the URL shown in the deployment environment or Pages settings.

The workflow obtains the Pages base path automatically, including for project sites under `/repository-name/`. It builds pull requests without deploying them. It uses the repository’s built-in GitHub token; no personal token or additional deployment secret is needed.

For an existing remote, use its actual URL in place of the placeholder:

```sh
git init -b main
git add .
git commit -m "Set up Riftbound rules documentation"
git remote add origin https://github.com/OWNER/REPOSITORY.git
git push -u origin main
```

If you use a different default branch, update the workflow branch filters and edit-link branch in `docs/.vitepress/config.mts`.

## Write documentation

- Edit content in `docs/`.
- Start with `docs/contributing.md` for the rules-note template and sourcing checklist.
- Update navigation in `docs/.vitepress/config.mts` when adding a topic.
- Add card interactions under `docs/interactions/` and link them from its index.
- Run `npm run docs:build` before submitting changes; VitePress checks internal page links.

For a local preview using a project subpath, run:

```sh
PAGES_BASE_PATH=/riftbound-knowledge/ npm run docs:build
PAGES_BASE_PATH=/riftbound-knowledge/ npm run docs:preview
```

## References

- [Riot’s official Rules Hub](https://playriftbound.com/en-us/rules-hub/)
- [VitePress deployment guide](https://vitepress.dev/guide/deploy)
- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

This is an independent community project, not affiliated with or endorsed by Riot Games. Riftbound and related marks belong to Riot Games, Inc.
