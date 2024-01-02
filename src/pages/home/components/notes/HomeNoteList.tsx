import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../../store/rootStore";
import * as Styled from "../../../../common/components/styled";
import * as HomeSliceModel from "../../store/homeSliceModel";
import NoteList from "./NoteList";
import Loading from "../../../../common/components/Loading";
import EmptyResults from "../../../../common/components/EmptyResults";

interface HomeNoteListProps {
  onDeleteNote: (noteId: number) => void;
}

const HomeNoteList = ({ onDeleteNote }: HomeNoteListProps) => {
  const { notes }: HomeSliceModel.HomeNote = useSelector(
    (state: RootState) => state.homePage.homeNotes
  );

  const onNoteRemove = React.useCallback(
    (id: number) => onDeleteNote(id),
    [onDeleteNote]
  );

  return (
    <React.Suspense fallback={<Loading />}>
      <Styled.Heading $type="h3">Notes</Styled.Heading>
      <Styled.ListContainer>
        {!notes.length && <EmptyResults label="Notes" />}
        {notes.map((note: HomeSliceModel.Note) => (
          <NoteList
            key={note.noteId}
            notes={note}
            onNoteRemove={onNoteRemove}
          />
        ))}
      </Styled.ListContainer>
    </React.Suspense>
  );
};

export default HomeNoteList;
