class domFactory {
	static domElement({
		type = 'div',
		classes = null,
		attributes = null,
		text = null,
		children = null,
		events = null,
	}) {
		const el = document.createElement(type);
		if (classes !== null) {
			el.classList.add(...classes);
		}
		el.textContent = text;
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
	}
}

// const myfunction = () => {
// 	console.log('hazzzaaaa! you clicked me!');
// };

// const container = document.querySelector('#container');
// container.appendChild(
// 	domFactory.domElement({
// 		type: 'button',
// 		text: 'hello',
// 		classes: ['class1', 'class2'],
// 		attributes: { style: 'background:pink' },
// 		events: [{ type: 'click', handler: myfunction }],
// 		children: [domFactory.domElement({ text: 'world' })],
// 	})
// );
