import React from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import * as Styled from "../common/components/styled";
import * as appSlice from "../store/appSlice";
import PageNavigation from "./navigation/PageNavigation";

import ThemeSwitch from "../common/components/ThemeSwitch";
import ThemeProvider, { Theme } from "../common/components/ThemeProvider";
import PageRoutes from "./routes/Routes";

const Pages = (): JSX.Element => {
  const dispatch = useDispatch();

  const triggerThemeChange = React.useCallback(
    (theme: Theme) => {
      dispatch(appSlice.changeTheme(theme));
    },
    [dispatch]
  );

  return (
    <ThemeProvider>
      <Styled.PageLayout>
        <ThemeSwitch onThemeChange={triggerThemeChange} />
        <BrowserRouter>
          <PageNavigation />
          <PageRoutes />
        </BrowserRouter>
      </Styled.PageLayout>
    </ThemeProvider>
  );
};

export default Pages;
