import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavLayout = styled.div`
  display: flex;
  margin: 10px 0 14px 0;
  border-radius: 4px;
  background: #f1f1f4b3;
  box-shadow: 0 10px 10px #6666662b;
`;

const Link = styled(NavLink)<{ $linkType: "nav" | "default" }>`
  ${({ $linkType }) => {
    switch ($linkType) {
      case "nav": {
        return `
        color: #2929be;
        text-decoration: none;
        margin: 20px;
        padding-bottom: 4px;
        &:hover,
        &:focus {
          color: #3636da;
        }
        &.active {
          border-bottom: 3px solid;
          pointer-events: none;
          opacity: 0.8;
        }
        `;
      }
      case "default": {
        return `
        text-decoration: none;
          &:hover {
            border-left: 2px solid #2929be;
          }
        `;
      }
    }
  }}
`;

const Heading = styled.p<{ $type?: "h1" | "h2" | "h3" }>`
  padding: 4px;
  ${({ $type }) => {
    switch ($type) {
      case "h1":
        return `font-size: 30px;`;
      case "h2":
        return `font-size: 26px;`;
      case "h3":
        return `font-size: 22px;`;
      default:
        return `font-size: 20px;`;
    }
  }}
`;

const Label = styled.p<{
  $size?: "xsmall" | "small" | "medium";
  $level?: "primary" | "secondary" | "error";
  $breakWord?: boolean;
}>`
  ${({ $size }) => {
    switch ($size) {
      case "xsmall":
        return `font-size: 12px;`;
      case "small":
        return `font-size: 14px;`;
      case "medium":
        return `font-size: 16px;`;
      default:
        return `font-size: 18px;`;
    }
  }}
  ${({ $level }) => {
    switch ($level) {
      case "primary":
        return `color: #000000a8;`;
      case "secondary":
        return `color: #000000e8;`;
      case "error":
        return `color: red;`;
      default:
        return `color: inherit;`;
    }
  }}
    padding: 2px;
  word-break: ${(props) => (props.$breakWord ? "break-word" : "initial")};
`;

const ThemeSwitchLayout = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const Button = styled.button<{
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

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export {
  NavLayout,
  Heading,
  Link,
  Label,
  ThemeSwitchLayout,
  Button,
  PageLayout,
};
