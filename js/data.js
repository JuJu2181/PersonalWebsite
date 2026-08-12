// Content data extracted from the Claude Design source (Anish Shilpakar Portfolio.dc.html)

const THEMES = {
  light: {
    bg: '#FAF8F3', surface: '#F2EEE4', surface2: '#EAE5D8',
    text: '#211F1B', textDim: '#5B584F', accent: '#547256',
    accentStrong: '#3C5A3E', accentSoft: 'rgba(84,114,86,0.12)', border: '#DED8C8'
  },
  dark: {
    bg: '#1B1B18', surface: '#242420', surface2: '#2C2C27',
    text: '#F2EFE6', textDim: '#B7B2A2', accent: '#93C093',
    accentStrong: '#AED8AC', accentSoft: 'rgba(147,192,147,0.16)', border: '#39382F'
  }
};

const NAV_ITEMS = [
  ['hero', 'Home'], ['about', 'About'], ['experience', 'Experience'],
  ['projects', 'Projects'], ['blog', 'Blog'], ['beyond', 'Beyond Work'], ['contact', 'Contact']
];

const SKILLS = ['Python', 'PyTorch', 'Tensorflow', 'SQL', 'AWS', 'Azure', 'OpenShift', 'Big Data Tools', 'Spark', 'Airflow', 'LangChain', 'Docker', 'Kubernetes'];

const BADGES = [
  { label: 'AWS Certified Data Engineer', sub: 'Associate · Dec 2025', icon: '◆' },
  { label: 'AWS Certified Solution Architect', sub: 'Associate · Apr 2024', icon: '◆' },
  { label: 'AWS Community Builder', sub: 'Data Category · 2023–Present', icon: '◆' }
];

