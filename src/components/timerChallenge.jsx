import {useState,useRef} from "react";
export default function TimerChallenge({title,timeLimit}){
    const timer = useRef();
    const [startedTimer,setStartedTimer] = useState(false);
    const [timerExpired,setTimerExpired] = useState(false);
    const handleStart = ()=>{
        timer.current = setTimeout(() => setTimerExpired(true),timeLimit*1000)
        setStartedTimer(true);
    }
    const handleStop = () =>{
        clearTimeout(timer.current);
        setStartedTimer(false);
        setTimerExpired(false);
    }
    return (
        <div className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost</p>}
            <p className="challenge-time">
                {timeLimit} second{timeLimit>1 ? 's':''}
            </p>
            <button onClick={startedTimer ? handleStop : handleStart}>
                {startedTimer ? 'Stop' : 'Start'} Challenge
            </button>
            {startedTimer && <p className="active">Timer is running ...</p>}
        </div>
    )
}