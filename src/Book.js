import React from 'react';

const Book = ({ img, title, author }) => {
    // const { img, title, author } = props;
  
    // attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) => {
      alert('Hello World')
      console.log(e);
      console.log(e.target)
    }
  
    const complexExample = (author) => {
      console.log(author);
    }
  
    return (
      <article className="book" onMouseOver={() => {
        console.log(title);
      }}>
        <img src={img} alt='' />
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>Button</button>
        <button type='button' onClick={() => complexExample(author)}>More complex example</button>
      </article>
    )
  }

export default Book;