const TIMELINE = [
  // { org: 'Lumivya Technology', role: 'Co-founder & Instructor', dates: 'Jan 2026 – Present', location: 'Bhaktapur, Nepal',
  //   summary: 'Co-founded an ed-tech/AI studio building client data & AI solutions while running affordable, industry-aligned bootcamps for Nepali students.',
  //   bullets: [
  //     'Led workshops and bootcamps at engineering colleges, training students in technical skills and applied problem-solving.',
  //     'Oversaw curriculum design, instructor coordination, and mentorship alongside client-facing R&D work.',
  //     'Researching medical-domain speech recognition for integration into clinical workflows.'
  //   ] },
  { org: 'Leapfrog Technology Inc.', role: 'Senior Data Engineer', dates: 'Jul 2025 – Present', location: 'Kathmandu, Nepal',
    summary: 'Production ETL and ML systems on US healthcare claims data, plus internal GenAI tooling adopted across the engineering team.',
    bullets: [
      'Architected fault-tolerant AWS ETL pipelines (Python, PostgreSQL) for insurance claims, payments, and appeals data.',
      'Built a hybrid recommendation system for payer-rejection resolution using anomaly detection, similarity search, and clustering.',
      'Integrated LLMs into reporting workflows for natural-language querying over structured claims data.',
      'Designed a RAG-based AWS certification prep tool, adopted internally by fellow engineers.'
    ] },
  { org: 'Khwopa College of Engineering', role: 'Project Supervisor', dates: 'Jan 2025 – Present', location: 'Bhaktapur, Nepal',
    summary: 'Supervising undergraduate capstone and minor projects in NLP and computer vision end to end.',
    bullets: [
      'Guided a Nepali Speech Recognition & Summarization System using wav2vec2 and transformer architectures (Major Project, 2025).',
      'Supervising a Nepali Handwritten Digit Recognition (OCR) system using TrOCR and Vision Transformers (2026).',
      'Runs structured project reviews and mentors students on research documentation and presentation.'
    ] },
  { org: 'Dlytica Inc.', role: 'Data Engineer II / Data Architect / Team Lead', dates: 'Dec 2023 – Jul 2025', location: 'Kathmandu, Nepal',
    summary: 'Architected DataNature, a production data platform for telecom and banking clients, and led AI360’s natural-language banking tools.',
    bullets: [
      'Built DataNature integrating Spark, Airbyte, Trino, Airflow, and MinIO across multi-cloud and on-prem environments.',
      'Designed AI360 SQL-Agent, a RAG-based natural-language-to-SQL system for Nepali banks.',
      'Delivered AI360Studio, a self-serve analytics platform with Apache Superset dashboards.',
      'Led a cross-functional team across AWS, Azure, and Kubernetes/OpenShift for national and international deployments.'
    ] },
  { org: 'Dlytica Academy', role: 'Data Science & Engineering Instructor', dates: 'Jan 2024 – Jul 2024', location: 'Remote',
    summary: 'Designed and delivered data engineering and ML curricula for undergraduate and early-career students.',
    bullets: [
      'Ran intensive bootcamps at Khwopa College of Engineering and Sunway International College.',
      'Developed syllabi and assignments around Python, SQL, Apache Spark, and cloud platforms.',
      'Mentored students through project-based learning from problem formulation to implementation.'
    ] },
  { org: 'Genese Solution', role: 'Associate Data Engineer', dates: 'May 2023 – Nov 2023', location: 'Lalitpur, Nepal',
    summary: 'Scalable ETL pipelines across AWS and Azure for enterprise clients including Cross River Bank, USA.',
    bullets: [
      'Built pipelines across AWS (Glue, S3, Athena, Redshift) and Azure (Data Factory, Databricks, SQL DW).',
      'Optimized production pipelines for Cross River Bank’s US banking operations.',
      'Led proof-of-concept data architectures and delivered dashboards in Power BI and QuickSight.'
    ] },
  { org: 'Code Rush Nepal', role: 'Data Engineering Apprentice', dates: 'Nov 2022 – Apr 2023', location: 'Lalitpur, Nepal',
    summary: 'Foundational data engineering projects and cloud certifications that underpin later professional work.',
    bullets: [
      'Built web scrapers, a stock price notification system, and end-to-end ETL pipelines on AWS and Azure.',
      'Earned AWS and Azure data engineering certifications.'
    ] },
  { org: 'Fusemachines', role: 'AI Fellow', dates: 'Mar 2022 – Apr 2023', location: 'Remote',
    summary: 'Competitively selected fellowship in applied ML research across CV, NLP, and deep learning.',
    bullets: [
      'Completed structured microdegrees in ML, deep learning, computer vision, and NLP.',
      'Built an Earthquake Damage Prediction model and a real-time Mask Detection system.'
    ] },
  { org: 'Khwopa College of Engineering', role: 'B.E., Computer Engineering', dates: 'Nov 2018 – Mar 2023', location: 'Libali, Bhaktapur, Nepal', isEducation: true,
    summary: 'Graduated with distinction (84.33%). Coursework spanned AI, ML, big data, and DSP.',
    bullets: [
      'Relevant coursework: AI, Machine Learning, Big Data, Data Mining, DSA, DBMS, Digital Signal Processing, Software Engineering.'
    ] }
];

const RESEARCH = [
  { title: 'Optimizing Speech-to-Text Systems for Medical ASR', status: 'In Progress', statusKind: 'progress',
    desc: 'Investigating real-time medical ASR pipelines combining speech recognition, Voice Activity Detection, and event-driven queuing — including feasibility for Nepali medical speech.',
    tools: ['Python', 'PyTorch', 'TorchAudio', 'Canary-Qwen', 'Whisper', 'VAD'], githubHref: '#' },
  { title: 'Music Source Separation for Newari Traditional Instruments', status: 'Best Paper Award', statusKind: 'award',
    desc: 'Deep learning pipeline separating individual instrument sources from Newari traditional recordings, a critically under-resourced audio ML domain. Presented at KHWOPA CEEL 2026 National Conference, winning Best Paper Award in the Computer Science track.',
    tools: ['Python', 'PyTorch', 'TorchAudio', 'U-Net', 'GAN'], githubHref: 'https://github.com/JuJu2181/Newari_Music_Source_Separation' },
  { title: 'Automatic Nepali Speech Recognition & Summarization', status: 'Completed', statusKind: 'completed',
    desc: 'Fine-tuned wav2vec2 on Nepali speech (~7% CER) and compared against a custom CNN-ResNet; paired with extractive and abstractive summarization for an end-to-end speech-to-summary system.',
    tools: ['Wav2Vec2', 'CNN-ResNet', 'mT5', 'React', 'FastAPI'], githubHref: 'https://github.com/JuJu2181/Automatic-Nepali-Speech-Recognition-and-Summarizer' },
  { title: 'Automatic Nepali Number Plate Recognition', status: 'Completed', statusKind: 'completed',
    desc: 'Three-stage YOLOv4 + CNN pipeline for Nepali plate detection and character recognition, piloted for smart parking at Khwopa.',
    tools: ['YOLOv4', 'CNN', 'OpenCV', 'Django'], githubHref: 'https://github.com/JuJu2181/annpr' }
];

