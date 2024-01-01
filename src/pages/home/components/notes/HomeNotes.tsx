import React from "react";

import * as utils from "../../../../common/utils";
import * as HomeSliceModel from "../../store/homeSliceModel";
import * as Styled from "../../../../common/components/styled";
import PageActionForm, {
  FormResults,
} from "../../../../common/components/PageActionForm";
import HomeNoteList from "./HomeNoteList";

interface HomeNotesProps {
  onNoteAdd: (note: HomeSliceModel.Note) => void;
  onNoteDelete: (noteId: number) => void;
}

const HomeNotes = React.memo(({ onNoteAdd, onNoteDelete }: HomeNotesProps) => {
  const onCreateNote = ({ value }: FormResults) => {
    const createdNote: HomeSliceModel.Note = {
      note: value,
      createdTime: utils.getTime(new Date()),
    };
    onNoteAdd(createdNote);
  };

  return (
    <Styled.Layout $type="column" $fullSize>
      <Styled.PageActionsLayout>
        <PageActionForm
          type="textArea"
          inputPlaceHolder="Add notes"
          actionBtnTitle="Add note"
          onFormSubmit={onCreateNote}
        />
      </Styled.PageActionsLayout>
      <HomeNoteList onDeleteNote={onNoteDelete} />
    </Styled.Layout>
  );
});
export default HomeNotes;
