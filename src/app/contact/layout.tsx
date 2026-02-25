import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 - 免费咨询学历提升",
  description: "茗晟教育联系方式：咨询热线16651205888，微信xu0082。地址：苏州市虎丘区新锐科创中心2号楼11层。提供春季高考、中考升学、高职单招、专转本等升学培训免费咨询服务。",
  keywords: ["茗晟教育联系方式", "学历提升咨询", "专升本咨询", "自考报名咨询", "免费学历咨询"],
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
