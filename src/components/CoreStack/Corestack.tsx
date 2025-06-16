import styles from "./CoreStack.module.scss";
import { motion } from "framer-motion";
import { ReactIcon } from "../../assets/icons/ReactIcon";
import { NextjsIcon } from "../../assets/icons/NextjsIcon";
import { ExpressIcon } from "../../assets/icons/ExpressIcon";
import { NestjsIcon } from "../../assets/icons/NestjsIcon";

const stack = [
  {
    name: "React",
    description: "Modern UI library for building interactive interfaces.",
    Icon: ReactIcon,
  },
  {
    name: "Next.js",
    description:
      "Fullstack React framework with SSR, SSG, API routes, routing.",
    Icon: NextjsIcon,
  },
  {
    name: "Express.js",
    description:
      "Fast and minimalist backend framework for building REST APIs.",
    Icon: ExpressIcon,
  },
  {
    name: "NestJS",
    description:
      "Scalable backend architecture for complex enterprise applications.",
    Icon: NestjsIcon,
  },
];

export const CoreStack = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>My Core Stack</h2>

      <div className={styles.stackGrid}>
        {stack.map((tech, i) => {
          const Icon = tech.Icon;
          return (
            <motion.div
              key={tech.name}
              className={styles.card}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.iconWrapper}>
                <Icon />
              </div>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
