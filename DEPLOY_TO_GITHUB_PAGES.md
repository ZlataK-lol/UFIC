# Deploying to GitHub Pages

This project is already set up to auto-deploy. Here's the only part that
actually requires your GitHub account — five steps, no code to write.

## 1. Create a new repository
Go to https://github.com/new
- Name it anything (e.g. `study-abroad-cape-town`)
- Keep it **Public** (required for free GitHub Pages)
- Don't initialize with a README — you're uploading an existing project

## 2. Push this project to it
From inside this unzipped folder, run:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

(Replace `<your-username>` and `<your-repo-name>` with your actual GitHub
username and the repo name you picked in step 1.)

No local `npm install` or build needed for this step — GitHub does that part
for you automatically (see step 4).

## 3. Turn on GitHub Pages
In your new repo on GitHub.com:
- Go to **Settings → Pages**
- Under "Build and deployment," set **Source** to **GitHub Actions**

That's it — no branch to pick, no folder to choose.

## 4. Let the workflow run
The included file `.github/workflows/deploy.yml` builds and deploys the site
automatically every time you push to `main`. After step 3, it will already be
running (triggered by your push in step 2).
- Watch it in the **Actions** tab of your repo
- Takes about 1–2 minutes
- Green checkmark = live

## 5. Find your live link
Once the workflow finishes, your site is live at:

```
https://<your-username>.github.io/<your-repo-name>/
```

Also shown at **Settings → Pages** once deployment finishes.

---

## Adding your photos later
Drop files into `public/photos/`, `public/photos/gallery/`, or
`public/screenshots/` per `PHOTO_GUIDE.md`, then:

```bash
git add .
git commit -m "Add photos"
git push
```

The site rebuilds and redeploys automatically — no other steps needed.

## If you ever rename the repo
The build reads the repo name automatically from GitHub, so a rename just
works on the next push — nothing to update by hand.
