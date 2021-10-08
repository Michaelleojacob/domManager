const myModule = {
	domElement({
		type = 'div',
		text = null,
		classes = null,
		attributes = null,
		events = null,
		children = null,
	}) {
		const el = document.createElement(type);

		if (classes !== null) {
			el.classList.add(...classes);
		}

		if (text !== null) {
			el.textContent = text;
		}

		if (attributes !== null) {
			for (let key in attributes) {
				el.setAttribute(key, attributes[key]);
			}
		}
		if (children !== null) {
			children.map(x => el.appendChild(x));
		}
		if (events !== null) {
			events.map(({ type, handler }) => {
				el.addEventListener(type, handler);
			});
		}
		return el;
	},
};

//! myModule.domElement = null;
//! this will ruin the modular version currently. Not sure how to fix.

// const myfunction = () => {
// 	console.log('hazzzaaaa! you clicked me!');
// };

// const container = document.querySelector('#container');
// container.appendChild(
// 	myModule.domElement({
// 		type: 'button',
// 		text: 'hello',
// 		classes: ['class1', 'class2'],
// 		attributes: { style: 'background:pink' },
// 		events: [{ type: 'click', handler: myfunction }],
// 		children: [myModule.domElement({ text: 'world' })],
// 	})
// );
