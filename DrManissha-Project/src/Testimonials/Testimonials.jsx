import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations";
import styles from "./Testimonials.module.css";

const testimonialsData = [
  {
    id: 1,
    name: "Koko Shairani",
    image: "/Images/testimonial1.png",
    text: "“I’ve been using Manetraa for over 3 years and it’s been far more effective than other scalp oils I’ve tried. It’s improved my scalp health and even brought back the grounding Champi ritual from my childhood. My consultation with Manissha also helped me understand my health through the lens of my hair. Her knowledge and personalised support have been invaluable.”",
  },
  {
    id: 2,
    name: "Nadia Tareen",
    image: "/Images/testimonial2.png",
    text: "“I met Dr Manissha at one of her events and was instantly impressed by her knowledge and calming presence. After joining her programme, my health markers stabilised and I feel more energised and balanced. Her Manetra Scalp Oil is also beautiful—nourishing, lightweight, and now part of my self-care ritual.”",
  },
  {
    id: 3,
    name: "Kalpana",
    image: "/Images/testimonial3.png",
    text: "“I absolutely love the Manetera oil. The texture feels luxurious and absorbs beautifully without feeling heavy. After using it consistently for my thinning hair and bald spots, I’ve started noticing baby hairs growing back. My scalp feels healthier and it’s now a routine I genuinely look forward to.”",
  },
  {
    id: 4,
    name: "Suzanne Kianpour",
    image: "/Images/testimonial4.png",
    text: "“Manissha opened my eyes to how my hair health is deeply connected to the rest of my body. She truly practices what she teaches. I’m now far more conscious of my cycle, diet, and overall wellbeing—and the impact they have on my hair.”",
  },
  {
    id: 5,
    name: "Neha Gadroo",
    image: "/Images/testimonial5.png",
    text: "“Manetraa Ayurvedic hair oil has become my favourite Sunday ritual. Massaging it into my scalp helps me unwind while nourishing my hair. I’ve noticed a real improvement in my hair quality, and the baby hairs along my hairline are proof.”",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <span className={styles.kicker}>Testimonials</span>
          <h2 className={styles.title}>Client Stories</h2>
        </motion.div>

        <motion.div
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={styles.testimonialCard}
              variants={fadeIn}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className={styles.clientImage}
                />
              </div>
              <div className={styles.testimonialInfo}>
                <p className={styles.quoteText}>{testimonial.text}</p>
                <h3 className={styles.clientName}>- {testimonial.name}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Three-Month Transformation Section */}
        <section className={styles.transformationSection}>
          <div className={styles.container}>
            <motion.h3
              className={styles.transformationTitle}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeIn}
            >
              <span className={styles.kicker}>
                “Real Healing. Real Women. Real Results.”
              </span>
              Three‑Month Transformation
            </motion.h3>

            <motion.div
              className={styles.transformationImageWrapper}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeIn}
            >
              <img
                src="/Images/transformation.png"
                alt="Three Month Transformation"
                className={styles.transformationImage}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
