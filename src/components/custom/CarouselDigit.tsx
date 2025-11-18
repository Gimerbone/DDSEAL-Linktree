import { motion, AnimatePresence } from "framer-motion";

type CarouselDigitProps = {
  value: string;
  className?: string;
};

export function CarouselDigit({ value, className }: CarouselDigitProps) {
  return (
    <div
      className={`relative w-16 md:w-20 h-16 md:h-20 overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg shadow-md flex items-center justify-center ${className}`}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={value}
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-bold text-white select-none"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}