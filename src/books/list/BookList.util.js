// Object for converting the shelf types to readable text
const shelfNames = {
   'currentlyReading': 'Currently Reading',
   'wantToRead': 'Want to Read',
   'read': 'Read'
};


// This function extract the categories from the books and return without duplicated
export const extractCategoriesFromBooks = (books) => {
   return books.reduce((accum, book) => {
      const {categories = []} = book;

      return {
         ...accum,
         ...categories.reduce((accum, e) => ({[e]: 1}), {})
      }
   }, {});
};

// Generate an array based on the shelf of the book
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

export const updateShelvesChildren = (shelves = {}, newShelvesChildren = {}) => {
   return Object.keys(newShelvesChildren).reduce((accum, key) => ({
      ...accum,
      [key]: {
         ...accum[key],
         children: newShelvesChildren[key]
      }
   }), shelves)
};
