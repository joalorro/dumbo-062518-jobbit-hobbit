import React from "react";

import { editHobbit } from '../actions'

import { connect } from 'react-redux'

class EditForm extends React.Component {

  state = {
    id: 0,
    name: '',
    title: '',
    key_skill: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentDidUpdate (prevState, prevProps) {
    if (prevProps.id !== this.props.selectedHobbit.id) {
      this.setState({
        id: this.props.selectedHobbit.id,
        name: this.props.selectedHobbit.name,
        title: this.props.selectedHobbit.title,
        key_skill: this.props.selectedHobbit.key_skill
      })
    }
  }

  handleSubmit = (e) => {
    // dispatch an action to change hobbit
    e.preventDefault()
    // const url = `http://localhost:3000/hobbits/${this.state.id}`
    // const options = {
    //   method: 'PATCH',
    //   headers: {
    //     Accepts: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ hobbit: this.state })
    // }
    // fetch(url, options)
    // .then(resp => resp.json())

    this.props.editHobbit(this.state)
  }


  render() {
    console.log(this.props)
    return (
      <div style={{ textAlign: "center" }}>
        <div> </div>
        <form onSubmit={this.handleSubmit}>
          <h5> Name: {this.state.name} </h5>
          <label>
            Title
          </label>
          <input name="title" value={this.state.title} onChange={this.handleChange} />
          <label>
            Key Skill
          </label>
          <input name="key_skill" value={this.state.key_skill} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({selectedHobbit}) => {
  return {
    selectedHobbit
  }
}

export default connect(mapStateToProps, { editHobbit } )(EditForm)
