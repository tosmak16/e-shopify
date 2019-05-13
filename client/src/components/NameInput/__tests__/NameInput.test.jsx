import NameInput from '../NameInput';
import { INPUT_TYPES } from '../../TextInput/TextInput';

describe('NameInput', () => {
	it('renders', () => {
		const tree = shallow(<NameInput id="test-input" onChange={jest.fn()} />);

		expect(tree).toMatchSnapshot();
	});

	it('should be able identify valid text', () => {
		const onChange = jest.fn();
		const tree = shallow(
			<NameInput onChange={onChange} isValid={false} value="" id="test-input" />
		);
		tree.find('#test-input').simulate('change', {
			target: {
				value: 'John',
				type: INPUT_TYPES.TEXT
			}
		});

		expect(onChange).toBeCalledWith({
			error: '',
			isValid: true,
			value: 'John'
		});
	});

	it('should validate text emptyness', () => {
		const onChange = jest.fn();
		const tree = shallow(
			<NameInput
				type={INPUT_TYPES.TEXT}
				onChange={onChange}
				isValid={false}
				value=""
				id="test-input"
			/>
		);
		tree.find('#test-input').simulate('change', {
			target: {
				value: '',
				placeholder: 'First name',
				type: INPUT_TYPES.TEXT
			}
		});

		expect(onChange).toBeCalledWith({
			error: 'First name can not be empty',
			isValid: false,
			value: ''
		});
	});

	it('should validate text less than two characters', () => {
		const onChange = jest.fn();
		const tree = shallow(
			<NameInput
				type={INPUT_TYPES.TEXT}
				onChange={onChange}
				isValid={false}
				value=""
				id="test-input"
			/>
		);
		tree.find('#test-input').simulate('change', {
			target: {
				value: 'J',
				placeholder: 'First name',
				type: INPUT_TYPES.TEXT
			}
		});

		expect(onChange).toBeCalledWith({
			error: 'First name should at least be two characters',
			isValid: false,
			value: 'J'
		});
	});

	it('should validate invalid characters in text', () => {
		const onChange = jest.fn();
		const tree = shallow(
			<NameInput
				type={INPUT_TYPES.TEXT}
				onChange={onChange}
				isValid={false}
				value=""
				id="test-input"
			/>
		);
		tree.find('#test-input').simulate('change', {
			target: {
				value: 'J@##  1',
				placeholder: 'First name',
				type: INPUT_TYPES.TEXT
			}
		});
		expect(onChange).toBeCalledWith({
			error: 'First name is invalid',
			isValid: false,
			value: 'J@##  1'
		});
	});

	it('should default to `This field` in case a placeholder is not provided', () => {
		const onChange = jest.fn();
		const tree = shallow(
			<NameInput
				type={INPUT_TYPES.TEXT}
				onChange={onChange}
				isValid={false}
				value=""
				id="test-input"
			/>
		);
		tree.find('#test-input').simulate('change', {
			target: {
				value: '123',
				type: INPUT_TYPES.TEXT
			}
		});
		expect(onChange).toBeCalledWith({
			error: 'This field is invalid',
			isValid: false,
			value: '123'
		});
	});
});
