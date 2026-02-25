import Link from "next/link";
import Image from "next/image";

// 培训项目数据
const services = [
  {
    title: "春季高考",
    description: "面向中职学生的春季高考培训，系统复习文化课与专业技能，助力考取理想大学。",
    href: "/services/chunji-gaokao",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "中考升学",
    description: "初中毕业生升学规划，提供普高、职高、技校等多种升学路径指导与培训。",
    href: "/services/zhongkao",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "高职单招",
    description: "江苏高职院校单独招生考试培训，针对性辅导，提高录取成功率。",
    href: "/services/gaozhi-danzhao",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "专转本",
    description: "江苏省专科转本科考试培训，助力在校专科生转入全日制本科院校。",
    href: "/services/zhuanzhuanben",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
];

// 优势数据
const advantages = [
  { title: "专业师资", description: "拥有多年教学经验的专业讲师团队", icon: "👨‍🏫" },
  { title: "通过率高", description: "历年学员通过率远超行业平均水平", icon: "📈" },
  { title: "小班教学", description: "精品小班授课，确保教学质量", icon: "👥" },
  { title: "全程服务", description: "从报名到升学，全程跟踪指导服务", icon: "🎯" },
];

// 数据统计
const stats = [
  { value: "10000+", label: "服务学员" },
  { value: "95%", label: "升学率" },
  { value: "10+", label: "办学年限" },
  { value: "50+", label: "合作院校" },
];

// 学员评价
const testimonials = [
  {
    content: "在茗晟教育的帮助下，我顺利通过了春季高考，考上了理想的大学。感谢老师们的耐心指导！",
    author: "张同学",
    role: "春季高考学员",
  },
  {
    content: "高职单招培训非常专业，老师针对考试重点进行辅导，让我信心满满地参加考试并成功录取。",
    author: "李同学",
    role: "高职单招学员",
  },
  {
    content: "专转本的老师们非常专业，针对性的辅导让我在考试中发挥出了最好的水平，成功转入理想的本科院校。",
    author: "王同学",
    role: "专转本学员",
  },
];

// VideoObject 结构化数据 - 集训营视频
const videoJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "茗晟教育集训营风采",
  description: "茗晟教育全封闭式集训营，专注学习，高效提分。展示集训营的教学环境、住宿条件和学习氛围。",
  thumbnailUrl: "https://www.mingsheng-edu.com/images/training-camp.jpg",
  uploadDate: "2024-01-01",
  duration: "PT2M30S",
  contentUrl: "https://www.mingsheng-edu.com/images/training-camp.mp4",
  embedUrl: "https://www.mingsheng-edu.com/images/training-camp.mp4",
  publisher: {
    "@type": "Organization",
    name: "茗晟教育",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mingsheng-edu.com/images/logo.jpg",
    },
  },
};

// Review 结构化数据 - 学员评价
const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "茗晟教育",
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "张同学" },
      reviewBody: "在茗晟教育的帮助下，我顺利通过了春季高考，考上了理想的大学。感谢老师们的耐心指导！",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "李同学" },
      reviewBody: "高职单招培训非常专业，老师针对考试重点进行辅导，让我信心满满地参加考试并成功录取。",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "王同学" },
      reviewBody: "专转本的老师们非常专业，针对性的辅导让我在考试中发挥出了最好的水平，成功转入理想的本科院校。",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
};

// SpecialAnnouncement 结构化数据 - 招生公告
const announcementJsonLd = {
  "@context": "https://schema.org",
  "@type": "SpecialAnnouncement",
  name: "2026年春季高考/专转本招生进行中",
  text: "茗晟教育2026年春季高考培训班、专转本培训班正在火热招生中！现在报名可享受早鸟优惠，名额有限，欢迎咨询。",
  datePosted: "2026-01-01",
  expires: "2026-06-30",
  category: "https://www.wikidata.org/wiki/Q5341295", // Educational Institution
  announcementLocation: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    address: {
      "@type": "PostalAddress",
      addressRegion: "江苏省",
      addressCountry: "CN",
    },
  },
  spatialCoverage: {
    "@type": "AdministrativeArea",
    name: "江苏省",
  },
};

// Event 结构化数据 - 招生活动
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "茗晟教育2026年春季招生咨询会",
  description: "免费升学咨询、入学测评、课程介绍，现场报名享优惠",
  startDate: "2026-02-01",
  endDate: "2026-05-31",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "茗晟教育校区",
    address: {
      "@type": "PostalAddress",
      addressRegion: "江苏省",
      addressCountry: "CN",
    },
  },
  organizer: {
    "@type": "EducationalOrganization",
    name: "茗晟教育",
    url: "https://www.mingsheng-edu.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "CNY",
    availability: "https://schema.org/InStock",
    validFrom: "2026-01-01",
    url: "https://www.mingsheng-edu.com/contact",
  },
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(announcementJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              茗晟教育
              <span className="block text-blue-200 mt-2">江苏专业升学培训，成就更好的你</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              专注升学培训服务10余年，提供春季高考、中考升学、高职单招、专转本等全方位升学解决方案。
              专业师资、高升学率、全程服务，助您轻松实现升学梦想。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
              >
                免费咨询
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services/chunji-gaokao"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                了解课程
              </Link>
            </div>
          </div>
        </div>
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">培训项目</h2>
            <p className="mt-4 text-lg text-gray-600">
              茗晟教育提供多种升学培训方案，满足不同学员的需求
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700">
                  了解详情
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">为什么选择茗晟教育</h2>
            <p className="mt-4 text-lg text-gray-600">
              我们用专业和用心，为每一位学员的升学之路保驾护航
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600 text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Video Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">集训营风采</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              全封闭式集训，专注学习，高效提分
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                poster="/images/training-camp.jpg"
              >
                <source src="/images/training-camp.mp4" type="video/mp4" />
                您的浏览器不支持视频播放
              </video>
            </div>
            <div className="mt-6 lg:mt-0">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">封闭式集训营</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">全日制封闭管理，排除外界干扰</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">名师全程授课，针对性辅导</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">舒适住宿环境，营养餐饮保障</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-600">科学作息安排，学习效率最大化</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-600 text-white rounded-lg text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors"
              >
                了解集训营详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Environment Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">校区环境</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
              现代化教学设施，舒适的学习生活环境
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/classroom-1.jpg"
                alt="茗晟教育教室环境"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">现代化教室</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">多媒体教学设备</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/classroom-2.jpg"
                alt="茗晟教育上课场景"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">小班授课</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">精品教学模式</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/dormitory.jpg"
                alt="茗晟教育住宿环境"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">舒适宿舍</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">温馨住宿环境</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/canteen.jpg"
                alt="茗晟教育食堂环境"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">干净食堂</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">营养餐饮保障</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/activity-room-1.jpg"
                alt="茗晟教育活动室"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">活动空间</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">劳逸结合</p>
              </div>
            </div>
            <div className="group relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/activity-room-2.jpg"
                alt="茗晟教育休闲区"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white">
                <p className="font-semibold text-sm sm:text-base">休闲区域</p>
                <p className="text-xs sm:text-sm text-gray-200 hidden sm:block">放松身心</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">学员评价</h2>
            <p className="mt-4 text-lg text-gray-600">
              听听他们怎么说
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            准备好开启升学之路了吗？
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            立即咨询，获取专属升学方案
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors"
            >
              立即咨询
            </Link>
            <a
              href="tel:16651205888"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
