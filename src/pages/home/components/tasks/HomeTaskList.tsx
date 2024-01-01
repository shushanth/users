import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../store/rootStore";
import * as Styled from "../../../../common/components/styled";
import * as HomeSliceModel from "../../store/homeSliceModel";
import Loading from "../../../../common/components/Loading";
import TaskList from "./TaskList";

interface HomeTaskListProps {
  onDeleteTask: (taskId: number) => void;
}

const HomeTaskList = ({ onDeleteTask }: HomeTaskListProps) => {
  const { tasks, loading }: HomeSliceModel.HomeTask = useSelector(
    (state: RootState) => state.homePage.homeTasks
  );
  const onTaskRemove = React.useCallback(
    (id: number) => onDeleteTask(id),
    [onDeleteTask]
  );

  return (
    <React.Suspense fallback={loading && <Loading />}>
      <Styled.Heading $type="h3">Tasks</Styled.Heading>
      <Styled.ListContainer>
        {tasks.map((task: HomeSliceModel.Task) => {
          return (
            <TaskList
              key={task.taskId}
              taskList={task}
              onTaskRemove={onTaskRemove}
            />
          );
        })}
      </Styled.ListContainer>
    </React.Suspense>
  );
};

export default HomeTaskList;
