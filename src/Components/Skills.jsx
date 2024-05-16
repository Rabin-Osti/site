import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import skills from "../data/skills";

const container = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const textVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};
function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Wrapper
      ref={ref}
      id="skills-section"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      <Title variants={textVariants}>What I do.</Title>
      <motion.div className="icons-wrapper">
        {skills.map((skill) => (
          <motion.div
            className="inner-wrapper"
            variants={item}
            key={skill.id}
            whileHover={{ scale: 1.1 }}
          >
            <img src={skill.path} alt={skill.id} />
            <Text>{skill.id}</Text>
          </motion.div>
        ))}
      </motion.div>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  max-width: 1264px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  .icons-wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;
    @media (max-width: 1100px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 770px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      gap: 24px;
    }
  }
  .inner-wrapper {
    background-color: #1c1c22;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    text-align: center;
    // font-weight: bold;
    font-weight: 600;
    letter-spacing: 1px;
    @media (max-width: 500px) {
      padding: 16px;
    }
    img {
      width: 100px;
      height: 100px;
      @media (max-width: 770px) {
        width: 80px;
        height: 80px;
      }
    }
  }
`;

const Title = styled(motion.h3)`
  font-size: 40px;
  text-align: left;
`;

const Text = styled.div`
  font-size: 16px;
`;
export default Skills;
