import React, { Component } from 'react';

class NoteEditor extends Component {

  state={
    note:{
      id: this.props.noteToEdit.id,
      title: this.props.noteToEdit.title,
      body: this.props.noteToEdit.body,
      saved: ''
    }
  }

  handleChange=(e)=>{
    this.setState({note: {...this.state.note, [e.target.name]: e.target.value}})
  }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" defaultValue={this.state.note.title} onChange={this.handleChange}/>
        <textarea name="body" defaultValue={this.state.note.body} onChange={this.handleChange}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={
            (e) => this.props.submitClick(e, this.state.note)
          }/>
          <button onClick={(e) => this.props.cancelClick(e)} type="button">Cancel</button>
          <button onClick={(e) => this.props.deleteClick(e, this.props.noteToEdit)} type="button">Delete</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
