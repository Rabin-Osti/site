import React, { useState, useRef } from "react";
import styled from "styled-components";
import { projectList } from "../data/project";
import { motion, useInView } from "framer-motion";

const container = {
  initial: { opacity: 1, scale: 1 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
  },
};
const textVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
};

function Projects() {
  const [visible, setVisible] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Wrapper
      id="projects-section"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Title className="text-gradient" variants={textVariants}>
        My Latest Projects
      </Title>
      <ProjectsContainer variants={container}>
        {projectList.map((ind, index) => (
          <Project
            variants={item}
            key={index}
            onMouseEnter={() => setVisible(index)}
            onMouseLeave={() => setVisible(false)}
            whileHover={{ scale: 1.05 }}
          >
            <Top>
              <img
                src={ind.image}
                alt="banner"
                style={{ objectFit: ind.imgStyle ? ind.imgStyle : "contain" }}
              />
              <Overlay className={visible === index ? "visible" : ""}>
                <button>
                  <a
                    href={ind.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gradient"
                  >
                    Live Site
                  </a>
                </button>
              </Overlay>
            </Top>
            <Bottom>
              <h3>{ind.title}</h3>
              <span>{ind.des}</span>
            </Bottom>
          </Project>
        ))}
      </ProjectsContainer>
    </Wrapper>
  );
}
const Overlay = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  overflow: hidden;
  background: #e6f0ff;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  button {
    padding: 0.4em 0.8em;
    background-color: white;
    border: 1px solid lightcoral;
    border-radius: 4px;
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.05);
    }
    a {
      color: blue;
    }
  }
`;
const Wrapper = styled(motion.div)`
  .visible {
    opacity: 1;
  }

  max-width: 1264px;
  width: 100%;
  z-index: 2;

  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 4rem;
  @media (max-width: 1130px) {
    text-align: center;
  }
`;
const Title = styled(motion.h3)`
  font-size: 40px;
  font-weight: 800;
`;

const ProjectsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  justify-content: space-between;
  @media (max-width: 1130px) {
    justify-content: center;
    column-gap: 4vw;
  }
`;
const Project = styled(motion.div)`
  width: 350px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;
  gap: 8px;
  background-color: #111338;

  overflow: hidden;
`;
const Top = styled.div`
  height: 250px;
  overflow: hidden;
  position: relative;
  img {
    // object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const Bottom = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
  h3 {
    font-size: 24px;
    background-color: inherit;
    color: white;
  }
  span {
    background-color: inherit;
  }
  line-height: 1.5;
`;
export default Projects;
