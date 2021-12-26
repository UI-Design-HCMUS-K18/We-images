import styled from 'styled-components';

export const Box = styled.div`
  padding: 15px 60px;
  background: black;
  bottom: 0;
  width: 100%;
  margin: auto;
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin: auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(250px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(300px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: light;
  text-decoration: none;
  color: gray;
  &:hover {
      color: #1976d2;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  color: lightgray;
  margin-bottom: 10px;
  margin-top: 25px;
  font-weight: bold;
`;

export const SocialMedia = styled.div`
  color: #fff;
  margin-right: 10px;
  font-size: 14px;
  font-weight: light;
  text-decoration: none;
  color: gray;
`;