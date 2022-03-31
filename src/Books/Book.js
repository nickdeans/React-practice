
const Book = (props) => {
  const {img, title, author, children} = props;

  const clickHandler = () => {
    alert(`The Title of the Book is ${title}`)
  }

  return (
    <article>
      <div className='book'>
        <img src={img} alt='book-img'></img>
        <h6>{title}</h6>
        <h6>{author}</h6>
        <button type='button' onClick={clickHandler}>Click Me</button>
        {children}
      </div>
    </article>
  )
}

export default Book;