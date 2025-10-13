import {
  Award,
  CheckCircle,
  Code,
  Database,
  Server,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

export const skills = [
  { name: "Flutter", icon: Smartphone, level: 95 },
  { name: "React Native", icon: Code, level: 60 },
  { name: "Clean Architecture", icon: Code, level: 88 },
  { name: "Laravel", icon: Server, level: 80 },
  { name: "API Integration", icon: Server, level: 95 },
  { name: "Mobile Development", icon: Smartphone, level: 90 },
  { name: "MySQL", icon: Database, level: 85 },
  { name: "PostgreSQL", icon: Database, level: 85 },
  { name: "System Analysis", icon: Code, level: 80 },
];

export const projects = [
  {
    title: "Kampus Gratis (LMS)",
    description:
      "LMS platform serving 500+ students with real-time course management, assessments, and progress tracking.",
    tech: ["Flutter", "API Integration", "Clean Architecture", "Bloc"],
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
    tech: ["Flutter", "GetX", "Laravel", "Clean Architecture", "MySQL", "Firebase"],
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
    tech: ["Flutter", "GetX", "Laravel", "API Integration", "MySQL", "One Signal", "Firebase"],
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
    tech: ["Flutter", "Bloc", "Laravel", "API Integration", "MySQL", "Firebase"],
    impact: "25% increase in crop yield efficiency",
    screenshots: [
      "/images/projects/travelly/ss-1.jpg",
      "/images/projects/travelly/ss-2.jpg",
      "/images/projects/travelly/ss-3.jpg",
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
    value: "5000+",
    label: "Active Users",
    color: "text-orange-500",
  },
];
