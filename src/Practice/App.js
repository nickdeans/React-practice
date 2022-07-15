import { useState } from "react";


const PracComponent = () => {
    const [value , setValue] = useState('Justin Fields')
    const [teams, setTeams] = useState({
        name: 'bears',
        sport: 'football',
        quarterback: 'Justin Fields'
    })
    const [counter, setCounter] = useState(0);

    const valueHandler = () => {
        if(value === 'Justin Fields') {
            setValue('Is the best');
        } else {
            setValue('Justin Fields')
        }
    }

    const clickHandler = () => {
        if(teams.name === 'bears') {
            setTeams({...teams, name: 'rams'})
        } else {
            setTeams({...teams, name: 'bears'})
        }
    }

    const decreaseHandler = () => {
        setTimeout(() => {
            setCounter(prevValue => {
                return prevValue - 1
            })    
        }, 2000)
    }

    const increaseHandler = () => {
        setTimeout(() => {
            setCounter(prevValue => {
                return prevValue + 1
            })    
        }, 2000)
    }

    const { name, sport, quarterback } = teams;
    return (
        <main>
            <h1>{value}</h1>
            <button onClick={valueHandler}>Click Me</button>
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{sport}</li>
                    <li>{quarterback}</li>
                    <button onClick={clickHandler}>Change Team</button>
                </ul>
            </div>
            <section>
                <span>{counter}</span>
                <button onClick={decreaseHandler}>Decrease</button>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={() => setCounter(0)}>Reset</button>
            </section>
        </main>
    )
}

export default PracComponent;