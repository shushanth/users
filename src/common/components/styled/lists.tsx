import styled from "styled-components";
import { devices } from "./breakpoints";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 75vh;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  background: #f1f1ff;
  border-radius: 2px;
  gap: 10px;
  padding: 10px 0;
  margin-bottom: 6px;
  align-items: center;
  font-size: 16px;
`;

export const ListBucket = styled.div<{
  $flex?: "full" | "none";
  $flexRowAlign?: "center" | "initial" | "flex-end";
  $noFlexResp?: boolean;
}>`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  color: #393939;
  align-items: ${(props) => props.$flexRowAlign ?? "initial"};
  ${({ $flex = "full" }) => {
    switch ($flex) {
      case "full":
        return `
          flex: 1;
          flex-wrap: wrap;
        `;
      case "none":
        return `
          flex: $flex;
        `;
    }
  }}
  @media (max-width: ${devices.mobileL}) {
    flex: ${(props) => (props.$noFlexResp ? "none" : props.$flex)};
  }
`;
