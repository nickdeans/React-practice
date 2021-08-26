import React from 'react';
import ReactDom from 'react-dom'

// CSS
import './index.css'

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Name />
      <Hello />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/41JIh4KMHRL._AC_SX184_.jpg" alt="" />
  )
}

const Title = () => {
  return (
    <h1>
      This is the cool title!
    </h1>
  )
}

const Author = () => {
  return (
    <h4>
      Nick Deans
    </h4>
  )
}

const Name = () => <h1>Nick</h1>
const Hello = () => {
  return (
    <h2>Hello People</h2>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));