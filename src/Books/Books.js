import './books-styles.css'

import { useState } from 'react'
import { data } from './book-data' 
import Book from './Book'

const Booklist = () => {
    const imgUrl = 'https://images.pexels.com/photos/10560093/pexels-photo-10560093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    const [text, setText] = useState('Skating Dude')
    const [bookData, setBookData] = useState(data)

    const clickHandler = () => {
        if(text === 'Skating Dude') {
            setText('Skater Boi')
        } else {
            setText('Skating Dude')
        }
    }

    const removeHandler = (id) => {
        let newBooks = bookData.filter(book => book.id !== id)
        setBookData(newBooks);
      }

    return (
      <section className="booklist">
        {bookData.map((book) => {
        const { id } = book;

          return <Book key={id} {...book}>
                    <button type='button' onClick={() => removeHandler(id)}>Remove Book</button>
                </Book>
        })}
        <div className='img-container'>
            <img src={imgUrl} alt='skater' className='skater-img'></img>
            <h1 className='image-title'>{text}</h1>
        </div>
        <div>
            <button type='button' className='btn' onClick={clickHandler}>Change Title</button>
        </div>
      </section>
    )
}

  export default Booklist;