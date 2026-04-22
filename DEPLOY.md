# Deploy — OpenClaw Setup Guide

This repo is a Next.js static site (output: 'export'). Deployment targets GitHub Pages via GitHub Actions. Everything is pre-staged — Batman just needs to create the public repo, point a domain, and push.

## One-time setup (Batman)

### 1. Create the public GitHub repo

```bash
# On your laptop (or wherever your git is configured):
cd /path/to/cloned/openclaw-guide

# Create the repo on GitHub first (web UI or `gh repo create`), then:
git remote add origin git@github.com:<your-username>/openclaw-agents-guide.git
git push -u origin main
```

Recommended repo name: `openclaw-agents-guide`.

### 2. Enable GitHub Pages

On the repo's GitHub page:
- **Settings → Pages**
- **Source:** GitHub Actions
- Save.

The workflow at `.github/workflows/deploy.yml` will run automatically on every push to `main` and deploy to Pages.

### 3. Attach a custom domain (optional)

If you buy a domain for the guide (e.g., `openclaw-guide.yourdomain.com`):

**a. In the GitHub UI:**
- **Settings → Pages → Custom domain:** enter your domain
- **Enforce HTTPS:** check

**b. At your DNS provider:**
- Add a `CNAME` record pointing your subdomain to `<your-username>.github.io`
- OR if using an apex domain, use GitHub's `A` records (see GitHub Pages docs)

**c. Commit a CNAME file:**
```bash
cp public/CNAME.template public/CNAME
# Edit public/CNAME to contain only your domain, no protocol, no trailing slash
# Example contents:  openclaw-guide.yourdomain.com
git add public/CNAME
git commit -m "deploy: add CNAME for <your-domain>"
git push
```

(`CNAME.template` is tracked as a reference; `CNAME` itself is ignored until you create it.)

### 4. Verify

After the first successful workflow run:
- `https://<your-username>.github.io/openclaw-agents-guide/` should load the site
- If you added a custom domain, `https://<your-domain>` should also work after DNS propagates (usually <15 minutes; up to 24 hours)

## Rebuilding the search index

The search index is regenerated automatically by the `prebuild` script before every `npm run build`. No manual action needed.

If you want to force a rebuild locally:
```bash
npm run build
# Or just: node scripts/build-search-index.mjs
```

## Local preview of the production build

```bash
npm run build
npx serve out
# Open http://localhost:3000
```

`npm start` does not work with `output: 'export'` — use `npx serve` against the `out/` directory.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Workflow fails on `npm ci` | Delete `package-lock.json`, re-run `npm install` locally, commit the new lockfile. |
| Pages deploys but site is blank | Check Pages is set to "GitHub Actions" source (not "Deploy from branch"). |
| Custom domain shows GitHub's 404 | `public/CNAME` must contain exactly the domain on line 1, no `https://`, no trailing slash. |
| Search index is stale after deploy | The `prebuild` step in `package.json` should run automatically. Check the Actions log to confirm. |

## What the workflow does

1. Checks out `main`
2. Installs Node 22 + dependencies from `package-lock.json`
3. Runs `npm run build` (which triggers `prebuild` → rebuilds search index → then `next build` → static export to `out/`)
4. Uploads `out/` as a Pages artifact
5. Publishes the artifact to the `github-pages` environment

Zero manual steps after initial setup.
