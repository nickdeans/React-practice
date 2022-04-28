import data from './data'
import List from './List'
import { useState } from 'react';
import './styles.css'

const Birthday = () => {
    const [birthdays, setBirthdays] = useState(data);

    return (
        <main>
            <section className='container'>
                <h1>{birthdays.length} Birthdays today</h1>
                <List birthdays={birthdays} />
                <button type='button' onClick={() => setBirthdays([])}>Clear All</button>
            </section>
        </main>
    )
}

export default Birthday;