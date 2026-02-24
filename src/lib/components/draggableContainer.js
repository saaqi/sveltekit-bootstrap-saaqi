// function isMobile() {
//   const isAndroid = /Android/i.test(navigator.userAgent);
//   const isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
//   return isAndroid || isiOS;
// }

const hasTouchSupport = () =>
	'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const draggableContainer = (selectorID) => {
	if (hasTouchSupport()) return;

	const container = document.getElementById(selectorID);
	if (!container) return;

	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;

	const onMouseDown = (e) => {
		isDragging = true;
		startX = e.pageX - container.offsetLeft;
		scrollLeft = container.scrollLeft;
		container.classList.add('dragging');
	};

	const onMouseLeaveOrUp = () => {
		isDragging = false;
		container.classList.remove('dragging');
	};

	const onMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - container.offsetLeft;
		const walk = (x - startX) * 3;
		container.scrollLeft = scrollLeft - walk;
	};

	container.addEventListener('mousedown', onMouseDown);
	container.addEventListener('mouseleave', onMouseLeaveOrUp);
	container.addEventListener('mouseup', onMouseLeaveOrUp);
	container.addEventListener('mousemove', onMouseMove);
};
export default draggableContainer;
