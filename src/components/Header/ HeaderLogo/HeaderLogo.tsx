import { motion } from "framer-motion";

const text = "devProfile";

export const HeaderLogo = () => {
  return (
    <div className="header__logo" style={{ display: "flex", gap: "2" }}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          style={{
            cursor: "pointer",
            fontWeight: "900",
            background: "transparent",
          }}
          whileHover={{
            color: "aqua",
            scale: 1.2,
            transition: { type: "spring", stiffness: 300 },
          }}
          initial={{ color: "#ffff" }}
          animate={{ color: "#ffff" }}
        >
          {char}
        </motion.span>
      ))}
      <span style={{ color: "aqua" }}>.</span>
    </div>
  );
};
