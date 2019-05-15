import LoadingSpinner from '../LoadingSpinner';

describe('Button', () => {
	it('renders', () => {
		const subject = shallow(<LoadingSpinner show />);

		expect(subject.html()).toEqual('<div class="loading-spinner  loading-ring"><span></span><span></span><span></span></div>');
	});
	it('is hideable when "show" set to false', () => {
		const subject = shallow(<LoadingSpinner show />);
		expect(subject.html()).toEqual('<div class="loading-spinner  loading-ring"><span></span><span></span><span></span></div>');
		subject.setProps({ show: false });
		expect(subject.html()).toEqual('');
	});
});
