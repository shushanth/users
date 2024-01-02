import styled from "styled-components";

import { devices } from "./breakpoints";

export const Layout = styled.div<{
  $type: "row" | "column";
  $fullSize?: boolean;
  $itemsCenter?: boolean;
}>`
  display: flex;
  column-gap: 40px;
  row-gap: 10px;
  flex-direction: ${(props) => props.$type};
  flex: ${(props) => (props.$fullSize ? 1 : "none")};
  align-items: ${(props) => (props.$itemsCenter ? "center" : "initial")};
  @media (min-width: ${devices.mobileS}) and (max-width: ${devices.laptop}) {
    flex-direction: column;
  }
`;

export const NavLayout = styled.div`
  display: flex;
  margin: 10px 0 14px 0;
  border-radius: 4px;
  background: #f1f1f4b3;
  box-shadow: 0 10px 10px #6666662b;
`;

export const PaginationLayout = styled.div`
  display: flex;
  align-items: center;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
`;

export const PageActionsLayout = styled.div<{ $fullSize?: boolean }>`
  display: flex;
  gap: 20px;
  margin: 10px 0 15px;
  flex: ${(props) => (props.$fullSize ? 1 : "none")};
  @media (max-width: ${devices.tablet}) {
    flex-direction: column;
  }
`;

export const DropdownLayout = styled.div`
  width: 200px;
  border: 1px solid #8282f447;
  position: absolute;
  z-index: 1;
  background: #fff;
  margin: 6px 0;
  padding-bottom: 8px;
  box-shadow: 0 10px 10px #6666662b;
  border-radius: 4px;
  .item {
    font-size: 15px;
    border-bottom: 1px solid #8282f447;
    color: blue;
    cursor: pointer;
    padding: 10px;
    &:hover {
      background-color: #8282f447;
    }
    &:last-child {
      border: none;
    }
  }
`;

export const ThemeSwitchLayout = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const ThemeLayout = styled.div<{ $theme?: "light" | "dark" }>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  ${({ $theme = "light" }) => {
    switch ($theme) {
      case "light":
        return `
          background-color: #fff;
          color: #000;
        `;
      case "dark":
        return `
          background-color: #000;
          color: #fff;
        `;
    }
  }}
`;

export const PageCardLayout = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #6666662b;
  box-shadow: 0 10px 10px #6666662b;
  display: flex;
  flex-direction: column;
  min-height: 500px;
`;
