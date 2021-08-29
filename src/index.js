import React from 'react';
import ReactDom from 'react-dom'

// CSS
import './index.css'

const books = [ 
  {
  id: 1,
  img: 'https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg',
  title: 'This is the NEW cool title!',
  author: 'Nick Deanss'
}, {
  id: 2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._AC_SX368_.jpg',
  title: 'This is the SECOND cool title!',
  author: 'Nicky Deans'
}, {
  id: 3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/51uZwAA6XyL._AC_SX368_.jpg',
  title: 'This is the Third cool title!',
  author: 'Nickster Deans'
},
]

// const names = ['john', 'peter', 'susan']
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>
// }) 

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{title}</p>
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));