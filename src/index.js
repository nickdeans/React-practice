import React from 'react';
import ReactDom from 'react-dom'
import Books from './Books/Books'
import ToursApp from './Tours/App'
import ReviewsApp from './Reviews/App'
import AccordianApp from './Accordian/App'
import TabsApp from './Tabs/App'
import Counter from './Counter/Counter'
import Birthday from './BirthdayReminder/App'
import Pokemon from './PokemonData/App'

const App = () => {
  return (
    <>
      <Pokemon />
      {/* <Birthday /> */}
      {/* <Counter /> */}
      {/* <Books /> */}
      {/* <ToursApp /> */}
      {/* <ReviewsApp /> */}
      {/* <AccordianApp /> */}
      {/* <TabsApp /> */}
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'));