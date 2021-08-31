import React from 'react';
import ReactDom from 'react-dom'
import {data} from './books'
import Book from './Book'

// CSS
import './index.css'

// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// }) 

const Booklist = () => {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));