import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  background: yellow;
  scroll-snap-align: start;
  display: flex;
`;


const Home = () => {
  return (
    <Container id="home" className='section'>home</Container>
  )
}

export default Home