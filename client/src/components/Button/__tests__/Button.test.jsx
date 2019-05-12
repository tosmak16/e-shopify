import Button, { BUTTON_TYPES } from '../Button';

describe('Button', () => {
	it('contains the correct text', () => {
		const tree = shallow(<Button onClick={() => {}}>Hello world!</Button>);
		expect(tree.text()).toEqual('Hello world!');
	});
	it('emits correct action upon click', () => {
		let pass = false;
		const tree = shallow(<Button onClick={() => { pass = true; }}>Hello world!</Button>);
		tree.find('button').simulate('click');
		expect(pass).toEqual(true);
	});

	it('renders with icon', () => {
		const tree = shallow(<Button icon="icon text" onClick={() => { }}>Hello world!</Button>);
		expect(tree).toMatchSnapshot();
	});

	it('renders with other button type', () => {
		const tree = shallow(<Button buttonType={BUTTON_TYPES.PLAIN} icon="icon text" onClick={() => { }}>Hello world!</Button>);
		expect(tree).toMatchSnapshot();
	});
});
