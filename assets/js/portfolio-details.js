/**
 * Portfolio Details — dynamic project renderer
 * Reads ?project=<id> from the URL and injects the matching entry from
 * projectsData into the page (title, images, description, specs, links).
 */
(function () {
  "use strict";

  const projectsData = {
    skillbarter: {
      title: "SkillBarter — Service Exchange Platform",
      subtitle: "Full-Stack Web Application",
      category: "Full-Stack Web App",
      description: "SkillBarter is a full-stack platform where users can exchange skills with " +
        "each other instead of paying for services. Members sign up, list the skills they can " +
        "offer, search for other users by skill, and connect to arrange exchange sessions. The " +
        "app is built end-to-end with the MERN stack and includes real-time chat and user " +
        "profile management so members can coordinate directly inside the platform.",
      keyFeatures: [
        "Real-time chat between members for coordinating skill exchange sessions",
        "Skill listing and search so users can discover the right match",
        "User profile management with editable skills and activity history",
        "Secure sign-up and login flow built on a full MERN stack"
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      year: "2025",
      liveLink: "https://skillbarter-beta.vercel.app/",
      githubLink: "https://github.com/tayabatariq/skillbarterfrontend",
      images: ["assets/img/portfolio/skill.PNG"]
    },

    ticketflow: {
      title: "TicketFlow — Multi-Tenant Support Desk",
      subtitle: "Full-Stack Web Application",
      category: "Full-Stack Web App",
      description: "TicketFlow is a full-stack, multi-tenant support ticket platform where " +
        "multiple vendors manage their own customer support through role-based dashboards " +
        "(Super Admin, Vendor, Staff, and Customer). Built with React, Node.js, Express, and " +
        "MongoDB, it handles the complete support lifecycle from ticket creation to resolution, " +
        "with real-time chat and automated notifications keeping every role in sync.",
      keyFeatures: [
        "Multi-tenant, role-based dashboards for Super Admin, Vendor, Staff, and Customer",
        "Real-time support chat powered by Socket.io",
        "JWT-based authentication with role-level access control",
        "Automated email notifications for ticket updates"
      ],
      techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
      year: "2026",
      liveLink: "https://ticketflow-teal-nine.vercel.app/",
      githubLink: "https://github.com/tayabatariq/ticketflow_backend",
      images: [
        "assets/img/portfolio/ticketmainhome.png",
        "assets/img/portfolio/ticketflow1.png",
        "assets/img/portfolio/ticketflow2.png",
        "assets/img/portfolio/ticketflow3.png",
        "assets/img/portfolio/ticketflow5.png",
        "assets/img/portfolio/ticketflow6.png"
      ]
    },

    "impremium-media": {
      title: "Impremium Media Group — Agency Website",
      subtitle: "Web Design / UI",
      category: "Web Design / UI",
      description: "Impremium Media Group is a static frontend website showcasing the agency's " +
        "services and portfolio. It's built with plain HTML, CSS, and JavaScript, with a " +
        "responsive and modern UI optimized for user experience and accessibility across " +
        "devices.",
      keyFeatures: [
        "Fully responsive, accessibility-minded static frontend",
        "Modern UI showcasing agency services and portfolio work",
        "Built with clean HTML/CSS/JS with no framework overhead",
        "Optimized for fast load and a smooth browsing experience"
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      liveLink: "https://shopifyimperimuim.vercel.app/",
      githubLink: "https://github.com/tayabatariq/shopifyimperimuim",
      images: ["assets/img/portfolio/shopify.PNG"]
    },

    edtextain: {
      title: "EdTextain — Landing Page",
      subtitle: "Web Design / UI",
      category: "Web Design / UI",
      description: "EdTextain is a static landing page built with HTML, CSS, and JavaScript. " +
        "It showcases the EdTextain platform with a modern, responsive design and interactive " +
        "UI elements aimed at boosting visitor engagement.",
      keyFeatures: [
        "Modern, responsive landing page design",
        "Interactive UI elements to boost engagement",
        "Lightweight vanilla HTML/CSS/JS implementation",
        "Clear visual hierarchy for platform storytelling"
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      liveLink: "https://edtextainlanding.vercel.app/",
      githubLink: "https://github.com/tayabatariq/edtextainlanding",
      images: ["assets/img/portfolio/edtx.PNG"]
    },

    "students-fyp": {
      title: "Students FYP Portal — Project Management System",
      subtitle: "Full-Stack Web Application",
      category: "Full-Stack Web App",
      description: "Students FYP Portal is a full-stack web application built with PHP, MySQL, " +
        "and frontend technologies (HTML, CSS, JS). It helps students submit their final year " +
        "project proposals, track approvals, communicate with supervisors, and manage project " +
        "documents. The portal is responsive and user-friendly, simplifying the entire FYP " +
        "submission workflow.",
      keyFeatures: [
        "Final year project proposal submission and approval tracking",
        "Supervisor-student communication workflow",
        "Centralized document management for FYP submissions",
        "PHP & MySQL backend with a responsive frontend"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      year: "2025",
      liveLink: "https://studentfyp.site/",
      githubLink: "https://github.com/tayabatariq/students.fyp",
      images: ["assets/img/portfolio/std.PNG"]
    },

    "furniture-bootstrap": {
      title: "Furniture Store — Bootstrap Website",
      subtitle: "Web Design / UI",
      category: "Web Design / UI",
      description: "A responsive furniture website designed using Bootstrap, HTML, CSS, and " +
        "JavaScript. It features a clean UI, a product gallery, and interactive elements, all " +
        "optimized for a smooth browsing experience.",
      keyFeatures: [
        "Responsive Bootstrap-based layout across devices",
        "Interactive product gallery",
        "Clean, modern UI focused on browsing experience",
        "Optimized for smooth navigation and performance"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      year: "2025",
      liveLink: "https://tayabatariq.github.io/Furniture-botstrap-website/",
      githubLink: "https://github.com/tayabatariq/Furniture-botstrap-website",
      images: ["assets/img/portfolio/fr.PNG"]
    },

    brandbeet: {
      title: "BrandBeet — Animated Brand Experience",
      subtitle: "Animation / Interactive UI",
      category: "Animation / Interactive UI",
      description: "BrandBeet is an animated web UI built using GSAP for smooth animations, " +
        "combined with HTML, JavaScript, and Tailwind CSS for styling. The project demonstrates " +
        "interactive transitions, animated elements, and micro-interactions to create a lively " +
        "user experience.",
      keyFeatures: [
        "GSAP-powered scroll and micro-interaction animations",
        "Smooth animated transitions between UI states",
        "Tailwind CSS for fast, consistent styling",
        "Lively, engaging interactive experience throughout"
      ],
      techStack: ["HTML", "JavaScript", "Tailwind CSS", "GSAP"],
      year: "2025",
      liveLink: "https://tayabatariq.github.io/Brandbeet/",
      githubLink: "https://github.com/tayabatariq/Brandbeet",
      images: ["assets/img/portfolio/br.PNG"]
    },

    "wings-of-change": {
      title: "Wings of Change — Social Impact Platform",
      subtitle: "Full-Stack Web Application",
      category: "Full-Stack Web App",
      description: "Wings of Change is a full-stack social impact platform developed using the " +
        "MERN stack (MongoDB, Express, React, Node.js). The app empowers users to engage in " +
        "social initiatives, track community activities, and collaborate with volunteers, with " +
        "interactive dashboards and real-time updates across the platform.",
      keyFeatures: [
        "Role-based access control and user authentication",
        "Interactive dashboards for tracking community activities",
        "Real-time updates across the platform",
        "Full CRUD operations for social impact projects and events"
      ],
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      year: "2025",
      liveLink: "https://wingsofchange.vercel.app/",
      githubLink: "https://github.com/tayabatariq/wingsofchange",
      images: ["assets/img/portfolio/wings.PNG"]
    },

    cuberto: {
      title: "Cuberto — Animated Landing Website",
      subtitle: "Animated Website / UI",
      category: "Animated Website / UI",
      description: "This is an animated and interactive landing website built using GSAP " +
        "(GreenSock Animation Platform), JavaScript, HTML, and CSS. It features smooth " +
        "scroll-based animations, micro-interactions, and animated transitions that give the " +
        "site a lively, high-end feel.",
      keyFeatures: [
        "Scroll-based animation sequences built with GSAP",
        "Micro-interactions and animated transitions throughout",
        "Pure HTML/CSS/JS implementation with no framework dependency",
        "Engaging, high-end animated landing experience"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
      year: "2025",
      liveLink: "https://tayabatariq.github.io/Cuberto/",
      githubLink: "https://github.com/tayabatariq/Cuberto",
      images: ["assets/img/portfolio/cuberto.PNG"]
    },

    "weather-app": {
      title: "Weather App — Real-Time Forecast Tool",
      subtitle: "Web Design / UI",
      category: "Web Design / UI",
      description: "A simple and responsive weather app built using HTML, CSS, and JavaScript. " +
        "The app fetches real-time weather data from a public API and displays current " +
        "conditions, temperature, and location in a clean, interactive interface.",
      keyFeatures: [
        "Real-time weather data fetched from a public API",
        "Displays current conditions, temperature, and location",
        "Clean, responsive interface",
        "Lightweight vanilla JavaScript implementation"
      ],
      techStack: ["HTML", "CSS", "JavaScript"],
      year: "2025",
      liveLink: "https://tayabatariq.github.io/weather_app/",
      githubLink: "https://github.com/tayabatariq/weather_app",
      images: ["assets/img/portfolio/weather.PNG"]
    }
  };

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function renderProject(project) {
    document.title = project.title + " — Tayaba Tariq";

    setText("project-breadcrumb-current", project.title);
    setText("project-tag-pill", project.category);
    setText("project-title", project.title);
    setText("project-subtitle", project.subtitle);
    setText("project-category", project.category);
    setText("project-year", project.year);

    const images = project.images || [];

    const heroImg = document.getElementById("project-hero-image");
    if (heroImg && images.length) {
      heroImg.src = images[0];
      heroImg.alt = project.title;
    }

    const descEl = document.getElementById("project-description");
    if (descEl) {
      descEl.innerHTML = "";
      const p = document.createElement("p");
      p.textContent = project.description;
      descEl.appendChild(p);
    }

    const featureList = document.getElementById("project-feature-list");
    if (featureList) {
      featureList.innerHTML = "";
      (project.keyFeatures || []).forEach((feature) => {
        const li = document.createElement("li");
        const icon = document.createElement("i");
        icon.className = "bi bi-check-circle";
        li.appendChild(icon);
        li.appendChild(document.createTextNode(" " + feature));
        featureList.appendChild(li);
      });
    }

    const gallery = document.getElementById("project-gallery");
    if (gallery) {
      gallery.innerHTML = "";
      const secondaryImages = images.slice(1);
      if (secondaryImages.length) {
        gallery.style.display = "";
        secondaryImages.forEach((src) => {
          const img = document.createElement("img");
          img.src = src;
          img.alt = project.title + " screenshot";
          img.loading = "lazy";
          gallery.appendChild(img);
        });
      } else {
        gallery.style.display = "none";
      }
    }

    const techBadges = document.getElementById("project-tech-badges");
    if (techBadges) {
      techBadges.innerHTML = "";
      (project.techStack || []).forEach((tech) => {
        const span = document.createElement("span");
        span.className = "tech-badge";
        span.textContent = tech;
        techBadges.appendChild(span);
      });
    }

    const liveLink = document.getElementById("project-live-link");
    if (liveLink) {
      if (project.liveLink) {
        liveLink.href = project.liveLink;
        liveLink.style.display = "";
      } else {
        liveLink.style.display = "none";
      }
    }

    const githubLink = document.getElementById("project-github-link");
    if (githubLink) {
      if (project.githubLink) {
        githubLink.href = project.githubLink;
        githubLink.style.display = "";
      } else {
        githubLink.style.display = "none";
      }
    }
  }

  /**
   * Modern branded preloader — dismissed once the project content has
   * rendered, with a minimum display time so fast loads don't flicker.
   */
  const pageLoadStart = Date.now();
  const MIN_PRELOADER_MS = 550;
  let preloaderHidden = false;

  function hidePreloader() {
    if (preloaderHidden) return;
    preloaderHidden = true;

    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    const barFill = preloader.querySelector(".preloader-bar-fill");
    const mainEl = document.querySelector(".main");
    const elapsed = Date.now() - pageLoadStart;
    const remaining = Math.max(MIN_PRELOADER_MS - elapsed, 0);

    if (barFill) barFill.style.width = "100%";

    setTimeout(() => {
      preloader.classList.add("preloader-hide");
      if (mainEl) mainEl.classList.add("page-revealed");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, remaining);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project");

    let project = projectsData[projectId];

    if (!project) {
      const fallbackId = Object.keys(projectsData)[0];
      project = projectsData[fallbackId];
    }

    if (project) {
      renderProject(project);
    }

    const barFill = document.querySelector(".preloader-bar-fill");
    if (barFill) {
      requestAnimationFrame(() => {
        barFill.style.width = "75%";
      });
    }
  });

  window.addEventListener("load", hidePreloader);
  // Fallback in case 'load' is delayed by a slow external resource.
  setTimeout(hidePreloader, 3000);

  window.projectsData = projectsData;
})();
