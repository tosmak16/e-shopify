import PasswordInput from '../PasswordInput';

describe('PasswordInput', () => {
	const component = <PasswordInput onChange={jest.fn()} id="password" />;
	it('renders', () => {
		const tree = shallow(component);

		expect(tree).toMatchSnapshot();
	});

	it('should be able to validate short password', () => {
		const onChange = jest.fn();
		const tree = shallow(<PasswordInput onChange={onChange} id="password" />);
		tree.find('TextInput').simulate('change', { target: { placeholder: 'password', value: 'secret' } });
		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				error: 'password should at least be 8 characters',
				isValid: false,
			}),
		);
	});

	it('should identify weak passwords', () => {
		const onChange = jest.fn();
		const tree = shallow(<PasswordInput onChange={onChange} id="password" showPasswordStrength />);
		tree.find('TextInput').simulate('change', { target: { placeholder: 'password', value: 'secretttt' } });
		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				passwordStrength: 'weak',
			}),
		);
	});

	it('should identify medium passwords', () => {
		const onChange = jest.fn();
		const tree = shallow(<PasswordInput onChange={onChange} id="password" showPasswordStrength />);
		tree.find('TextInput').simulate('change', { target: { placeholder: 'password', value: 'secret1!@#2' } });
		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				passwordStrength: 'medium',
			}),
		);
	});

	it('should identify strong passwords', () => {
		const onChange = jest.fn();
		const tree = shallow(<PasswordInput onChange={onChange} id="password" showPasswordStrength />);
		tree.find('TextInput').simulate('change', { target: { placeholder: 'password', value: 'secret123!@#123' } });
		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				passwordStrength: 'strong',
			}),
		);
	});

	it('should flag empty passwords', () => {
		const onChange = jest.fn();
		const tree = shallow(<PasswordInput onChange={onChange} id="password" />);
		tree.find('TextInput').simulate('change', { target: { value: '' } });
		expect(onChange).toBeCalledWith(
			expect.objectContaining({
				error: 'Password can not be empty',
				isValid: false,
			}),
		);
	});

	it('should show password visibility', () => {
		const onChange = jest.fn();
		const handleVisibilityStatus = jest.fn();
		const tree = shallow(
			<PasswordInput
				onChange={onChange}
				id="password"
				showPasswordStrength
				shouldShowVisibility
				handleVisibilityStatus={handleVisibilityStatus}
			/>
		);
		tree.find('TextInput').simulate('changePasswordVisibilityStatus');
		expect(handleVisibilityStatus).toBeCalled();
	});
});
