import React from 'react';
import ReactDom from 'react-dom'

// CSS
import './index.css'

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg',
  title: 'This is the NEW cool title!',
  author: 'Nick Deanss'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._AC_SX368_.jpg',
  title: 'This is the SECOND cool title!',
  author: 'Nicky Deans'
}

const Booklist = () => {
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
      <Book />
      <Book />
      <Book />
      <Name />
      <Hello />
    </section>
  )
}

const Book = ({ img, title, author}) => {
  return (
    <article className="book">
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{title}</p>
    </article>
  )
}

const Name = () => <h1>Nick</h1>
const Hello = () => {
  return (
    <h2>Hello People</h2>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));