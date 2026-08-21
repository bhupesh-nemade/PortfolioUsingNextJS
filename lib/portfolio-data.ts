import { FaBrain, FaCode } from "react-icons/fa6";

import type { Experience, Project, Skill, Stat } from "@/types/portfolio";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats: Stat[] = [
  { label: "Years", value: 0.6, suffix: "+" },
  { label: "Projects", value: 5, suffix: "+" },
  { label: "Technologies", value: 3, suffix: "+" },
  { label: "Certificates", value: 3, suffix: "+" },
];

export const skills: Skill[] = [
  { name: "Next.js", category: "Frontend", glow: "#38bdf8" },
  { name: "React", category: "Frontend", glow: "#60a5fa" },
  { name: "Laravel", category: "Backend", glow: "#fb7185" },
  { name: "Node.js", category: "Backend", glow: "#22c55e" },
  { name: "Python", category: "AI", glow: "#fde047" },
  { name: "FastAPI", category: "Backend", glow: "#2dd4bf" },
  { name: "LangChain", category: "AI", glow: "#a78bfa" },
  { name: "Pinecone", category: "AI", glow: "#34d399" },
  { name: "N8N", category: "AI", glow: "#fde047" },
  { name: "MySQL", category: "Data", glow: "#f59e0b" },
  { name: "Git", category: "Backend", glow: "#fb923c" },
  { name: "Crew AI", category: "AI", glow: "#3b82f6" },
];

