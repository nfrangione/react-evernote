import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const baseUrl = 'http://localhost:3000/notes';

class App extends Component {

  state = {
    notes: [],
    noteFilter: '',
    sortBy: 'created',
    selectedNote: null,
    editNote: false
  }

  componentDidMount() {
    fetch(baseUrl)
    .then(r => r.json())
    .then(notes => this.setState({notes}))
    .catch(error => console.log(error))
  }

  noteDisplay = (displayedNote) => {
    this.setState({selectedNote:displayedNote})
    this.setState({editNote: false})
  }

  handleSaveClick = (e, editedNote) => {
    e.preventDefault()
    editedNote.saved = new Date().toLocaleString()
    fetch(`${baseUrl}/${editedNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editedNote)
    })
    .then(r => r.json())
    .then(noteEdit => {
      let notesUpdated = this.state.notes.map(currentNote => currentNote.id === noteEdit.id ? noteEdit:currentNote)
      this.setState({notes: notesUpdated})
      this.setState({selectedNote:editedNote})
      this.setState({editNote: false})
    })
    .catch(error => console.log(error))
  }

  handleEdit = () => {
    this.setState({editNote: true})
  }

  handleCancelClick = () => {
    this.setState({editNote: false})
  }

  handleFilteredSearch = (search) => {
    this.setState({noteFilter: search})
  }

  filteredNotes = () => {
    if (this.state.noteFilter === '') {
      return this.state.notes
    }
    else {
      let filteredNotes = this.state.notes.filter(note => note.title.toLowerCase().includes(this.state.noteFilter.toLowerCase()) ? note:null)
      return filteredNotes
    }
  }

  handleSortBy = (e) => {
    this.setState({sortBy: e.target.value})
  }

  sortedNotes = () => {
    if (this.state.sortBy === 'alphabetical') {
      return([...this.filteredNotes()].sort((note1,note2) => note1.title[0] < note2.title[0]? -1:1))
    }
    else if(this.state.sortBy === 'recency') {
      return([...this.filteredNotes()].sort((note1, note2) => -1*(note1.id-note2.id)))
    }
    else if(this.state.sortBy === 'edited') {
      return([...this.filteredNotes()].sort((note1, note2) => -1*(new Date(note1.saved)-new Date(note2.saved))))
    }
    else {
      return([...this.filteredNotes()].sort((note1, note2) => note1.id-note2.id)) 
    }
  }

  createNewNote = () => {
    let createDate = new Date().toLocaleString()
    const defNewNote = {
      id: this.state.notes.length + 1,
      title: 'default',
      body: 'placeholder',
      saved: createDate
    }
    fetch(`${baseUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(defNewNote)
    })
    .then(r => r.json())
    .then(newNote => this.setState({notes: [...this.state.notes, newNote]}))
    .catch(error => console.log(error))
  }

  removeNote = (e, removeNote) => {
    e.stopPropagation()
    fetch(`${baseUrl}/${removeNote.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(data => {
      let newNotes = this.state.notes.filter(note => note !== removeNote ? note:null)
      this.setState({notes: newNotes})
      this.setState({editNote: false})
      this.setState({selectedNote: null})
    })
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className="app">
        <Header sortNotes={this.handleSortBy}/>
        <NoteContainer 
          notes={this.sortedNotes()} 
          viewNote={this.noteDisplay} 
          switchEdit={this.handleEdit} 
          toEdit={this.state.editNote} 
          selectedNote={this.state.selectedNote} 
          handleSaveClick={this.handleSaveClick} 
          handleCancelClick={this.handleCancelClick} 
          handleFilteredSearch={this.handleFilteredSearch} 
          handleDeleteClick={this.removeNote}
          createNote={this.createNewNote}
        />
      </div>
    );
  }
}

export default App;
