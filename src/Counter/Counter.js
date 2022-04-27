import { useState } from 'react';
import './counter.css'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const decreaseNumber = () => {
        setCounter(counter - 1)
    }

    const resetNumber = () => {
        setCounter(0)
    }

    const increaseNumber = () => {
        setCounter(counter + 1)
    }
 
    return (
        <section>
            <h1>Counter</h1>
            <span>{counter}</span>
            <div>
                <button className="decrease" onClick={decreaseNumber}>Decrease</button>
                <button className="reset" onClick={resetNumber}>Reset</button>
                <button className="increase" onClick={increaseNumber}>Increase</button>
            </div>
        </section>
    )
}

export default Counter;