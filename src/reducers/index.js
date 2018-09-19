const initialState = {
  hobbits: [],
  selectedHobbit: {}
}


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'LOAD_HOBBITS':
    return {
      ...state,
      hobbits: action.payload.hobbits
    }

    case "SELECT_HOBBIT":
    return {
      ...state,
      selectedHobbit: action.payload.hobbit
    }

    case "EDIT_HOBBIT":
    let mappedHobbits = state.hobbits.map((hobbit) => {
      if (hobbit.id !== action.payload.hobbit.id) {
        return hobbit
      } else {
        return action.payload.hobbit
      }
    })
     return {
       ...state,
       hobbits: mappedHobbits
     }

    default:
    return state
  }
}

export default reducer
