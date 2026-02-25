import Link from 'next/link';
import Image from 'next/image';

const footerNavigation = {
  services: [
    { name: '春季高考', href: '/services/chunji-gaokao' },
    { name: '中考升学', href: '/services/zhongkao' },
    { name: '高职单招', href: '/services/gaozhi-danzhao' },
    { name: '专转本', href: '/services/zhuanzhuanben' },
  ],
  guides: [
    { name: '升学指南', href: '/guides' },
    { name: '专转本vs专升本', href: '/guides/zhuanzhuanben-vs-zhuanshengben' },
    { name: '春季高考报名', href: '/guides/chunji-gaokao-baoming' },
  ],
  company: [
    { name: '关于我们', href: '/about' },
    { name: '师资团队', href: '/about#team' },
    { name: '资质荣誉', href: '/about#honors' },
  ],
  support: [
    { name: '常见问题', href: '/faq' },
    { name: '联系我们', href: '/contact' },
    { name: '在线咨询', href: '/contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">页脚导航</h2>
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo.jpg"
                alt="茗晟教育 - 江苏专业升学培训机构"
                width={120}
                height={48}
                className="rounded-lg w-[80px] h-auto sm:w-[100px] md:w-[120px]"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              茗晟教育是江苏专业的升学培训机构，致力于为广大学员提供春季高考、中考升学、高职单招、专转本等全方位的升学解决方案。
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white p-2 -ml-2" aria-label="微信公众号">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.5 13.5a1 1 0 100-2 1 1 0 000 2zm7 0a1 1 0 100-2 1 1 0 000 2z"/>
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2a1 1 0 001.254 1.254l3.032-.892A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM4 12a8 8 0 1114.93 4.03.75.75 0 00-.08.65l.54 1.83-1.83-.54a.75.75 0 00-.65.08A8 8 0 014 12z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white p-2" aria-label="抖音号">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">培训项目</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm py-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">升学指南</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerNavigation.guides.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm py-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">关于茗晟</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm py-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-3 sm:mb-4">帮助支持</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm py-1 inline-block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-6">
              <p className="text-gray-400 text-sm">咨询热线</p>
              <a href="tel:16651205888" className="text-white text-base sm:text-lg font-semibold hover:text-blue-400">
                16651205888
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center text-center md:flex-row md:justify-between md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} 茗晟教育. All rights reserved.
            </p>
            <div className="mt-3 md:mt-0 flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                隐私政策
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-xs sm:text-sm">
                服务条款
              </Link>
              <span className="text-gray-400 text-xs sm:text-sm">
                苏ICP备XXXXXXXX号
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
