import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "春季高考培训 - 中职生升学通道 | 江苏春季高考辅导",
  description: "茗晟教育春季高考培训课程，面向江苏中职学生提供系统的春季高考辅导。涵盖文化课和专业技能培训，南京、苏州、无锡等地可报名，助力考取理想大学。",
  keywords: ["春季高考", "春季高考培训", "中职升学", "春考辅导", "江苏春季高考", "职教高考", "南京春季高考", "苏州春季高考培训"],
  alternates: {
    canonical: "https://www.mingsheng-edu.com/services/chunji-gaokao",
  },
};

const features = [
  {
    title: "文化课强化",
    description: "语文、数学、英语三科文化课系统复习与强化训练",
    icon: "📚",
  },
  {
    title: "专业技能培训",
    description: "根据报考专业提供针对性的技能课程培训",
    icon: "🔧",
  },
  {
    title: "小班精品教学",
    description: "20人小班授课，确保每位学员得到充分关注",
    icon: "👥",
  },
  {
    title: "模拟考试训练",
    description: "定期组织模拟考试，熟悉考试流程和题型",
    icon: "📝",
  },
];

const process = [
  { step: "01", title: "入学测评", description: "全面评估学员基础，制定个性化学习方案" },
  { step: "02", title: "基础巩固", description: "夯实文化课基础，建立知识体系" },
  { step: "03", title: "专业培训", description: "专业技能课程学习与实操训练" },
  { step: "04", title: "强化冲刺", description: "考前强化训练，查漏补缺" },
  { step: "05", title: "模拟实战", description: "全真模拟考试，适应考试节奏" },
  { step: "06", title: "志愿指导", description: "专业填报指导，助力理想院校" },
];

const faqs = [
  {
    question: "春季高考和夏季高考有什么区别？",
    answer: "春季高考主要面向中职学生，考试内容包括文化课和专业技能，难度相对较低；夏季高考面向普通高中学生，只考文化课。春季高考为中职生提供了另一条升入本科或专科院校的途径。",
  },
  {
    question: "春季高考可以考哪些大学？",
    answer: "春季高考可以报考省内参与春季招生的本科和专科院校。近年来，越来越多的本科院校开放春季高考招生名额，选择范围逐年扩大。",
  },
  {
    question: "文化课基础差能参加春季高考吗？",
    answer: "可以的。春季高考的文化课难度相对夏季高考较低，而且我们的培训课程会从基础开始，帮助学员逐步提高。同时，专业技能分数占比较大，勤加练习也能取得好成绩。",
  },
  {
    question: "什么时候开始准备春季高考最合适？",
    answer: "建议中职二年级下学期就开始准备。提前准备可以有更充裕的时间打好基础，进行系统复习。当然，中职三年级开始准备也来得及，但需要更加努力。",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "春季高考培训课程",
  description: "面向中职学生的春季高考系统培训，涵盖文化课和专业技能",
  provider: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    url: "https://www.mingsheng-edu.com",
  },
  educationalLevel: "高中",
  timeToComplete: "P1Y",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "blended",
    courseWorkload: "PT20H/week",
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
      name: "春季高考",
      item: "https://www.mingsheng-edu.com/services/chunji-gaokao",
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

export default function ChunJiGaoKaoPage() {
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-blue-200 hover:text-white">首页</Link></li>
                <li><span className="text-blue-300">/</span></li>
                <li><span className="text-white">春季高考</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">春季高考培训</h1>
            <p className="text-xl text-blue-100 mb-8">
              面向中职学生的春季高考培训课程，系统复习文化课与专业技能。专业师资团队，科学教学方法，助您考取理想大学。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                免费咨询
              </Link>
              <a
                href="tel:16651205888"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900">课程特色</h2>
            <p className="mt-4 text-lg text-gray-600">茗晟教育为您提供全方位的春季高考培训服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">培训流程</h2>
            <p className="mt-4 text-lg text-gray-600">科学规划，稳步提升</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item) => (
              <div key={item.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
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
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">常见问题</h2>
            <p className="mt-4 text-lg text-gray-600">关于春季高考，您可能想了解的问题</p>
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
            <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium">
              查看更多常见问题 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">想了解更多春季高考信息？</h2>
          <p className="text-blue-100 mb-8">立即咨询，获取专属备考方案</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            免费获取备考方案
          </Link>
        </div>
      </section>
    </>
  );
}
