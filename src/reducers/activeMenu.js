const activedMenu = (state = '', action) => {
  if (state != action.item)
    console.log('reducer::', action)
  switch (action.type) {
    case 'ACTIVE_MENU':
      return {
        item:action.item
      }
    default:
      return state
  }
}

export default activedMenu;