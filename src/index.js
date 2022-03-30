import React from 'react';
import ReactDom from 'react-dom'
import {data} from './Books/book-data'
import Book from './Books/Book'

// CSS
import Books from './Books/Books'

const App = () => {
  return (
    <Books />
  )
}

ReactDom.render(<App />, document.getElementById('root'));