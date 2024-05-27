import React, { useRef, useState } from "react";
import styled from "styled-components";
import { MdEmail, MdPhone } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion, useInView } from "framer-motion";

const leftVariants = {
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

const rightVariants = {
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Contact() {
  const form = useRef();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [disable, setDisable] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setDisable(true);
    emailjs
      .sendForm(
        "service_rvugcgr",
        "template_lumw5oq",
        form.current,
        "RSMy5haLqa8wgQ3tn"
      )
      .then(
        (result) => {
          setError(false);
          setSuccess(true);
          setLoading(false);
          form.current.reset();
          setDisable(false);
        },
        (error) => {
          setSuccess(false);
          setError(true);
          setLoading(false);
          setDisable(false);
        }
      );
  };

  return (
    <Wrapper
      id="contact-section"
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <Left variants={leftVariants}>
        <Title className="text-gradient">Get in touch</Title>
        <p>
          Have a project in mind? Reach out through the form and I'll get back
          to you within 12 hours.
        </p>
        <div className="icon-text">
          <MdEmail />
          <span>rabinosti.dev@gmail.com</span>
        </div>
        <div className="icon-text">
          <MdPhone />
          <span>+977-9866400999</span>
        </div>
        <div className="icon-text">
          <motion.div variants={item} whileHover={{ scale: 1.2 }}>
            <a
              href="https://www.linkedin.com/in/rabinosti/"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoLinkedin size={30} />
            </a>
          </motion.div>
          <motion.div variants={item} whileHover={{ scale: 1.2 }}>
            <a
              href="https://github.com/rabin-osti"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubSquare size={30} />
            </a>
          </motion.div>
        </div>
      </Left>
      <Right ref={form} onSubmit={sendEmail} variants={rightVariants}>
        <div>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            id="name"
            name="user_name"
            required
          />
        </div>
        <div>
          <label htmlFor="email">Your E-mail</label>
          <input
            type="text"
            placeholder="Enter your e-mail"
            id="email"
            name="user_email"
            required
          />
        </div>
        <div>
          <label htmlFor="price">Your Budget</label>
          <input
            type="text"
            placeholder="$100 - $1K"
            id="price"
            required
            name="user_budget"
          />
        </div>
        <div>
          <label htmlFor="des">What are you looking for?</label>
          <textarea
            id="des"
            cols="30"
            rows="10"
            required
            name="message"
          ></textarea>
        </div>

        <button className="gradient grad-btn" disabled={disable}>
          {loading ? "SENDING..." : "Send Message"}
        </button>
        {success && (
          <Message>Email received. We will follow up with you shortly.</Message>
        )}
        {error && (
          <Message>
            Your message couldn't be delivered. Please try again later.
          </Message>
        )}
      </Right>
    </Wrapper>
  );
}
const Wrapper = styled(motion.div)`
  max-width: 1264px;
  width: 100%;
  z-index: 2;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 32px;
  }

  button {
    color: var(--white-primary);
    font-weight: 500;
    padding: 0.8em;
    font-size: 18px;
    border-radius: 100000px;
    transition: all 0.2s ease;

    @media (max-width: 560px) {
      font-size: 12px;
    }
  }
`;
const Message = styled.div`
  font-size: 22px;
  animation: blink 1s linear;
  line-height: 1.5;
  @keyframes blink {
    to {
      opacity: 0;
    }
  }
`;
const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;

  gap: 20px;
  .icon-text {
    display: flex;
    align-items: center;
    font-size: 18px;

    gap: 10px;
    @media (max-width: 850px) {
      display: none;
    }
  }
  p {
    width: 60%;
    line-height: 1.6;
    font-size: 20px;
    text-align: justify;
    text-justify: inter-word;
    @media (max-width: 550px) {
      width: 90%;
    }
  }
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
`;
const Right = styled(motion.form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width:; 100%;
  overflow: hidden;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  input,
  textarea {
    border: none;
    outline: none;
    background-color: #1c1c22;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
  }

  textarea {
    resize: none;
  }
  .gradient {
    font-weight: 500;
    padding: 0.8em;
    font-size: 18px;
    border-radius: 100000px;
    width: fit-content;
    border: 1px solid transparent;
    transition: all 0.2s ease;

    @media (max-width: 460px) {
      font-size: 16px;
    }

    :hover {
      cursor: pointer;
      background: transparent;
      border: 1px solid #f0f2f5;
    }
  }
`;

export default Contact;
