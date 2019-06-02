function Index() {
	if (!Index.instance) {
		Index.instance = this;
	}

	let index;

	function* generate() {
		yield (index += 1);
	}

	return Index.instance;
}
