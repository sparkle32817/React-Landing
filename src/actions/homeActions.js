export const activateMenu = (item) => ({
  type: 'ACTIVE_MENU',
  item
})

let categoriesId = 0;
export const addCategoriesPosition = (category, reference) => ({
  type: 'ADD_CATEGORY_POSITION',
  id: categoriesId++,
  category,
  reference
})