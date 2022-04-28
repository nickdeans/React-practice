

const List = ({birthdays}) => {

    return (
        <article>
            {birthdays.map(birthday => {
                const {name, age, image, id} = birthday;
                return (
                    <article key={id} className='person'>
                        <img src={image}></img>
                        <div>
                            <h4>{name}</h4>
                            <p>{age}</p>
                        </div>
                    </article>
                )
            })}
        </article>
    )
}

export default List;