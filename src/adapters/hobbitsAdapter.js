export const fetchUpdateHobbit = (hobbit) => {
  const url = `http://localhost:3000/hobbits/${hobbit.id}`
  const options = {
    method: 'PATCH',
    headers: {
      Accepts: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ hobbit: hobbit })
  }
  return fetch(url, options)
  .then(resp => resp.json())
}

export const fetchHobbits = () => {
  return fetch('http://localhost:3000/hobbits')
  .then(resp => resp.json())
}
