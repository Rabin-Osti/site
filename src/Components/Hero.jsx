import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";

const textVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const ImageVariants = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Wrapper id="home-section">
      <Left
        ref={ref}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={textVariants}
      >
        <h2 className="text-gradient" variants={textVariants}>
          Hello, I'm Rabin
        </h2>
        <h2 variants={textVariants}>Full Stack Developer</h2>
        <h2 variants={textVariants}>from Nepal</h2>
        <p variants={textVariants}>
          I am a highly motivated and skilled Full Stack JavaScript Developer
          with a passion for creating innovative web solutions. My expertise
          spans from crafting captivating front-end interfaces to architecting
          robust back-end systems.
        </p>
        <div>
          <a href={"./resume.pdf"} download={"resume.pdf"}>
            <button className="gradient grad-btn">Download CV</button>
          </a>
        </div>
      </Left>
      <Right
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        variants={ImageVariants}
      >
        <img src="profile.png" alt="profile" className="loading-effect" />
      </Right>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  max-width: 1264px;
  padding: 0 32px;
  position: relative;
  top: -20px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;
  @media (max-width: 450px) {
    padding-right: 16px;
  }
  button:hover {
    cursor: pointer;
  }

  .light-btn {
    border: 1px solid var(--white-primary);
    background-color: #161513;
    :hover {
      border: 1px solid #161513;

      /* background: rgb(131, 58, 180); */
      background: linear-gradient(90deg, #ec008c 0%, #fc6767 100%);
    }
    @media (max-width: 370px) {
      display: none;
    }
  }
  .grad-btn {
    border: 1px solid #161513;

    :hover {
      cursor: pointer;
      background: transparent;
      border: 1px solid var(--white-primary);
    }
  }
`;
const Left = styled(motion.div)`
  flex: 3;

  margin: auto 0;
  h2 {
    font-size: 48px;
    font-weight: 800;
    line-height: 1.1;
    white-space: nowrap;

    @media (max-width: 550px) {
      font-size: 8.5vw;
    }
  }
  p {
    margin: 20px 0;
    line-height: 1.6;
    font-size: 18px;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 985px) {
      max-width: 70%;
    }

    @media (max-width: 700px) {
      max-width: 90%;
    }
  }
  button {
    color: var(--white-primary);
    font-weight: 500;
    padding: 0.8em;
    font-size: 18px;
    border-radius: 100000px;
    transition: all 0.2s ease;

    @media (max-width: 560px) {
      font-size: 16px;
    }
  }
  div {
    display: flex;
    gap: 16px;
  }
  @media (max-width: 985px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      text-align: center;
      font-size: 22px;
    }
  }
  @media (max-width: 700px) {
    p {
      font-size: 18px;
    }
  }
  @media (max-width: 450px) {
    align-items: start;
    p {
      min-width: 100%;
      text-align: left;
    }
  }
`;
const Right = styled(motion.div)`
  flex: 4;
  position: relative;
  display: flex;

  @keyframes move {
    to {
      transform: translate(-20px, -20px);
    }
  }
  img {
    position: absolute;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    animation: move 2s infinite ease alternate;
  }
  @media (max-width: 1200px) {
    width: 40%;
    height: auto;
  }
  @media (max-width: 985px) {
    display: none;
  }
`;
export default Hero;
