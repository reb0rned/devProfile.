"use client";
import styles from "./Summary.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const summaryText = [
  "Motivated Fullstack Developer with a strong technical background",
  "I focus on clean, maintainable code",
  "Thoughtful features that solve real user problems",
  "Architectural mindset, aiming for performance and scalability",
];

export const Summary = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  return (
    <section ref={containerRef} className={styles.wrapper}>
      <div className={styles.progress}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className={styles.progressBar}
        />
      </div>

      <div className={styles.content}>
        {summaryText.map((text, i) => {
          const start = i / summaryText.length;
          const end = (i + 0.8) / summaryText.length;
          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const translateY = useTransform(
            scrollYProgress,
            [start, end],
            [50, 0]
          );
          const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

          return (
            <motion.div
              key={i}
              className={styles.slide}
              style={{ opacity, translateY, scale }}
            >
              <h1>{text}</h1>
            </motion.div>
          );
        })}

        <motion.div
          className={styles.finalSlide}
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
          }}
        >
          <div className={styles.allText}>
            {summaryText.map((text, i) => (
              <motion.h2
                key={i}
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0.7 + i * 0.05, 0.9 + i * 0.05],
                    [0, 1]
                  ),
                  y: useTransform(
                    scrollYProgress,
                    [0.7 + i * 0.05, 0.9 + i * 0.05],
                    [20, 0]
                  ),
                }}
              >
                {text}
              </motion.h2>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
