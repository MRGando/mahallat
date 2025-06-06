/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Details from "../config/details";

function Identify() {
  const imageAlt = `محله ${Details.alley.name} در سال ۲۰۲۵`;

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center mb-5">
        <div
          className=" bg-[var(--box)]
           rounded-2xl shadow-md shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-6 border border-[#b2c9c0] w-full col-span-2 md:col-span-1 break-words">
          <p className="text-[var(--color-medium-gray)] text-sm md:text-xs">
            نام محله
          </p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg md:text-lg truncate">
            {Details.alley.name}
          </h2>
        </div>

        <div
          className="  bg-[var(--box)]
           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-6 border border-[#b2c9c0  w-full col-span-1 break-words">
          <p className="text-[var(--color-medium-gray)] text-sm md:text-xs">
            مساحت محله
          </p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg md:text-lg">
            {Details.alley.area} هکتار
          </h2>
        </div>

        <div
          className=" bg-[var(--box)]
           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-6 border border-[#b2c9c0  w-full col-span-1 break-words">
          <p className="text-[var(--color-medium-gray)] text-sm md:text-xs">
            کد محله
          </p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg md:text-lg">
            {Details.alley.code}
          </h2>
        </div>

        <div
          className=" bg-[var(--box)]
           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-6 border border-[#b2c9c0 w-full col-span-1 break-words">
          <p className="text-[var(--color-medium-gray)] text-sm md:text-xs">
            جمعیت محله
          </p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg md:text-lg">
            {Details.alley.population} نفر
          </h2>
        </div>

        <div
          className=" bg-[var(--box)]
           rounded-2xl shadow-md  shadow-[rgba(0,0,0,0.05)] shadow-lg:shadow-[rgba(0,0,0,0.08)]
 p-6 border border-[#b2c9c0] w-full col-span-1 break-words">
          <p className="text-[var(--color-medium-gray)] text-sm md:text-xs">
            امتیاز محله
          </p>
          <h2 className="font-semibold text-[var(--color-dark-slate)] text-lg md:text-lg">
            {Details.alley.rate}
          </h2>
        </div>
      </div>

      <motion.img
        src={Details.introImageSrc}
        alt={imageAlt}
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="rounded-xl w-[100%] mx-auto object-cover shadow-md   "
      />
    </motion.section>
  );
}

export default Identify;
