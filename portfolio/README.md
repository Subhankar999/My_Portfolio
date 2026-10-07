# Machine Learning & Python Developer Portfolio

A fast, responsive, static portfolio. **All content lives in one file: `data/portfolio.js`.** The page is generated from it, so you never edit the HTML or CSS to update your information.

## Features
- Sticky navigation with a mobile hamburger menu
- Dark (default) and light theme, saved in `localStorage`
- Skills, projects, education and certifications generated from data
- Project filters built automatically from each project's `category`
- Lazy-loaded images, subtle animations, reduced-motion support
- SEO tags, Open Graph metadata, `robots.txt`, `sitemap.xml`
- No build step, no backend, no frameworks

## Technologies
HTML5, CSS3, vanilla JavaScript, Font Awesome (icons), Google Fonts.

## Folder structure
```text
portfolio/
├── index.html          page skeleton (rarely edited)
├── style.css           design (rarely edited)
├── script.js           builds the page from the data
├── robots.txt
├── sitemap.xml
├── data/portfolio.js   <- YOUR CONTENT. Edit this.
└── assets/
    ├── profile.svg     replace with your photo
    ├── resume.pdf      replace with your resume
    ├── favicon.svg
    └── projects/       project screenshots
```

## How to customize
Open `data/portfolio.js`. Each part is commented.

**Change your name / role / intro / about text:** edit `personal`.

**Change your profile image:** add your photo to `assets/` (e.g. `assets/profile.jpg`) and set `personal.profileImage: "assets/profile.jpg"`.

**Update your resume:** replace `assets/resume.pdf` with your file, keeping the same name. If you use another name, update `personal.resume`. Set it to `""` to hide the button.

**Update LinkedIn, GitHub or email:** edit `social`:
```javascript
social: {
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
    email: "you@example.com"
},
```

**Add a skill:** add a string to a category list inside `skills`:
```javascript
"Deep Learning": ["PyTorch", "CNN", "Transfer Learning", "TensorFlow"],
```
To create a new category, add a new key, e.g. `"MLOps": ["Docker", "MLflow"]`.

**Remove a skill:** delete its string.

**Add a project:** copy the screenshot into `assets/projects/`, then add an object to the `projects` array (remember the comma between objects):
```javascript
{
    title: "My New Project",
    category: "Machine Learning",
    description: "Description here",
    technologies: ["Python", "Scikit-learn"],
    image: "assets/projects/new-project.png",
    github: "https://github.com/...",
    live: "https://...",
    featured: true      // optional
},
```
The filter button for a new `category` appears automatically. Leave `github` or `live` empty (`""`) to hide that button.

**Remove a project:** delete its object from `projects`.

**Add education or certifications:** add one object to `education` or `certifications`.

**SEO:** update `site.title` and `site.description` in `portfolio.js`. In `index.html` also update the `<title>` and meta description (used by crawlers that do not run JavaScript). Replace `your-domain.vercel.app` in `robots.txt` and `sitemap.xml` with your real URL.

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python -m http.server 8000
```
then visit http://localhost:8000.

## Deploy on GitHub + Vercel
1. Create a GitHub repository and push the project:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/portfolio.git
   git push -u origin main
   ```
2. Sign in at vercel.com with GitHub and choose **Add New → Project**.
3. Import the repository. Framework preset: **Other**. Leave build command and output directory empty.
4. Click **Deploy**.

## Update the live site
Edit files, then:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel redeploys automatically within a minute.
