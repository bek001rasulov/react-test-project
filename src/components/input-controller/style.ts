import styled from "@emotion/styled";

export const CustomInput = styled.div`
  width: 100%;
  text-align: left;

  label {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: block;
    margin-bottom: 7px;
  }

  .MuiInputBase-root {
    fieldset {
      display: none;
    }

    input {
      padding: 0 12px;
      height: 40px;
      font-size: 14px;
      font-weight: 300;
      border: 1px solid #DEDEDE;
      border-radius: 4px;

      &:focus {
        border-color: #0024DE;
      }
    }

    &.Mui-error {
      input {
        border-color: red;
      }
    }
  }
`

export const ErrorText = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: red;
`
