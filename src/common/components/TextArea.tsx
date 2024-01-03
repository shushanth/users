import React from "react";

import * as Styled from "./styled";

interface TextAreaProps {
  placeholder?: string;
  onTextAreaChange: (value: string) => void;
  maxCols?: number;
  maxRows?: number;
  defaultValue?: string;
}

const TextArea = ({
  placeholder,
  onTextAreaChange,
  maxCols = 40,
  maxRows = 2,
  defaultValue,
}: TextAreaProps) => {
  const onValueChange = React.useCallback(
    ({ currentTarget: { value } }: React.FormEvent<HTMLTextAreaElement>) => {
      onTextAreaChange(value);
    },
    []
  );
  return (
    <Styled.TextArea
      placeholder={placeholder}
      onChange={onValueChange}
      rows={maxRows}
      cols={maxCols}
      value={defaultValue}
    ></Styled.TextArea>
  );
};

export default TextArea;
