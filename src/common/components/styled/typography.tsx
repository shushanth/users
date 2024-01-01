import styled from "styled-components";

import { devices } from "./breakpoints";

export const Heading = styled.p<{ $type?: "h1" | "h2" | "h3" }>`
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

export const Label = styled.p<{
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
        return `color: #ff0000d1;`;
      default:
        return `color: inherit;`;
    }
  }}
  padding: 2px;
  word-break: ${(props) => (props.$breakWord ? "break-word" : "initial")};

  @media (min-width: ${devices.mobileS}) and (max-width: ${devices.laptop}) {
    font-size: 12px;
  }
`;
