import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  renderContent = () => {
    if (this.props.editView) {
      return <NoteEditor noteToEdit={this.props.noteSelected} cancelClick={this.props.handleCancel} submitClick={this.props.saveClick} deleteClick={this.props.deleteNote}/>;
    } else if (this.props.noteSelected) {
      return <NoteViewer noteUse={this.props.noteSelected} editNote={this.props.editState}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
