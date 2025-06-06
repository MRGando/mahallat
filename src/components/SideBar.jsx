// components/RightSidebar.jsx
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Info,
  BookOpen,
  Ruler,
  Layers,
  Map,
  Heart,
  ClipboardCheck,
  GalleryHorizontal,
  Menu,
  X,
  Home,
  TrendingUp,
} from "lucide-react";

const menuItems = [
  { id: "home", label: "خانه", icon: <Home size={18} />, external: true },
  { id: "identify", label: "شناسنامه", icon: <Info size={18} /> },
  { id: "history", label: "تاریخچه", icon: <BookOpen size={18} /> },
  { id: "physical", label: "تحلیل کالبدی", icon: <Ruler size={18} /> },
  { id: "functional", label: "تحلیل عملکردی", icon: <Layers size={18} /> },
  { id: "accesses", label: "دسترسی‌ها", icon: <Map size={18} /> },
  {
    id: "priorities",
    label: "سرمایه گذاری",
    icon: <TrendingUp size={18} />,
  },
  { id: "quality", label: "کیفیت زندگی", icon: <Heart size={18} /> },
  { id: "summary", label: "جمع‌بندی", icon: <ClipboardCheck size={18} /> },
  {
    id: "images",
    label: "گالری تصاویر",
    icon: <GalleryHorizontal size={18} />,
  },
];

export default function SideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* دکمه منو برای موبایل */}
      <div className="md:hidden fixed top-4 right-4 z-[1001]">
        <button
          onClick={toggleMenu}
          className="p-4 rounded-full shadow-lg border bg-slate-100">
          {menuOpen ? <X size={28} /> : <Menu size={24} />}
        </button>
      </div>

      {/* سایدبار دسکتاپ */}
      <aside className="hidden md:flex fixed top-0 right-0 h-full w-56 bg-[var(--sideBar)] shadow-xl z-[1000] flex-col items-center py-6">
        <div className="mb-6">
          <img src="./images/logo.png" alt="لوگو" className="w-40 h-auto" />
        </div>
        <nav className="w-full px-4">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href="https://hominex.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row-reverse items-center justify-end gap-2 text-right text-neutral-100 hover:text-neutral-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition-all cursor-pointer">
                    <span className="text-lg font-medium">{item.label}</span>
                    <span>{item.icon}</span>
                  </a>
                ) : (
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    activeClass="bg--100 text-blue-600 font-bold"
                    className="flex flex-row-reverse items-center justify-end gap-2 text-right text-neutral-100 hover:text-neutral-900 hover:bg-gray-100 rounded-lg px-3 py-2 transition-all cursor-pointer">
                    <span className="text-lg font-medium">{item.label}</span>
                    <span>{item.icon}</span>
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* منوی موبایل کشویی */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 max-w-xs shadow-2xl transform transition-transform duration-300 ease-in-out z-[9999] bg-white md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex justify-between items-center p-2  border-b">
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-red-500">
            <X size={28} />
          </button>
          <img src="./images/logo.png" alt="لوگو" className="w-32 h-auto" />
        </div>
        <nav className="px-4 py-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                {item.external ? (
                  <a
                    href="https://hominex.ir"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="flex flex-row-reverse items-center justify-end gap-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all">
                    <span>{item.icon}</span>
                    <span className="text-xl font-medium">{item.label}</span>
                  </a>
                ) : (
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    onClick={closeMenu}
                    activeClass="bg-blue-100 text-blue-600 font-bold"
                    className="flex flex-row-reverse items-center justify-end gap-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all">
                    <span className="text-2xl font-modam">{item.label}</span>
                    <span>{item.icon}</span>
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
