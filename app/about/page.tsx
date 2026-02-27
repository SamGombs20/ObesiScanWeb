'use client'
import { motion, Variants } from "motion/react";
import style from "../styles/about.module.css";

const verticalVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={verticalVariants}
      className={style.about_container}
    >
      <div className={style.title}>
        <p>
          About Obesi<span>Scan</span>
        </p>
      </div>
      <div className={style.content_container}>
        <div className={style.content}>
          <p className={style.content_text}>
            <strong>
              <span>Obesi</span>Scan
            </strong>{" "}
            is a platform focused on predicting obesity levels while also
            featuring comprehensive obesity blogs. We are committed to
            delivering precise, current insights into obesity, including its
            causes, associated health risks, and effective prevention methods.
            Our goal is to increase public understanding of obesity's
            multifaceted nature and encourage healthier living through
            educational articles and valuable resources. We firmly believe that
            informed education on obesity empowers people to take control of
            their health and make better lifestyle choices.
          </p>
        </div>
        <div className={style.components_main_container}>
          <div className={style.section_title}>
            <p className={`${style.components_title}`}>What it Contains</p>
          </div>
          <div className={style.components_container}>
            <div
              className={style.component}
              style={{ backgroundColor: "#8B4513" }}
            >
              <div
                className={style.component_img}
                style={{ backgroundImage: "url(/ml.webp)" }}
              ></div>
              <div className={style.component_content}>
                <p className={style.component_title}>Obesity Prediction Tool</p>
                <p>
                  Our advanced machine learning model predicts obesity levels
                  based on user input data. This data involves various factors
                  such as age, gender, height, weight, and lifestyle habits.
                  This helps users understand their risk factor and make
                  informed decisions
                </p>
              </div>
            </div>
            <div
              className={style.component}
              style={{ backgroundColor: "#006400" }}
            >
              <div
                className={style.component_img}
                style={{ backgroundImage: "url(/blog.webp)" }}
              ></div>
              <div className={style.component_content}>
                <p className={style.component_title}>ObesiScan Blog</p>
                <p>
                  Our blog features in-depth articles and expert insights on
                  obesity, covering topics like prevention strategies, health
                  impacts, and lifestyle improvements to combat obesity. The
                  blogs are designed to educate and empower readers to make
                  healthier choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
