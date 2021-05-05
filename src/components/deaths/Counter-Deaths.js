import React, { useEffect, useState, useContext } from 'react';
import { CounterDeathsContext } from "../../contexts/CounterDeathsContext";

import '../../assets/scss/counter-deaths.scss';

const CounterDeaths = () => {
    
    const { counterDeaths, doneFetchCounterDeaths, counterDuration } = useContext(CounterDeathsContext);

    const [count, setCount] = useState("0")

    useEffect(() => {
        let start = 0;
        const end = parseInt(counterDeaths)
        if (start === end) return;
    
        let totalMilSecDur = parseInt(counterDuration);
        let incrementTime = (totalMilSecDur / end) * 1000;
    
        let timer = setInterval(() => {
          start += 1;
          setCount(String(start) + counterDeaths.toString().substring(3))
          if (start === end) clearInterval(timer)       
        }, incrementTime);

      }, [counterDeaths, counterDuration]);

    return (
        <p className='counter'>Total deaths: {count}</p>
    )
}

export default CounterDeaths;