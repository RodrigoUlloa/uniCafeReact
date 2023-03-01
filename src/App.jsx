import { useState } from 'react'
import './App.css'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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

  return (
    <div className="App">
      <h2>Give feed back</h2>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      
      <StatisticsTable good={good} neutral ={neutral} bad = {bad} all = {all} average={average} / >
    </div>
  )
}

export default App
