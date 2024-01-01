import styled from "styled-components";

export const Image = styled.img<{ $type?: "fallback" }>`
  width: 100px;
  height: 100px;
  border: 3px dotted #6666662b;
  border-radius: 50%;
  ${({ $type }) => {
    switch ($type) {
      case "fallback":
        return `
          font-size: 22px;
          padding: 20px;
        `;
      default: {
        return `
          padding: 0;
        `;
      }
    }
  }}
`;
