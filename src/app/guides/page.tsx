import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "升学指南 - 春季高考、专转本、高职单招全面解读",
  description: "茗晟教育升学指南专栏，提供春季高考报名指南、专转本与专升本区别、高职单招攻略等升学相关知识，帮助学生和家长了解各类升学途径。",
  keywords: ["升学指南", "春季高考攻略", "专转本指南", "高职单招攻略", "中考升学", "升学政策"],
};

const guides = [
  {
    title: "专转本和专升本的区别",
    description: "全面解析江苏专转本和专升本的区别：学历含金量、报考条件、考试内容等多维度对比，帮助专科生选择最适合的升本途径。",
    href: "/guides/zhuanzhuanben-vs-zhuanshengben",
    category: "专转本",
    icon: "🎓",
    popular: true,
  },
  {
    title: "2025年江苏春季高考报名指南",
    description: "详解江苏春季高考报名条件、报名时间、报名流程、考试科目等，帮助中职生顺利参加春季高考。",
    href: "/guides/chunji-gaokao-baoming",
    category: "春季高考",
    icon: "📝",
    popular: true,
  },
];

const categories = [
  { name: "春季高考", count: 1, icon: "📚" },
  { name: "专转本", count: 1, icon: "🎓" },
  { name: "高职单招", count: 0, icon: "✏️" },
  { name: "中考升学", count: 0, icon: "🏫" },
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "升学指南",
  description: "茗晟教育升学指南专栏，提供各类升学途径的详细解读",
  publisher: {
    "@type": "Organization",
    name: "茗晟教育",
  },
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4" aria-label="面包屑导航">
            <ol className="flex items-center space-x-2">
              <li><Link href="/" className="text-teal-200 hover:text-white">首页</Link></li>
              <li><span className="text-teal-300">/</span></li>
              <li><span className="text-white">升学指南</span></li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">升学指南</h1>
          <p className="text-lg sm:text-xl text-teal-100 max-w-3xl">
            了解各类升学途径的详细信息，包括春季高考、专转本、高职单招、中考升学等，
            帮助你做出最适合的升学选择。
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <span
                key={category.name}
                className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
                <span className="ml-2 text-sm text-gray-500">({category.count})</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Guides List */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">热门指南</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide) => (
              <article key={guide.href} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <Link href={guide.href} className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{guide.icon}</span>
                    {guide.popular && (
                      <span className="px-3 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full">
                        热门
                      </span>
                    )}
                  </div>
                  <span className="text-sm text-teal-600 font-medium">{guide.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3 hover:text-teal-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{guide.description}</p>
                  <div className="mt-4 text-teal-600 font-medium text-sm inline-flex items-center">
                    阅读全文
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">更多指南持续更新中</h2>
          <p className="text-gray-600 mb-8">
            我们会持续更新高职单招攻略、中考升学指南等内容，敬请关注
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            有问题？立即咨询
          </Link>
        </div>
      </section>
    </>
  );
}
