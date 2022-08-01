import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background: blue;
  scroll-snap-align: start;
`;

const Projects = () => {
  return (
    <Container id='projects' className='section'>
      Projects
    </Container>
  )
}

export default Projects