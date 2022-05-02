import { useState } from 'react';

const Tour = ({ tour, deleteTour }) => {
    const { id, name, price, info} = tour;
    const [readMore, setReadMore] = useState(false);


    return (
        <article>
            <div>
                <h4>{name}</h4>
                <h4>{price}</h4>
            </div>
            <div>
                <p>{readMore ? info : `${info.substring(0,200)}...`}
                <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button></p>
                <button onClick={() => deleteTour(id)}>Not Interested</button>
            </div>
        </article>
    )
}

export default Tour;