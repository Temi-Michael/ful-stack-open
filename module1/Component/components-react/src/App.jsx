import { useState } from "react"
import Display from "./Display";
import Button from "./Button";

const App = () => {

  const [counter, setCounter] = useState(0);
  console.log(`rendering with counter value, ${counter}`)

  const increaseByOne = () => {
    setCounter(counter + 1),
    console.log(`increasing value before ${counter}`)
  };

  const decreaseByOne = () => {
    setCounter(counter - 1),
    console.log(`decreasing value before ${counter}`)
  };

  const setToZero = () => {
    setCounter(0),
    console.log(`resetting to zero ,value before ${counter}`)
  };
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Plus" />
      <Button onClick={decreaseByOne} text="Minus" />
      <Button onClick={setToZero} text="Zero" />
    </div>
  )
}

export default App
