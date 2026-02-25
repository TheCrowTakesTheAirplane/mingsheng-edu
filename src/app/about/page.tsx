import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 - 茗晟教育简介",
  description: "茗晟教育是江苏专业的升学培训机构，专注于春季高考、中考升学、高职单招、专转本培训服务。拥有多年办学经验，师资力量雄厚，已帮助数万名学员实现升学梦想。",
  keywords: ["茗晟教育", "升学培训机构", "教育培训", "江苏升学", "春季高考培训"],
};

const milestones = [
  { year: "2015", event: "茗晟教育正式成立，开启学历提升服务之路" },
  { year: "2017", event: "学员突破1000人，建立完善的教学服务体系" },
  { year: "2019", event: "拓展线上教育平台，服务覆盖全国" },
  { year: "2021", event: "累计服务学员突破5000人，通过率行业领先" },
  { year: "2023", event: "成为多所高校官方合作培训机构" },
  { year: "2025", event: "累计服务学员超过10000人，持续创新发展" },
];

const values = [
  {
    title: "专业专注",
    description: "专注学历提升领域，深耕细作，打造专业的教学服务体系。",
    icon: "🎯",
  },
  {
    title: "学员至上",
    description: "以学员需求为中心，提供个性化的学习方案和贴心的服务。",
    icon: "❤️",
  },
  {
    title: "诚信为本",
    description: "诚实守信，不夸大宣传，用实际效果赢得学员信任。",
    icon: "🤝",
  },
  {
    title: "持续创新",
    description: "紧跟教育发展趋势，不断优化教学方法和服务模式。",
    icon: "💡",
  },
];

const team = [
  {
    name: "资深教学团队",
    description: "拥有10年以上教学经验的专业讲师",
    count: "20+",
  },
  {
    name: "学业规划师",
    description: "为学员提供专业的升学规划指导",
    count: "15+",
  },
  {
    name: "教务服务团队",
    description: "全程跟踪学员学习进度，提供贴心服务",
    count: "30+",
  },
];

const honors = [
  "正规教育培训资质",
  "多所高校官方合作机构",
  "学员满意度98%以上",
  "行业优秀教育品牌",
];

// JSON-LD 结构化数据
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    description: "茗晟教育是江苏专业的升学培训机构，专注于春季高考、中考升学、高职单招、专转本培训服务。",
    foundingDate: "2015",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 65,
    },
    slogan: "专业学历提升，成就更好的你",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-gray-300 hover:text-white">首页</Link></li>
                <li><span className="text-gray-500">/</span></li>
                <li><span className="text-white">关于我们</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">关于茗晟教育</h1>
            <p className="text-xl text-gray-300">
              茗晟教育成立于2015年，是江苏专业的升学培训机构。
              我们致力于为广大学员提供春季高考、中考升学、高职单招、专转本等全方位的升学解决方案，
              帮助每一位有梦想的人实现升学目标。
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
              <p className="text-lg text-gray-600 mb-6">
                在当今社会，学历已经成为个人发展的重要基石。我们深知每一位学员对升学的渴望，
                也理解他们在升学道路上面临的困难和挑战。
              </p>
              <p className="text-lg text-gray-600 mb-6">
                茗晟教育的使命是为每一位有志于升学的人提供专业、高效、贴心的服务，
                让升学变得更加简单和可实现。
              </p>
              <div className="bg-blue-50 rounded-xl p-6">
                <p className="text-blue-800 font-medium text-lg">
                  "专业升学培训，成就更好的你"
                </p>
                <p className="text-blue-600 text-sm mt-2">— 茗晟教育理念</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600 mt-1">年办学经验</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">10000+</div>
                  <div className="text-gray-600 mt-1">服务学员</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600 mt-1">学员满意度</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600 mt-1">合作院校</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">核心价值观</h2>
            <p className="mt-4 text-lg text-gray-600">指引我们前行的信念</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center shadow-md">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">发展历程</h2>
            <p className="mt-4 text-lg text-gray-600">十年砥砺，一路前行</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="text-blue-600 font-bold text-xl mb-1">{milestone.year}</div>
                        <p className="text-gray-600 text-sm">{milestone.event}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50" id="team">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">师资团队</h2>
            <p className="mt-4 text-lg text-gray-600">专业的团队，专业的服务</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-8 text-center shadow-md">
                <div className="text-5xl font-bold text-blue-600 mb-4">{item.count}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors Section */}
      <section className="py-20 bg-white" id="honors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">资质荣誉</h2>
            <p className="mt-4 text-lg text-gray-600">专业认证，值得信赖</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {honors.map((honor) => (
              <div key={honor} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="text-gray-700 font-medium">{honor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Environment Section */}
      <section className="py-20 bg-gray-50" id="campus">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">校区环境</h2>
            <p className="mt-4 text-lg text-gray-600">现代化教学设施，舒适的学习生活环境</p>
          </div>
          
          {/* Teaching Environment */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3 text-blue-600">📚</span>
              教学环境
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/classroom-1.jpg"
                  alt="茗晟教育现代化教室"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">多媒体教室</p>
                  <p className="text-sm text-gray-200">配备先进教学设备</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/classroom-2.jpg"
                  alt="茗晟教育小班授课"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">小班教学</p>
                  <p className="text-sm text-gray-200">精品授课模式</p>
                </div>
              </div>
            </div>
          </div>

          {/* Living Environment */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3 text-green-600">🏠</span>
              生活环境
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/dormitory.jpg"
                  alt="茗晟教育学生宿舍"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">温馨宿舍</p>
                  <p className="text-sm text-gray-200">舒适住宿环境</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/activity-room-1.jpg"
                  alt="茗晟教育活动室"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">活动空间</p>
                  <p className="text-sm text-gray-200">劳逸结合</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/activity-room-2.jpg"
                  alt="茗晟教育休闲区"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">休闲区域</p>
                  <p className="text-sm text-gray-200">放松身心</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dining Environment */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mr-3 text-orange-600">🍽️</span>
              餐饮服务
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/canteen.jpg"
                  alt="茗晟教育食堂环境"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">干净食堂</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/food-1.jpg"
                  alt="茗晟教育营养餐"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">营养餐饮</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/food-2.jpg"
                  alt="茗晟教育丰富菜品"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">丰富菜品</p>
                </div>
              </div>
              <div className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/mingsheng-edu/images/food-3.jpg"
                  alt="茗晟教育美味佳肴"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">美味佳肴</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">加入茗晟教育，开启升学之旅</h2>
          <p className="text-blue-100 mb-8">专业的团队，贴心的服务，助您实现升学梦想</p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
          >
            立即咨询
          </Link>
        </div>
      </section>
    </>
  );
}
