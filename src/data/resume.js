export const resumeData = {
  // Personal Information
  name: "Pranjal Paliwal",
  title: "Software Engineer | Distributed Systems | Cloud Data & AI Infrastructure | LLM Agents",
  email: "pranjalpaliwal4900@gmail.com",
  phone: "774.253.7593",
  linkedin: "https://www.linkedin.com/in/pranjalpaliwal",
  github: "https://github.com/pranjalpaliwal",
  
  // Professional Summary
  summary: `Founding Software Engineer with 5+ years of experience designing and scaling AI, data, and distributed systems across cloud-native environments. Proven track record of building end-to-end ML platforms, architecting low-latency backend systems, and optimizing infrastructure costs by 70%+. Skilled in Python, FastAPI, Databricks, Azure, Kafka, and PostgreSQL, with a systems-first approach that balances scalability, performance, and reliability.`,
  
  highlights: [
    "AI & Data Infrastructure: Built a cloud-native AI and data platform from the ground up, integrating 10+ enterprise data sources and processing millions of records daily using Databricks (PySpark, Delta Lake) on Azure.",
    "Distributed Systems & Microservices: Designed FastAPI-based backend microservices (PostgreSQL, Docker, NGINX, Azure FrontDoor) delivering sub-200ms latency for 10k+ real-time users.",
    "MLOps & Automation: Deployed fine-tuned LLMs and NER pipelines using Databricks workflows; automated retraining and monitoring pipelines using Azure Pipelines, MLflow, and ACR, improving reliability 50%.",
    "Graph Intelligence & Optimization: Replaced Neo4j with in-house NetworkX-based graph engine, cutting infra cost 70% and enabling personalized decision-maker mapping at scale.",
    "Engineering Leadership: As Founding Engineer, established infrastructure, CI/CD standards, and observability systems; guided engineering design reviews, code quality standards, and cloud deployment best practices."
  ],

  // Work Experience
  experience: [
    {
      company: "Orbit Systems Inc",
      position: "Founding Engineer",
      duration: "July 2023 - Present",
      location: "Remote",
      description: "Led the architecture and development of enterprise AI and data infrastructure, processing millions of records daily.",
      achievements: [
        "AI Data Platform (Orbit Core):",
        "• Architected and launched an end-to-end enterprise data and AI platform integrating 10+ data sources (Crunchbase, PitchBook, Salesforce) using Databricks, PySpark, and Delta Lake, processing millions of records daily.",
        "• Designed and deployed modular FastAPI microservices (Docker, PostgreSQL, Azure FrontDoor, NGINX) achieving sub-200 ms response latency for 100+ concurrent business users.",
        "• Automated ETL and NER pipelines with Databricks Workflows and transformer-based models, tagging 10K+ daily articles and improving enrichment accuracy 50%.",
        "• Replaced Neo4j with a custom NetworkX graph engine, reducing infrastructure costs 70% and enabling high-performance relationship analytics.",
        "",
        "Agentic Chatbot (Analytics Assistant):",
        "• Developed a LangChain-based AI agent enabling natural-language analytics across PostgreSQL, Salesforce, and Graph databases.",
        "• Increased user adoption 3× by democratizing access to data insights via conversational interfaces.",
        "• Built RAG pipelines with contextual memory and role-based data access, supporting multi-tenant enterprise environments.",
        "",
        "SOW Contract Agent (AI Workflow Automation):",
        "• Led development of an AI-powered Statement-of-Work automation system, enabling multi-user, real-time document editing using React, Tiptap, and Y.js (CRDTs).",
        "• Automated proposal parsing, section drafting, and compliance validation using LLM-based agents, reducing manual drafting time >60%.",
        "• Implemented integrations with Box and Azure Blob Storage for file ingestion, metadata extraction, and contract management."
      ]
    },
    {
      company: "Aware Inc.",
      position: "Software Engineer",
      duration: "Jan 2023 - May 2023",
      location: "Remote",
      description: "Enhanced biometric capture platform with modern UI and security improvements.",
      achievements: [
        "Re-engineered the UI of a biometric capture platform, migrating from legacy JavaScript/jQuery → Vue.js, improving modularity, maintainability, and frontend performance.",
        "Implemented real-time auto-capture logic via WebSockets, enabling the application to trigger image captures under precise biometric conditions, reducing manual capture errors and improving UX efficiency by 40%.",
        "Enhanced backend security posture by upgrading to TLS 1.3, implementing strong authentication flows, and hardening REST endpoints."
      ]
    },
    {
      company: "Oracle Cerner",
      position: "Software Engineer",
      duration: "Jan 2019 - Aug 2021",
      location: "Kansas City, MO",
      description: "Developed distributed healthcare data processing systems at scale.",
      achievements: [
        "Developed distributed ETL pipelines in Java + Apache Crunch processing billions of health-care records with 30% throughput gain.",
        "Migrated on-prem systems to AWS S3 and Hadoop, cutting operational costs and improving scalability."
      ]
    }
  ],

  // Projects
  projects: [
    {
      name: "VortexeAI",
      role: "Co-Founder, CTO",
      description: "Low-code, AI-driven workflow editor and marketplace for product and engineering teams",
      technologies: ["Python", "FastAPI", "React", "LLMs", "Workflow Automation"],
      achievements: [
        "Led the development of VortexeAI, a low-code, AI-driven workflow editor and marketplace for product and engineering teams, enabling rapid iteration and seamless integration to meet evolving business needs.",
        "Implemented secure APIs and load-tested high-concurrency workflows."
      ],
      link: null
    },
    {
      name: "RapidEye Media Inc.",
      role: "Founding Engineer",
      description: "End-to-end AI video-analysis pipeline on AWS",
      technologies: ["AWS", "ECS", "S3", "Lambda", "FastAPI", "RAG", "LLMs"],
      achievements: [
        "Architected an end-to-end AI video-analysis pipeline from data ingestion to inference and visualization on AWS (ECS, S3, Lambda). Deployed microservices handling hundreds of video jobs per hour.",
        "Integrated RAG and LLMs with video metadata and transcripts to enable semantic video search and auto-tagging; boosted content-retrieval accuracy 3×.",
        "Optimized SQS worker queues and async FastAPI endpoints, reducing processing latency 40% and compute costs 30%."
      ],
      link: null
    },
    {
      name: "Diameter Health",
      role: "Software Engineer Intern",
      description: "Clinical decision support system for pediatric hypertension diagnosis",
      technologies: ["Python", "JavaScript", "Healthcare Systems"],
      achievements: [
        "Developed a clinical decision support system reducing pediatric hypertension misdiagnosis by 70%, leveraging Python and JavaScript for scalable backend systems."
      ],
      link: null
    },
    {
      name: "VClite — Private Equity Trading Platform",
      role: "Personal Project",
      description: "Real-time portfolio management and order execution platform",
      technologies: ["Django REST", "AWS RDS", "AWS EC2", "Microservices"],
      achievements: [
        "Built a Django REST + AWS RDS/EC2 microservice app for real-time portfolio management and order execution.",
        "Implemented secure APIs and load-tested high-concurrency workflows."
      ],
      link: null
    }
  ],

  // Skills organized by category
  skills: {
    "Programming Languages": [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "C",
      "SQL",
      "Bash"
    ],
    "Frameworks & Libraries": [
      "FastAPI",
      "LangChain",
      "PyTorch",
      "Transformers (Hugging Face)",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "NetworkX",
      "Databricks (PySpark)",
      "SQLAlchemy",
      "React.js",
      "Y.js"
    ],
    "Machine Learning & AI": [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Natural Language Processing (NLP)",
      "Named Entity Recognition (NER)",
      "Reinforcement Learning (RL)",
      "Graph Intelligence",
      "Vector Databases",
      "Embedding Models"
    ],
    "Data & Cloud Infrastructure": [
      "PostgreSQL",
      "Delta Lake",
      "Azure (FrontDoor, Pipelines, Blob Storage, ACR)",
      "Docker",
      "NGINX",
      "Databricks Workflows",
      "CI/CD Automation",
      "Linux",
      "Git",
      "RESTful API Development"
    ],
    "System Design & Architecture": [
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "Asynchronous Programming",
      "API Gateway Design",
      "DevOps",
      "Observability",
      "Scalability & Performance Optimization"
    ],
    "Additional Skills": [
      "Algorithms & Data Structures",
      "Object-Oriented Design (OOD)",
      "Technical Leadership",
      "Product Architecture",
      "Agile Development"
    ]
  },

  // Education
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Worcester Polytechnic Institute",
      location: "Worcester, MA",
      year: "2023",
      gpa: null
    },
    {
      degree: "Bachelor of Engineering in Computer Science",
      school: "Manipal Institute of Technology",
      location: "Manipal, India",
      year: "2019",
      gpa: null
    }
  ],

  // Publications
  publications: [
    {
      title: "Decentralized Multi-Agent Reinforcement Learning with Global State Prediction",
      venue: "arXiv",
      year: "2023",
      description: "Proposed global-state forecasting for multi-agent coordination.",
      link: "https://arxiv.org"
    },
    {
      title: "Attitude Control of a Nanosatellite Using Reinforcement Learning",
      venue: "IEEE Aerospace Conference",
      year: "2018",
      description: "Application of reinforcement learning for satellite attitude control systems.",
      link: null
    }
  ]
};
