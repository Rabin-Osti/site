import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const footerVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Wrapper
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={footerVariants}
    >
      <Left>
        <a href="#home-section">
          <img src="logo.png" alt="" className="logo" />
        </a>
      </Left>
      <Right>
        <ul>
          <a href="#home-section" onClick={() => setEffect((prev) => !prev)}>
            Home
          </a>
          <a href="#skills-section" onClick={() => setEffect((prev) => !prev)}>
            Skills
          </a>
          <a
            href="#projects-section"
            onClick={() => setEffect((prev) => !prev)}
          >
            Projects
          </a>
          <a href="#contact-section" onClick={() => setEffect((prev) => !prev)}>
            Contact
          </a>
          <a href="#faq-section" onClick={() => setEffect((prev) => !prev)}>
            FAQ
          </a>
        </ul>
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  max-width: 1264px;
  width: 100%;
  z-index: 2;

  border-top: 1px solid #f0f2f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 20px 32px;
`;
const Left = styled.div``;
const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  @media (max-width: 450px) {
    font-size: 7vw;
  }
`;
const Right = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    grid-row: 10px;
  }
`;
export default Footer;
