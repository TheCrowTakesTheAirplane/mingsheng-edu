import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "常见问题 - 升学培训FAQ",
  description: "茗晟教育常见问题解答，涵盖春季高考、中考升学、高职单招、专转本等升学相关问题。了解报考条件、培训方式、费用等常见疑问。",
  keywords: ["升学问题", "春季高考FAQ", "高职单招问题", "专转本疑问", "中考升学咨询"],
};

const faqCategories = [
  {
    name: "通用问题",
    icon: "📋",
    faqs: [
      {
        question: "茗晟教育是正规的升学培训机构吗？",
        answer: "是的，茗晟教育是经过相关部门批准的正规教育培训机构，拥有合法的办学资质。我们专注于江苏地区的升学培训服务，与多所院校建立了合作关系，成立至今已帮助超过10000名学员成功升学。",
      },
      {
        question: "茗晟教育有哪些培训项目？",
        answer: "我们主要提供四大培训项目：1. 春季高考培训：面向中职学生的春考辅导；2. 中考升学服务：初中毕业生升学规划与指导；3. 高职单招培训：江苏高职院校单独招生考试培训；4. 专转本培训：江苏省专科转本科考试辅导。",
      },
      {
        question: "培训方式是怎样的？",
        answer: "我们提供灵活多样的培训方式：1. 全日制集训班：封闭式管理，适合需要全身心投入备考的学员；2. 周末班：适合在校学生，利用周末时间学习；3. 线上课程：支持随时随地学习，适合时间不固定的学员。可根据个人情况选择最适合的学习方式。",
      },
      {
        question: "费用大概是多少？可以分期吗？",
        answer: "不同培训项目费用有所差异，具体费用请咨询我们的顾问获取详细报价。我们提供灵活的付款方式，支持分期付款，减轻学员经济压力。还有早鸟优惠、团报优惠等活动，欢迎咨询了解。",
      },
    ],
  },
  {
    name: "春季高考",
    icon: "📚",
    faqs: [
      {
        question: "什么是春季高考？",
        answer: "春季高考是面向中职（中专、职高、技校）学生的高考形式，考试内容包括文化课和专业技能。通过春季高考可以升入本科或专科院校，获得的学历与夏季高考完全相同，是中职生升学的重要途径。",
      },
      {
        question: "春季高考难度大吗？",
        answer: "相比夏季高考，春季高考的文化课难度相对较低，更注重专业技能考核。通过系统的培训和准备，大多数学员都能取得理想成绩。我们的培训课程针对考试大纲设计，帮助学员高效备考。",
      },
      {
        question: "春季高考可以考本科吗？",
        answer: "可以的。越来越多的本科院校开放春季高考招生名额，成绩优秀的学员完全可以考取本科院校。具体招生院校和专业每年可能有所变化，我们会及时提供最新的招生信息和报考指导。",
      },
      {
        question: "什么时候开始准备春季高考？",
        answer: "建议中职二年级下学期就开始准备。提前准备可以有更充裕的时间打好基础。我们的培训班全年招生，根据不同备考阶段提供基础班、强化班、冲刺班等课程。",
      },
    ],
  },
  {
    name: "中考升学",
    icon: "🎓",
    faqs: [
      {
        question: "中考成绩不理想还有哪些出路？",
        answer: "中考成绩不理想不代表没有好的发展。可以选择职业高中走春季高考路线，同样可以考取本科院校；也可以选择技工学校学习专业技能。我们提供专业的升学规划服务，帮助学生找到最适合的发展道路。",
      },
      {
        question: "职高和普高有什么区别？",
        answer: "普高以文化课为主，目标是参加夏季高考升入大学；职高除文化课外还有专业技能课程，可以参加春季高考升学，也可以直接就业。两者各有优势，选择哪种要看学生的特点和未来规划。",
      },
      {
        question: "茗晟教育的中考升学服务包括什么？",
        answer: "我们的中考升学服务包括：升学规划咨询、文化课辅导、职业方向分析、志愿填报指导、学校对接等。帮助学生和家长全面了解各种升学路径，做出最适合的选择。",
      },
    ],
  },
  {
    name: "高职单招",
    icon: "✏️",
    faqs: [
      {
        question: "什么是高职单招？",
        answer: "高职单招是高职院校单独招生的简称，是高职院校在高考前自主命题、自行组织考试、自主录取的招生形式。被单招录取的学生与高考录取的学生享受同等待遇，学历证书完全相同。",
      },
      {
        question: "单招和高考哪个更好？",
        answer: "两者各有优势。单招在高考前进行，被录取后无需参加高考，可以提前锁定大学名额，竞争相对较小；高考的选择面更广。对于目标明确、希望减轻高考压力的学生，单招是很好的选择。未被单招录取的学生仍可参加高考。",
      },
      {
        question: "单招考试考什么？",
        answer: "单招考试由各高职院校自主命题，一般包括文化素质测试（语文、数学、英语）和职业技能测试（面试或专业技能考核）。我们的培训课程涵盖笔试和面试两个部分的辅导。",
      },
      {
        question: "哪些学生适合参加单招？",
        answer: "以下学生适合参加单招：1. 文化课成绩中等或偏下的学生；2. 有明确职业方向和专业兴趣的学生；3. 希望提前锁定大学名额、减轻高考压力的学生；4. 对某所高职院校有强烈意愿的学生。",
      },
    ],
  },
  {
    name: "专转本",
    icon: "📖",
    faqs: [
      {
        question: "江苏专转本和专升本有什么区别？",
        answer: "专转本是在校专科生通过考试转入本科院校继续全日制学习，毕业后获得全日制本科学历；专升本主要面向已毕业人员，获得的是成人教育本科学历。专转本学历含金量更高，是在校专科生获取全日制本科学历的最佳途径。",
      },
      {
        question: "专转本考试考哪些科目？",
        answer: "江苏专转本考试科目包括：大学英语（必考）、高等数学或大学语文（根据专业）、计算机基础，部分专业还需要考专业课。具体科目以当年考试大纲为准，我们的课程完全覆盖考试内容。",
      },
      {
        question: "什么时候开始准备专转本？",
        answer: "建议大二就开始准备。大二上学期了解政策、确定目标；大二下学期开始系统学习；大三上学期强化训练；大三下学期冲刺复习。越早准备，基础越扎实，通过率越高。",
      },
      {
        question: "专转本可以跨专业报考吗？",
        answer: "江苏专转本允许跨专业报考，但部分专业（如医学类）可能有限制。跨专业报考需要考虑自身基础和学习难度。建议提前了解目标院校的招生要求，我们可以提供专业的报考指导。",
      },
    ],
  },
  {
    name: "报名咨询",
    icon: "📝",
    faqs: [
      {
        question: "如何报名茗晟教育的课程？",
        answer: "报名流程非常简单：1. 通过电话、在线咨询或到访了解课程；2. 根据您的情况选择适合的培训方案；3. 签订培训协议，缴纳费用；4. 开始学习。我们支持线上报名和到校报名，全程有专业顾问指导。",
      },
      {
        question: "茗晟教育在哪里？可以参观校区吗？",
        answer: "欢迎到校参观！我们的校区环境优雅，教学设施完善，配有教室、宿舍、食堂等。到访前可以提前预约，我们会安排专人接待，为您详细介绍课程和服务。具体地址请拨打咨询电话获取。",
      },
      {
        question: "有试听课吗？",
        answer: "有的。我们提供免费试听课程，让学员在正式报名前体验我们的教学质量和教学环境。试听满意后再决定是否报名，没有任何强制消费。预约试听请联系我们的顾问。",
      },
    ],
  },
];

