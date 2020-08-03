const map = {
	iClicker     : 'iClicker',
	groupWork    : 'Group Work',
	heavyReading : 'Heavy Reading',
	textbook     : 'Textbook Required',
	curve        : 'Class Curved'
};

export function mapDetailToLabel(detail) {
	return map[detail];
}
