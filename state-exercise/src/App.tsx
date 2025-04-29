import LightToggle from './components/LightToggle';
import LottoNumbers from './components/LottoNumbers';
import ClickCounter from './components/ClickCounter';
import { useState } from 'react';

const App = () => {
  /* Your states here */
  const [light, setLight] = useState<boolean>(false)
  const [counter, setCounter] = useState<number>(0)

  const [nums,SetNums] = useState<number[]>([])


  const handleNums = () => {
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }    

    const randomized = [getRandomInt(1, 7), getRandomInt(1, 7), getRandomInt(1, 7), getRandomInt(1, 7), getRandomInt(1, 7), getRandomInt(1, 7), getRandomInt(1, 7)]
    SetNums(randomized)
  }

  const handleLights = () => {
     setLight(!light)
  }

  const handleCounter = () => {
    setCounter(counter=> counter + 1)
  }

  return (
    <div>
      <h2>Light Toggle </h2>
      <LightToggle isLight={light} onToggle={handleLights} />
      <div
        style={{ backgroundColor: light ? "white" : "black", boxShadow: light ? "5px 5px 5px 5px white" : "0 0 0 0", color: light ? "black" : "white"}}
      >Change this background color using the style attribute --- {light ? "on" : "off"}</div>

      <h2>Lotto Numbers</h2>
      <LottoNumbers onRandom={handleNums}/>
      <div className="output">And the Lotto Nums are... 
        <ul>
          {nums.map(number => 
            <li>
              {number}
            </li>
          )}
        </ul>
      </div>

      <h2>Click Counter</h2>
      <ClickCounter onCount={handleCounter} />
      <div className="output">Your Counter: {counter}</div>
    </div>
  );
};

export default App;