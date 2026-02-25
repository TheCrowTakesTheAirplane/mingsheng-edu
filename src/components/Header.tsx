'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const navigation = [
  { name: '首页', href: '/' },
  {
    name: '培训项目',
    href: '/services',
    children: [
      { name: '春季高考', href: '/services/chunji-gaokao' },
      { name: '中考升学', href: '/services/zhongkao' },
      { name: '高职单招', href: '/services/gaozhi-danzhao' },
      { name: '专转本', href: '/services/zhuanzhuanben' },
    ],
  },
  {
    name: '升学指南',
    href: '/guides',
    children: [
      { name: '专转本vs专升本', href: '/guides/zhuanzhuanben-vs-zhuanshengben' },
      { name: '春季高考报名', href: '/guides/chunji-gaokao-baoming' },
    ],
  },
  { name: '关于我们', href: '/about' },
  { name: '常见问题', href: '/faq' },
  { name: '联系我们', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="主导航">
        <div className="flex h-16 justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="茗晟教育 - 江苏专业升学培训机构"
                width={120}
                height={48}
                className="rounded-lg w-[80px] h-auto sm:w-[100px] md:w-[120px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div
                    className="group"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium inline-flex items-center">
                      {item.name}
                      <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute left-0 mt-0 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              免费咨询
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="打开菜单"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-gray-700">{item.name}</div>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block pl-6 py-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 px-3">
              <Link
                href="/contact"
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                免费咨询
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
