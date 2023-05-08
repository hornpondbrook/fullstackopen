import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([1, ...Array(anecdotes.length - 1).fill(0)])
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  const showNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    console.log("total: ", anecdotes.length, " selected: ", randomIndex)
    setSelected(randomIndex)
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    if (newVotes[selected] > newVotes[mostVotedIndex])
      setMostVotedIndex(selected)
    setVotes(newVotes)
  }

  return (
    <div>
      <h3>Anecdote of the day</h3>
      {anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <br></br>
      <button onClick={voteAnecdote}>vote</button>
      <button onClick={showNextAnecdote}>next anecdote</button>
      <h3>Anecdote with most votes</h3>
      {anecdotes[mostVotedIndex]}
      <p>has {votes[mostVotedIndex]} votes</p>
    </div>
  )
}

export default App