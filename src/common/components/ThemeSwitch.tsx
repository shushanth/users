import React from "react";

import * as Styled from "./styled";
import { Theme } from "./ThemeProvider";

interface ThemeSwitchProps {
  onThemeChange: (theme: Theme) => void;
}

const ThemeSwitch = ({ onThemeChange }: ThemeSwitchProps): JSX.Element => {
  const [themeSwitch, setThemeSwitch] = React.useState<Theme>("light");
  const onThemeTrigger = (theme: Theme) => {
    setThemeSwitch(theme);
    onThemeChange(theme);
  };

  return (
    <Styled.ThemeSwitchLayout>
      {themeSwitch === "light" && (
        <Styled.Button $size="xxsmall" onClick={() => onThemeTrigger("dark")}>
          &#9788;
        </Styled.Button>
      )}

      {themeSwitch === "dark" && (
        <Styled.Button $size="xxsmall" onClick={() => onThemeTrigger("light")}>
          &#9790;
        </Styled.Button>
      )}
    </Styled.ThemeSwitchLayout>
  );
};

export default ThemeSwitch;
