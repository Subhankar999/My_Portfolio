/* Reads portfolioData (data/portfolio.js) and builds the page. No content lives here. */
(() => {
    const data = portfolioData;
    const $ = (selector) => document.querySelector(selector);
    const escapeHtml = (text = "") =>
        String(text).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    const firstName = data.personal.name.split(" ")[0];

    /* ---------- Theme ---------- */
    function initTheme() {
        const button = $("#theme-toggle");
        const apply = (theme) => {
            document.documentElement.dataset.theme = theme;
            button.innerHTML = `<i class="fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}" aria-hidden="true"></i>`;
            button.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
        };
        apply(document.documentElement.dataset.theme || "dark");
        button.addEventListener("click", () => {
            const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
            apply(next);
            try { localStorage.setItem("theme", next); } catch (e) { /* storage unavailable */ }
        });
    }

    /* ---------- Navigation ---------- */
    function initNav() {
        const toggle = $("#menu-toggle");
        const links = $("#nav-links");
        toggle.addEventListener("click", () => {
            const open = links.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open);
        });
        links.addEventListener("click", (e) => {
            if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
        });
        const navLinks = [...links.querySelectorAll("a")];
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
            });
        }, { rootMargin: "-45% 0px -50% 0px" });
        document.querySelectorAll("main section[id]").forEach((s) => observer.observe(s));
    }

    /* ---------- Content ---------- */
    function renderMeta() {
        document.title = data.site.title;
        const set = (selector, value) => { const el = $(selector); if (el) el.setAttribute("content", value); };
        set('meta[name="description"]', data.site.description);
        set('meta[property="og:title"]', data.site.title);
        set('meta[property="og:description"]', data.site.description);
    }

    function socialLink(href, icon, label, classes = "btn btn-ghost") {
        return href ? `<a class="${classes}" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><i class="${icon}" aria-hidden="true"></i> ${label}</a>` : "";
    }

    function renderHero() {
        const { personal, social } = data;
        $("#hero-content").innerHTML = `
            <h1>Hi, I'm ${escapeHtml(personal.name)}</h1>
            <p class="hero-role">${escapeHtml(personal.role)}</p>
            <p class="hero-tagline">${escapeHtml(personal.tagline)}</p>
            <div class="btn-row">
                <a class="btn btn-primary" href="#projects">View Projects</a>
                ${personal.resume ? `<a class="btn btn-ghost" href="${escapeHtml(personal.resume)}" download><i class="fa-solid fa-download" aria-hidden="true"></i> Download Resume</a>` : ""}
                ${socialLink(social.github, "fa-brands fa-github", "GitHub")}
                ${socialLink(social.linkedin, "fa-brands fa-linkedin", "LinkedIn")}
            </div>`;
        $("#nav-brand").textContent = firstName;
        $("#footer-name").textContent = personal.name;
        $("#year").textContent = new Date().getFullYear();
    }

    function renderAbout() {
        const { personal } = data;
        const { about } = personal;
        $("#about-content").innerHTML = `
            <img class="profile" src="${escapeHtml(personal.profileImage)}" alt="Portrait of ${escapeHtml(personal.name)}" width="240" height="240" loading="lazy">
            <div class="about-text">
                <p class="lead">${escapeHtml(about.intro)}</p>
                <dl class="facts">
                    <div><dt>Areas of interest</dt><dd>${about.interests.map((i) => `<span class="chip">${escapeHtml(i)}</span>`).join("")}</dd></div>
                    <div><dt>Development focus</dt><dd>${escapeHtml(about.focus)}</dd></div>
                    <div><dt>Career goal</dt><dd>${escapeHtml(about.goal)}</dd></div>
                </dl>
            </div>`;
    }

    function renderSkills() {
        $("#skills-grid").innerHTML = Object.entries(data.skills).map(([category, items]) => `
            <article class="card skill-group reveal">
                <h3>${escapeHtml(category)}</h3>
                <ul class="chips">${items.map((skill, i) => `<li class="chip" style="--i:${i}">${escapeHtml(skill)}</li>`).join("")}</ul>
            </article>`).join("");
    }

    function projectCard(project) {
        const links = [
            project.github && `<a class="btn btn-small btn-ghost" href="${escapeHtml(project.github)}" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github" aria-hidden="true"></i> GitHub</a>`,
            project.live && `<a class="btn btn-small btn-primary" href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live Demo</a>`
        ].filter(Boolean).join("");
        return `
            <article class="card project">
                <div class="project-media">
                    <img src="${escapeHtml(project.image)}" alt="Screenshot of ${escapeHtml(project.title)}" loading="lazy" width="640" height="360">
                    ${project.featured ? '<span class="badge">Featured</span>' : ""}
                </div>
                <div class="project-body">
                    <p class="project-category">${escapeHtml(project.category)}</p>
                    <h3>${escapeHtml(project.title)}</h3>
                    <p>${escapeHtml(project.description)}</p>
                    <ul class="chips small">${project.technologies.map((t) => `<li class="chip">${escapeHtml(t)}</li>`).join("")}</ul>
                    <div class="btn-row">${links}</div>
                </div>
            </article>`;
    }

    function renderProjects() {
        const grid = $("#projects-grid");
        const filters = $("#project-filters");
        const categories = ["All", ...new Set(data.projects.map((p) => p.category))];

        filters.innerHTML = categories.map((c, i) =>
            `<button type="button" class="filter${i === 0 ? " active" : ""}" data-category="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(c)}</button>`).join("");

        const show = (category) => {
            const list = category === "All" ? data.projects : data.projects.filter((p) => p.category === category);
            grid.innerHTML = list.map(projectCard).join("");
        };
        show("All");

        filters.addEventListener("click", (e) => {
            const button = e.target.closest(".filter");
            if (!button) return;
            filters.querySelectorAll(".filter").forEach((b) => { b.classList.toggle("active", b === button); b.setAttribute("aria-pressed", b === button); });
            show(button.dataset.category);
        });
    }

    function renderEducation() {
        $("#education-list").innerHTML = data.education.map((item) => `
            <li class="timeline-item reveal">
                <p class="timeline-date">${escapeHtml(item.year)}</p>
                <h3>${escapeHtml(item.degree)}</h3>
                <p>${escapeHtml(item.institution)}</p>
            </li>`).join("");
    }

    function renderCertifications() {
        $("#certifications-grid").innerHTML = data.certifications.map((cert) => `
            <article class="card cert reveal">
                <i class="fa-solid fa-certificate cert-icon" aria-hidden="true"></i>
                <h3>${escapeHtml(cert.name)}</h3>
                <p>${escapeHtml(cert.organization)} &middot; ${escapeHtml(cert.year)}</p>
                ${cert.link ? `<a class="text-link" href="${escapeHtml(cert.link)}" target="_blank" rel="noopener noreferrer">View certificate</a>` : ""}
            </article>`).join("");
    }

    function renderContact() {
        const { social } = data;
        $("#contact-content").innerHTML = `
            <p class="lead">I am open to internships, junior roles and collaboration on machine learning projects. The quickest way to reach me is email.</p>
            <a class="btn btn-primary" href="mailto:${escapeHtml(social.email)}"><i class="fa-solid fa-envelope" aria-hidden="true"></i> ${escapeHtml(social.email)}</a>
            <div class="btn-row">
                ${socialLink(social.github, "fa-brands fa-github", "GitHub")}
                ${socialLink(social.linkedin, "fa-brands fa-linkedin", "LinkedIn")}
            </div>`;
    }

    /* ---------- Reveal on scroll ---------- */
    function initReveal() {
        const items = document.querySelectorAll(".reveal");
        if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("visible")); return; }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
            });
        }, { threshold: 0.12 });
        items.forEach((el) => observer.observe(el));
    }

    /* Show a neutral tile if any image file is missing */
    document.addEventListener("error", (e) => {
        if (e.target.tagName === "IMG") { e.target.removeAttribute("src"); e.target.classList.add("img-missing"); }
    }, true);

    renderMeta(); renderHero(); renderAbout(); renderSkills(); renderProjects();
    renderEducation(); renderCertifications(); renderContact();
    initTheme(); initNav(); initReveal();
})();
