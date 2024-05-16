import React from "react";
import styled from "styled-components";

function Projects() {
  return (
    <Wrapper id="projects-section">
      <Title className="text-gradient">My Latest Projects</Title>
      <ProjectsContainer>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
        <Project>
          <Top>
            <img src="/banner.jpg" alt="banner" />
          </Top>
          <Bottom>
            <h3>BookStore</h3>
            <span>BookStore website using MERN Stack</span>
          </Bottom>
        </Project>
      </ProjectsContainer>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  max-width: 1264px;
  width: 100%;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 4rem;
  @media (max-width: 1130px) {
    text-align: center;
  }
`;
const Title = styled.h3`
  font-size: 40px;
  font-weight: 800;
`;
const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;
  justify-content: space-between;
  @media (max-width: 1130px) {
    justify-content: center;
    column-gap: 4vw;
  }
`;
const Project = styled.div`
  width: 350px;
  display: flex;
  padding: 20px;
  border-radius: 20px;
  flex-direction: column;
  gap: 20px;
  background-color: #1c1c22;
`;
const Top = styled.div`
  height: 80%;
  overflow: hidden;
  img {
    overflow: hidden;

    width: 100%;
    object-fit: contain;
  }
`;
const Bottom = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  background-color: inherit;
  gap: 10px;
  h3 {
    font-size: 24px;
    background-color: inherit;
  }
  span {
    background-color: inherit;
  }
`;
export default Projects;
