import shortid from 'shortid';

// Generate a unique for react
// components to use as key
function id() {
  return shortid.generate();
}

export default id;