import { motion } from "framer-motion";

const IndustrialAccents = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Textured overlay - brushed steel + noise */}
      <div className="absolute inset-0 texture-steel opacity-60" />
      <div className="absolute inset-0 texture-forge" />

      {/* Angular corner brackets - top left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-8 left-8"
      >
        <div className="w-24 h-24 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
          <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
        </div>
      </motion.div>

      {/* Angular corner brackets - bottom right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-24 right-8"
      >
        <div className="w-24 h-24 relative">
          <div className="absolute bottom-0 right-0 w-full h-1 bg-gold" />
          <div className="absolute bottom-0 right-0 w-1 h-full bg-gold" />
        </div>
      </motion.div>

      {/* Diagonal accent lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-gold/40 via-gold/10 to-transparent origin-left"
      />
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute top-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-gold/30 to-transparent origin-right"
      />

      {/* Geometric shapes - sharp triangles */}
      <motion.div
        animate={{ 
          y: [0, -8, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[15%]"
      >
        <div 
          className="w-0 h-0 border-l-[20px] border-l-transparent border-b-[35px] border-b-gold/30 border-r-[20px] border-r-transparent"
        />
      </motion.div>

      {/* Sharp rectangle accent */}
      <motion.div
        animate={{ 
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-2/3 right-[10%] w-8 h-16 border-2 border-gold/20"
      />

      {/* Horizontal accent bar - like a ruler or beam */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute top-1/2 left-[5%] h-1 bg-gold/40"
      />

      {/* Grid pattern overlay in corner */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 pattern-grid opacity-30" />

      {/* Diagonal stripes accent */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-1/3 left-[8%] w-20 h-20 pattern-diagonal"
      />

      {/* Heavy noise grain for industrial texture */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none texture-noise-strong" />
    </div>
  );
};

export default IndustrialAccents;
