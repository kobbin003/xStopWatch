export function timeFormatter(seconds) {
	const hr = Math.floor(seconds / 3600);
	const min = Math.floor((seconds % 3600) / 60);
	const sec = Math.floor((seconds % 3600) % 60);

	return {
		hr,
		min: hr > 0 ? String(min).padStart(2, "0") : min,
		sec: String(sec).padStart(2, "0"),
	};
}
// export function timeFormatter(sec) {
// 	let min = 0,
// 		hr = 0;

// 	if (sec < 60) {
// 		return {
// 			sec: String(sec).padStart(2, "0"),
// 			min,
// 			hr,
// 		};
// 	}

// 	min = Math.floor(sec / 60);

// 	if (min < 60) {
// 		sec = sec % 60;
// 		return {
// 			sec: String(sec).padStart(2, "0"),
// 			min,
// 			hr,
// 		};
// 	}

// 	hr = Math.floor(min / 60);
// 	min = min % 60;
// 	if (min > 60) {
// 		min = Math.floor(min / 60);
// 		sec = min % 60;
// 	} else {
// 		sec = min;
// 	}

// 	return {
// 		sec: String(sec).padStart(2, "0"),
// 		min,
// 		hr,
// 	};
// }
