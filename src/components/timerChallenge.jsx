import {useState,useRef} from "react";
import ResultDialog from "./ResultDialog.jsx";
export default function TimerChallenge({title,timeLimit}){
    const timer = useRef();
    const dialog = useRef();
    const [timeRemainig,setTimeRemaining] = useState(timeLimit*1000)
    const isTimerActive = timeRemainig > 0 && timeRemainig < timeLimit*1000;
    let isLost = false;
    if(timeRemainig <= 0){
        clearInterval(timer.current);

        dialog.current.open();
    }
    function handleReset(){
        setTimeRemaining(timeLimit*1000)
    }

    const handleStart = ()=>{
        timer.current = setInterval(() =>{
            setTimeRemaining((prevRemainig) => (prevRemainig - 10));
        },10)
    }
    const handleStop = () =>{
        clearInterval(timer.current);
        dialog.current.open();
    }
    return (<>
        <ResultDialog onReset={handleReset} remainigTime={timeRemainig} ref={dialog} result="lost" time={timeLimit}/>
        <div className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {timeLimit} second{timeLimit>1 ? 's':''}
            </p>
            <button onClick={isTimerActive ? handleStop : handleStart}>
                {isTimerActive ? 'Stop' : 'Start'} Challenge
            </button>
            {(isTimerActive) ? <p className="active">Timer is running ...</p> : <p>Timer Inactive</p>}
        </div>
        </>
    )
}