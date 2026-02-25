import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "茗晟教育 - 专业升学培训机构 | 春季高考、中考升学、高职单招、专转本",
    template: "%s | 茗晟教育",
  },
  description: "茗晟教育是江苏专业的升学培训机构，提供春季高考、中考升学、高职单招、专转本等培训服务。多年办学经验，师资力量雄厚，通过率高，助您轻松升学。",
  keywords: ["茗晟教育", "春季高考", "中考升学", "高职单招", "专转本", "江苏升学", "升学培训", "江苏春季高考", "江苏专转本", "职教高考", "中职升学"],
  authors: [{ name: "茗晟教育" }],
  creator: "茗晟教育",
  publisher: "茗晟教育",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    siteName: "茗晟教育",
    title: "茗晟教育 - 江苏专业升学培训机构",
    description: "茗晟教育提供春季高考、中考升学、高职单招、专转本等培训服务，助您轻松升学。",
    url: "https://www.mingsheng-edu.com",
    images: [
      {
        url: "https://www.mingsheng-edu.com/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "茗晟教育 - 江苏专业升学培训机构",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "茗晟教育 - 江苏专业升学培训机构",
    description: "茗晟教育提供春季高考、中考升学、高职单招、专转本培训服务。",
    images: ["https://www.mingsheng-edu.com/images/logo.jpg"],
  },
  alternates: {
    canonical: "https://www.mingsheng-edu.com",
  },
  category: "education",
  verification: {
    // google: "your-google-verification-code",
    // 可以添加百度、360等搜索引擎验证码
  },
  other: {
    "applicable-device": "pc,mobile",
    "mobile-agent": "format=html5",
  },
};

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.mingsheng-edu.com/#organization",
  name: "茗晟教育",
  alternateName: "茗晟教育培训机构",
  description: "茗晟教育是江苏专业的升学培训机构，致力于为广大学员提供春季高考、中考升学、高职单招、专转本等全方位的升学解决方案。",
  url: "https://www.mingsheng-edu.com",
  logo: "https://www.mingsheng-edu.com/logo.png",
  foundingDate: "2015",
  areaServed: {
    "@type": "Country",
    name: "中国",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "升学培训服务",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "春季高考培训",
          description: "面向中职学生的春季高考升学培训服务",
          educationalProgramMode: "blended",
          timeToComplete: "P1Y",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "中考升学培训",
          description: "初中毕业生升学规划与培训服务",
          educationalProgramMode: "blended",
          timeToComplete: "P1Y",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "江苏高职单招培训",
          description: "江苏省高职院校单独招生考试培训",
          educationalProgramMode: "blended",
          timeToComplete: "P6M",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "EducationalOccupationalProgram",
          name: "江苏专转本培训",
          description: "江苏省专科转本科考试培训服务",
          educationalProgramMode: "blended",
          timeToComplete: "P2Y",
        },
      },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+86-16651205888",
    contactType: "customer service",
    availableLanguage: "Chinese",
  },
  // sameAs 知识图谱连接 - 关联权威平台提升可信度
  sameAs: [
    // 可以添加企业在各平台的官方链接
    // "https://weixin.qq.com/r/xxxxx", // 微信公众号
    // "https://www.douyin.com/user/xxxxx", // 抖音账号
    // "https://www.xiaohongshu.com/user/profile/xxxxx", // 小红书
    // "https://aiqicha.baidu.com/company_detail_xxxxx", // 爱企查
    // "https://www.tianyancha.com/company/xxxxx", // 天眼查
  ],
};

// WebSite 结构化数据 - 支持搜索引擎搜索框功能
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.mingsheng-edu.com/#website",
  name: "茗晟教育",
  url: "https://www.mingsheng-edu.com",
  description: "江苏专业升学培训机构，提供春季高考、中考升学、高职单招、专转本培训服务",
  publisher: {
    "@id": "https://www.mingsheng-edu.com/#organization",
  },
  inLanguage: "zh-CN",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.mingsheng-edu.com/faq?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// LocalBusiness 结构化数据 - 本地教育服务
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": "https://www.mingsheng-edu.com/#localbusiness",
  name: "茗晟教育",
  image: "https://www.mingsheng-edu.com/images/logo.jpg",
  url: "https://www.mingsheng-edu.com",
  telephone: "+86-16651205888",
  email: "contact@mingsheng-edu.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "新锐科创中心2号楼11层",
    addressLocality: "苏州市虎丘区",
    addressRegion: "江苏省",
    addressCountry: "CN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.3245,
    longitude: 120.5734,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
