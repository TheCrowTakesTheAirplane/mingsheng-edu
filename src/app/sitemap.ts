import { MetadataRoute } from 'next';

// 静态导出配置
export const dynamic = 'force-static';

// 动态生成 sitemap
// 当添加新页面时，只需在此数组中添加对应的URL即可
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.mingsheng-edu.com';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 格式

  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // 服务页面
  const servicePages = [
    'chunji-gaokao',
    'zhongkao',
    'gaozhi-danzhao',
    'zhuanzhuanben',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // 升学指南页面
  const guidePages = [
    {
      url: `${baseUrl}/guides`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/zhuanzhuanben-vs-zhuanshengben`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/chunji-gaokao-baoming`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  return [...staticPages, ...servicePages, ...guidePages];
}
