import questions from './data'
import { useState } from 'react';
import Accordian from './Accordian'

const AccodianPrac = () => {
    const [questionsData, setQuestionsData] = useState(questions);

    return (
        <main>
            <div>
                <h1>Questions and Answers</h1>
            </div>
            <div>
                {questionsData.map(questions => {
                    return (
                        <Accordian questions={questions} />
                    )
                })}
            </div>
        </main>
    )
}

export default AccodianPrac;