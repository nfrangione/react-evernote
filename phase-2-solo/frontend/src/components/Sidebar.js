import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} noteSelect={this.props.noteView} />
        <button onClick={this.props.createNew}>New</button>
      </div>
    );
  }
}

export default Sidebar;
