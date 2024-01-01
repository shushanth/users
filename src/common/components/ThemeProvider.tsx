import React from "react";

import { RootState } from "../../store/rootStore";
import { useSelectorNoRender } from "../hooks/useSelectorNoRender";

export type Theme = "light" | "dark";
interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps): JSX.Element => {
  const themeRef = React.useRef(
    null
  ) as React.MutableRefObject<HTMLDivElement | null>;

  /*NOTE: using the custom hook as children's not to render on change of the theme, 
    which seems un-necessary for this use-case with useSelector
    */
  useSelectorNoRender({
    selectedStateValue: (state: RootState) => state.app.theme,
    onChangeUpdate: (updatedValue) => {
      const element = themeRef.current;
      if (element) {
        element.className = "";
        element.className = `theme-layout ${updatedValue.value}`;
      }
    },
  });
  return (
    <div className="theme-layout" ref={themeRef}>
      {children}
    </div>
  );
};

export default ThemeProvider;
