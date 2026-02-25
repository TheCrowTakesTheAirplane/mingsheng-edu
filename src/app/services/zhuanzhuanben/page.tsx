import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "江苏专转本培训 - 全日制本科学历 | 专科升本科",
  description: "茗晟教育江苏专转本培训课程，专为在校专科学生设计。提供系统的专转本考试辅导，南京、苏州、无锡、常州等地均可报名，助力学员转入全日制本科院校。",
  keywords: ["专转本", "江苏专转本", "专转本考试", "全日制本科", "专科转本科", "专转本培训", "南京专转本", "苏州专转本培训", "专转本和专升本的区别"],
  alternates: {
    canonical: "https://www.mingsheng-edu.com/services/zhuanzhuanben",
  },
};

const features = [
  {
    title: "针对性课程",
    description: "根据专转本考试大纲设计课程，重点突破考试难点",
    icon: "📖",
  },
  {
    title: "全日制学历",
    description: "成功转本后获得全日制本科学历，含金量高",
    icon: "🎓",
  },
  {
    title: "名师授课",
    description: "多年专转本教学经验的老师授课，经验丰富",
    icon: "👨‍🏫",
  },
  {
    title: "高通过率",
    description: "科学的教学方法，历年通过率远超平均水平",
    icon: "📈",
  },
];

const subjects = [
  { name: "大学英语", description: "词汇、语法、阅读、写作全面提升" },
  { name: "高等数学", description: "系统讲解重难点，大量题目练习" },
  { name: "计算机基础", description: "理论知识+实操技能双管齐下" },
  { name: "专业课程", description: "根据报考专业提供针对性辅导" },
];

const timeline = [
  { month: "大二上学期", content: "开始了解专转本政策，确定目标院校和专业" },
  { month: "大二下学期", content: "系统学习基础课程，打牢知识基础" },
  { month: "大三上学期", content: "强化训练，模拟考试，查漏补缺" },
  { month: "大三下学期", content: "冲刺复习，调整状态，从容应考" },
];

const faqs = [
  {
    question: "专转本和专升本有什么区别？",
    answer: "专转本是在校专科生通过考试转入本科院校继续全日制学习，毕业后获得全日制本科学历；专升本主要面向已毕业人员，获得的是成人教育本科学历。专转本学历含金量更高。",
  },
  {
    question: "专转本考试考哪些科目？",
    answer: "一般考试科目包括大学英语、高等数学（或大学语文）、计算机基础，部分专业还需要考专业课。具体科目以当年考试大纲为准。",
  },
  {
    question: "什么时候开始准备专转本比较好？",
    answer: "建议从大二开始准备，留有充足的复习时间。大二打基础，大三强化冲刺，这样通过率会更高。当然，基础较好的同学大三开始也来得及。",
  },
  {
    question: "专转本可以跨专业报考吗？",
    answer: "大部分省份允许跨专业报考，但部分专业可能有限制。建议提前了解目标院校的招生要求，我们的老师可以提供专业的报考指导。",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "专转本培训课程",
  description: "专为在校专科学生设计的专转本考试辅导课程，助力转入全日制本科院校",
  provider: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    url: "https://www.mingsheng-edu.com",
  },
  educationalLevel: "本科",
  timeToComplete: "P2Y",
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
      name: "专转本",
      item: "https://www.mingsheng-edu.com/services/zhuanzhuanben",
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

export default function ZhuanZhuanBenPage() {
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
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-indigo-200 hover:text-white">首页</Link></li>
                <li><span className="text-indigo-300">/</span></li>
                <li><span className="text-white">专转本</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">专转本培训</h1>
            <p className="text-xl text-indigo-100 mb-8">
              专为在校专科学生打造的全日制本科直通车。系统的考试辅导，科学的学习方法，助您顺利转入理想本科院校。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                免费测评
              </Link>
              <a
                href="tel:16651205888"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900">为什么选择茗晟专转本</h2>
            <p className="mt-4 text-lg text-gray-600">专业的教学团队，科学的教学方法</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-indigo-50 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">课程设置</h2>
            <p className="mt-4 text-lg text-gray-600">覆盖专转本考试全部科目</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {subjects.map((subject) => (
              <div key={subject.name} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h3>
                <p className="text-gray-600">{subject.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">备考规划</h2>
            <p className="mt-4 text-lg text-gray-600">科学规划，稳步提升</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-indigo-200"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {index + 1}
                    </div>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-indigo-600 mb-1">{item.month}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">常见问题</h2>
            <p className="mt-4 text-lg text-gray-600">关于专转本，您可能想了解的问题</p>
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
            <Link href="/faq" className="text-indigo-600 hover:text-indigo-700 font-medium">
              查看更多常见问题 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">准备好冲刺全日制本科了吗？</h2>
          <p className="text-indigo-100 mb-8">立即咨询，获取专属备考方案</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
          >
            免费获取备考方案
          </Link>
        </div>
      </section>
    </>
  );
}
