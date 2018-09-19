import { fetchUpdateHobbit, fetchHobbits } from '../adapters/hobbitsAdapter'

export const selectHobbit = (hobbit) => {
  return {
    type: 'SELECT_HOBBIT',
    payload: {hobbit}
  }
}

export const loadHobbits = () => {
  return (dispatch) => {
    fetchHobbits()
    .then(hobbits => {
      dispatch(setHobbits(hobbits))
    })
  }
}

export const editHobbit = (hobbit) => {
  return (dispatch) => {
    fetchUpdateHobbit(hobbit)
    .then(hobbitResp => {
      dispatch(setHobbit(hobbitResp))
    })
  }
}

const setHobbit = (hobbit) => {
  return {
      type: 'EDIT_HOBBIT',
      payload: {
        hobbit
      }
    }
}

const setHobbits = (hobbits) => {
  return {
    type: 'LOAD_HOBBITS',
    payload: {
      hobbits
    }
  }
}
