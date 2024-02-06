import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
    console.log('BAR')
    const [remainingTime, setRemainingTime] = useState(3000);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);
        return () => {
            clearInterval(interval);
        }
    }, [])

    return <progress value={remainingTime} max={timer} />


}