import { useEffect, useState } from "react";
import "./App.css";
import { timeFormatter } from "./utils/timeFormatter";

function App() {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const { hr, min, sec } = timeFormatter(seconds);
	const handleStart = () => {
		setIsRunning(true);
	};

	const handleReset = () => {
		setIsRunning(false);
		setSeconds(0);
	};

	const handleStop = () => {
		setIsRunning(false);
	};

	useEffect(() => {
		let timer;
		if (isRunning) {
			//increment seconds
			timer = setInterval(() => {
				console.log("incrementing every second...");
				setSeconds((prev) => prev + 1);
			}, 1000);
		}

		return () => {
			if (timer) clearInterval(timer);
		};
	}, [isRunning]);

	return (
		<div>
			<h1>Stopwatch</h1>
			<div>
				<span>Time: </span>
				{hr > 0 && <span>{hr}:</span>}
				{<span>{min}:</span>}
				{<span>{sec}</span>}
			</div>
			<div>
				{!isRunning ? (
					<button onClick={handleStart}>Start</button>
				) : (
					<button onClick={handleStop}>Stop</button>
				)}
				<button onClick={handleReset}>Reset</button>
			</div>
		</div>
	);
}

export default App;
