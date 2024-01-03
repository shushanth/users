import { render, screen } from "@testing-library/react";
import App from "../App";
import { setupAppStore } from "../store/rootStore";
import { renderWithProviders } from "../common/test/setupTest";

test("renders app with initial app store", () => {
  const store = setupAppStore();

  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId("pages-component");
  expect(element).toBeDefined();
});

test("renders app with theme provider component with initial store", () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId("themeProvider-component");
  expect(element).toBeDefined();
});

test("renders app with theme switch component with initial store", () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId("themeSwitch-component");
  expect(element).toBeDefined();
});

test("renders app with page navigation component with initial store", () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId("pageNavigation-component");
  expect(element).toBeDefined();
});

test("renders app with page routes component with initial store", () => {
  const store = setupAppStore();
  renderWithProviders(<App />, { store });
  const element = screen.queryByTestId("pageRoutes-component");
  expect(element).toBeDefined();
});
