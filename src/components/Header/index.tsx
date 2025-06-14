import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(84, 19, 146, 0.85);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
  box-sizing: border-box;
`;

const Nav = styled.nav`
  display: flex;
  gap: 6rem;
`;

const NavLink = styled.a`
  color: #fff; /* letras brancas */
  font-weight: 500; /* peso médio */
  text-decoration: none;
  font-size: 1.3rem;
  transition: color 0.2s ease;

  &:hover {
    color: rgb(46, 8, 90);
  }
`;

export const Cabecalho: React.FC = () => {
  return (
    <Header>
      <Nav>
        <NavLink href="#sobre">Sobre mim</NavLink>
        <NavLink href="#habilidades">Habilidades</NavLink>
        <NavLink href="#projetos">Meus Projetos</NavLink>
        <NavLink href="#contato">Contato</NavLink>
      </Nav>
    </Header>
  );
};

export default Cabecalho;
