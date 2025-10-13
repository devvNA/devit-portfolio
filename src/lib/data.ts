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
    achievements: [
      "Served 5000+ active students",
      "Real-time synchronization",
      "Advanced analytics dashboard",
    ],
    impact: "40% improvement in student engagement",
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
    tech: ["React Native", "Redux", "Laravel", "MySQL"],
    achievements: [
      "Seamless payment integration",
      "Real-time inventory updates",
      "Push notification system",
    ],
    impact: "30% reduction in cart abandonment",
    screenshots: [
      "/images/projects/ecommerce_marvelindo/ss-1.jpg",
      "/images/projects/ecommerce_marvelindo/ss-2.jpg",
      "/images/projects/ecommerce_marvelindo/ss-3.jpg",
    ],
  },
  {
    title: "Point of Sale (POS) System",
    description:
      "Modern POS system with offline support, inventory management, and comprehensive reporting.",
    tech: ["Flutter", "GetX", "Supabase", "PostgreSQL"],
    achievements: [
      "Offline-first architecture",
      "Real-time sales analytics",
      "Multi-branch support",
    ],
    impact: "60% faster transaction processing",
    screenshots: [
      "/images/projects/arka_pos/ss-1.jpg",
      "/images/projects/arka_pos/ss-2.jpg",
      "/images/projects/arka_pos/ss-3.jpg",
    ],
  },
  {
    title: "Plantix (Agriculture Management App)",
    description:
      "IoT-integrated agriculture monitoring system with crop management, weather forecasting, and market price tracking.",
    tech: ["Flutter", "Laravel", "API Integration", "MySQL"],
    achievements: [
      "IoT sensor integration",
      "Weather API integration",
      "Crop yield prediction",
    ],
    impact: "25% increase in crop yield efficiency",
    screenshots: [
      "/images/projects/plantix/ss-1.png",
      "/images/projects/plantix/ss-2.png",
      "/images/projects/plantix/ss-3.png",
    ],
  },
  {
    title: "KSP Makarya (Loan Management App)",
    description:
      "IoT-integrated agriculture monitoring system with crop management, weather forecasting, and market price tracking.",
    tech: ["Flutter", "Laravel", "API Integration", "MySQL"],
    achievements: [
      "IoT sensor integration",
      "Weather API integration",
      "Crop yield prediction",
    ],
    impact: "25% increase in crop yield efficiency",
    screenshots: [
      "/images/projects/ksp_makarya/ss-1.jpg",
      "/images/projects/ksp_makarya/ss-2.jpg",
      "/images/projects/ksp_makarya/ss-3.jpg",
    ],
  },
  {
    title: "Travelly (Tourism App)",
    description:
      "IoT-integrated agriculture monitoring system with crop management, weather forecasting, and market price tracking.",
    tech: ["Flutter", "Laravel", "API Integration", "MySQL"],
    achievements: [
      "IoT sensor integration",
      "Weather API integration",
      "Crop yield prediction",
    ],
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
