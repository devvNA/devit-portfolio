import {
  Award,
  CheckCircle,
  Code,
  PackageSearch,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

export const skills = [
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  {
    name: "React Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Clean Architecture",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Clean_Architecture_core.svg",
  },
  {
    name: "Laravel",
    icon: "https://icon.icepanel.io/Technology/svg/Laravel.svg",
  },
  {
    name: "API Integration",
    icon: "https://www.svgrepo.com/show/332640/api.svg",
  },
  { name: "Mobile Development", icon: Smartphone },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  { name: "System Analysis", icon: Code },
  { name: "Software Testing", icon: PackageSearch },
  { name: "Quality Assurance", icon: Code },
  {
    name: "Version Control (Git)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];
export const projects = [
  {
    title: "Kampus Gratis (LMS)",
    description:
      "LMS platform serving 500+ students with real-time course management, assessments, and progress tracking.",
    tech: ["Flutter", "API Integration", "Clean Architecture", "Bloc"],
    link: "https://github.com/devvNA/kampus-gratis",
    screenshots: [
      "/images/projects/kampus_gratis/ss-1.jpg",
      "/images/projects/kampus_gratis/ss-2.jpg",
      "/images/projects/kampus_gratis/ss-3.jpg",
    ],
  },
  {
    title: "MV Shop (E-Commerce)",
    description:
      "An Android-based mobile e-commerce application that makes it easy for CV Marvelindo Utama outlets and sales staff to place orders and sell products accurately and in an integrated manner.",
    tech: [
      "Flutter",
      "GetX",
      "Laravel",
      "Clean Architecture",
      "MySQL",
      "Firebase",
    ],
    link: "https://github.com/devvNA/ecommerce-marvelindo",
    screenshots: [
      "/images/projects/ecommerce_marvelindo/ss-1.jpg",
      "/images/projects/ecommerce_marvelindo/ss-2.jpg",
      "/images/projects/ecommerce_marvelindo/ss-3.jpg",
    ],
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Multi-role POS app, built with React Native and Supabase (PostgreSQL), enables efficient sales, inventory management, and secure role-based access.",
    tech: ["React Native", "Redux", "Supabase", "PostgreSQL"],
    link: "https://github.com/devvNA/arka-pos",
    screenshots: [
      "/images/projects/arka_pos/ss-1.jpg",
      "/images/projects/arka_pos/ss-2.jpg",
      "/images/projects/arka_pos/ss-3.jpg",
    ],
  },
  {
    title: "Plantix (Agriculture Management App)",
    description:
      "An application that helps farmers manage their land, plan crops, analyze farming operations, organize schedules, and select agricultural products easily and in an integrated manner.",
    tech: ["Flutter", "GetX", "Supabase", "API Integration", "PostgreSQL"],
    link: "https://github.com/devvNA/plantix-app",
    screenshots: [
      "/images/projects/plantix/ss-1.png",
      "/images/projects/plantix/ss-2.png",
      "/images/projects/plantix/ss-3.png",
    ],
  },
  {
    title: "KSP Makarya (Loan Management App)",
    description:
      "This application digitizes the operations of the KSP Makarya cooperative with features for member management, transactions, and an approval system based on the roles of PDL, Verifier, and Leader.",
    tech: [
      "Flutter",
      "GetX",
      "Laravel",
      "API Integration",
      "MySQL",
      "One Signal",
      "Firebase",
    ],
    link: "https://github.com/devvNA/ksp-makarya",
    screenshots: [
      "/images/projects/ksp_makarya/ss-1.jpg",
      "/images/projects/ksp_makarya/ss-2.jpg",
      "/images/projects/ksp_makarya/ss-3.jpg",
    ],
  },
  {
    title: "Travelly (Tourism App)",
    description:
      "Travelly is a mobile application that makes it easy for users to register, search, and purchase travel tickets and popular activity vouchers with booking features and a destination catalog.",
    tech: [
      "Flutter",
      "Bloc",
      "Laravel",
      "API Integration",
      "MySQL",
      "Firebase",
    ],
    link: "https://github.com/devvNA/travelly-app",
    impact: "25% increase in crop yield efficiency",
    screenshots: [
      "/images/projects/travelly/ss-1.jpg",
      "/images/projects/travelly/ss-2.jpg",
      "/images/projects/travelly/ss-3.jpg",
    ],
  },
  {
    title: "Stenograph",
    description:
      "An application for message encryption and hiding within images using AES and RSA algorithms.",
    tech: ["Flutter", "GetX", "GetStorage", "Image Picker"],
    link: "https://github.com/devvNA/stenograph-app",
    impact: "Enhanced data security with dual-layer encryption",
    screenshots: [
      "/images/projects/stenography/ss-1.png",
      "/images/projects/stenography/ss-2.png",
      "/images/projects/stenography/ss-3.png",
    ],
  },
  {
    title: "Landing Page - Utama Jaya",
    description:
      "This is a modern landing page website for a road paving service company serving the Barlingmascakeb region (Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen).",
    tech: ["React + Typescript", "Vite", "Tailwind CSS"],
    link: "https://aspalmurahpwt.vercel.app/",
    impact: "Enhanced data security with dual-layer encryption",
    screenshots: [
      "/images/projects/landing_page_utama_jaya/ss-1.png",
      "/images/projects/landing_page_utama_jaya/ss-2.png",
      "/images/projects/landing_page_utama_jaya/ss-3.png",
    ],
  },
  {
    title: "SIMPUSKLU App (Sistem Informasi Manajemen Puskesmas Kluwut)",
    description:
      "This is a modern landing page website for a road paving service company serving the Barlingmascakeb region (Banjarnegara, Purbalingga, Banyumas, Cilacap, Kebumen).",
    tech: [
      "Flutter",
      "GetX",
      "GetStorage",
      "Material Design",
      "MySQL",
      "Laravel",
      "REST API",
    ],
    link: "https://github.com/devvNA/be-puskesmas",
    impact: "Enhanced data security with dual-layer encryption",
    screenshots: [
      "/images/projects/simpusklu/ss-1.png",
      "/images/projects/simpusklu/ss-2.png",
      "/images/projects/simpusklu/ss-3.png",
    ],
  },
];

export const achievements = [
  {
    icon: TrendingUp,
    value: "40%",
    label: "Performance Improvements",
    color: "text-green-500",
  },
  {
    icon: CheckCircle,
    value: "30%",
    label: "Bug Reduction",
    color: "text-blue-500",
  },
  {
    icon: Award,
    value: "60%",
    label: "Faster Testing",
    color: "text-purple-500",
  },
  {
    icon: Users,
    value: "100+",
    label: "Active Users",
    color: "text-orange-500",
  },
];
