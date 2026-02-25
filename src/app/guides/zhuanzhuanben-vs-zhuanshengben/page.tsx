import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "专转本和专升本的区别 - 江苏专转本全面解读",
  description: "详细解析江苏专转本和专升本的区别：学历含金量、报考条件、考试内容、学习方式等全方位对比，帮助专科生选择最适合的升本途径。",
  keywords: ["专转本和专升本的区别", "江苏专转本", "专升本", "专科升本科", "全日制本科", "成人本科"],
};

const comparisonData = [
  {
    aspect: "学历性质",
    zhuanzhuanben: "全日制统招本科学历",
    zhuanshengben: "成人教育本科学历",
  },
  {
    aspect: "含金量",
    zhuanzhuanben: "与高考本科完全相同，属于第一学历",
    zhuanshengben: "属于第二学历，社会认可度相对较低",
  },
  {
    aspect: "报考对象",
    zhuanzhuanben: "在校专科应届毕业生",
    zhuanshengben: "专科毕业生或在职人员",
  },
  {
    aspect: "学习方式",
    zhuanzhuanben: "转入本科院校全日制学习2年",
    zhuanshengben: "业余学习、函授或网络教育",
  },
  {
    aspect: "考试难度",
    zhuanzhuanben: "统一考试，竞争相对激烈",
    zhuanshengben: "入学考试相对简单",
  },
  {
    aspect: "毕业证书",
    zhuanzhuanben: "普通高等教育本科毕业证书",
    zhuanshengben: "成人高等教育本科毕业证书",
  },
  {
    aspect: "报考机会",
    zhuanzhuanben: "仅应届毕业生可报考，机会唯一",
    zhuanshengben: "毕业后随时可报考",
  },
  {
    aspect: "考试科目",
    zhuanzhuanben: "英语、高数/语文、计算机、专业课",
    zhuanshengben: "政治、英语、专业基础课",
  },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "专转本和专升本的区别 - 江苏专转本全面解读",
  description: "详细解析江苏专转本和专升本的区别，帮助专科生选择最适合的升本途径。",
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
  datePublished: "2024-01-01",
  dateModified: "2026-02-25",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.mingsheng-edu.com/guides/zhuanzhuanben-vs-zhuanshengben",
  },
  keywords: ["专转本", "专升本", "专转本和专升本的区别", "江苏专转本", "全日制本科"],
  articleSection: "升学指南",
  wordCount: 1500,
  inLanguage: "zh-CN",
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
      name: "专转本和专升本的区别",
      item: "https://www.mingsheng-edu.com/guides/zhuanzhuanben-vs-zhuanshengben",
    },
  ],
};

// FAQPage 结构化数据
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "专转本和专升本的毕业证有什么区别？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "专转本毕业证标注'普通高等教育本科'，与高考本科完全相同；专升本毕业证标注'成人高等教育本科'或'自学考试本科'，一眼就能看出区别。",
      },
    },
    {
      "@type": "Question",
      name: "专转本难考吗？录取率多少？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "江苏专转本近年录取率约50%-60%，虽然竞争较激烈，但通过系统培训和认真备考，通过率可以大大提高。茗晟教育学员通过率高达90%以上。",
      },
    },
    {
      "@type": "Question",
      name: "什么时候开始准备专转本最好？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "建议大二就开始准备。大二了解政策、确定目标；大二下学期开始系统学习；大三强化冲刺。越早准备，基础越扎实。",
      },
    },
  ],
};

// 对比表格结构化数据
const comparisonJsonLd = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "江苏专转本与专升本对比",
};

