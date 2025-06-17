import styled from "styled-components";
import { MdOutlineMail } from "react-icons/md";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Section = styled.section`
  margin: 2.5rem 0 16rem 0;

  @media (max-width: 768px) {
    margin: 2rem 0 10rem 0;
  }
`;

const Contacts = styled.div`
  margin-top: 7rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-family: var(--font-Bitter);
  font-size: 4rem;
  font-weight: 600;
  margin-bottom: 7rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 10rem;
    height: 10rem;
  }

  a {
    padding-top: 1rem;
    text-decoration: none;
    border: none;
    color: var(--cor-secundaria);

    @media (max-width: 768px) {
      font-size: 1rem;
      padding-top: 0.5rem;
    }
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const Contato = () => {
  return (
    <Section id="contato">
      <Contacts>
        <Container>
          <Title>Contatos</Title>
          <Icons>
            <Icon>
              <a href="mailto:Gui.marciellopes@outlook.com">
                <Box>
                  <MdOutlineMail size={55} color="red" />
                </Box>
              </a>
              <a href="mailto:Gui.marciellopes@outlook.com">
                <p>E-mail</p>
              </a>
              <a href="mailto:Gui.marciellopes@outlook.com">
                Gui.marciellopes@outlook.com
              </a>
            </Icon>

            <Icon>
              <a href="https://api.whatsapp.com/send?phone=5543991079828">
                <Box>
                  <FaWhatsapp size={55} color="green" />
                </Box>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5543991079828">
                <p>Telefone</p>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5543991079828">
                (43) 99107-9828
              </a>
            </Icon>

            <Icon>
              <a href="https://www.linkedin.com/in/guilherme-cavalini-lopes">
                <Box>
                  <FaLinkedin size={55} color="blue" />
                </Box>
              </a>
              <a href="https://www.linkedin.com/in/guilherme-cavalini-lopes">
                <p>Linkedin</p>
              </a>
              <a href="https://www.linkedin.com/in/guilherme-cavalini-lopes">
                @guilherme-cavalini-lopes
              </a>
            </Icon>

            <Icon>
              <a href="https://github.com/GuilhermeCavalini">
                <Box>
                  <FaGithub size={55} color="black" />
                </Box>
              </a>
              <a href="https://github.com/GuilhermeCavalini">
                <p>Github</p>
              </a>
              <a href="https://github.com/GuilhermeCavalini">
                @GuilhermeCavalini
              </a>
            </Icon>
          </Icons>
        </Container>
      </Contacts>
    </Section>
  );
};