export const projects: Project[] = [
  {
    title: "WorkMate",
    slug: "workmate",
    summary:
      "An enterprise Work Management System that streamlines employee operations with role-based access control and centralized project management.",
    image: "/projects/workmate.png",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Role-Based Access Control",
      "Dashboard & Analytics",
      "Timesheet Management",
      "Leave Management",
      "Expense Management",
      "Task & Project Management",
    ],
    architectureHighlights: [
      "Angular Frontend",
      "Node.js REST APIs",
      "Express.js Backend",
      "MongoDB Database",
    ],
    architecture:
      "Developed an enterprise work management platform using Angular, Express.js, Node.js, and MongoDB. Implemented modular architecture for employee, task, leave, expense, timesheet, and project management with secure role-based authentication.",
    challenges:
      "Designed scalable role-based authorization while improving workflow automation and reporting across multiple enterprise modules.",
    github: "",
    demo: "",
  },

  {
    title: "AI-Powered School Chatbot",
    slug: "ai-powered-school-chatbot",
    summary:
      "A Retrieval-Augmented Generation (RAG) chatbot capable of answering school-related questions from uploaded documents with accurate, context-aware responses.",
    image: "/projects/ai-school-chatbot.png",
    stack: [
      "Python",
      "FastAPI",
      "LangChain",
      "Pinecone",
      "Hugging Face",
      "Streamlit",
      "FlutterFlow",
      "RAGAS",
    ],
    features: [
      "Document Upload",
      "Semantic Search",
      "RAG Pipeline",
      "Context-Aware Responses",
      "Conversation Memory",
    ],
    architectureHighlights: [
      "Document Chunking",
      "Vector Embeddings",
      "Pinecone Vector Database",
      "FastAPI Backend",
      "FlutterFlow Frontend",
    ],
    architecture:
      "Built a complete RAG pipeline using LangChain and Pinecone for semantic retrieval, FastAPI for backend APIs, Streamlit for administration, and FlutterFlow as the client application. Integrated Hugging Face LLMs and evaluated performance using RAGAS.",
    challenges:
      "Improved retrieval quality by optimizing chunking strategies, vector search, and prompt engineering to reduce hallucinations and improve answer relevance.",
    github:
      "https://github.com/bhupesh-nemade/school-chatbot",
    demo: "",
  },

  {
    title: "Real-Time Chat Application",
    slug: "real-time-chat-application",
    summary:
      "A modern real-time messaging application built using Laravel Reverb, supporting instant communication with live updates over WebSockets.",
    image: "/projects/reverb-chat.png",
    stack: [
      "Laravel",
      "Laravel Reverb",
      "React",
      "TypeScript",
      "MySQL",
      "Tailwind CSS",
    ],
    features: [
      "Real-Time Messaging",
      "Typing Indicators",
      "Online Presence",
      "Read Receipts",
      "Authentication",
    ],
    architectureHighlights: [
      "Laravel Broadcasting",
      "Laravel Reverb WebSockets",
      "REST APIs",
      "React Frontend",
    ],
    architecture:
      "Developed a real-time chat platform using Laravel Reverb for WebSocket communication. Laravel handled authentication, broadcasting, and message persistence while React provided a responsive chat interface with live updates.",
    challenges:
      "Implemented reliable real-time synchronization, typing indicators, presence detection, and optimized WebSocket communication for seamless messaging.",
    github:
      "https://github.com/bhupesh-nemade/Real-Chat-Application-Using-Reverb",
    demo: "",
  },

  {
    title: "Razorpay Payment Gateway Integration",
    slug: "razorpay-payment-gateway",
    summary:
      "Integrated Razorpay payment gateway to enable secure online payments with order creation, signature verification, webhook handling, and payment confirmation.",
    image: "/projects/razorpay.png",
    stack: ["React", "Laravel", "Razorpay", "MySQL", "REST API"],
    features: [
      "Secure Payment Processing",
      "Order Creation",
      "Payment Verification",
      "Webhook Integration",
      "Transaction Management",
    ],
    architectureHighlights: [
      "Laravel Backend",
      "React Frontend",
      "Razorpay APIs",
      "Webhook Verification",
    ],
    architecture:
      "Integrated Razorpay Standard Checkout with Laravel backend APIs to create payment orders, verify signatures, process webhooks, and securely store transaction details in MySQL.",
    challenges:
      "Implemented secure payment verification using Razorpay signatures, handled webhook events, and ensured reliable transaction status synchronization.",
    github:
      "https://github.com/bhupesh-nemade/Razorpay-payment-integration",
    demo: "",
  },

  {
    title: "AI Research Agent",
    slug: "ai-research-agent",
    summary:
      "An AI-powered research agent built with CrewAI that coordinates specialized AI agents to research topics, analyze information, and produce structured research reports.",
    image: "/projects/ai-research-agent.png",
    stack: [
      "Python",
      "CrewAI",
      "LLM",
      "OpenRouter",
      "Web Search",
    ],
    features: [
      "Multi-Agent Research",
      "Automated Web Research",
      "Information Analysis",
      "Source Gathering",
      "Structured Report Generation",
      "Agent Task Orchestration",
    ],
    architectureHighlights: [
      "CrewAI Multi-Agent Architecture",
      "Specialized Research Agents",
      "Sequential Agent Workflow",
      "LLM-Powered Analysis",
      "Automated Research Pipeline",
    ],
    architecture:
      "Built a multi-agent AI research system using CrewAI where specialized agents collaborate through a structured workflow. Research agents gather relevant information, analyze the collected findings, and pass their results through the CrewAI task pipeline to produce a structured research report.",
    challenges:
      "Designed an effective multi-agent workflow that separates research, analysis, and report generation responsibilities while maintaining consistent outputs and reducing the amount of manual research required.",
    github:
      "https://github.com/bhupesh-nemade/research-agent-using-Crew-AI",
    demo: "",
  },

  {
    title: "AI Email Classification Workflow",
    slug: "ai-email-classification",
    summary:
      "An AI-powered email classification workflow built with n8n that automatically processes incoming emails and categorizes them based on their content.",
    image: "/projects/email-classification.png",
    stack: ["N8N", "AI", "LLM", "Email Automation"],
    features: [
      "Automatic Email Processing",
      "AI-Based Classification",
      "Workflow Automation",
      "Category-Based Routing",
      "Email Data Extraction",
    ],
    architectureHighlights: [
      "n8n Workflow Automation",
      "Email Trigger",
      "LLM-Based Classification",
      "Conditional Routing",
    ],
    architecture:
      "Built an automated email classification workflow using n8n. Incoming emails are processed through an automated workflow, analyzed using an AI model, classified into relevant categories, and routed according to the classification result.",
    challenges:
      "Designed the workflow to reliably process incoming emails, generate consistent classifications, and automate routing without requiring manual intervention.",
    github: "",
    demo: "",
  },
];

export const experience: Experience[] = [
  {
    role: "Intern",
    company: "Parity Fox, Pune",
    period: "May 2026 - Present",
    detail:
      "Developing AI-powered applications with Retrieval-Augmented Generation (RAG) using LangChain, Pinecone, Hugging Face LLMs, FastAPI, Streamlit, and FlutterFlow.",
    logo: "PF",
    achievements: [
      "Developed an AI-powered School Chatbot using RAG architecture.",
      "Integrated Streamlit UI with FastAPI backend and FlutterFlow frontend.",
      "Improved chatbot accuracy using RAGAS evaluation and retrieval optimization.",
    ],
    impact: {
      label: "AI Projects",
      value: 1,
      suffix: "+",
    },
    icon: FaBrain,
  },

  {
    role: "Software Developer",
    company: "Pratastren Infotech Services, Mumbai",
    period: "Jan 2026 - Apr 2026",
    detail:
      "Worked on an enterprise Work Management System using Angular, Node.js, Express.js, and MongoDB.",
    logo: "PI",
    achievements: [
      "Developed Dashboard, Timesheet, Leave, Expense, Employee and Task Management modules.",
      "Implemented role-based access control.",
      "Improved workflow automation and reporting.",
    ],
    impact: {
      label: "Modules",
      value: 6,
      suffix: "+",
    },
    icon: FaCode,
  },
];