if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', afterDOMLoaded); else afterDOMLoaded();

function afterDOMLoaded() {
	console.log('YouTube Ad Card Skip loaded')
	const observer = new MutationObserver(mutations => {
		for (let i = 0; i < mutations.length; i++) {
			for (let j = 0; j < mutations[i].addedNodes.length; j++) {
				let e = mutations[i].addedNodes[j]
				let r = $(e).find('button.ytp-ad-skip-button-modern.ytp-button')
				if (r.length) r[0].click()
			}
		}
	});

	observer.observe(document.body, {
		childList: true,
		subtree: true
	});
}