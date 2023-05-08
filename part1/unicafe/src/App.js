import { useState } from 'react'

const Title = ({ text }) => {
  return (
    <h3>{text}</h3>
  )
}

const Button = ({ clickHandler, text }) => {
  return (
    <button onClick={clickHandler}>{text}</button>
  )
}

const StatisticLine = ({ text, count }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {

  const total = good + neutral + bad

  const getAverage = () => {
    if (total > 0)
      return ((good - bad) / total).toFixed(1)
    else
      return ""
  }

  const getPositive = () => {
    if (total > 0)
      return (good / total).toLocaleString(undefined, { style: "percent", minimumFractionDigits: 1 });
    else
      return ""
  }

  if (total > 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" count={good}></StatisticLine>
          <StatisticLine text="neutral" count={neutral}></StatisticLine>
          <StatisticLine text="bad" count={bad}></StatisticLine>
          <StatisticLine text="all" count={total}></StatisticLine>
          <StatisticLine text="average" count={getAverage()}></StatisticLine>
          <StatisticLine text="positive" count={getPositive()}></StatisticLine>
        </tbody>
      </table>
    )
  else
    return (
      <div>No feedback given</div>
    )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }


  return (
    <div>
      <Title text="give feedback"></Title>
      <Button clickHandler={handleGood} text="good"></Button>
      <Button clickHandler={handleNeutral} text="neutral"></Button>
      <Button clickHandler={handleBad} text="bad"></Button>
      <Title text="statistics"></Title>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App