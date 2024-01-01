import React from "react";

import * as Styled from "../../../../common/components/styled";
import * as utils from "../../../../common/utils";
import * as HomeSliceModel from "../../store/homeSliceModel";
import HomeTaskList from "./HomeTaskList";
import PageActionForm, {
  FormResults,
} from "../../../../common/components/PageActionForm";

interface HomeTasksProps {
  onTaskAdd: (task: HomeSliceModel.Task) => void;
  onTaskDelete: (taskId: number) => void;
}

const HomeTasks = ({
  onTaskAdd,
  onTaskDelete,
}: HomeTasksProps): JSX.Element => {
  const onTaskCreate = ({ value }: FormResults) => {
    const newTask: HomeSliceModel.Task = {
      task: value,
      createdDate: utils.getDateFormat(new Date()),
    };
    onTaskAdd(newTask);
  };

  return (
    <Styled.Layout $type="column" $fullSize>
      <Styled.PageActionsLayout>
        <PageActionForm
          type="text"
          inputPlaceHolder="Add tasks"
          actionBtnTitle="Add task"
          onFormSubmit={onTaskCreate}
        />
      </Styled.PageActionsLayout>
      <HomeTaskList onDeleteTask={onTaskDelete} />
    </Styled.Layout>
  );
};

export default HomeTasks;
