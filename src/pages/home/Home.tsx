import React from "react";

import { HttpVerbs } from "../../common/services/apiService";
import { useDispatchEffect } from "../../common/hooks/useDispatchEffect";
import * as Styled from "../../common/components/styled";
import * as homeSliceAction from "./store/homeSlice";
import * as HomeSliceModel from "./store/homeSliceModel";
import HomeTasks from "./components/tasks/HomeTasks";
import HomeNotes from "./components/notes/HomeNotes";

const Home = (): JSX.Element => {
  const dispatchEffect = useDispatchEffect();

  const onAddTasks = (createdTask: HomeSliceModel.Task) => {
    const effectsActions = {
      loading: homeSliceAction.tasksLoading,
      success: homeSliceAction.addTasksSuccess,
      failure: homeSliceAction.tasksError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.POST,
      endPoint: "/posts",
      data: createdTask,
    });
  };

  const onDeleteTask = (taskId: number) => {
    const effectsActions = {
      loading: homeSliceAction.tasksLoading,
      success: homeSliceAction.deleteTaskSuccess,
      failure: homeSliceAction.tasksError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.DELETE,
      endPoint: `/posts/${taskId}`,
      data: taskId,
    });
  };

  const onAddNotes = (createdNotes: HomeSliceModel.Note) => {
    const effectsActions = {
      loading: homeSliceAction.notesLoading,
      success: homeSliceAction.addNotesSuccess,
      failure: homeSliceAction.notesError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.POST,
      endPoint: `/posts`,
      data: createdNotes,
    });
  };

  const onDeleteNote = (noteId: number) => {
    const effectsActions = {
      loading: homeSliceAction.notesLoading,
      success: homeSliceAction.deleteNoteSuccess,
      failure: homeSliceAction.notesError,
    };
    dispatchEffect({
      actions: effectsActions,
      httpMethod: HttpVerbs.DELETE,
      endPoint: `/posts/${noteId}`,
      data: noteId,
    });
  };

  return (
    <Styled.PageLayout data-testid="homePage-component">
      <Styled.Layout className="layout" $type="row">
        <HomeTasks
          data-testid="homeTasks-component"
          onTaskAdd={onAddTasks}
          onTaskDelete={onDeleteTask}
        />
        <HomeNotes
          data-testid="homeNotes-component"
          onNoteAdd={onAddNotes}
          onNoteDelete={onDeleteNote}
        />
      </Styled.Layout>
    </Styled.PageLayout>
  );
};

export default Home;
