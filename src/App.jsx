import { useState } from 'react'
import './App.css'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// const handleClick = (text) => {
//   if (text.localeCompare('show') === 0) { 
//     setSelected(Math.floor(Math.random() * anecdotes.length))
//   } else {
//     votes[selected] += 1
//     console.log(votes)
//   }
// }
//<Button handleClick={() => handleClick('vote')} text='Vote this anecdote' />

function StatisticsTable  (props)  {
  return props.all ? (
    <div>
      <br></br>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <StatisticLine text='Good' value={props.good}/>
          <StatisticLine text='Neutral' value={props.neutral}/>
          <StatisticLine text='Bad' value={props.bad}/>
          <StatisticLine text='All' value={props.all}/>
          <StatisticLine text='Average' value={props.average}/>
          <StatisticLine text='Positive' value={(props.good*100)/(props.all)}/>
        </tbody>
      </table>
    </div>
  ) : (
    <p> No feedback given </p>
  )
}

function StatisticLine ({text, value}) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good + (-bad)) / (all)
  
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
  const randomValueArr = () => setSelected(Math.floor(Math.random()* anecdotes.length))
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const upVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }
  const max = Math.max(...votes)
  const index = votes.indexOf(max)
  

  return (
    <div className="App">
      <h2>Give feed back</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      <StatisticsTable good={good} neutral={neutral} bad={bad} all={all} average={average} />
 
      <div>
        {anecdotes[selected]}
        <br></br>
        
        <Button handleClick={() => setSelected(randomValueArr)} text="next anecdote" />
      </div>
      <div>
        <Button handleClick={() => upVote() } text="vote" />
      </div>
      <div>
        <h1> Anecdote most voted </h1>
        { anecdotes[index]}
        <br></br>
        has {max} votes
      </div>
    </div>
    
  ) 
}

export default App