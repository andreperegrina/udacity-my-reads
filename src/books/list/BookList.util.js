// Object for converting the shelf types to readable text
const shelfNames = {
   'currentlyReading': 'Currently Reading',
   'wantToRead': 'Want to Read',
   'read': 'Read'
};

/**
 * @description Extract categories from all the books
 * @param {array} books
 * @returns {object} Object with all the categories from books
 */
export const extractCategoriesFromBooks = (books) => {
   return books.reduce((accum, book) => {
      const {categories = []} = book;

      return {
         ...accum,
         ...categories.reduce((accum, e) => ({[e]: 1}), {})
      }
   }, {});
};


/**
 * @description Extract shelves from all the books
 * @param {array} books
 * @returns {object} Object with all the shelves from books with children as books related
 */
export const extractShelves = (books) => {
   return books.reduce((accum, book) => {
      const {shelf} = book;
      const prevShelf = accum[shelf] || {name: shelfNames[shelf], type: shelf, children: []};

      return {
         ...accum,
         [shelf]: {
            ...prevShelf,
            children: [
               ...prevShelf.children,
               book.id
            ]
         }
      }
   }, {});
};


/**
 * @description Update previous shelves with the new children
 * @param {object} shelves
 * @param {object} newShelvesChildren
 * @returns {object} Object of shelves with the children updated
 */
export const updateShelvesChildren = (shelves = {}, newShelvesChildren = {}) => {
   return Object.keys(newShelvesChildren).reduce((accum, key) => ({
      ...accum,
      [key]: {
         ...accum[key],
         children: newShelvesChildren[key]
      }
   }), shelves)
};
