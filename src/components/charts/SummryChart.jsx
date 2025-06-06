import React from "react";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Details from "../../config/details.json";
import { ShieldCheck, WarningOctagon, TrendUp, Skull } from "phosphor-react";

// ستون‌ها با آیکون حرفه‌ای
const columnTitles = [
  {
    key: "strengths",
    label: "نقاط قوت",
    bg: "bg-green-600",
    text: "text-white",
    icon: ShieldCheck,
  },
  {
    key: "weaknesses",
    label: "نقاط ضعف",
    bg: "bg-red-600",
    text: "text-white",
    icon: WarningOctagon,
  },
  {
    key: "opportunities",
    label: "فرصت‌ها",
    bg: "bg-blue-600",
    text: "text-white",
    icon: TrendUp,
  },
  {
    key: "threats",
    label: "تهدیدها",
    bg: "bg-yellow-500",
    text: "text-black",
    icon: Skull,
  },
];
const rows = Details.prosAndCons;

const cellColors = {
  strengths: "bg-green-100 border-green-300",
  weaknesses: "bg-red-100 border-red-300",
  opportunities: "bg-blue-100 border-blue-300",
  threats: "bg-yellow-100 border-yellow-300",
};

const TableSection = ({ columns, colCount }) => (
  <div className="overflow-auto text-base sm:text-xs md:text-base w-full">
    <div
      className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-4 p-3 font-modam text-center border-b`}>
      {columns.map(({ key, label, bg, text, icon: Icon }) => (
        <div
          key={key}
          className={`rounded py-2 px-1 flex items-center justify-center gap-2 ${bg} ${text}`}>
          <Icon size={18} weight="bold" />
          <span>{label}</span>
        </div>
      ))}
    </div>

    {rows.map((row, index) => (
      <motion.div
        key={index}
        className={`grid ${colCount === 4 ? "grid-cols-4" : "grid-cols-2"} gap-4 border-b py-3 px-2 w-full`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.4 }}>
        {columns.map(({ key }) => (
          <div
            key={key}
            className={`p-2 rounded ${row[key] == "." ? "opacity-0 select-none" : null} border ${cellColors[key]}`}>
            {row[key]}
          </div>
        ))}
      </motion.div>
    ))}
  </div>
);

// خروجی اصلی
export default function SWOTSummary() {
  return (
    <div className="space-y-4 w-full h-full p-6">
      <h2 className="w-full font-bold text-[var(--main)] text-center">
        جدول خلاصه تحلیل SWOT
      </h2>

      {/* دسکتاپ */}
      <div className="hidden md:block">
        <TableSection columns={columnTitles} colCount={4} />
      </div>

      {/* موبایل */}
      <div className="block md:hidden space-y-6">
        <TableSection columns={columnTitles.slice(0, 2)} colCount={2} />
        <TableSection columns={columnTitles.slice(2, 4)} colCount={2} />
      </div>
    </div>
  );
}
