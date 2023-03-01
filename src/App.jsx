import { useState } from 'react'
import './App.css'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

function Statistics  (props)  {
  return props.all ? (
    <div>
      <br></br>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {(props.good*100)/(props.all)} %</p>
    </div>
  ) : (
    <p> No feedback given </p>
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
      
      <Statistics good={good} neutral ={neutral} bad = {bad} all = {all} average={average} / >
    </div>
  )
}

export default App
