import React from "react";
// import Input from "./Input";

import * as Styled from "./styled";

export type FormResults = {
  value: string;
};

interface PageActionFormProps {
  onFormSubmit: (form: FormResults) => void;
  inputPlaceHolder: string;
  type: "text" | "textArea";
  actionBtnTitle: string;
}

const PageActionForm = ({
  onFormSubmit,
  inputPlaceHolder,
  actionBtnTitle,
  type = "text",
}: PageActionFormProps) => {
  const [formValue, setFormValue] = React.useState<FormResults>({
    value: "",
  });

  const onInputChange = ({
    currentTarget: { value },
  }: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValue({ value });
  };

  const onKeydownValueChange = ({
    charCode,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (charCode === 13) {
      onFormSubmit(formValue);
      setFormValue({ value: "" });
    }
  };

  const onActionFormSubmit = () => {
    onFormSubmit(formValue);
    setFormValue({ value: "" });
  };

  const isActionBtnDisabled = React.useMemo((): boolean => {
    return !formValue.value;
  }, [formValue.value]);

  return (
    <>
      {type === "text" && (
        <Styled.Input
          $size="medium"
          type={type}
          maxLength={80}
          placeholder={inputPlaceHolder}
          onKeyPress={onKeydownValueChange}
          onChange={onInputChange}
          value={formValue.value}
          aria-label={inputPlaceHolder}
        />
      )}
      {type === "textArea" && (
        <Styled.TextArea
          placeholder={inputPlaceHolder}
          onChange={onInputChange}
          value={formValue.value}
          cols={40}
          rows={2}
          aria-label={inputPlaceHolder}
        ></Styled.TextArea>
      )}
      <Styled.Button
        disabled={isActionBtnDisabled}
        onClick={onActionFormSubmit}
      >
        {actionBtnTitle}
      </Styled.Button>
    </>
  );
};

export default React.memo(PageActionForm);
