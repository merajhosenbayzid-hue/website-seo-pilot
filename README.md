# Website SEO Pilot ✈

**Free SEO Research & Organic Growth Tools**

A static, frontend-only SEO toolkit for USA Google Search users: research keywords,
plan SEO content, audit on-page SEO issues, and (in v2) measure real organic traffic
via Google Search Console.

## v1 — what's built

| Page | URL | Status |
|---|---|---|
| Home (tool dashboard) | `/index.html` | ✅ ready |
| Keyword Finder | `/keyword-finder.html` | ✅ ready |
| SEO Content Planner | `/content-planner.html` | ✅ ready |
| SEO Audit | `/seo-audit.html` | ✅ ready |
| Traffic Analytics | `/traffic-analytics.html` | ⏳ v2 (needs GSC OAuth backend) |
| Settings | `/settings.html` | ✅ ready |
| Help | `/help.html` | ✅ ready |

**v1 principles (enforced in the code):**
- Keyword Finder shows research *ideas* — no invented search-volume or difficulty numbers.
- Content Planner never publishes automatically; every plan is reviewed first.
- Traffic Analytics stays empty until real Google Search Console data is connected.
- No API keys or secrets anywhere in the frontend.
- All user data (keywords, plans, settings) lives in the browser's `localStorage`.

## Publish with GitHub Pages

1. Create a new GitHub repository (e.g. `website-seo-pilot`) and push this folder's contents.
2. In the repo: **Settings → Pages → Deploy from a branch** → branch `main`, folder `/ (root)`.
3. Your site goes live at `https://<username>.github.io/website-seo-pilot/`.
4. **Done:** canonical URLs, `sitemap.xml` and `robots.txt` already point to
   `https://merajhosenbayzid-hue.github.io/website-seo-pilot/` (set during the Oct 19, 2026 deploy).
   If you ever move the site, search the project for that URL and replace it (7 pages + sitemap + robots).

## Notes & limits

- **GitHub Pages is static hosting only.** Keyword-data APIs, Search Console OAuth,
  user-data sync and secret API keys need a separate backend (planned for v2).
- **SEO Audit CORS:** browsers block cross-origin page reads, so the audit fully works
  on same-site pages; other sites show an honest "blocked" message until the v2 backend
  runs server-side audits.
- Every public page ships with its own `<title>`, meta description and canonical URL.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
cd website-seo-pilot
python3 -m http.server 8080
# open http://localhost:8080
```

## Roadmap (v2)

- Google Search Console OAuth + real traffic dashboard
- Server-side SEO audit of any URL
- Trusted keyword-data provider (real volume/difficulty)
- Optional account sync for plans across devices

## SEO rules this project follows

1. Only real SEO tools and genuinely useful content.
2. No bot traffic, fake clicks, traffic exchange or auto visitors.
3. No artificial manipulation of Google search results.
4. API keys/passwords never in public frontend code.
5. English content for USA readers.
6. Unique title, meta description and canonical per page.
7. Correct sitemap + robots.txt.
8. No guessed SEO data — real data only.
9. Human review before any content publishes.
10. Organic traffic measured with Google Search Console.
