import React from "react";

import * as Styled from "../../../../common/components/styled";
import * as HomeSliceModel from "../../store/homeSliceModel";

interface TaskListProps {
  taskList: HomeSliceModel.Task;
  onTaskRemove: (taskId: number) => void;
}

const TaskList = React.memo(
  ({
    taskList: { taskId, task, createdDate },
    onTaskRemove,
  }: TaskListProps) => {
    return (
      <Styled.List key={taskId}>
        <Styled.ListBucket $flex="full">
          <Styled.Label $size="xsmall">Task</Styled.Label>
          <Styled.Label $size="small" $breakWord>
            {task}
          </Styled.Label>
        </Styled.ListBucket>
        <Styled.ListBucket $flex="none">
          <Styled.Label $size="xsmall">Created on</Styled.Label>
          <Styled.Label $size="small">{createdDate}</Styled.Label>
        </Styled.ListBucket>
        <Styled.ListBucket $flexRowAlign="flex-end" $flex="none">
          <Styled.Button
            $size="xsmall"
            $level="danger"
            onClick={() => onTaskRemove(taskId as number)}
          >
            delete
          </Styled.Button>
        </Styled.ListBucket>
      </Styled.List>
    );
  }
);

export default TaskList;
