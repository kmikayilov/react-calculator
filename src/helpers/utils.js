export const operations = {
	"/": (prev, cur) => prev / cur,
	"+": (prev, cur) => prev + cur,
	x: (prev, cur) => prev * cur,
	"-": (prev, cur) => prev - cur,
	"=": (prev, cur) => cur,
};
