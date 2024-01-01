import React from "react";

import * as Styled from "../../../../common/components/styled";
import * as HomeSliceModel from "../../store/homeSliceModel";

interface NoteListProps {
  notes: HomeSliceModel.Note;
  onNoteRemove: (noteId: number) => void;
}

const NoteList = React.memo(
  ({ notes: { noteId, note, createdTime }, onNoteRemove }: NoteListProps) => {
    return (
      <Styled.List key={noteId}>
        <Styled.ListBucket $flex="full">
          <Styled.Label $size="xsmall">Note</Styled.Label>
          <Styled.Label $size="small" $breakWord>
            {note}
          </Styled.Label>
        </Styled.ListBucket>
        <Styled.ListBucket $flex="none">
          <Styled.Label $size="xsmall">Created time</Styled.Label>
          <Styled.Label $size="small">{createdTime}</Styled.Label>
        </Styled.ListBucket>
        <Styled.ListBucket $flexRowAlign="flex-end" $flex="none">
          <Styled.Button
            $size="xsmall"
            $level="danger"
            onClick={() => onNoteRemove(noteId as number)}
          >
            delete
          </Styled.Button>
        </Styled.ListBucket>
      </Styled.List>
    );
  }
);

export default NoteList;
