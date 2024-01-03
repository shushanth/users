import { setupAppStore } from "../../store/rootStore";
import { changeTheme } from "../../store/appSlice";

test("renders app with initial app store with light theme", () => {
  const lightTheme = "light";
  const store = setupAppStore();
  store.dispatch(changeTheme(lightTheme));
  const {
    app: {
      theme: { value },
    },
  } = store.getState();
  expect(value).toEqual(lightTheme);
});

test("renders app with initial app store with light theme", () => {
  const darkTheme = "dark";
  const store = setupAppStore();
  store.dispatch(changeTheme(darkTheme));
  const {
    app: {
      theme: { value },
    },
  } = store.getState();
  expect(value).toEqual(darkTheme);
});
