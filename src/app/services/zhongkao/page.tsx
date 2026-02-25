import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "中考升学培训 - 初中毕业升学规划 | 江苏中考辅导",
  description: "茗晟教育中考升学培训，为江苏初中毕业生提供普高、职高、技校等多种升学路径指导与培训。南京、苏州、无锡等地均可咨询，专业升学规划助力选择最适合的发展道路。",
  keywords: ["中考升学", "中考培训", "初中升学", "升学规划", "职高", "技校", "江苏中考", "南京中考升学", "苏州中考辅导"],
  alternates: {
    canonical: "https://www.mingsheng-edu.com/services/zhongkao",
  },
};

const features = [
  {
    title: "升学规划指导",
    description: "根据学生特点和成绩，规划最适合的升学路径",
    icon: "🎯",
  },
  {
    title: "文化课辅导",
    description: "针对中考科目进行系统复习与强化训练",
    icon: "📖",
  },
  {
    title: "职业方向分析",
    description: "帮助学生了解不同职业方向的发展前景",
    icon: "🔍",
  },
  {
    title: "志愿填报指导",
    description: "专业指导中考志愿填报，选择理想学校",
    icon: "📝",
  },
];

const pathways = [
  {
    title: "普通高中",
    description: "适合文化课成绩较好、目标考取大学的学生",
    features: ["参加夏季高考", "升入本科/专科院校", "学术发展路线"],
  },
  {
    title: "职业高中",
    description: "适合有明确职业方向、动手能力强的学生",
    features: ["可参加春季高考", "可直接就业", "技能+学历双通道"],
  },
  {
    title: "技工学校",
    description: "适合希望早日掌握一技之长的学生",
    features: ["专业技能培训", "就业导向明确", "部分可升学"],
  },
  {
    title: "中专学校",
    description: "适合特定专业方向有明确规划的学生",
    features: ["专业针对性强", "可参加对口升学", "技能证书培训"],
  },
];

const faqs = [
  {
    question: "中考成绩不理想还有哪些出路？",
    answer: "中考成绩不理想不代表没有好的发展。可以选择职业高中走春季高考路线，同样可以考取本科院校；也可以选择技工学校学习专业技能，未来就业前景同样广阔。重要的是选择适合自己的道路。",
  },
  {
    question: "职高和普高有什么区别？",
    answer: "普高以文化课为主，目标是参加夏季高考升入大学；职高除文化课外还有专业技能课程，可以参加春季高考升学，也可以直接就业。两者各有优势，关键看学生的特点和发展规划。",
  },
  {
    question: "如何选择适合孩子的升学路径？",
    answer: "需要综合考虑孩子的学习成绩、兴趣爱好、职业倾向等因素。我们的升学规划师会对学生进行全面评估，提供专业的升学建议，帮助选择最适合的发展道路。",
  },
  {
    question: "茗晟教育的中考升学服务包括哪些？",
    answer: "我们提供升学规划咨询、文化课辅导、志愿填报指导、学校对接等一站式服务。从中考前的复习备考到中考后的升学选择，全程为学生和家长提供专业支持。",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "中考升学培训课程",
  description: "为初中毕业生提供升学规划指导与培训服务",
  provider: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    url: "https://www.mingsheng-edu.com",
  },
  educationalLevel: "初中",
  timeToComplete: "P1Y",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "blended",
    courseWorkload: "PT15H/week",
  },
};

// BreadcrumbList 结构化数据
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "首页",
      item: "https://www.mingsheng-edu.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "培训项目",
      item: "https://www.mingsheng-edu.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "中考升学",
      item: "https://www.mingsheng-edu.com/services/zhongkao",
    },
  ],
};

// FAQPage 结构化数据
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ZhongKaoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-green-200 hover:text-white">首页</Link></li>
                <li><span className="text-green-300">/</span></li>
                <li><span className="text-white">中考升学</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">中考升学培训</h1>
            <p className="text-xl text-green-100 mb-8">
              为初中毕业生提供专业的升学规划指导。无论选择普高、职高还是技校，我们都能帮您找到最适合的发展道路。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors"
              >
                免费升学规划
              </Link>
              <a
                href="tel:16651205888"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-green-700 transition-colors"
              >
                电话咨询
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">服务内容</h2>
            <p className="mt-4 text-lg text-gray-600">茗晟教育为您提供全方位的中考升学服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">升学路径选择</h2>
            <p className="mt-4 text-lg text-gray-600">了解不同升学路径，选择最适合的发展方向</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway) => (
              <div key={pathway.title} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{pathway.title}</h3>
                <p className="text-gray-600 mb-4">{pathway.description}</p>
                <ul className="space-y-2">
                  {pathway.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">常见问题</h2>
            <p className="mt-4 text-lg text-gray-600">关于中考升学，您可能想了解的问题</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="text-green-600 hover:text-green-700 font-medium">
              查看更多常见问题 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">不知道该选择哪条升学路？</h2>
          <p className="text-green-100 mb-8">立即咨询，获取专业升学规划建议</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-green-700 rounded-lg font-medium hover:bg-green-50 transition-colors"
          >
            免费升学咨询
          </Link>
        </div>
      </section>
    </>
  );
}
