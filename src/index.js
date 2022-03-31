import React from 'react';
import ReactDom from 'react-dom'
import Books from './Books/Books'
import ToursApp from './Tours/App'
import ReviewsApp from './Reviews/App'

const App = () => {
  return (
    <>
      {/* <Books /> */}
      {/* <ToursApp /> */}
      <ReviewsApp />
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'));