import { FaReact } from "react-icons/fa";
import { IoIosGitMerge, IoLogoJavascript } from "react-icons/io";
import { SiCss3, SiTypescript } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import styled from "styled-components";

const Section = styled.section`
  #habilidades {
    padding: 0;
  }
`;

const Skills = styled.div`
  h2 {
    font-family: var(--font-Bitter);
    font-size: 2.5rem;
    margin-bottom: 10rem;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-bottom: 4rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 2rem;
    margin: 1rem;
  }
`;

const Box = styled.div`
  position: relative;
  text-align: center;
  background-color: var(--cor-primaria);
  width: 10rem;
  aspect-ratio: 1;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 2.5rem;
  cursor: pointer;
  align-items: center;
  padding-bottom: 2rem;
  margin-bottom: 8rem;

  p {
    font-family: var(--font-Crimson);
    font-size: 1.3rem;
    font-weight: 500;
    margin: 1rem 0 1rem 0;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  svg {
    width: 5.5rem;
    height: auto;
    border-radius: 13rem;

    @media (max-width: 768px) {
      width: 4rem;
    }
  }

  @media (max-width: 768px) {
    width: 7rem;
    margin-bottom: 4rem;
  }
`;

const LinhaSobre = styled.div`
  width: 80rem;
  height: 0.1rem;
  background-color: var(--cor-primaria);
  margin-top: 0.1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Habilidades = () => {
  return (
    <Section id="habilidades">
      <Skills className="skills">
        <h2>Habilidades</h2>
        <Container className="container">
          <Cards className="cards">
            <Box className="box">
              <p>HTML5</p>
              <TfiHtml5 size={55} color="#FF0000" />
            </Box>
            <Box className="box">
              <p>CSS3</p>
              <SiCss3 size={55} color="	#1E90FF" />
            </Box>
            <Box className="box">
              <p>JavaScript</p>
              <IoLogoJavascript size={55} color="Yellow" />
            </Box>
            <Box className="box">
              <p>React</p>
              <FaReact size={55} color="#61DAFB" />
            </Box>
            <Box className="box">
              <p>TypeScript</p>
              <SiTypescript size={55} color="#3178C6" />
            </Box>
            <Box className="box">
              <p>Git e Github</p>
              <IoIosGitMerge size={55} color="#F05032" />
            </Box>
          </Cards>
        </Container>
      </Skills>
      <LinhaSobre />
    </Section>
  );
};
