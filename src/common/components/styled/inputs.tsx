import styled from "styled-components";

export const Input = styled.input<{ $size?: "small" | "medium" }>`
  padding: 10px;
  color: #393939;
  border: 1px solid #ccc;
  border-radius: 4px;
  ${({ $size }) => {
    switch ($size) {
      case "small":
        return `width: 200px`;
      case "medium":
        return `width: 350px;`;
      default:
        return `width: 150px;`;
    }
  }}
`;

export const TextArea = styled.textarea`
  font-size: 14px;
  border: 1px solid #ccc;
  padding: 10px;
`;
