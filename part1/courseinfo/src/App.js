import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercises}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Total = (props) => {
  let exercisesNumber = 0
  props.parts.forEach(element => {
    exercisesNumber += element.exercises
  });
  return (
    <p>Number of exercises {exercisesNumber}</p>
  )
}

const App = () => {
  //const course = 'Half Stack application development'

  /*
  const parts = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */

  /*
  const parts = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } 
  */ 

  /*
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  */

  /*
  const Display = (props) => (
    <div>{props.counter}</div>
  )

  const CounterButton = ({ onEvent, text }) => (
    <button onClick={onEvent}>{text}</button>
  )

  const [ counter, setCounter ] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  const setToZero = () => {
    setCounter(0)
  }

  console.log(`rendering... ${counter}`)
  return (
    <div>
      <Display counter={counter}></Display>
      <CounterButton onEvent={increaseCounter} text="plus"></CounterButton>
      <CounterButton onEvent={decreaseCounter} text="minus"></CounterButton>
      <CounterButton onEvent={setToZero} text="zero"></CounterButton>
    </div>
  )
  */ 

  /*
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
    setTotal(total + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat("R"))
    setRight(right + 1)
    setTotal(total + 1)
  }

  debugger 

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
  */

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )

}

export default App;
