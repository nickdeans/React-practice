import '../index.css'

import { useState } from 'react'
import { data } from './book-data' 
import Book from './Book'

const Booklist = () => {
    const imgUrl = 'https://images.pexels.com/photos/10560093/pexels-photo-10560093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

    const [text, setText] = useState('Skating Dude')

    const clickHandler = () => {
        if(text === 'Skating Dude') {
            setText('Skater Boi')
        } else {
            setText('Skating Dude')
        }
    }

    return (
      <section className="booklist">
        {data.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
        <div className='img-container'>
            <img src={imgUrl} alt='skater' className='skater-img'></img>
            <h1 className='image-title'>{text}</h1>
            <button type='button' onClick={clickHandler}>Change Title</button>
        </div>
      </section>
    )
  }

  export default Booklist;