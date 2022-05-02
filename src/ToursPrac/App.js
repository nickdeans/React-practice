import { useState, useEffect } from 'react';
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project'

const ToursApp = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        try {
            const response = await fetch(url)
            const tours = await response.json();
            setIsLoading(false);
            setTours(tours);
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchTours();
    }, [])

    const deleteTour = (id) => {
        const newTours = tours.filter(tour => tour.id !== id)
        setTours(newTours)
    }

    const refreshTours = () => {
        fetchTours();
    }


    if(isLoading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    if(tours.length === 0) {
        return (
            <>
                <article>
                    <h2>No More Tours</h2>
                    <button onClick={() => refreshTours()}>Refresh</button>
                </article>
            </>
        )
    }

    return (
        <main>
            <Tours tours={tours} deleteTour={deleteTour} />
        </main>
    )
}

export default ToursApp;