const PROJECTS = [
  { title: 'AI360 SQL-Agent', category: 'work', categoryLabel: 'Work', desc: 'Natural-language-to-SQL system for Nepali banks using RAG and vector search, letting non-technical staff query financial data conversationally.', tools: ['Python', 'SQL', 'RAG', 'LangChain'], githubHref: '#' },
  { title: 'RAG AWS Certification Coach', category: 'work', categoryLabel: 'Work', desc: 'RAG application with chat and question generation for personalized AWS exam prep, adopted internally at Leapfrog.', tools: ['Python', 'LangChain', 'LangGraph', 'ChromaDB'], githubHref: 'https://github.com/anishshilpakar1337/aws_certification_exam_helper' },
  { title: 'Hybrid Payer Rejection Auto-Resolution Engine', category: 'work', categoryLabel: 'Work', desc: 'ML recommendation engine automating insurance claim rejection resolution via anomaly detection, similarity search, and clustering.', tools: ['Python', 'SQL', 'K-Means', 'Cosine Similarity'], githubHref: '#' },
  { title: 'AWS ETL Pipeline & Data Warehousing', category: 'personal', categoryLabel: 'Personal', desc: 'Parallel local and cloud ETL implementations into a star-schema warehouse from CSV sources.', tools: ['Python', 'PostgreSQL', 'AWS Glue', 'Redshift'], githubHref: 'https://github.com/JuJu2181/ETL_Pipeline_Data_Warehouse' },
  { title: 'Unstructured Data Streaming with Spark', category: 'personal', categoryLabel: 'Personal', desc: 'Real-time pipeline ingesting unstructured CSV/JSON/TXT data into Parquet on S3, cataloged with Glue and queried via Athena.', tools: ['PySpark', 'Spark Streaming', 'AWS S3', 'Glue'], githubHref: 'https://github.com/JuJu2181/de_unstructured_data_spark_streaming_aws' },
  { title: 'Stock Price Notification System', category: 'personal', categoryLabel: 'Personal', desc: 'Threshold-based stock monitoring app with email/SMS alerts via a Flask REST API.', tools: ['Python', 'Flask', 'SQLite', 'REST APIs'], githubHref: 'https://github.com/JuJu2181/Stock-Price-Notifier' },
  { title: 'Amazon Web Scraping & Visualization', category: 'personal', categoryLabel: 'Personal', desc: 'Scrapy pipeline extracting laptop listings, cleaned with pandas and visualized for pricing and ratings trends.', tools: ['Scrapy', 'Selenium', 'Pandas', 'Matplotlib'], githubHref: 'https://github.com/JuJu2181/Amazon-Laptop-Data-Scraping-And-Visualization' }
];

// BLOG_POSTS lives in js/blog-data.js — generated from the Hashnode RSS
// feed by scripts/fetch-blog-posts.js. Re-run that script to refresh it.

const CURRENT_BOOKS = [
  { title: 'Tuesdays with Morrie', author: 'Mitch Alboom', slotId: 'book-current' }
];

const PAST_BOOKS = [
  { title: 'The Republic', author: 'Plato', slotId: 'book-past-1' },
  { title: 'The Stranger', author: 'Albert Camus', slotId: 'book-past-2' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', slotId: 'book-past-3' }
];
