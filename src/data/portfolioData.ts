export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Computer Vision & AI' | 'Applied Mathematics' | 'Data Analytics' | 'Software Engineering';
  description: string;
  detailedCaseStudy?: {
    background: string;
    methodology: string;
    mathematicalModel: string;
    metrics: { label: string; value: string }[];
    keyTakeaways: string[];
  };
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  paperUrl?: string;
  featured?: boolean;
  period?: string;
  cvBullets?: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string;
  issuer: string;
  year: string;
  description: string;
  skills: string[];
  credentialUrl?: string;
  badgeLabel: string;
  issuedDate?: string;
  location?: string;
  signedBy?: string;
  image?: string;
  pdfUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level?: number; iconName?: string; desc?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
  tags: string[];
  image?: string;
  imageAlt?: string;
  links?: { label: string; url: string }[];
  detailTarget?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  details: string;
  thesis: string;
  thesisTitle: string;
  achievements: string[];
}

export const portfolioData = {
  personal: {
    fullName: "Merisa Anggi Anggraini",
    nickname: "Isa",
    role: "Mathematics Graduate · Data Analytics, Machine Learning & Software Development",
    tagline: "Bridging Mathematical Rigor with Data, AI & Software Engineering",
    bio: "Mathematics graduate from Institut Teknologi Sepuluh Nopember (ITS) with strong competencies in data analytics, machine learning, and software development. Experienced in executing applied AI projects, including deep learning implementations for computer vision and statistical time-series forecasting for real-world data analysis.",
    location: "Jember, East Java, Indonesia",
    status: "Open to Data, AI/ML & Software Engineering Roles",
    email: "merisaanggi30@gmail.com",
    phone: "+62 822-6483-9521",
    phoneLink: "https://wa.me/6282264839521",
    cvUrl: "/assets/CV_Merisa_Anggi_Anggraini.pdf",
    linkedin: "https://www.linkedin.com/in/merisa-anggi-anggraini/",
    github: "https://github.com/rainingg-weather",
    thesisPdf: "/assets/thesis/Tugas-Akhir-Merisa-Anggi-Anggraini.pdf",
  },
  stats: [
    { label: "Institution", value: "ITS · Bachelor of Mathematics" },
    { label: "Core Focus", value: "Data Analytics, ML & Software Development" },
    { label: "Flagship Research", value: "RCDNet Image Deraining" },
    { label: "Tech Stack", value: "Python · PyTorch · FastAPI · OpenShift" },
  ],
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "Javanese", level: "Native" },
    { name: "English", level: "Intermediate" },
  ],
  thesis: {
    code: "SM234801",
    title: "Rain Convolutional Dictionary Network (RCDNet) Dengan Frequency Hint Untuk Menghilangkan Noise Hujan Pada Citra Digital",
    titleEn: "Rain Convolutional Dictionary Network (RCDNet) with Frequency Hint for Rain Noise Removal in Digital Images",
    advisor: "Dr. Dwi Ratna Sulistyaningrum, S.Si, M.T.",
    department: "Departemen Matematika, Fakultas Sains dan Analitika Data, ITS",
    date: "29 Juli 2026",
    pdfUrl: "/assets/thesis/Tugas-Akhir-Merisa-Anggi-Anggraini.pdf",
    keywords: ["Single Image Deraining", "RCDNet", "FrequencyHint", "Transformasi Fourier", "Rain Streak Removal"],
    abstract: [
      "Citra yang diambil saat hujan sering mengalami penurunan kualitas karena rain streaks yang mengaburkan informasi visual dan menurunkan kinerja sistem pengenalan objek. RCDNet adalah salah satu metode Single Image Deraining yang banyak digunakan, tetapi hanya memanfaatkan informasi lokal pada domain spasial sehingga kurang efektif membedakan pola hujan dari tekstur asli latar belakang.",
      "Penelitian ini memodifikasi bagian M-Net pada RCDNet dengan modul FrequencyHint. Modul ini memakai transformasi Fourier untuk mengekstraksi informasi domain frekuensi sebagai petunjuk frekuensi global, serta mekanisme spectral gate bottleneck untuk menyaring komponen frekuensi secara adaptif agar model tetap efisien."
    ],
    highlights: [
      { value: "+0,3293 dB", label: "PSNR Rain100L", note: "SSIM +0,0008 vs baseline" },
      { value: "+0,5586 dB", label: "PSNR Rain100H", note: "SSIM +0,0069 vs baseline" },
      { value: "−13,82%", label: "Skor BRISQUE", note: "487 foto hujan nyata (data primer)" },
      { value: "~33%", label: "Lebih cepat per epoch", note: "Konfigurasi S = 10 sudah melampaui baseline" }
    ],
    resultsCaption: "Hasil eksperimen utama (S = 17, PSNR/SSIM pada channel Y YCbCr)",
    results: [
      { model: "RCDNet Baseline", psnrL: "38,9044", ssimL: "0,9854", psnrH: "29,5389", ssimH: "0,9021" },
      { model: "RCDNet-FH v1", psnrL: "39,1711", ssimL: "0,9860", psnrH: "30,0052", ssimH: "0,9080" },
      { model: "RCDNet-FH v2", psnrL: "39,2337", ssimL: "0,9862", psnrH: "30,0975", ssimH: "0,9090" }
    ],
    datasets: [
      "Rain100L dan Rain100H: 1.800 data latih + 100 data uji",
      "Dataset sintetik tambahan: 1.500 pasangan (uji generalisasi zero-shot)",
      "Data primer: 487 foto hujan nyata yang diambil sendiri dengan kamera smartphone"
    ],
    figures: [
      { src: "/assets/thesis/rcdnet-real-rain-result.jpg", caption: "Hasil deraining pada foto hujan nyata (data primer), model RCDNet-FH v2 Mixed" },
      { src: "/assets/thesis/rcdnet-rain100h-comparison.jpg", caption: "Perbandingan visual Baseline, FH v1, dan FH v2 pada sampel Rain100H" }
    ]
  },
  education: [
    {
      period: "Aug 2022 — Aug 2026",
      degree: "Bachelor of Mathematics",
      institution: "Institut Teknologi Sepuluh Nopember (ITS)",
      location: "Surabaya, Indonesia",
      details: "Skills: Linear Algebra, Algorithm, Mathematical Logic, Data Science.",
      thesis: "Undergraduate Research Thesis",
      thesisTitle: "Rain Convolutional Dictionary Network (RCDNet) Dengan Frequency Hint Untuk Menghilangkan Noise Hujan Pada Citra Digital",
      achievements: [
        "Final project (SM234801) on RCDNet with FrequencyHint, supervised by Dr. Dwi Ratna Sulistyaningrum, S.Si, M.T. (completed July 2026)",
        "Collected a primary dataset of 487 real rain photos and achieved a 13.82% BRISQUE reduction after deraining",
        "Completed the Software Engineer Bootcamp at Departemen Matematika ITS (Multipolar Technology Group), September 2026",
        "Applied SARIMA time-series forecasting to national claim data during an R&D internship at PT TASPEN (Persero)"
      ]
    }
  ] as EducationItem[],
  skillCategories: [
    {
      title: "Programming Languages",
      description: "Core languages used across data, AI, and backend projects.",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "SQL" }
      ]
    },
    {
      title: "Data Science & AI",
      description: "Applied machine learning for computer vision and forecasting.",
      skills: [
        { name: "Deep Learning" },
        { name: "Computer Vision (Image Restoration)" },
        { name: "Time-Series Forecasting" },
        { name: "Data Mining" },
        { name: "Predictive Modeling" }
      ]
    },
    {
      title: "DevOps & Backend",
      description: "Building, containerizing, and deploying services.",
      skills: [
        { name: "FastAPI" },
        { name: "REST API Development" },
        { name: "Podman" },
        { name: "Docker" },
        { name: "Kubernetes / OpenShift" },
        { name: "Ansible" },
        { name: "MongoDB" }
      ]
    },
    {
      title: "Tools & Technologies",
      description: "Frameworks and tools for modeling, analysis, and design.",
      skills: [
        { name: "PyTorch" },
        { name: "MySQL / Relational Databases" },
        { name: "UI/UX Design (Figma)" },
        { name: "Decision Support Systems" },
        { name: "Minitab" },
        { name: "SPSS" },
        { name: "Excel" }
      ]
    },
    {
      title: "Applied Mathematics",
      description: "Mathematical foundation behind the models and algorithms.",
      skills: [
        { name: "Linear Algebra" },
        { name: "Numerical Methods" },
        { name: "Probability & Statistics" },
        { name: "Cryptography" },
        { name: "Data Structures" }
      ]
    },
    {
      title: "Soft Skills",
      description: "Gained through leadership and event roles in student organizations.",
      skills: [
        { name: "Cross-functional Collaboration" },
        { name: "Partnership Management" },
        { name: "Team Leadership" },
        { name: "Public Communication" },
        { name: "Problem Solving" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "financial-tracker-microservice",
      title: "Financial Tracker Microservice",
      subtitle: "Bootcamp ITS Final Project · Sep 2026",
      category: "Software Engineering",
      featured: true,
      period: "Sep 2026",
      cvBullets: [
        "Built and deployed a two-service financial tracking application (FastAPI) featuring transaction management and automated monthly spending-alert profiling.",
        "Containerized services with Podman and deployed them to Red Hat OpenShift, configuring inter-service networking, environment-based secrets, and multi-replica deployments.",
        "Provisioned a self-hosted MongoDB instance on a virtual machine and automated its setup using Ansible through Ansible Automation Platform (AAP), with source control managed on GitHub."
      ],
      description: "A two-service financial tracking application built with FastAPI, featuring transaction management and automated monthly spending-alert profiling. Containerized with Podman and deployed to Red Hat OpenShift.",
      tags: ["FastAPI", "Podman", "OpenShift", "MongoDB", "Ansible"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/rainingg-weather/bootcamp-mlpt",
      detailedCaseStudy: {
        background: "Final project of the Software Engineer Bootcamp at Departemen Matematika ITS (Multipolar Technology Group), focused on building and deploying a microservice-based application end to end.",
        methodology: "Built two FastAPI services for transaction management and automated monthly spending-alert profiling. Containerized the services with Podman and deployed them to Red Hat OpenShift with inter-service networking, environment-based secrets, and multi-replica deployments.",
        mathematicalModel: "Infrastructure as code: a self-hosted MongoDB instance on a virtual machine, provisioned and configured automatically with Ansible through Ansible Automation Platform (AAP). Source control managed on GitHub.",
        metrics: [
          { label: "Services", value: "2 FastAPI microservices" },
          { label: "Platform", value: "Red Hat OpenShift" },
          { label: "Database", value: "Self-hosted MongoDB (Ansible-provisioned)" }
        ],
        keyTakeaways: [
          "Configured inter-service networking, environment-based secrets, and multi-replica deployments on OpenShift",
          "Automated database provisioning on a virtual machine using Ansible Automation Platform"
        ]
      }
    },
    {
      id: "rcdnet-deraining",
      title: "Single Image Deraining via Frequency-Guided Deep Unfolding (RCDNet)",
      subtitle: "Deep Learning Thesis & Research · Jul 2026",
      category: "Computer Vision & AI",
      featured: true,
      period: "Jul 2026",
      cvBullets: [
        "Engineered a deep unfolding neural network integrating a Spectral Gate Bottleneck (FrequencyHint) to capture global frequency features for single-image rain streak removal.",
        "Optimized model training workflows across synthetic and real-world datasets, achieving measurable gains in PSNR/SSIM and a 13.82% improvement in perceptual quality (BRISQUE score) on real outdoor images."
      ],
      description: "A deep unfolding neural network integrating a Spectral Gate Bottleneck (FrequencyHint) to capture global frequency features for single-image rain streak removal. Tested on Rain100L/H and 487 real rain photos, with a 13.82% BRISQUE reduction.",
      tags: ["PyTorch", "Computer Vision", "RCDNet", "Image Restoration", "Deep Unfolding"],
      image: "/assets/thesis/rcdnet-real-rain-result.jpg",
      paperUrl: "/assets/thesis/Tugas-Akhir-Merisa-Anggi-Anggraini.pdf",
      detailedCaseStudy: {
        background: "Rain streaks degrade image quality and hurt object recognition. RCDNet only exploits local information in the spatial domain, so it struggles to tell rain patterns apart from real background texture. This thesis adds global frequency cues to address that.",
        methodology: "Modified the M-Net of RCDNet by integrating a FrequencyHint module that uses the Fourier transform to extract frequency-domain information, plus a spectral gate bottleneck that adaptively filters frequency components while keeping the model efficient. Trained with Adam (lr 0.001), MSE loss, 100 epochs, S = 17 stages, on 1,800 training pairs each for Rain100L and Rain100H. Evaluated on benchmark data, 1,500 extra synthetic pairs (zero-shot), and 487 self-collected real rain photos.",
        mathematicalModel: "Rain model O = B + R, where the rain layer R = sum over n of C_n (convolved with) M_n, built from rain kernels C_n and rain maps M_n, solved through S unfolded proximal-gradient stages. FrequencyHint injects global Fourier-domain hints into the M-Net that estimates the rain maps.",
        metrics: [
          { label: "Rain100L", value: "PSNR 38.9044 → 39.2337 dB (+0.3293), SSIM 0.9854 → 0.9862" },
          { label: "Rain100H", value: "PSNR 29.5389 → 30.0975 dB (+0.5586), SSIM 0.9021 → 0.9090" },
          { label: "Real photos (487)", value: "BRISQUE 33.0890 → 28.5162 (−13.82%)" },
          { label: "Efficiency", value: "S = 10 already beats baseline with ~33% faster epochs" }
        ],
        keyTakeaways: [
          "Larger gains on heavy rain (Rain100H), showing frequency information helps most with complex rain patterns",
          "A mixed-data model trained on Rain100L + Rain100H kept competitive results on both and reached 30.1944 dB on Rain100H",
          "Improved visual quality on real rain photos without losing image sharpness"
        ]
      }
    },
    {
      id: "jkm-forecasting",
      title: "JKM Claims Predictive Analytics & Forecasting Web System",
      subtitle: "R&D Internship Project, PT TASPEN (Persero) · Sep 2025",
      category: "Data Analytics",
      featured: true,
      period: "Sep 2025",
      cvBullets: [
        "Developed an end-to-end time-series forecasting pipeline using SARIMA to model daily Death Benefit (JKM) claim volumes, handling trend and weekly seasonality.",
        "Automated model parameter optimization via grid search (AIC/BIC selection) and deployed a prototype web dashboard to deliver 30-day interactive claim projections for operational decision support."
      ],
      description: "An end-to-end time-series forecasting pipeline using SARIMA to model daily Death Benefit (JKM) claim volumes, deployed as a prototype web dashboard with interactive 30-day projections.",
      tags: ["SARIMA", "Time-Series", "Python", "Grid Search", "Web Dashboard"],
      image: "/assets/projects/jkm-forecasting.svg",
      detailedCaseStudy: {
        background: "As an R&D Analyst Intern in the Strategic Planning Division at PT TASPEN (Persero) Head Office, the goal was to forecast national Death Benefit (JKM) claims to support operational decision-making.",
        methodology: "Preprocessed the claim data, ran stationarity diagnostics (ADF test), and applied seasonal differencing to handle trend and weekly seasonality. Automated parameter optimization with grid search (AIC/BIC selection) and validated residuals for reliability and stability.",
        mathematicalModel: "SARIMA (p, d, q)(P, D, Q)s modeling of daily claim volumes, with parameters selected by minimizing AIC/BIC over a grid.",
        metrics: [
          { label: "Forecast Horizon", value: "30-day interactive projections" },
          { label: "Model Selection", value: "Grid search (AIC/BIC)" },
          { label: "Diagnostics", value: "ADF test, residual validation" }
        ],
        keyTakeaways: [
          "Delivered a prototype web dashboard (JKM Forecast System) for operational decision support",
          "Handled both trend and weekly seasonality through seasonal differencing"
        ]
      }
    },
    {
      id: "rsa-elgamal",
      title: "Cryptographic Security Implementation: RSA & ElGamal",
      subtitle: "Applied Mathematics · 2025",
      category: "Applied Mathematics",
      featured: false,
      period: "2025",
      cvBullets: [
        "Implemented RSA and ElGamal public-key cryptographic algorithms to demonstrate key generation, encryption, and decryption processes.",
        "Developed and tested cryptographic workflows to analyze the implementation and security characteristics of asymmetric encryption techniques."
      ],
      description: "Implementation of the RSA and ElGamal public-key algorithms to demonstrate key generation, encryption, and decryption, with analysis of the security characteristics of asymmetric encryption.",
      tags: ["Cryptography", "RSA", "ElGamal", "Number Theory"],
      image: "/assets/projects/rsa-elgamal.svg",
      detailedCaseStudy: {
        background: "Public-key cryptography underpins secure communication. This project implements two classic asymmetric schemes from the underlying mathematics.",
        methodology: "Implemented key generation, encryption, and decryption for RSA and ElGamal, then developed and tested cryptographic workflows end to end.",
        mathematicalModel: "RSA relies on integer factorization hardness; ElGamal relies on the discrete logarithm problem.",
        metrics: [
          { label: "Algorithms", value: "RSA and ElGamal" },
          { label: "Scope", value: "Key generation, encryption, decryption" }
        ],
        keyTakeaways: [
          "Analyzed the implementation and security characteristics of asymmetric encryption techniques"
        ]
      }
    },
    {
      id: "distributed-database",
      title: "Distributed Database System",
      subtitle: "Database Systems · 2025",
      category: "Software Engineering",
      featured: false,
      period: "2025",
      cvBullets: [
        "Designed and implemented a distributed database system to manage and process data across multiple database nodes.",
        "Applied distributed database concepts including data distribution, replication, and query processing to improve data availability and system scalability."
      ],
      description: "A distributed database system that manages and processes data across multiple database nodes, applying data distribution, replication, and query processing.",
      tags: ["Distributed Systems", "Replication", "Query Processing", "Databases"],
      image: "/assets/projects/distributed-database.svg",
      detailedCaseStudy: {
        background: "Handling data across several nodes improves availability and scalability compared to a single database server.",
        methodology: "Designed and implemented a distributed database system that manages and processes data across multiple database nodes.",
        mathematicalModel: "Applied distributed database concepts: data distribution (fragmentation), replication, and distributed query processing.",
        metrics: [
          { label: "Architecture", value: "Multi-node database" },
          { label: "Focus", value: "Availability & scalability" }
        ],
        keyTakeaways: [
          "Improved data availability and system scalability through distribution and replication"
        ]
      }
    }
  ] as Project[],
  experiences: [
    {
      period: "2024 — 2026",
      role: "Partnership Staff",
      organization: "Digistar Club ITS by Telkom Indonesia",
      location: "Surabaya, Indonesia",
      highlights: [
        "Initiated and managed strategic outreach to external partners, educational institutions, and student tech communities.",
        "Coordinated talent development initiatives and digital workshops to enhance community engagement and technical competencies.",
        "Collaborated with cross-functional teams to design promotional strategies and streamline partnership agreements."
      ],
      tags: ["Partnership", "Outreach", "Community"]
    },
    {
      period: "2025",
      role: "Research & Development Analyst Intern · Strategic Planning Division",
      organization: "PT TASPEN (Persero) - Kantor Pusat",
      location: "Jakarta, Indonesia",
      highlights: [
        "Conducted time-series analysis and predictive modeling on national Death Benefit (JKM) claim datasets using the SARIMA method.",
        "Performed data preprocessing, stationarity diagnostics (ADF test), and seasonal differencing to address trend and weekly seasonality patterns.",
        "Optimized model hyperparameters through grid search evaluation (AIC/BIC) and validated residuals to ensure forecast reliability and model stability.",
        "Developed and implemented a web-based prototype (JKM Forecast System) to visualize 30-day future claim projections and support strategic decision-making."
      ],
      tags: ["SARIMA", "Time-Series", "Forecasting", "Python"]
    },
    {
      period: "2024",
      role: "Sub-division Head of Administration & Communication (Atcom)",
      organization: "OMITS 17th (Olimpiade Matematika ITS)",
      location: "Surabaya, Indonesia",
      highlights: [
        "Led the administrative workflow and external correspondence for a nationwide mathematics competition involving thousands of participants.",
        "Coordinated communication channels between committee divisions, regional supervisors, and participating institutions."
      ],
      tags: ["Leadership", "Administration", "Communication"]
    },
    {
      period: "Jan 2024 — Dec 2024",
      role: "Student Welfare Staff",
      organization: "HIMATIKA ITS",
      location: "Surabaya, Indonesia",
      highlights: [
        "Created and managed Student Welfare (SW) news and information to support student communication and engagement."
      ],
      tags: ["Student Welfare", "Communication"]
    },
    {
      period: "2023 — 2024",
      role: "Human Resource Development (PSDM) Staff",
      organization: "UKM Robotika ITS",
      location: "Surabaya, Indonesia",
      highlights: [
        "Facilitated member recruitment, talent screening, and onboarding programs for robotics research divisions.",
        "Organized internal soft-skill and technical training sessions to improve team workflow and project execution.",
        "Monitored member performance and organizational health across collegiate competition workstreams."
      ],
      tags: ["HR Development", "Recruitment", "Training"]
    },
    {
      period: "Nov 2023 — Feb 2024",
      role: "Event Division Staff",
      organization: "ILITS Forda Jember",
      location: "Jember, Indonesia",
      highlights: [
        "Created the event rundown for INI LHO ITS 2024 to ensure a structured and well-coordinated event flow.",
        "Supervised event proceedings and coordinated activities to ensure smooth execution according to the planned rundown."
      ],
      tags: ["Event Management", "Coordination"]
    },
    {
      period: "Aug 2023 — Oct 2023",
      role: "Event Division Staff",
      organization: "IFC (ITS Futsal Championship)",
      location: "Surabaya, Indonesia",
      highlights: [
        "Assisted in event planning and coordinated activities to ensure smooth tournament operations.",
        "Coordinated Match Day activities between teams, referees, and relevant committees.",
        "Managed ceremonial segments and ensured activities followed the planned event schedule.",
        "Served as a liaison between teams, referees, and committees to ensure smooth flow and punctuality of activities."
      ],
      tags: ["Event Management", "Liaison"]
    },
    {
      period: "Jun 2023 — May 2024",
      role: "Staff, Partner Accountants Division",
      organization: "OMITS 16th (Olimpiade Matematika ITS)",
      location: "Surabaya, Indonesia",
      highlights: [
        "Identified and coordinated accommodation and transportation options to support event operations.",
        "Assisted in coordinating logistical requirements with relevant parties and external service providers."
      ],
      tags: ["Logistics", "Coordination"]
    },
    {
      period: "Jul 2023",
      role: "Equipment Division Staff (Volunteer)",
      organization: "The Beauty Show",
      location: "Surabaya, Indonesia",
      highlights: [
        "Prepared and provided equipment and logistical needs to support the successful execution of the event."
      ],
      tags: ["Volunteer", "Logistics"]
    }
  ] as ExperienceItem[],
  certificates: [
    {
      id: "software-engineer-bootcamp",
      title: "Software Engineer Bootcamp",
      category: "Certificate of Training",
      issuer: "Multipolar Technology Group",
      year: "2026",
      issuedDate: "25 September 2026",
      location: "Departemen Matematika ITS",
      signedBy: "Achmad Fakhrudin, Senior Vice President",
      description: "Certificate of Training for successfully completing the Software Engineer Bootcamp at Departemen Matematika ITS. The bootcamp final project, a two-service Financial Tracker microservice, was deployed on Red Hat OpenShift with a MongoDB database automated through Ansible.",
      skills: ["FastAPI", "Podman", "Red Hat OpenShift", "Ansible", "MongoDB"],
      badgeLabel: "Certificate of Training",
      image: "/assets/certificates/software-engineer-bootcamp.jpg",
      pdfUrl: "/assets/certificates/software-engineer-bootcamp.pdf"
    }
  ] as CertificateItem[]
};
