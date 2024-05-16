import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { faqData } from "../data/faq";
import { motion, useInView } from "framer-motion";

const leftVariants = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const rightVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [show, setShow] = useState(0);
  const handleAnswer = (num) => {
    if (num === show) setShow(0);
    else setShow(num);
  };

  return (
    <Wrapper
      id="faq-section"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Left variants={leftVariants}>
        <TitleWrapper>
          <Title>Frequently Asked</Title>
          <Title className="text-gradient">Questions</Title>
        </TitleWrapper>

        <span>Answers to the burning questions in your mind.</span>
        <button className="gradient">Contact me</button>
      </Left>
      <Right variants={rightVariants}>
        <Question>
          <>
            {faqData.map((ele) => (
              <div
                className="outer"
                key={ele.id}
                onClick={() => handleAnswer(ele.id)}
              >
                <div className="inner">
                  <span>{ele.question}</span>
                  {show === ele.id ? <BsChevronUp /> : <BsChevronDown />}
                </div>
                <Ans className={show === ele.id ? "effect" : ""}>
                  {ele.answer}
                </Ans>
              </div>
            ))}
          </>
        </Question>
      </Right>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  max-width: 1264px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  font-family: "Kanit", sans-serif;
  @media (max-width: 800px) {
    flex-direction: column;
  }

  .effect {
    height: 100px;
  }
`;
const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    max-width: 80%;
    font-size: 20px;
    @media (max-width: 800px) {
      margin-bottom: 20px;
    }
    @media (max-width: 550px) {
      display: none;
    }
    
    }
  }

  button {
    text-transform: uppercase;

    font-weight: 500;
    padding: 0.8em;
    font-size: 18px;
    border-radius: 100000px;
    width: fit-content;
    border: 1px solid transparent;
    transition: all 0.2s ease;
    @media (max-width: 800px) {
      display: none;
    }
    :hover {
      cursor: pointer;
      background: transparent;
      border: 1px solid #f0f2f5;
    }
  }
`;
const Title = styled.h3`
  font-size: 40px;
  @media (max-width: 600px) {
    font-size: 6.5vw;
  }
`;

const TitleWrapper = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 1rem;
  }
`;

const Right = styled(motion.div)`
  flex: 1;
`;

const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 550px) {
    font-size: 18px;
  }
  .outer {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 6px 0;
    border-bottom: 1px solid #f0f2f5;

    :hover {
      cursor: pointer;
    }
  }
  .inner {
    /* padding: 16px 0; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`;

const Ans = styled.div`
  font-size: 20px;
  line-height: 1.7;
  overflow: hidden;
  height: 0;
  transition: all 0.2s ease;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
export default Faq;
