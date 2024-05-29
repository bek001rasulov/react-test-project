import styled from "@emotion/styled";
import bgImg from '../../assets/auth/auth-bg.svg'

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  //background-color: lightsteelblue;
  background-image: url(${bgImg});
`

export const AuthPaper = styled.div`
  text-align: center;
  max-width: 400px;
  background-color: white;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.07);
`

export const TopTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
  color: #646464;
  margin-bottom: 10px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 30px;
`

