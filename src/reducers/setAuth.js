let initState = 'signin';
const setAuth = (state = initState, action) => {
  switch (action.type) {
    case 'SET_AUTH':
      return action.state
    default:
      return state
  }
}

export default setAuth;