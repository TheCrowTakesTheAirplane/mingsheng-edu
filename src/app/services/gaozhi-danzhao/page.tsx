import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "江苏高职单招培训 - 提前锁定大学名额 | 单招考试辅导",
  description: "茗晟教育江苏高职单招培训课程，针对高职院校单独招生考试提供专业辅导。涵盖笔试和面试培训，南京、苏州、无锡等地可报名，提前锁定大学名额。",
  keywords: ["高职单招", "单招培训", "江苏单招", "高职院校招生", "单独招生考试", "南京高职单招", "苏州单招培训", "单招面试培训"],
  alternates: {
    canonical: "https://www.mingsheng-edu.com/services/gaozhi-danzhao",
  },
};

const features = [
  {
    title: "政策解读",
    description: "深入解读江苏高职单招政策，把握招生动态",
    icon: "📋",
  },
  {
    title: "院校分析",
    description: "分析各高职院校招生情况，精准定位目标",
    icon: "🏫",
  },
  {
    title: "面试培训",
    description: "模拟面试训练，提升综合素质表现能力",
    icon: "🎤",
  },
  {
    title: "笔试辅导",
    description: "针对笔试科目进行系统复习与强化训练",
    icon: "✏️",
  },
];

const advantages = [
  {
    title: "提前录取",
    description: "单招在高考前进行，被录取后无需参加高考，提前锁定大学名额。",
  },
  {
    title: "竞争较小",
    description: "单招考试竞争相对高考小，录取几率更高。",
  },
  {
    title: "专业选择多",
    description: "可选择的专业涵盖各个领域，满足不同职业规划需求。",
  },
  {
    title: "升学有保障",
    description: "即使单招未通过，仍可参加高考，多一次升学机会。",
  },
];

const process = [
  { step: "01", title: "了解政策", description: "详细了解江苏高职单招报名条件和流程" },
  { step: "02", title: "选择院校", description: "根据兴趣和成绩选择适合的目标院校" },
  { step: "03", title: "系统培训", description: "参加笔试和面试的专项培训" },
  { step: "04", title: "网上报名", description: "在规定时间内完成网上报名" },
  { step: "05", title: "参加考试", description: "参加院校组织的笔试和面试" },
  { step: "06", title: "录取入学", description: "查询录取结果，办理入学手续" },
];

const faqs = [
  {
    question: "什么是高职单招？",
    answer: "高职单招是高职院校单独招生的简称，是高职院校在高考前自主命题、自行组织考试、自主录取的一种招生形式。被单招录取的学生与高考录取的学生享受同等待遇。",
  },
  {
    question: "高职单招和高考有什么区别？",
    answer: "高职单招在高考前进行，考试内容和形式由院校自主确定，一般包括笔试和面试。被单招录取后无需参加高考；若未被录取，可继续参加高考，相当于多了一次升学机会。",
  },
  {
    question: "哪些学生适合参加高职单招？",
    answer: "文化课成绩中等或偏下但有明确职业方向的学生、希望提前锁定大学名额减轻高考压力的学生、对某个专业有浓厚兴趣的学生都适合参加单招。",
  },
  {
    question: "单招培训主要培训什么内容？",
    answer: "我们的单招培训包括：政策解读与院校分析、文化课笔试辅导、面试技巧培训、模拟考试训练、志愿填报指导等。全方位帮助学生提高单招考试通过率。",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "江苏高职单招培训课程",
  description: "针对江苏省高职院校单独招生考试的专业培训",
  provider: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    url: "https://www.mingsheng-edu.com",
  },
  educationalLevel: "高中",
  timeToComplete: "P6M",
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
      name: "高职单招",
      item: "https://www.mingsheng-edu.com/services/gaozhi-danzhao",
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

export default function GaoZhiDanZhaoPage() {
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
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-purple-200 hover:text-white">首页</Link></li>
                <li><span className="text-purple-300">/</span></li>
                <li><span className="text-white">高职单招</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">江苏高职单招培训</h1>
            <p className="text-xl text-purple-100 mb-8">
              提前锁定大学名额，降低高考压力。专业的单招考试辅导，帮助您顺利通过笔试和面试，实现升学梦想。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-700 rounded-lg font-medium hover:bg-purple-50 transition-colors"
              >
                免费咨询
              </Link>
              <a
                href="tel:16651205888"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-purple-700 transition-colors"
              >
                电话咨询
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">单招优势</h2>
            <p className="mt-4 text-lg text-gray-600">为什么越来越多学生选择高职单招</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">培训内容</h2>
            <p className="mt-4 text-lg text-gray-600">茗晟教育为您提供全方位的单招培训服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">单招流程</h2>
            <p className="mt-4 text-lg text-gray-600">了解高职单招的完整流程</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">常见问题</h2>
            <p className="mt-4 text-lg text-gray-600">关于高职单招，您可能想了解的问题</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/faq" className="text-purple-600 hover:text-purple-700 font-medium">
              查看更多常见问题 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">想通过单招提前锁定大学名额？</h2>
          <p className="text-purple-100 mb-8">立即咨询，获取专属备考方案</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-purple-700 rounded-lg font-medium hover:bg-purple-50 transition-colors"
          >
            免费获取备考方案
          </Link>
        </div>
      </section>
    </>
  );
}
