'use client';

import Link from "next/link";
import { useState } from "react";

const contactInfo = [
  {
    title: "咨询热线",
    value: "16651205888",
    description: "周一至周日 9:00-21:00",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "微信咨询",
    value: "xu0082",
    description: "添加微信，获取一对一咨询",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8.5 13.5a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"/>
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2a1 1 0 001.254 1.254l3.032-.892A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1114.93 4.03.75.75 0 00-.08.65l.54 1.83-1.83-.54a.75.75 0 00-.65.08A8 8 0 014 12z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    title: "电子邮箱",
    value: "contact@mingsheng-edu.com",
    description: "工作日24小时内回复",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "校区地址",
    value: "苏州市虎丘区新锐科创中心2号楼11层",
    description: "欢迎到校参观咨询",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const services = [
  { value: "zhuanshengben", label: "专升本咨询" },
  { value: "zhuanzhuanben", label: "专转本咨询" },
  { value: "zikao", label: "自考咨询" },
  { value: "other", label: "其他咨询" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    education: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", phone: "", service: "", education: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "茗晟教育",
              telephone: "+86-16651205888",
              email: "contact@mingsheng-edu.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "新锐科创中心2号楼11层",
                addressLocality: "苏州市虎丘区",
                addressRegion: "江苏省",
                addressCountry: "CN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+86-16651205888",
                contactType: "customer service",
                availableLanguage: "Chinese",
                hoursAvailable: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "21:00",
                },
              },
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-700 text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm mb-4" aria-label="面包屑导航">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="text-orange-200 hover:text-white">首页</Link></li>
                <li><span className="text-orange-300">/</span></li>
                <li><span className="text-white">联系我们</span></li>
              </ol>
            </nav>
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">联系我们</h1>
            <p className="text-xl text-orange-100">
              无论您有任何关于学历提升的问题，我们的专业顾问都将竭诚为您解答。
              选择最方便的方式联系我们，开启您的学历提升之旅。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-orange-600 font-medium mb-1">{info.value}</p>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">在线咨询</h2>
              <p className="text-gray-600 mb-8">
                填写以下信息，我们的专业顾问将在第一时间与您联系，为您提供免费的学历提升咨询服务。
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">提交成功！</h3>
                  <p className="text-green-600">我们的顾问将在24小时内与您联系。</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-green-700 underline hover:no-underline"
                  >
                    继续提交
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        手机号 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="请输入您的手机号"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                        咨询项目 <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">请选择咨询项目</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        当前学历
                      </label>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      >
                        <option value="">请选择当前学历</option>
                        <option value="high-school">高中/中专</option>
                        <option value="college">大专在读</option>
                        <option value="college-graduated">大专毕业</option>
                        <option value="other">其他</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      留言内容
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="请描述您的需求或问题（选填）"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "提交中..." : "免费获取咨询"}
                  </button>

                  <p className="text-gray-500 text-sm text-center">
                    提交即表示您同意我们的服务条款和隐私政策
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">为什么选择茗晟教育</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">专业顾问一对一服务</h3>
                    <p className="text-gray-600 text-sm">根据您的实际情况，量身定制学历提升方案</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">全程跟踪指导</h3>
                    <p className="text-gray-600 text-sm">从报名到毕业，全程有专人跟进服务</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">正规资质保障</h3>
                    <p className="text-gray-600 text-sm">合法办学资质，学历国家承认，学信网可查</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">高通过率保障</h3>
                    <p className="text-gray-600 text-sm">优质课程+专业辅导，学员通过率行业领先</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-10 bg-orange-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">更快联系我们</h3>
                <div className="space-y-3">
                  <a
                    href="tel:16651205888"
                    className="flex items-center justify-center w-full py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    立即拨打咨询热线
                  </a>
                  <p className="text-center text-gray-500 text-sm">周一至周日 9:00-21:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
