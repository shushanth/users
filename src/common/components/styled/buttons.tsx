import { styled } from "styled-components";

export const Button = styled.button<{
  $level?: "primary" | "danger";
  $size?: "xxsmall" | "xsmall" | "small";
}>`
  padding: 10px 15px;
  background-color: #fff;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
  &:disabled {
    pointer-events: none;
    background-color: #ccccccb5;
    border-color: #cccccc40;
  }
  &:hover {
    color: #fff;
    background-color: #3636da;
  }
  ${({ $size = "small" }) => {
    switch ($size) {
      case "xxsmall":
        return `width: 50px`;
      case "xsmall":
        return `
          width: 100px;
          
          `;
      case "small":
        return `
            width: 140px;
          `;
      default:
        return `width: 150px;`;
    }
  }}

  ${({ $level = "primary" }) => {
    switch ($level) {
      case "primary":
        return `
          color: #3636da; 
          border: 1px solid #8282f4;
  
          &:hover {
            color: #fff;
            background-color: #3636da;
          };
          
          `;
      case "danger":
        return `
          color: #f83a3a; 
          border: 1px solid #f83a3a61;
  
          &:hover {
            color: #fff;
            background-color: #f83a3a9c;
          };
          `;
      default:
        return `width: 150px;`;
    }
  }}
`;

export const ButtonArrow = styled.button`
  background-color: #fff;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid #8282f4;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  color: #3636da;

  &:hover {
    color: #fff;
    background-color: #3636da;
  }
  &:disabled {
    pointer-events: none;
    background-color: #ccccccb5;
    border-color: #cccccc40;
  }
`;
