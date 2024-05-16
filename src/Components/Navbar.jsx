import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NavVariants = {
  initial: {
    y: -100,
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

function Navbar() {
  const [effect, setEffect] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (effect) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [effect]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setEffect(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setEffect((prev) => !prev);
  };

  return (
    <Wrapper initial="initial" animate="animate" variants={NavVariants}>
      <Left className="flex-center">
        <a href="#home-section">
          <img src="logo.png" alt="" className="logo" />
        </a>
        <nav>
          <ul className="flex-center">
            <a href="#home-section">Home</a>
            <a href="#skills-section">Skills</a>
            <a href="#projects-section">Projects</a>
            <a href="#contact-section">Contact</a>
            <a href="#faq-section">FAQ</a>
          </ul>
        </nav>
      </Left>
      <Right>
        <a href="#contact-section">
          <button>LET'S TALK</button>
        </a>
        <Hamburger onClick={handleToggle} effect={effect} ref={dropdownRef}>
          <div className={effect ? "line1" : ""}></div>
          <div className={effect ? "line2" : ""}></div>
          <div className={effect ? "line3" : ""}></div>
        </Hamburger>
        {
          <HamburgerMenu className={effect ? "showHamMenu" : ""} ref={menuRef}>
            <ul>
              <a href="#home-section" onClick={handleToggle}>
                Home
              </a>

              <a
                className="offset"
                href="#skills-section"
                onClick={handleToggle}
              >
                Skills
              </a>
              <a href="#projects-section" onClick={handleToggle}>
                Projects
              </a>
              <a href="#contact-section" onClick={handleToggle}>
                Contact
              </a>
              <a href="#faq-section" onClick={handleToggle}>
                FAQ
              </a>
            </ul>
          </HamburgerMenu>
        }
      </Right>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1264px;
  width: 100%;
  height: 80px;
  padding: 0 32px;
  z-index: 5;
  @media (max-width: 720px) {
    height: 70px;
    background-color: #161513;
    border-bottom: 1px solid white;
  }
  .line1 {
    transform: translate(0, 7.5px) rotate(45deg);
  }
  .line2 {
    opacity: 0;
  }
  .line3 {
    transform: translate(0, -7.5px) rotate(-45deg);
  }
  .showHamMenu {
    right: 0;
  }
`;
const Left = styled.div`
  gap: 40px;

  nav ul {
    gap: 24px;
    @media (max-width: 720px) {
      display: none;
    }

    a:hover {
      transition: all 0.2s ease;
      :hover {
        cursor: pointer;
        background: linear-gradient(to right, #ec008c, #fc6767);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;
const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: var(--white-primary);
    border-radius: 100000px;
    font-size: 16px;
    padding: 8px 16px;
    font-weight: bold;
    color: var(--black-primary);
    transition: all 0.2s ease;
    @media (max-width: 720px) {
      display: none;
    }
    :hover {
      cursor: pointer;
      color: var(--white-primary);
      background-color: transparent;
      border: 1px solid var(--white-primary);
    }
  }
`;
const Hamburger = styled.div`
  z-index: 10;
  display: none;
  height: 100%;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
  }
  div {
    transition: all 0.2s ease;
    height: 4px;
    width: 30px;
    background-color: white;
  }
`;
const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 720px) {
    display: block;
  }
  background-color: red;
  background: linear-gradient(90deg, #ec008c 0%, #fc6767 100%);

  position: fixed;
  top: 70px;
  bottom: 0;
  z-index: 10;
  width: 250px;
  right: -250px;
  transition: all 0.5s ease;
  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
  }
  a {
    font-size: 30px;
  }
`;
export default Navbar;
