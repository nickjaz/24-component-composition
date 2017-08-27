import './_note-create-form.scss'

import React from 'react';

class NoteCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      completed: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  render() {
    return (
      <form className='note-create-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          name='content'
          type='text'
          rows='4'
          placeholder='enter note content here'
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button type='submit'>add note</button>
      </form>
    )
  }
}

export default NoteCreateForm;
