import React from 'react';

const NoteItem = (props) => (
  <li onClick = {() => props.onClick(props.displayNote)}>
    <h2>{props.displayNote.title}</h2>
    <p>{props.displayNote.body.length > 20 ? `${props.displayNote.body.slice(0,20)}...`:`${props.displayNote.body}`}</p>
  </li>
);

export default NoteItem;
