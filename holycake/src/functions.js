function reArrrangeEl = (el) => {
	const firstChild = el.childNodes[1]
	const secondChild = el.childNodes[0]
	return [firstChild, secondChild]
}
