import {useState,useRef} from "react";
import TimerChallenge from "./timerChallenge.jsx";
export default function Player() {
    const playerName = useRef();
    const [enteredPlayerName,setEnteredPlayerName] = useState(null);
    const handleClick = () =>{

        setEnteredPlayerName(playerName.current.value);
        playerName.current.value = '';
    }
    return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
        <section id="challenges">
            <TimerChallenge title="Easy" timeLimit={1}/>
            <TimerChallenge title="Not Easy" timeLimit={5}/>
            <TimerChallenge title="Hard" timeLimit={10}/>
            <TimerChallenge title="Pros Only" timeLimit={15}/>
        </section>
    </section>
  );
}
