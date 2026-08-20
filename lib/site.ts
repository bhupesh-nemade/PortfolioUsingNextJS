import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  name: "Bhupesh Nemade",
  title: "Bhupesh Nemade | Full Stack Developer and AI Engineer",
  description:
    "Professional portfolio of Bhupesh Nemade, a full stack developer and AI engineer building web applications, RAG systems, real-time products, and reliable backend workflows.",
  url: "https://bhupeshnemade.dev",
  email: "bhupesh.nemade25@gmail.com",
  github: "https://github.com/bhupesh-nemade",
  linkedin: "https://www.linkedin.com/in/bhupesh-nemade-32734a219/",
  resume: "/resume/Bhupesh_Nemade_Resume.pdf",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: absoluteUrl("/opengraph-image"), width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/opengraph-image")],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: ["Bhupesh Nemade", "Full Stack Developer", "AI Engineer", "Next.js Developer", "React Developer", "RAG Chatbot", "Laravel Developer"],
};
