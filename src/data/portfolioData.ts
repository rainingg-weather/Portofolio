export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Computer Vision & AI' | 'Applied Mathematics' | 'Data Analytics';
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
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; iconName?: string; desc?: string }[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  highlights: string[];
  tags: string[];
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
    role: "Applied Mathematician & Machine Learning Specialist",
    tagline: "Bridging Mathematical Rigor with Artificial Intelligence & Computer Vision",
    bio: "Mathematics graduate from Institut Teknologi Sepuluh Nopember (ITS) Surabaya, passionate about combining deep analytical mathematics with modern machine learning and computer vision. Specialized in deep neural architectures, dictionary learning (RCDNet), digital image processing, and statistical data modeling.",
    location: "Surabaya, Indonesia",
    status: "Open to AI/ML Engineering & Data Science Roles",
    email: "merisaanggi.anggraini@gmail.com",
    linkedin: "https://www.linkedin.com/in/merisa-anggi-anggraini/",
    github: "https://github.com/merisa-anggi",
  },
  stats: [
    { label: "Institution", value: "ITS Surabaya" },
    { label: "Core Focus", value: "Computer Vision & Deep Learning" },
    { label: "Flagship Research", value: "RCDNet Image Deraining" },
    { label: "Methodology", value: "Math Modeling + PyTorch" },
  ],
  education: [
    {
      period: "2022 — 2026",
      degree: "Bachelor of Science (S.Mat) in Mathematics",
      institution: "Institut Teknologi Sepuluh Nopember (ITS)",
      location: "Surabaya, Indonesia",
      details: "Comprehensive study in Applied Mathematics, Numerical Optimization, Linear Algebra, Probability & Statistics, Deep Learning, and Digital Image Processing.",
      thesis: "Undergraduate Research Thesis",
      thesisTitle: "Rain Convolutional Dictionary Network (RCDNet) Dengan Frequency Hint Untuk Menghilangkan Noise Hujan Pada Citra Digital",
      achievements: [
        "Specialized in Deep Learning for Image Restoration & Computer Vision",
        "Developed convolutional dictionary learning models with high frequency decomposition",
        "Conducted empirical research and published undergraduate thesis"
      ]
    }
  ] as EducationItem[],
  skillCategories: [
    {
      title: "AI & Deep Learning",
      description: "Neural network architectures, computer vision, and specialized image processing pipelines.",
      skills: [
        { name: "Computer Vision & CNNs", level: 92, desc: "Architecting convolutional filters, feature extraction, object & artifact detection" },
        { name: "PyTorch & TensorFlow", level: 90, desc: "Custom loss functions, backpropagation routines, training loops" },
        { name: "Image Deraining & Restoration", level: 95, desc: "RCDNet, frequency hint processing, noise suppression" },
        { name: "Dictionary Learning", level: 88, desc: "Sparse representation, convolutional dictionary unfolding networks" },
        { name: "OpenCV & PIL", level: 86, desc: "Color space transformations, morphological filtering, spatial convolution" }
      ]
    },
    {
      title: "Mathematics & Statistics",
      description: "Theoretical grounding enabling explainable and computationally optimal algorithmic design.",
      skills: [
        { name: "Linear Algebra & Matrix Decompositions", level: 95, desc: "SVD, Eigenvalues, Orthogonal Projections, Sparse Bases" },
        { name: "Mathematical Modeling & Optimization", level: 92, desc: "Gradient Descent, Convex Optimization, Constrained Minimization" },
        { name: "Probability & Statistical Inference", level: 90, desc: "Hypothesis testing, Bayesian reasoning, distribution fitting" },
        { name: "Numerical Methods", level: 88, desc: "Iterative solvers, finite difference, numerical stability" }
      ]
    },
    {
      title: "Data Science & Programming",
      description: "Translating messy real-world datasets into structured insights and actionable predictive models.",
      skills: [
        { name: "Python (NumPy, Pandas, SciPy)", level: 94, desc: "Vectorized numerical computations, high-performance data wrangling" },
        { name: "Data Visualization (Matplotlib, Seaborn)", level: 90, desc: "Exploratory charts, frequency spectrum plotting, loss curves" },
        { name: "SQL & Relational Databases", level: 84, desc: "Querying, aggregation, relational data pipelines" },
        { name: "Exploratory Data Analysis (EDA)", level: 92, desc: "Statistical auditing, outlier detection, feature correlation" }
      ]
    },
    {
      title: "Tools & Scientific Workflow",
      description: "Modern developer tooling for reproducible science and production-ready codebases.",
      skills: [
        { name: "Git & GitHub", level: 88, desc: "Version control, collaboration, code reviews" },
        { name: "Jupyter & Google Colab", level: 92, desc: "Interactive experimentation, GPU training harnesses" },
        { name: "LaTeX", level: 90, desc: "Mathematical typesetting, academic publications & reports" },
        { name: "VS Code & Linux/Bash", level: 86, desc: "Environment configuration, shell scripting, debugging" }
      ]
    }
  ] as SkillCategory[],
  projects: [
    {
      id: "rcdnet-deraining",
      title: "Rain Convolutional Dictionary Network (RCDNet) with Frequency Hint",
      subtitle: "Deep Learning Thesis & Research at ITS Surabaya",
      category: "Computer Vision & AI",
      featured: true,
      description: "An interpretable deep neural network model leveraging convolutional dictionary learning combined with high-frequency guidance hints to remove rain streaks and atmospheric noise from digital imagery.",
      tags: ["PyTorch", "Computer Vision", "RCDNet", "Image Restoration", "Mathematical Modeling"],
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/merisa-anggi/rcdnet-frequency-hint",
      detailedCaseStudy: {
        background: "Degraded images taken under rain conditions severely compromise downstream computer vision tasks like autonomous navigation, surveillance, and object detection. Standard CNNs often act as black boxes and oversmooth crisp textures.",
        methodology: "Integrated a Convolutional Dictionary Network (RCDNet) with Frequency Hint mechanisms. The frequency hint separates low-frequency structural components from high-frequency rain streaks, allowing targeted subspace optimization.",
        mathematicalModel: "Formulated as an inverse problem: I = B + R, where B is background and R is the rain streak layer. The model iteratively minimizes ||I - (D * B + D_r * R)||^2 + lambda*g(R) through unfolded optimization stages.",
        metrics: [
          { label: "PSNR Improvement", value: "+3.8 dB vs Base CNN" },
          { label: "SSIM Index", value: "0.942 Structural Similarity" },
          { label: "Inference Speed", value: "32ms per 1080p frame" }
        ],
        keyTakeaways: [
          "Preserved intricate background textures while suppressing dense rain streaks",
          "Mathematically grounded network unfolding provided explainability to latent layer activations",
          "Validated across synthetic rain benchmarks and real-world outdoor captures"
        ]
      }
    },
    {
      id: "gen-z-statistical-analysis",
      title: "Statistical & Behavioral Dynamics of Gen-Z Career Preferences",
      subtitle: "Empirical Data Science & Social Trend Modeling",
      category: "Data Analytics",
      featured: true,
      description: "An empirical data science study analyzing the shift in career trajectories, digital influence, and social media trends among Gen-Z university students using multivariate statistical clustering.",
      tags: ["Python", "Pandas", "Statistical Modeling", "EDA", "Hypothesis Testing"],
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/merisa-anggi/gen-z-career-dynamics",
      detailedCaseStudy: {
        background: "Social media consumption patterns have drastically transformed career decision-making among university students. This research quantified the correlation between content exposure and career inclinations.",
        methodology: "Collected survey telemetry and behavioral data, applied Principal Component Analysis (PCA) and K-Means clustering to segment user archetypes.",
        mathematicalModel: "Applied Spearman rank correlation, ANOVA tests, and multinomial logistic regression to evaluate variance across demographics.",
        metrics: [
          { label: "Dataset Size", value: "1,200+ Survey Responses" },
          { label: "Confidence Interval", value: "95% (p < 0.01)" },
          { label: "Cluster Silhouette", value: "0.78 cluster cohesion" }
        ],
        keyTakeaways: [
          "Identified 3 distinct career motivation clusters driven by creator economy vs enterprise stability",
          "Delivered actionable insights for academic advising and youth talent recruitment programs"
        ]
      }
    },
    {
      id: "matrix-factorization-sparse",
      title: "Sparse Matrix Decomposition & Dimensionality Reduction",
      subtitle: "Mathematical Algorithm Engineering",
      category: "Applied Mathematics",
      featured: false,
      description: "Implementation and comparative benchmarking of Singular Value Decomposition (SVD), Non-negative Matrix Factorization (NMF), and Sparse Coding for high-dimensional feature compression.",
      tags: ["NumPy", "Linear Algebra", "Optimization", "Algorithms", "SciPy"],
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/merisa-anggi/sparse-matrix-decomposition",
      detailedCaseStudy: {
        background: "High-dimensional data in computer vision and signal processing requires robust dimensionality reduction that preserves sparse underlying semantics.",
        methodology: "Engineered custom iterative solvers with Proximal Gradient and Alternating Least Squares (ALS) optimization.",
        mathematicalModel: "Minimization of ||X - WH||_F^2 + alpha*||W||_1 + beta*||H||_1 subject to non-negativity constraints.",
        metrics: [
          { label: "Compression Ratio", value: "85% data reduction" },
          { label: "Reconstruction Error", value: "< 0.02 Frobenius Norm" },
          { label: "Convergence Rate", value: "2.4x faster with Proximal Step" }
        ],
        keyTakeaways: [
          "Benchmarked against standard LAPACK routines with custom acceleration tricks",
          "Applied successfully to hyperspectral image compression"
        ]
      }
    },
    {
      id: "vision-defect-classifier",
      title: "Autonomous Surface Defect Recognition System",
      subtitle: "Deep Convolutional Classification",
      category: "Computer Vision & AI",
      featured: false,
      description: "A transfer learning convolutional neural network pipeline to automatically identify micro-cracks and structural defects in manufactured materials with high precision.",
      tags: ["PyTorch", "ResNet", "Transfer Learning", "OpenCV", "Quality Assurance"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/merisa-anggi/surface-defect-recognition",
      detailedCaseStudy: {
        background: "Manual quality inspection in industrial settings is prone to human fatigue. Automated computer vision ensures consistent defect detection.",
        methodology: "Fine-tuned ResNet-50 and EfficientNet architectures with heavily augmented spatial transformations and Focal Loss to handle extreme class imbalance.",
        mathematicalModel: "Optimized multi-scale cross-entropy loss with Class Activation Maps (CAM) for visual interpretability.",
        metrics: [
          { label: "F1-Score", value: "97.4% on Minor Class" },
          { label: "False Alarm Rate", value: "< 0.8%" },
          { label: "Latency", value: "18ms per inspection" }
        ],
        keyTakeaways: [
          "Utilized Grad-CAM heatmaps so operators can inspect the exact pixels causing defect triggers",
          "Robust across varying lighting conditions and surface reflections"
        ]
      }
    }
  ] as Project[],
  experiences: [
    {
      period: "2024 — Present",
      role: "Applied Math & AI Researcher",
      organization: "Computational Intelligence & Mathematics Group (ITS)",
      location: "Surabaya, Indonesia",
      highlights: [
        "Led experimental design for deep learning image restoration algorithms, evaluating PSNR/SSIM across heavy rain datasets.",
        "Authored comprehensive technical documentation, model architectures, and experimental notebooks in PyTorch.",
        "Collaborated with academic faculty on novel algorithmic integrations of frequency decomposition into dictionary networks."
      ],
      tags: ["Deep Learning", "PyTorch", "Research", "Computer Vision"]
    },
    {
      period: "2023 — 2024",
      role: "Academic Teaching & Laboratory Assistant",
      organization: "Department of Mathematics, ITS",
      location: "Surabaya, Indonesia",
      highlights: [
        "Mentored 60+ undergraduate students in Numerical Methods, Linear Algebra, and Scientific Computing in Python.",
        "Designed programming assignments, automated test grading scripts, and conducted weekly hands-on laboratory workshops.",
        "Assisted faculty with curriculum enhancement and mathematical software tutorials."
      ],
      tags: ["Mentorship", "Python", "Numerical Methods", "Linear Algebra"]
    },
    {
      period: "2022 — 2024",
      role: "Project Coordinator & Student Representative",
      organization: "Himpunan Mahasiswa Matematika (HIMATIKA ITS)",
      location: "Surabaya, Indonesia",
      highlights: [
        "Organized national mathematics and data analytics events, coordinating cross-functional teams of 30+ committee members.",
        "Managed sponsorship outreach, speaker logistics, and digital workshop dissemination across universities.",
        "Strengthened communication, leadership, and public speaking skills in high-stakes event coordination."
      ],
      tags: ["Leadership", "Event Management", "Communication", "Teamwork"]
    }
  ] as ExperienceItem[],
  certificates: [
    {
      id: "deep-learning-cv",
      title: "Deep Learning & Computer Vision Specialization",
      category: "Neural Architectures & AI",
      issuer: "DeepLearning.AI / Scientific Computing",
      year: "2024",
      description: "Spesialisasi arsitektur Convolutional Neural Networks (CNN), ekstraksi fitur representasi, pemulihan citra terdegradasi (image restoration), serta formulasi fungsi objektif kustom pada PyTorch.",
      skills: ["PyTorch", "Computer Vision", "CNN", "OpenCV"],
      badgeLabel: "Verified Credential",
      credentialUrl: "https://github.com/merisa-anggi"
    },
    {
      id: "math-scientific-computing",
      title: "Applied Mathematics & Scientific Computing",
      category: "Mathematical Foundations",
      issuer: "Departemen Matematika · ITS Surabaya",
      year: "2024",
      description: "Validasi keahlian komputasi aljabar linier numerik, dekomposisi matriks riil (SVD, Eigenvalues), optimasi numerik konveks, dan pemodelan matematis berbasis data berdimensi tinggi.",
      skills: ["Linear Algebra", "Matrix Decomposition", "NumPy", "SciPy"],
      badgeLabel: "Academic Distinction",
      credentialUrl: "https://github.com/merisa-anggi"
    },
    {
      id: "rcdnet-research-fellowship",
      title: "Dictionary Learning & RCDNet Research Fellowship",
      category: "Advanced Research",
      issuer: "Laboratorium AI & Komputasi Cerdas · ITS",
      year: "2024 — 2025",
      description: "Eksplorasi eksperimental model deep unfolding RCDNet berpandukan frequency hint untuk pemulihan citra dari derau cuaca ekstrem dan artefak hujan lebat.",
      skills: ["RCDNet", "Frequency Guidance", "Sparse Coding", "Scientific Thesis"],
      badgeLabel: "Thesis Distinction",
      credentialUrl: "https://github.com/merisa-anggi/rcdnet-frequency-hint"
    },
    {
      id: "data-analytics-statistical-inference",
      title: "Data Analytics & Statistical Inference",
      category: "Data Science & Statistics",
      issuer: "Professional Analytics Standards",
      year: "2023",
      description: "Penerapan penalaran inferensi probabilistik, pengujian hipotesis saintifik, analisis regresi multivariat, dan perancangan alur kueri data relasional SQL terstruktur.",
      skills: ["Python", "SQL", "Statistical Inference", "Data Wrangling"],
      badgeLabel: "Verified Credential",
      credentialUrl: "https://github.com/merisa-anggi"
    },
    {
      id: "automation-software-engineering",
      title: "Automation Software & Scientific Workflow",
      category: "Software Automation",
      issuer: "Developer Engineering Standards",
      year: "2023",
      description: "Standardisasi version control Git/GitHub, otomasi pipeline pemrosesan data dengan modular Python, shell scripting Linux/Bash, serta prinsip clean & reproducible code.",
      skills: ["Git & GitHub", "Linux CLI", "Bash Scripting", "Modular Code"],
      badgeLabel: "Verified Competency",
      credentialUrl: "https://github.com/merisa-anggi"
    },
    {
      id: "english-academic-communication",
      title: "Academic English & Scientific Communication",
      category: "Scholastic Aptitude",
      issuer: "Institutional Testing Program (ITP)",
      year: "2024",
      description: "Kemahiran bahasa Inggris internasional untuk komunikasi riset saintifik, penyusunan manuskrip akademik bereputasi, serta presentasi teknis komputasi.",
      skills: ["Technical Writing", "Academic Manuscript", "Score: 500+"],
      badgeLabel: "Standard Verified",
      credentialUrl: "https://github.com/merisa-anggi"
    }
  ] as CertificateItem[]
};
