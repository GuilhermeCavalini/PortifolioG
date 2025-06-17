import styled from "styled-components";

const Section = styled.section``;

const ProjetosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    padding-top: 4rem;
    font-family: var(--font-Bitter);
    font-size: 3rem;
    font-weight: 600;
    padding-bottom: 6rem;
    text-align: center;
  }

  h3 {
    font-family: var(--font-Crimson);
    font-size: 2rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    h2 {
      font-size: 2rem;
      padding-top: 4rem;
      padding-bottom: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }
  }
`;

const ListaProjetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2.5rem;

  ul {
    display: flex;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10rem;
  padding: 4rem;
  background-color: purple; // fundo roxo
  color: white; // letras brancas por padrão
  margin: 2rem;
  border-radius: 25rem;

  h3 {
    font-family: var(--font-Bitter);
    font-size: 1.5rem;
    padding: 0.5rem;
    font-weight: 500;
    color: white; // garante branco
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  p {
    font-family: var(--font-Crimson);
    font-size: 1rem;
    color: white; // antes estava lightcyan
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  a {
    font-family: var(--font-Crimson);
    font-size: 1rem;
    color: white; // antes var(--cor-secundaria)
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 10rem;
    gap: 1rem;
  }
`;

const AllProjects = styled.div`
  padding: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    font-family: var(--font-Bitter);
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 3rem;

    @media (max-width: 768px) {
      font-size: 2rem;
      padding-bottom: 2rem;
    }
  }

  a {
    font-family: var(--font-Bitter);
    font-size: 1.5rem;
    padding: 3rem;
    background-color: purple; // fundo roxo
    color: white; // texto branco
    border-radius: 5rem;
    text-decoration: none;

    &:hover {
      font-size: 1.8rem;
      padding: 3.3rem;
      transition: 0.2s;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 2.5rem;

      &:hover {
        font-size: 1.5rem;
        padding: 2.7rem;
      }
    }
  }
`;
const LinhaSobre = styled.div`
  width: 80rem;
  height: 0.1rem;
  background-color: var(--cor-primaria);
  margin: 0.1rem auto 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Projetos: React.FC = () => {
  return (
    <Section id="projetos">
      <ProjetosContainer>
        <h2>Projetos</h2>
        <h3>Destaques</h3>
        <ListaProjetos>
          <ul>
            <Card>
              <h3>PouPapp</h3>
              <p>
                Projeto onde faz registro de finanças, gastos e lucros, com um
                gráfico e cálculos de quanto de saldo há para cada dia do mês.
              </p>
              <a
                href="https://github.com/GuilhermeCavalini/Poupapp"
                target="_blank"
                rel="noreferrer"
              >
                Ver Código
              </a>
            </Card>

            <Card>
              <h3>Organo</h3>
              <p>
                Projeto no qual registra times com nome, cargo, imagem, data de
                entrada e o time pertencente.
              </p>
              <a
                href="https://github.com/GuilhermeCavalini/Organo-TSX"
                target="_blank"
                rel="noreferrer"
              >
                Ver Código
              </a>
            </Card>

            <Card>
              <h3>Tarefas</h3>
              <p>
                Projeto para organizar tarefas, definir tempo para execução e
                iniciar cronômetro.
              </p>
              <a
                href="https://github.com/GuilhermeCavalini/Tarefas"
                target="_blank"
                rel="noreferrer"
              >
                Ver Código
              </a>
            </Card>

            <Card>
              <h3>Aluroni</h3>
              <p>
                Projeto de restaurante com recomendações, cardápio, filtros,
                pratos e informações do restaurante.
              </p>
              <a
                href="https://github.com/GuilhermeCavalini/Aluroni"
                target="_blank"
                rel="noreferrer"
              >
                Ver Código
              </a>
            </Card>
          </ul>
        </ListaProjetos>
      </ProjetosContainer>

      <AllProjects>
        <h2>Todos os Projetos</h2>
        <a
          href="https://github.com/GuilhermeCavalini"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </AllProjects>
      <LinhaSobre />
    </Section>
  );
};
