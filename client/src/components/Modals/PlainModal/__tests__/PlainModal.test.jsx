import PlainModal from '../PlainModal';

describe('PlainModal', () => {
	it('renders without close icon', () => {
		const tree = shallow(
			<PlainModal>hello</PlainModal>);
		expect(tree).toMatchSnapshot();
		expect(tree.find('.modal__close-icon').length).toBe(0);
	});

	it('renders with close icon', () => {
		const tree = shallow(
			<PlainModal isCloseIconVisible />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('.modal__close-icon').length).toBe(1);
	});

	it('renders with modal--visible class when shouldModalBeVisible is true', () => {
		const tree = shallow(
			<PlainModal shouldModalBeVisible />);
		expect(tree).toMatchSnapshot();
		expect(tree.find('.modal--visible').length).toBe(1);
	});

	it('renders without modal--hidden class when shouldModalBeVisible is false', () => {
		const tree = shallow(
			<PlainModal>hello</PlainModal>);
		expect(tree.find('.modal--hidden').length).toBe(1);
	});

	it('should set isModalVisible to false when modal__close-icon is clicked', () => {
		let isModalVisible = true;
		const tree = shallow(
			<PlainModal
				isCloseIconVisible
				shouldModalBeVisible
				exposeIsModalVisible={(status) => { isModalVisible = status; }}
			/>);
		tree.find('.modal__close-icon').simulate('click');
		expect(isModalVisible).toBeFalsy();
	});

	it('should set isModalVisible to false when modal is clicked', () => {
		let isModalVisible = true;
		const tree = shallow(
			<PlainModal
				isCloseIconVisible
				shouldModalBeVisible
				exposeIsModalVisible={(status) => { isModalVisible = status; }}
			/>);
		tree.find('.modal').simulate('click', { stopPropagation: () => undefined, target: { id: '.modal' } });
		tree.find('.modal').simulate('click', { stopPropagation: () => undefined, target: { id: 'modal' } });
		expect(isModalVisible).toBeFalsy();
	});
	it('should maitain isModalVisible to be true when modal__container is clicked', () => {
		let isModalVisible = true;
		const tree = shallow(
			<PlainModal
				isCloseIconVisible
				shouldModalBeVisible
				exposeIsModalVisible={(status) => { isModalVisible = status; }}
			/>);
		tree.find('.modal__container').simulate('click', { target: { id: '.modal__container' } });
		expect(isModalVisible).toBeTruthy();
	});
});
