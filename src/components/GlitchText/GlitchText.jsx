import { motion } from 'framer-motion';
import styles from './GlitchText.module.css';

const GlitchText = ({ text }) => {
    return (
      <span className={styles.glitch}>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: Math.random() * 2 + 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

export default GlitchText;