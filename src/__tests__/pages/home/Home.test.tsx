import { screen } from "@testing-library/react";
import { setupAppStore } from "../../../store/rootStore";
import { renderWithProviders } from "../../../common/test/setupTest";
import Home from "../../../pages/home/Home";
import {
  addNotesSuccess,
  addTasksSuccess,
  deleteNoteSuccess,
  deleteTaskSuccess,
} from "../../../pages/home/store/homeSlice";
import { act } from "react-dom/test-utils";

test("renders home page with with initial store", () => {
  const store = setupAppStore();
  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homePage-component");
  expect(element).toBeDefined();
});

test("renders home with homeTasks component", () => {
  const store = setupAppStore();

  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homeTasks-component");
  expect(element).toBeDefined();
});

test("renders home with homeNotes component", () => {
  const store = setupAppStore();

  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homeNotes-component");
  expect(element).toBeDefined();
});

test("renders home page with added tasks", () => {
  const store = setupAppStore();
  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homePage-component");
  expect(element).toBeDefined();
  const tasksAdded = {
    task: "test task created",
    date: new Date().toString(),
  };
  act(() => {
    store.dispatch(addTasksSuccess(tasksAdded));
    const {
      homePage: {
        homeTasks: { tasks },
      },
    } = store.getState();
    expect(tasks.length).toEqual(1);
    expect(tasks[0].task).toEqual("test task created");
  });
});

test("renders home page on delete tasks", async () => {
  const store = setupAppStore();
  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homePage-component");
  expect(element).toBeDefined();
  const tasksAdded = {
    task: "test task created",
    date: new Date().toString(),
  };
  act(() => {
    store.dispatch(addTasksSuccess(tasksAdded));
    store.dispatch(deleteTaskSuccess(0));
    const {
      homePage: {
        homeTasks: { tasks },
      },
    } = store.getState();
    expect(tasks.length).toEqual(0);
  });
});

test("renders home page with added notes", () => {
  const store = setupAppStore();
  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homePage-component");
  expect(element).toBeDefined();
  const notesAdded = {
    note: "test notes created",
    createdTime: new Date().toString(),
  };
  act(() => {
    store.dispatch(addNotesSuccess(notesAdded));
    const {
      homePage: {
        homeNotes: { notes },
      },
    } = store.getState();
    expect(notes.length).toEqual(1);
    expect(notes[0].note).toEqual("test notes created");
  });
});

test("renders home page on delete notes", async () => {
  const store = setupAppStore();
  renderWithProviders(<Home />, { store });
  const element = screen.queryByTestId("homePage-component");
  expect(element).toBeDefined();
  const notesAdded = {
    note: "test note created",
    createdTime: new Date().toString(),
  };
  act(() => {
    store.dispatch(addNotesSuccess(notesAdded));
    store.dispatch(deleteNoteSuccess(0));
    const {
      homePage: {
        homeNotes: { notes },
      },
    } = store.getState();
    expect(notes.length).toEqual(0);
  });
});
