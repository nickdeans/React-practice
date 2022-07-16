import { getDefaultNormalizer } from "@testing-library/react";
import { useState, useEffect } from "react";


const PracComponent = () => {
    const [isLoading, setLoading] = useState(true);
    const [value , setValue] = useState('Justin Fields')
    const [teams, setTeams] = useState({
        name: 'bears',
        sport: 'football',
        quarterback: 'Justin Fields'
    })
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState([]);
    const [shortCircuit, setShortCircuit] = useState('');
    let firstValue = shortCircuit || 'Short Circuit example';
    let secondValue = shortCircuit && 'Logical && Example'
    const [ternaryExample, setTernaryExample] = useState(true);
    const [windowSize, setWindowSize] = useState(false);

    const url = 'https://api.github.com/users';

    const getData = async () => {
        try {
            const response = await fetch(url);
            const getUsers = await response.json();
            setUsers(getUsers);
            setTimeout(() => {
                setLoading(false);
            }, 2000)
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(users);

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

    if(isLoading) {
        return (
            <h1>Loading......Please wait 2 seconds</h1>
        )
    }

    return (
        <main>
            <h1>{value}</h1>
            <button onClick={valueHandler}>Click Me</button>
            <div>
                <ul>
                    <li>{name}</li>
                    <li>{sport}</li>
                    <li>{quarterback}</li>
                    <li>{firstValue}</li>
                    <li>{secondValue}</li>
                    <li>{shortCircuit || 'Logical Or example'}</li>
                    <button onClick={clickHandler}>Change Team</button>
                </ul>
            </div>
            <section>
                <span>{counter}</span>
                <button onClick={decreaseHandler}>Decrease</button>
                <button onClick={increaseHandler}>Increase</button>
                <button onClick={() => setCounter(0)}>Reset</button>
            </section>
            <section>
                {users.map((user) => {
                    const { login, id } = user;
                    return (
                        <h1 key={id}>{login}</h1>
                    )
                })}
            </section>
            <section>
                <button onClick={() => setTernaryExample(!ternaryExample)}>Ternary Operator</button>
                {ternaryExample ? <h1>Value is true</h1> : <h1>Value is False</h1>}
            </section>
            <section>
                <button onClick={() => setWindowSize(!windowSize)}>
                    Check Window Size
                </button>
                {windowSize && <Item />}
            </section>
        </main>
    )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const windowSize = () => {
        setSize(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', windowSize)
        return () => {
            window.removeEventListener('resize', windowSize)
        }
    })

    return (
        <>
            <p>Window size is: {size}</p>
        </>
    )
}

export default PracComponent;