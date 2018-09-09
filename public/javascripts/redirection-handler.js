const RedirectionHandler = {
	differedRedirectionTo: differedRedirectionTo
};

function differedRedirectionTo(path, milliseconds) {
	if (path) {
		setTimeout(function deferredRedirectionCallback() {
			window.location = path;
		}, milliseconds);
	}
	else {
		throw new Error('`path` cannot be null or undefined. Please enter a valid path.');
	}
}
