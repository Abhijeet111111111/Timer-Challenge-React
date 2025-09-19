import {useImperativeHandle,useRef} from "react";
import {createPortal} from "react-dom";

export default function ResultDialog({ref,result,time,remainigTime,onReset}){
    const formattedResult = (remainigTime/1000).toFixed(2);
    const isLost = (remainigTime <= 0);
    const score = Math.round((1 - remainigTime/(time*1000)) * 100);
    const resultDialog = useRef()
    useImperativeHandle(ref,() =>{
        return {
            open(){
                resultDialog.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={resultDialog} className="result-modal" onClose={onReset}>
            {isLost && <h2>You Lost</h2>}
            {!isLost && <h2>Your Score: {score}</h2>}
            <p>The Target time was <strong> { time } </strong> seconds</p>
            <p>You stopped the timer with <strong> { formattedResult } </strong> seconds left </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}