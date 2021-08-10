export function slideDraw(node, { isOpen, duration = 300 }) {
	//Initialise
	let initialWidth = node.offsetWidth;

	node.style.width = isOpen ? 'auto' : '0';
	node.style.overflow = 'hidden';

	//Animation

	let animation = node.animate(
		[
			{
				width: 0
			},
			{
				width: `${initialWidth}px`
			}
		],
		{
			duration,
			fill: 'both',
			direction: isOpen ? 'reverse' : 'normal'
		}
	);

	animation.pause();

	// Check when animation is finished
	animation.onfinish = ({ currentTime }) => {
		if (!currentTime) {
			animation.reverse();
			animation.pause();
		}

		// Dispatch event when animation is finished
		node.dispatchEvent(new CustomEvent('animationEnd'));
	};

	return {
		update: () => {
			animation.currentTime ? animation.reverse() : animation.play();
		}
	};
}
