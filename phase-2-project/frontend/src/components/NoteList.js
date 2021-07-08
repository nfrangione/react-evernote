import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      <div>{props.notes.map(note => <NoteItem displayNote={note} onClick={props.noteSelect} key={note.id}/>)}</div>
    </ul>
  );
}

export default NoteList;
