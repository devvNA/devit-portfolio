export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Devit Nur Azaqi",
    alternateName: "ItsDevit",
    url: "https://itsdevit.web.id",
    image: "https://sitsdevit.web.id/images/profile.png",
    sameAs: [
      "https://github.com/itsdevit",
      "https://linkedin.com/in/devit-nur-azaqi",
      "https://twitter.com/itsdevit",
    ],
    jobTitle: "Mobile Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Telkom University",
    },
    knowsAbout: [
      "Flutter",
      "React Native",
      "Mobile Development",
      "Clean Architecture",
      "API Integration",
      "Cross-platform Development",
    ],
    description:
      "Professional Mobile Developer specializing in Flutter and React Native with over 2 years of experience in cross-platform mobile application development.",
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ItsDevit",
    alternateName: "Devit Nur Azaqi Portfolio",
    url: "https://itsdevit.web.id",
    description:
      "Professional Mobile Developer Portfolio showcasing Flutter and React Native projects",
    author: {
      "@type": "Person",
      name: "Devit Nur Azaqi",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://itsdevit.web.id/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2024-01-01",
    dateModified: "2025-11-25",
    mainEntity: {
      "@type": "Person",
      name: "Devit Nur Azaqi",
      alternateName: "ItsDevit",
      description: "Mobile Developer specializing in Flutter and React Native",
      image: "https://itsdevit.web.id/images/profile.png",
      sameAs: [
        "https://github.com/devvNA",
        "https://linkedin.com/in/devit-nur-azaqi",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioData) }}
      />
    </>
  );
}
