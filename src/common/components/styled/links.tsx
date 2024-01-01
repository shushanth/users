import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)<{ $linkType: "nav" | "default" }>`
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
