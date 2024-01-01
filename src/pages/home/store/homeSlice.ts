import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import * as HomeSliceModel from "./homeSliceModel";

const initialState: HomeSliceModel.HomeState = {
  homeTasks: {
    loading: false,
    tasks: [],
    error: false,
  },
  homeNotes: {
    loading: false,
    notes: [],
    error: false,
  },
};

const HomeSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    tasksLoading: function (state, { payload = true }: PayloadAction<boolean>) {
      state.homeTasks.loading = payload;
      state.homeTasks.error = false;
    },
    addTasksSuccess: function (
      state,
      { payload }: PayloadAction<HomeSliceModel.Task>
    ) {
      const {
        homeTasks: { tasks },
      } = state;
      const taskId = tasks.length ? tasks.length + 1 : 0;
      state.homeTasks.tasks.unshift({ ...payload, taskId });
      state.homeTasks.loading = false;
      state.homeTasks.error = false;
    },
    tasksError: function (state, { payload = true }: PayloadAction<boolean>) {
      state.homeTasks.error = payload;
      state.homeTasks.loading = false;
    },
    deleteTaskSuccess: function (state, { payload }: PayloadAction<number>) {
      const tasks = state.homeTasks.tasks.filter(
        ({ taskId }: HomeSliceModel.Task) => taskId !== payload
      );
      state.homeTasks.tasks = tasks;
      state.homeTasks.loading = false;
      state.homeTasks.error = false;
    },
    notesLoading: function (state, { payload }: PayloadAction<boolean>) {
      state.homeNotes.loading = payload;
      state.homeNotes.error = false;
    },
    addNotesSuccess: function (
      state,
      { payload }: PayloadAction<HomeSliceModel.Note>
    ) {
      const {
        homeNotes: { notes },
      } = state;
      const noteId = notes.length ? notes.length + 1 : 0;
      state.homeNotes.notes.unshift({ ...payload, noteId });
      state.homeNotes.loading = false;
      state.homeNotes.error = false;
    },
    deleteNoteSuccess: function (state, { payload }: PayloadAction<number>) {
      const notes = state.homeNotes.notes.filter(
        ({ noteId }: HomeSliceModel.Note) => noteId !== payload
      );
      state.homeNotes.notes = notes;
      state.homeNotes.error = false;
      state.homeNotes.loading = false;
    },
    notesError: function (state, { payload }: PayloadAction<boolean>) {
      state.homeNotes.loading = false;
      state.homeNotes.error = true;
    },
  },
});

export const {
  tasksLoading,
  addTasksSuccess,
  tasksError,
  deleteTaskSuccess,
  notesLoading,
  addNotesSuccess,
  deleteNoteSuccess,
  notesError,
} = HomeSlice.actions;

export default HomeSlice.reducer;
