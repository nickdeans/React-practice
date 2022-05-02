import Tour from './Tour'

const Tours = ({tours, deleteTour}) => {
    return (
        <section>
            <h1>Our Tours</h1>
            <div>
                {tours.map((tour) => {
                    return  <Tour tour={tour} deleteTour={deleteTour} key={tour.id} />
                })}
            </div>
        </section>
    )
}

export default Tours;