export default function ZhuanzhuanbenVsZhuanshengbenPage() {
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
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4" aria-label="面包屑导航">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-indigo-200 hover:text-white">首页</Link></li>
              <li><span className="text-indigo-300">/</span></li>
              <li><Link href="/guides" className="text-indigo-200 hover:text-white">升学指南</Link></li>
              <li><span className="text-indigo-300">/</span></li>
              <li><span className="text-white">专转本和专升本的区别</span></li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            专转本和专升本的区别
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-3xl">
            很多专科生在考虑升本时都会问："专转本和专升本有什么区别？"
            本文将从学历含金量、报考条件、考试内容等多个维度，全面解析这两种升本方式的差异，帮助你做出最佳选择。
          </p>
        </div>
      </section>

      {/* 核心区别 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">核心区别：一句话总结</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-green-800 mb-3">专转本（推荐）</h3>
              <p className="text-green-700">
                <strong>在校专科生</strong>通过考试<strong>转入本科院校全日制学习</strong>，
                毕业后获得<strong className="text-green-900">全日制本科第一学历</strong>，
                与高考本科学历完全相同。
              </p>
              <div className="mt-4 text-sm text-green-600">
                ✓ 含金量最高 ✓ 机会唯一 ✓ 适合在校生
              </div>
            </div>
            <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-6 sm:p-8">
              <div className="text-3xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">专升本</h3>
              <p className="text-gray-700">
                <strong>专科毕业后</strong>通过成人高考、自考等方式获得<strong>成人教育本科学历</strong>，
                属于<strong className="text-gray-900">第二学历</strong>，
                主要面向在职人员。
              </p>
              <div className="mt-4 text-sm text-gray-500">
                ○ 含金量较低 ○ 随时可报 ○ 适合已毕业人员
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 详细对比表格 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">详细对比</h2>
            <p className="mt-4 text-gray-600">从8个维度全面对比专转本和专升本</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">对比项目</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">专转本</th>
                  <th className="px-4 sm:px-6 py-4 text-left font-semibold">专升本</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={item.aspect} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="px-4 sm:px-6 py-4 font-medium text-gray-900">{item.aspect}</td>
                    <td className="px-4 sm:px-6 py-4 text-green-700">{item.zhuanzhuanben}</td>
                    <td className="px-4 sm:px-6 py-4 text-gray-600">{item.zhuanshengben}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 为什么选择专转本 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">为什么强烈推荐专转本？</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-indigo-50 rounded-xl p-6">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">学历含金量最高</h3>
              <p className="text-gray-600">
                专转本获得的是全日制统招本科学历，属于第一学历，在考研、考公、求职时与高考本科完全等同，
                没有任何歧视。
              </p>
            </article>
            <article className="bg-indigo-50 rounded-xl p-6">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">机会唯一不可错过</h3>
              <p className="text-gray-600">
                专转本只能在专科应届毕业那年报考，错过就永远没有机会了。而专升本毕业后随时可以考，
                所以在校生一定要把握专转本机会。
              </p>
            </article>
            <article className="bg-indigo-50 rounded-xl p-6">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">就业竞争力强</h3>
              <p className="text-gray-600">
                很多企业招聘明确要求"全日制本科"学历，专转本学历完全符合要求，
                而成人专升本学历则可能被排除在外。
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">常见问题</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: 专转本和专升本的毕业证有什么区别？</h3>
              <p className="text-gray-600">
                专转本毕业证标注"普通高等教育本科"，与高考本科完全相同；专升本毕业证标注"成人高等教育本科"或"自学考试本科"，
                一眼就能看出区别。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: 专转本难考吗？录取率多少？</h3>
              <p className="text-gray-600">
                江苏专转本近年录取率约50%-60%，虽然竞争较激烈，但通过系统培训和认真备考，
                通过率可以大大提高。茗晟教育学员通过率高达90%以上。
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Q: 什么时候开始准备专转本最好？</h3>
              <p className="text-gray-600">
                建议大二就开始准备。大二了解政策、确定目标；大二下学期开始系统学习；大三强化冲刺。
                越早准备，基础越扎实。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-indigo-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            把握专转本机会，获取全日制本科学历
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            茗晟教育专注江苏专转本培训，专业师资、系统课程、高通过率，助你成功转入理想本科院校
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
            >
              免费咨询专转本
            </Link>
            <Link
              href="/services/zhuanzhuanben"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-indigo-700 transition-colors"
            >
              了解专转本课程
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
