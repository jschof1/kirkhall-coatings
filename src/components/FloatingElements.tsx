import { motion } from "framer-motion";

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent rounded-full blur-3xl"
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[15%] w-16 h-16 border-2 border-gold/30 rotate-45"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [45, 50, 45],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-2/3 right-[10%] w-8 h-8 bg-gold/20 rotate-45"
      />
      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-[5%] w-4 h-4 bg-gold/40 rounded-full"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/4 left-[8%] w-6 h-6 border border-gold/40 rounded-full"
      />

      {/* Gold lines */}
      <motion.div
        animate={{
          scaleX: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-[20%] left-[20%] w-32 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
      />
      <motion.div
        animate={{
          scaleY: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] right-[25%] w-px h-24 bg-gradient-to-b from-transparent via-gold/30 to-transparent"
      />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] texture-noise-subtle" />
    </div>
  );
};

export default FloatingElements;
