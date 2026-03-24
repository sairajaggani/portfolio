import { motion } from "framer-motion";

const orbs = [
  { x: [-20, 25, -20], y: [-30, 18, -30], duration: 16, delay: 0 },
  { x: [15, -28, 15], y: [22, -20, 22], duration: 21, delay: 3 },
  { x: [-12, 18, -12], y: [28, -12, 28], duration: 25, delay: 7 },
  { x: [22, -14, 22], y: [-22, 28, -22], duration: 29, delay: 2 },
];

const AnimatedBackground = () => {
  return (
    <div className="animated-bg" aria-hidden="true">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`bg-orb bg-orb-${i + 1}`}
          animate={{ x: orb.x, y: orb.y }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
