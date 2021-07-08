import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search handleInput={this.props.handleFilteredSearch}/>
        <div className='container'>
          <Sidebar 
            notes={this.props.notes}
            noteView={this.props.viewNote}
            createNew={this.props.createNote}
          />
          <Content
            noteSelected={this.props.selectedNote}
            editView={this.props.toEdit}
            editState={this.props.switchEdit}
            handleCancel={this.props.handleCancelClick}
            saveClick={this.props.handleSaveClick}
            deleteNote={this.props.handleDeleteClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
