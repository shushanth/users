import React from "react";

import * as Styled from "../styled";
import DropdownItems from "./DropdownItems";

export type DropDownItem = {
  id: number;
  label: string;
  value: string;
};

interface DropdownProps {
  items: DropDownItem[];
  withButton?: boolean;
  btnTitle?: string;
  onDropdownSelected: (item: DropDownItem) => void;
}

const DropdownMenu = ({
  items,
  withButton,
  btnTitle,
  onDropdownSelected,
}: DropdownProps): JSX.Element => {
  const [toggleDropdown, setToggleDropdown] = React.useState(false);
  const dropdownItemClick = (item: DropDownItem) => {
    setToggleDropdown(false);
    onDropdownSelected(item);
  };
  return (
    <>
      {!withButton && (
        <Styled.DropdownLayout>
          <DropdownItems items={items} itemClick={dropdownItemClick} />
        </Styled.DropdownLayout>
      )}
      {withButton && (
        <div className="relative flex-full">
          <Styled.Button onClick={() => setToggleDropdown(!toggleDropdown)}>
            {btnTitle} &darr;
          </Styled.Button>
          {toggleDropdown && (
            <Styled.DropdownLayout>
              <DropdownItems items={items} itemClick={dropdownItemClick} />
            </Styled.DropdownLayout>
          )}
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
