import styled from "@emotion/styled";
import bgImg from '../../assets/auth/auth-bg.svg';
import {motion} from "framer-motion";
import {keyframes} from "@emotion/react";

const rotate = keyframes`
    100%{
      background-position: 25% 50%;
    }
`

export const AuthContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  //background-color: lightsteelblue;
  background-image: url(${bgImg});
  background-size: auto;
  background-repeat: no-repeat;
  animation: ${rotate} 5s infinite alternate linear;
`

export const AuthPaper = styled(motion.div)`
  text-align: center;
  max-width: 400px;
  background-color: white;
  padding: 30px 24px;
  border-radius: 4px;
  box-shadow: 0 0 28px 0 rgba(0, 0, 0, 0.07);
  form {
    button{
      text-transform: uppercase;
      font-weight: 400;
      font-size: 16px;
      padding-block: 11px;
      line-height: 18px;
      background-color: #0024DE;
      box-shadow: none;
      &:hover{
        background-color: #08159F;
        box-shadow: none;
      }
    }
  }
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

