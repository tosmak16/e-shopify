import EmailInput from '../EmailInput';

describe('EmailInput', () => {
	const initialProps = {
		id: 'email',
		name: 'email',
		updateEmail: jest.fn(),
	};
	it('renders', () => {
		const tree = shallow(
			<EmailInput
				{...initialProps}
			/>
		);
		expect(tree).toMatchSnapshot();
	});

	it('should call updateEmail function when inputChange method is called with valid email value', () => {
		const tree = shallow(
			<EmailInput
				{...initialProps}
			/>
		);

		const event = {
			target: {
				value: 'test@mobiliti.com'
			}
		};
		const textInputObject = tree.find('TextInput');
		textInputObject.props().onChange(event);
		expect(initialProps.updateEmail).toBeCalled();
	});
});
