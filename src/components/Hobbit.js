import React from "react";

import { selectHobbit } from '../actions'
import { connect } from 'react-redux'

const Hobbit = props => {
  const { hobbit } = props
  return (
    <div className='card' style={props.selected ? {'borderColor':'cyan'} : {'borderColor':'red'} } onClick={() => {
      props.selectHobbit(hobbit)
      // type: 'SELECT_HOBBIT'
      // payload: hobbit object
    }}>
      <img alt={hobbit.name} src={hobbit.image_url} />
      <h3> Name: {hobbit.name} </h3>
      <h3> Title: {hobbit.title} </h3>
      <h3> Field: {hobbit.field} </h3>
      <h3> Seniority: {hobbit.seniority} </h3>
      <h3> Position: {hobbit.position} </h3>
      <h3> Key Skill: {hobbit.key_skill} </h3>
      <h3> Employment Type: {hobbit.employment_type} </h3>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const selected = (state.selectedHobbit.id === ownProps.hobbit.id)
  return {
    selected: selected
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     selectHobbit: (hobbit) => dispatch(selectHobbit(hobbit))
//   }
// }

export default connect(mapStateToProps, { selectHobbit })(Hobbit)
