import reviews from './data'
import { useState } from 'react';

const Reviews = () => {
    const [reviewsData, setReviews] = useState(reviews)
    const [index, setIndex] = useState(0)
    const {name, job, id, text, image} = reviewsData[index]

    const prevReview = () => {
        if(index <= 0) {
            setIndex(reviewsData.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    const nextReview = () => {
        if(index >= reviewsData.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const randomReview = () => {
        let idxValue = Math.floor(Math.random() * reviewsData.length)
        if(idxValue === index) {
            idxValue = index + 1;
        }
        setIndex(idxValue)
    }

    return (
        <section key={id}>
            <img src={image} alt={name} style={{width:'300px'}}></img>
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{text}</p>
            <div>
                <button onClick={prevReview}>Left</button>                   
                <button onClick={nextReview}>Right</button>    
                <button onClick={randomReview}>Surpise ME</button>               
            </div>
        </section>
    )
}

export default Reviews;