/* ==========================================================
   EDIT THIS FILE TO UPDATE YOUR PORTFOLIO.
   Everything on the website is generated from this object.
   ========================================================== */
const portfolioData = {

    site: {
        title: "SUBHANKAR BAIDYA  | Machine Learning & Python Developer ",
        description: "I am currently pursuing a Bachelor of Technology in Computer Science with a strong foundation in Artificial Intelligence,programming, data structures, and algorithms. As a passionate tech enthusiast, I am eager to explore the vast field of computer science and build a career that allows me to innovate and solve real-world problems through technology."
    },

    personal: {
        name: "SUBHANKAR BAIDYA",
        role: "Machine Learning & Python Developer",
        tagline: "I build practical Machine Learning, Deep Learning and data-driven applications.",
        profileImage: "assets/profile_pic.jpg",
        resume: "assets/resume.pdf",          // set to "" to hide the resume button
        about: {
            intro: "I am currently pursuing a Bachelor of Technology in Computer Science with a strong foundation in Artificial Intelligence,programming, data structures, and algorithms. As a passionate tech enthusiast, I am eager to explore the vast field of computer science and build a career that allows me to innovate and solve real-world problems through technology.",
            interests: ["Computer Vision", "Deep Learning","Machine Learning" ,"Predictive Modeling", "Model Deployment"],
            focus: "Building and evaluating models in PyTorch and Scikit-learn, and serving them through FastAPI and Streamlit.",
            goal: "Seeking an ML or Python engineering internship or junior role where I can work on production machine learning."
        }
    },

    social: {
        github: "https://github.com/Subhankar999",
        linkedin: "https://www.linkedin.com/in/subhankarbaidya",
        email: "subhankarbaidya4105@gmail.com"
    },

    // Add a skill by adding a string to the right list. Add a new category by adding a new key.
    skills: {
        "Programming": ["Python", "Java", "C", "SQL"],
        "Machine Learning": ["Scikit-learn","Supervised","Unsupervised"],
        "Deep Learning": ["PyTorch", "TensorFlow","torchvision"],
        "Data Science": ["Pandas", "NumPy", "Matplotlib","seaborn"],
        "Web Development": ["FastAPI", "Streamlit", "HTML & CSS"],
        "Deployment & Tools": ["Git", "GitHub", "Render", "Vercel", "Jupyter"]
    },

    // "category" drives the filter buttons. They are created automatically.
    projects: [
        {
            title: "Used Car Price Prediction",
            category: "Deep Learning",
            description: "A regression model that estimates used car prices from specifications, served through a FastAPI backend with a web front end.",
            technologies: ["Python", "PyTorch", "FastAPI", "Pandas", "Scikit-learn", "Render", "Vercel"],
            image: "assets/projects/car-price.svg",
            github: "https://github.com/Subhankar999/Car-price-prediction-Model.git",
            live: " https://car-price-prediction-model-psi.vercel.app/",
            featured: false
        },
        {
            title: "Fruit & Vegetable Classifier(FreshVision AI)-Upgraded",
            category: "Deep Learning",
            description: "A upgraded  CNN image classifier that identifies fruits and vegetables from a photo, wrapped in a Streamlit app.",
            technologies: ["Python", "PyTorch", "CNN", "Streamlit","PIL","JSON","Streamlit Community Cloud"],
            image: "assets/projects/fruit-classifier.svg",
            github: "https://github.com/Subhankar999/Fruit-Vegetable-Classification-upgraded.git",
            live: "https://fruit-vegetable-classification-upgraded-g4w36uwvmxf3iamns8fne2.streamlit.app/",
            featured: false
        },
        {
            title: "Fruit & Vegetable Classifier(FreshVision AI)",
            category: "Deep Learning",
            description: "A CNN image classifier that identifies fruits and vegetables from a photo, served through a FastAPI backend with a web front end.",
            technologies: ["Python", "PyTorch", "CNN","torchvision" ,"PIL","FastAPI","Uvicorn","Python Multipart","HTML &CSS","JavaScript"],
            image: "assets/projects/fruit-classifier.svg",
            github: "https://github.com/Subhankar999/Fruits-vegetable-Classification-Model.git",
            live: "https://fruits-vegetable-classification-mod.vercel.app/",
            featured: true
        },
        // {
        //     title: "Vehicle Damage Detection",
        //     category: "Deep Learning",
        //     description: "A convolutional network that classifies the type of damage visible in vehicle photos.",
        //     technologies: ["Python", "PyTorch", "CNN", "Computer Vision"],
        //     image: "assets/projects/vehicle-damage.svg",
        //     github: "https://github.com/your-username/vehicle-damage-detection",
        //     live: ""   // leave empty to hide the Live Demo button
        // },
        {
            title: "Spotify Music Clustering",
            category: "Machine Learning",
            description: "Unsupervised clustering of tracks by audio features to group songs into listening moods, with an interactive explorer.",
            technologies: ["Python", "Pandas","Numpy", "Scikit-learn", "K-Means", "Streamlit"],
            image: "assets/projects/spotify-clustering.svg",
            github: "https://github.com/Subhankar999/Music-Clustering-project.git",
            live: "https://music-clustering-project-ubjfazqlhqeappy4v836gbn.streamlit.app/"
        }
    ],

    education: [
        {
            degree: "Bachelor of Technology in Computer science and engineering in Artificial Intelligence and Machine Learning ",
            institution: "RCC INSTITUTE OF INFORMATION TECHNOLOGY",
            year: "2024 - 2028"
        },
        {
            degree: "Higher Secondary Education",
            institution: "Dum Dum Kishore Bharati High School",
            year: "2022 - 2024"
        },
         {
            degree: "Secondary Education",
            institution: "Dum Dum Kishore Bharati High School",
            year: "2013 - 2022"
        }
    ],

    certifications: [
        {
            name: "AI course",
            organization: "Kawach.AI & Kreeti Technologies Pvt. Ltd",
            year: "2026",
            link: "file:///C:/Users/User/Desktop/portfolio/portfolio/assets/Kreeti_technologies_certificate.pdf",
            
        },
        {
            name: "Computer Architecture and Organization ",
            organization: "NPTEL",
            year: "2025",
            link: "file:///C:/Users/User/Desktop/portfolio/portfolio/assets/Computer%20Architecture%20and%20Organization.pdf"   
        },
        {
            name: "Data Analyst Course",
            organization: "OneRoadmap",
            year: "2025",
            link: "file:///C:/Users/User/Desktop/portfolio/portfolio/assets/Data%20Analyst-Certificate.pdf"   
        },
         {
            name: "INTEL AI Course ",
            organization: "INTEL",
            year: "2025",
            link: "file:///C:/Users/User/Desktop/portfolio/portfolio/assets/INTEL%20AI.pdf"   
        }
    ]
};
