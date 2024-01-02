import React from "react";

import * as Styled from "./styled";
import { RootState } from "../../store/rootStore";
import { useSelectorNoRender } from "../hooks/useSelectorNoRender";

export type Theme = "light" | "dark";

enum ThemeColors {
  "LIGHT" = "light",
  "DARK" = "dark",
}

const themeStyles = {
  light: {
    backgroundColor: "#fff",
    color: "#000",
  },
  dark: {
    backgroundColor: "#000",
    color: "#fff",
  },
};

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
        if (updatedValue.value === ThemeColors.LIGHT) {
          element.style.backgroundColor = themeStyles.light.backgroundColor;
          element.style.color = themeStyles.light.color;
        } else {
          element.style.backgroundColor = themeStyles.dark.backgroundColor;
          element.style.color = themeStyles.dark.color;
        }
      }
    },
  });

  return <Styled.ThemeLayout ref={themeRef}>{children}</Styled.ThemeLayout>;
};

export default ThemeProvider;
