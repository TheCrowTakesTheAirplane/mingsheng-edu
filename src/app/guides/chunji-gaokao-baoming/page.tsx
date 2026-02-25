import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2025年江苏春季高考报名指南 - 报名条件、时间、流程详解",
  description: "2025年江苏春季高考报名全攻略：详解春季高考报名条件、报名时间、报名流程、考试科目、可报考院校等，帮助中职生顺利参加春季高考。",
  keywords: ["春季高考报名", "江苏春季高考", "春季高考报名条件", "春季高考报名时间", "中职升学", "春考"],
};

const steps = [
  {
    step: "01",
    title: "确认报名资格",
    description: "确认自己是否符合春季高考报名条件，包括学籍、户籍等要求。",
    details: [
      "具有江苏省中等职业学校学籍的应届毕业生",
      "具有江苏省户籍的往届中职毕业生",
      "遵守国家宪法和法律，品行端正",
      "身体健康，符合报考专业要求",
    ],
  },
  {
    step: "02",
    title: "选择报考类别",
    description: "根据自己所学专业和志向，选择对应的专业类别报考。",
    details: [
      "农林牧渔类、资源环境类、能源与新能源类",
      "土木水利类、加工制造类、交通运输类",
      "信息技术类、医药卫生类、休闲保健类",
      "财经商贸类、旅游服务类、文化艺术类等",
    ],
  },
  {
    step: "03",
    title: "网上报名填报",
    description: "在规定时间内登录江苏省教育考试院网站进行网上报名。",
    details: [
      "登录江苏省教育考试院官网",
      "填写个人基本信息、学历信息",
      "选择报考专业类别和志愿",
      "上传证件照片和相关材料",
    ],
  },
  {
    step: "04",
    title: "现场确认",
    description: "携带相关材料到指定地点进行现场确认和资格审核。",
    details: [
      "身份证原件及复印件",
      "学历证明材料",
      "报名表（网上打印）",
      "近期免冠照片",
    ],
  },
  {
    step: "05",
    title: "缴纳报名费",
    description: "完成现场确认后，按规定缴纳考试报名费用。",
    details: [
      "文化课考试费",
      "专业技能考试费",
      "可通过网上支付或现场缴费",
      "保留缴费凭证备查",
    ],
  },
  {
    step: "06",
    title: "打印准考证",
    description: "考前规定时间内登录系统打印准考证，核对考试信息。",
    details: [
      "核对姓名、身份证号等信息",
      "确认考试时间和地点",
      "准考证打印多份备用",
      "考试当天携带准考证和身份证",
    ],
  },
];

const timeline = [
  { time: "每年11月", event: "春季高考报名通知发布", icon: "📢" },
  { time: "11月中旬", event: "网上报名开始", icon: "💻" },
  { time: "11月下旬", event: "网上报名截止、现场确认", icon: "📝" },
  { time: "次年3月", event: "专业技能考试", icon: "🔧" },
  { time: "次年5月", event: "文化课考试（春季高考）", icon: "📚" },
  { time: "次年6月", event: "成绩查询、志愿填报", icon: "🎯" },
  { time: "次年7月", event: "录取结果公布", icon: "🎉" },
];

