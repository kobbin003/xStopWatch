export function timeFormatter(sec) {
	let min = 0,
		hr = 0;

	if (sec < 60) {
		return {
			sec: String(sec).padStart(2, "0"),
			min,
			hr,
		};
	}

	min = Math.floor(sec / 60);

	if (min < 60) {
		sec = sec % 60;
		return {
			sec: String(sec).padStart(2, "0"),
			min,
			hr,
		};
	}

	hr = Math.floor(min / 60);
	min = min % 60;
	if (min > 60) {
		min = Math.floor(min / 60);
		sec = min % 60;
	} else {
		sec = min;
	}

	return {
		sec: String(sec).padStart(2, "0"),
		min,
		hr,
	};
}
