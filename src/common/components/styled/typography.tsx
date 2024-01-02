import styled from "styled-components";

import { devices, fontSizes, colors } from "./common";

export const Heading = styled.p<{ $type?: "h1" | "h2" | "h3" }>`
  padding: 4px;
  ${({ $type }) => {
    switch ($type) {
      case "h1":
        return `font-size: ${fontSizes.headings.xlarge}`;
      case "h2":
        return `font-size: ${fontSizes.headings.large}`;
      case "h3":
        return `font-size: ${fontSizes.headings.medium}`;
      default:
        return `font-size: ${fontSizes.headings.small}`;
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
        return `font-size: ${fontSizes.labels.xsmall};`;
      case "small":
        return `font-size: ${fontSizes.labels.small};`;
      case "medium":
        return `font-size: ${fontSizes.labels.medium};`;
      default:
        return `font-size: ${fontSizes.labels.large}`;
    }
  }}
  ${({ $level }) => {
    switch ($level) {
      case "primary":
        return `color: ${colors.blackPrimary}`;
      case "secondary":
        return `color: ${colors.blackSecondary}`;
      case "error":
        return `color: ${colors.redPrimary}`;
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
