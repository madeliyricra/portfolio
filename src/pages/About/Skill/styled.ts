import styled from "styled-components";

export const Container = styled.article`
padding: 15px;
width: 300px;
min-height: 150px;
border: 1px solid var(--blue-900);
border-radius: 10px;
ul{
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  li{
    width: 80px;
    text-align: center;
    p{
      font-weight: 600;
    }
  }
}
h4{
  font-size: 20px;
  text-align: center;
  padding: 0 0 15px 0;
}
svg{
  width: 30px;
  height: 30px;
  fill: var(--purple-200);
}
`