// JSON-LD FAQPage 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    }))
  ),
};

// HowTo 结构化数据 - 如何报名春季高考
const howToChunjiGaokaoJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何报名茗晟教育春季高考培训",
  description: "详细的春季高考培训报名流程，帮助中职学生了解如何开始春季高考备考之路。",
  totalTime: "PT30M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "CNY",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      name: "了解课程",
      text: "通过电话（16651205888）、在线咨询或到访校区了解春季高考培训课程内容、时间安排和费用。",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "评估测试",
      text: "参加入学评估测试，专业老师会根据您的基础情况，为您推荐合适的培训方案。",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "选择班型",
      text: "根据个人情况选择全日制集训班、周末班或线上课程等不同培训方式。",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "签订协议",
      text: "确认培训方案后，签订培训协议，明确双方权益。支持分期付款。",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "开始学习",
      text: "按照课程安排开始系统学习，享受全程跟踪指导服务，直至顺利参加春季高考。",
      position: 5,
    },
  ],
};

// HowTo 结构化数据 - 如何准备专转本考试
const howToZhuanzhuanbenJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "如何准备江苏专转本考试",
  description: "江苏专转本考试备考指南，帮助在校专科生了解如何高效准备专转本考试。",
  totalTime: "P6M",
  step: [
    {
      "@type": "HowToStep",
      name: "了解政策",
      text: "大二上学期开始了解江苏专转本政策，明确报考条件、考试科目和招生院校。",
      position: 1,
    },
    {
      "@type": "HowToStep",
      name: "确定目标",
      text: "根据自身专业和兴趣，确定目标院校和专业，了解往年录取分数线。",
      position: 2,
    },
    {
      "@type": "HowToStep",
      name: "制定计划",
      text: "大二下学期开始系统学习，制定详细的复习计划，包括英语、高数/语文、计算机等科目。",
      position: 3,
    },
    {
      "@type": "HowToStep",
      name: "参加培训",
      text: "选择专业的专转本培训机构，通过系统培训提高学习效率和考试技巧。",
      position: 4,
    },
    {
      "@type": "HowToStep",
      name: "模拟练习",
      text: "大三上学期进行强化训练和模拟考试，熟悉考试题型和时间分配。",
      position: 5,
    },
    {
      "@type": "HowToStep",
      name: "冲刺复习",
      text: "考前进行冲刺复习，查漏补缺，调整心态，以最佳状态参加考试。",
      position: 6,
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToChunjiGaokaoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToZhuanzhuanbenJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-purple-200 hover:text-white">首页</Link></li>
                <li><span className="text-purple-300">/</span></li>
                <li><span className="text-white">常见问题</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">常见问题</h1>
            <p className="text-xl text-purple-100">
              在这里，您可以找到关于升学培训的常见问题解答。如果没有找到您想了解的问题，欢迎随时联系我们。
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {faqCategories.map((category) => (
              <a
                key={category.name}
                href={`#${category.name}`}
                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition-colors"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.name} id={category.name} className="mb-16 scroll-mt-24">
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
              </div>
              <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white rounded-xl shadow-md overflow-hidden"
                  >
                    <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                      <h3 className="text-lg font-medium text-gray-900 pr-4">{faq.question}</h3>
                      <svg
                        className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">还有其他问题？</h2>
          <p className="text-gray-600 mb-8">
            如果您没有找到想要的答案，我们的专业顾问随时为您解答
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
            >
              在线咨询
            </Link>
            <a
              href="tel:16651205888"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              16651205888
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
