import { useState } from 'react'

const Accordian = ({questions}) => {
    const [infoBoolean, setInfo] = useState(false)
    const { title, id, info} = questions;

    return (
        <article key={id}>
            <h4 onClick={() => setInfo(!infoBoolean)}>{title}</h4>
            {infoBoolean && <h4>{info}</h4>}
        </article>
    )
}

export default Accordian;