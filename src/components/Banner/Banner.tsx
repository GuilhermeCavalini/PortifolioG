import styled from "styled-components";
import foto from "./assets/WhatsApp Image 2025-02-03 at 15.30.23.jpeg";

const Section = styled.section`
  padding-bottom: 11.25rem;

  @media (max-width: 768px) {
    padding-bottom: 5rem;
  }
`;

const SobreBanner = styled.div`
  margin: 10rem auto 3rem;
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 3rem;
    padding-bottom: 2rem;
  }
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10rem 2.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h1 {
    font-weight: 500;
    font-family: var(--font-Bitter);
  }

  span {
    font-family: var(--font-Roboto);
    font-size: 4.2rem;
    font-weight: 500;
    display: block;
    color: var(--cor-primaria);

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--cor-secundaria);
    font-family: var(--font-Bitter);

    @media (max-width: 768px) {
      font-size: 1.2rem;
      text-align: center;
      width: 90%;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: var(--font-Bitter);
    font-size: 1rem;
    font-weight: 500;
    background-image: linear-gradient(
      90deg,
      rgba(130, 87, 230, 0.8) 0.2%,
      rgba(121, 48, 190, 0.648) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    padding: 1rem;
    color: #f9f9f9;
    text-decoration: none;
    border: none;
    transition: 0.3s;

    &:hover {
      font-size: 1.1rem;
      background-color: var(--cor-primaria);
    }

    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 0.8rem;
    }
  }
`;

const Profile = styled.div`
  img {
    cursor: pointer;
    transition: 0.2s;
    max-width: 100%;
    border-radius: 8rem;
    padding-top: 2rem;

    @media (max-width: 768px) {
      max-width: 80%;
      border-radius: 6rem;
    }
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 8rem;

  h2 {
    font-family: var(--font-Bitter);
    font-size: 3.2rem;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }
  }

  p {
    color: var(--cor-secundaria);
    font-family: var(--font-Crimson);
    font-size: 1.8rem;
    text-align: center;
    width: 80%;
    line-height: 150%;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      width: 90%;
    }
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

export const Sobre = () => {
  return (
    <Section id="sobre">
      <SobreBanner>
        <Banner>
          <Intro>
            <Title>
              <h1>
                Olá, me chamo <span>Guilherme Cavalini</span>
              </h1>
              <p>Desenvolvedor Front-End</p>
            </Title>
            <Actions>
              <a href="#contato">Entrar em contato</a>
            </Actions>
          </Intro>
          <Profile>
            <a
              href="https://github.com/GuilhermeCavalini"
              target="_blank"
              rel="noreferrer"
            >
              <img src={foto} alt="Guilherme Cavalini Lopes" />
            </a>
          </Profile>
        </Banner>
        <About>
          <h2>Sobre mim</h2>
          <p>
            Estudante de Engenharia de Software | Desenvolvimento Web,
            Atualmente cursando Engenharia de Software, sou apaixonado por
            tecnologia e desenvolvimento web. Tenho conhecimento em HTML, CSS e
            JavaScript e estou sempre buscando aprender novas tecnologias e
            aprimorar minhas habilidades, cursando cursinho de inglês avançado.
            Gosto de resolver problemas e criar soluções eficientes, seja por
            meio de projetos acadêmicos ou práticos. Meu objetivo é me
            especializar em desenvolvimento front-end e futuramente
            back-end/full-stack e contribuir para o crescimento de empresas
            inovadoras. Estou sempre aberto a novas oportunidades e conexões na
            área de tecnologia.
          </p>
          <LinhaSobre />
        </About>
      </SobreBanner>
    </Section>
  );
};
