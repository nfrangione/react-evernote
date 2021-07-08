import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  return (
    <Fragment>
      <h2>{props.noteUse.title}</h2>
      <p>{props.noteUse.body}</p>
      <button onClick={() => props.editNote(props.noteUse)}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