const faqs = [
  {
    question: "春季高考和夏季高考可以同时报名吗？",
    answer: "可以。符合条件的考生可以同时报名春季高考和夏季高考，增加升学机会。如果春季高考被录取，可以选择放弃入学资格继续参加夏季高考。",
  },
  {
    question: "春季高考可以考本科吗？",
    answer: "可以。越来越多的本科院校开放春季高考招生名额，成绩优秀的考生完全可以通过春季高考考取本科院校。具体招生院校每年会有所变化。",
  },
  {
    question: "往届中职毕业生可以参加春季高考吗？",
    answer: "可以。具有江苏省户籍的往届中等职业学校毕业生可以报名参加春季高考，但需要提供相应的学历证明材料。",
  },
  {
    question: "报名时选错专业类别怎么办？",
    answer: "在网上报名截止前可以修改报考信息。一旦现场确认完成，原则上不能更改报考类别，所以填报时一定要仔细核对。",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "2025年江苏春季高考报名指南",
  description: "2025年江苏春季高考报名全攻略，详解报名条件、时间、流程。",
  author: {
    "@type": "Organization",
    name: "茗晟教育",
  },
  publisher: {
    "@type": "Organization",
    name: "茗晟教育",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mingsheng-edu.com/images/logo.jpg",
    },
  },
  datePublished: "2024-09-01",
  dateModified: "2026-02-25",
  keywords: ["春季高考报名", "江苏春季高考", "中职升学", "春季高考条件", "春季高考流程"],
  articleSection: "升学指南",
  wordCount: 2000,
  inLanguage: "zh-CN",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mingsheng-edu.com/guides/chunji-gaokao-baoming",
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
      name: "升学指南",
      item: "https://www.mingsheng-edu.com/guides",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "春季高考报名指南",
      item: "https://www.mingsheng-edu.com/guides/chunji-gaokao-baoming",
    },
  ],
};

// HowTo 结构化数据
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何报名江苏春季高考",
  description: "江苏春季高考报名完整流程指南，从确认资格到打印准考证的详细步骤。",
  totalTime: "P30D",
  step: steps.map((s, index) => ({
    "@type": "HowToStep",
    name: s.title,
    text: s.description,
    position: index + 1,
  })),
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

export default function ChunjiGaokaoBaomingPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4" aria-label="面包屑导航">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-blue-200 hover:text-white">首页</Link></li>
              <li><span className="text-blue-300">/</span></li>
              <li><Link href="/guides" className="text-blue-200 hover:text-white">升学指南</Link></li>
              <li><span className="text-blue-300">/</span></li>
              <li><span className="text-white">春季高考报名指南</span></li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            2025年江苏春季高考报名指南
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl">
            春季高考是中职学生升入本专科院校的重要途径。本指南将详细介绍江苏春季高考的报名条件、报名时间、报名流程等关键信息，
            帮助你顺利完成报名，开启升学之路。
          </p>
        </div>
      </section>

      {/* 什么是春季高考 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">什么是春季高考？</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                <strong>春季高考</strong>（也称"职教高考"或"春考"）是面向中等职业学校学生的高考形式，
                与夏季高考并行，为中职生提供了另一条升入本专科院校的通道。
              </p>
              <p>春季高考的特点：</p>
              <ul>
                <li><strong>考试内容</strong>：文化课（语文、数学、英语）+ 专业技能</li>
                <li><strong>难度适中</strong>：文化课难度低于夏季高考，更注重专业技能</li>
                <li><strong>升学渠道</strong>：可报考省内本科和专科院校</li>
                <li><strong>学历含金量</strong>：与夏季高考录取学历完全相同</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 报名时间轴 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">报名与考试时间轴</h2>
            <p className="mt-4 text-gray-600">了解春季高考的关键时间节点</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.time} className={`relative flex items-center ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                    <div className={`w-full sm:w-5/12 ${index % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'} pl-12 sm:pl-0`}>
                      <div className="bg-white rounded-xl p-4 shadow-md">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="text-blue-600 font-bold mb-1">{item.time}</div>
                        <p className="text-gray-700">{item.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 报名流程 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">报名流程详解</h2>
            <p className="mt-4 text-gray-600">6个步骤完成春季高考报名</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((item) => (
              <article key={item.step} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-500">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 报名条件 */}
      <section className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">报名条件</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-4">符合以下条件之一可报名：</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">具有江苏省中等职业学校（含中专、职高、技校）学籍的应届毕业生</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">具有江苏省户籍的往届中等职业学校毕业生</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">遵守中华人民共和国宪法和法律</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-700">身体健康，符合相关专业报考要求</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">常见问题</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: {faq.question}</h3>
                <p className="text-gray-600">A: {faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            想了解更多春季高考信息？
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            茗晟教育专业春季高考培训，帮助中职生系统备考，提高升学成功率
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              免费咨询
            </Link>
            <Link
              href="/services/chunji-gaokao"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-colors"
            >
              了解培训课程
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
