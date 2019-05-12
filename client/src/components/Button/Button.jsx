import classNames from 'classnames';

import styles from './Button.scss';

export const BUTTON_TYPES = {
	STANDARD: 'standard',
	WARNING: 'warning',
	DANGER: 'danger',
	WHITE: 'white',
	PLAIN: 'plain'
};

class Button extends React.PureComponent {
	getButtonTypeName = () => {
		const { buttonType } = this.props;
		return Object.values(BUTTON_TYPES).indexOf(buttonType) > 0 ? `button--${buttonType}` : 'button--standard';
	}


	getClasses = () => {
		const {
			className, ripple, bordered, disabled,
		} = this.props;
		const buttonTypeName = this.getButtonTypeName();
		const classes = [buttonTypeName, className];
		return classNames({
			'button--disabled': disabled, ripple, bordered,
		}, classes);
	}

	renderButtonText = () => {
		const { children } = this.props;
		return (children);
	}

	render() {
		const {
			disabled,
			onClick,
			icon,
			customStyles,
			className,
		} = this.props;

		const classes = this.getClasses();

		return (
			<button
				type="button"
				styleName={classes}
				className={classNames(customStyles, className)}
				onClick={onClick}
				disabled={disabled}
			>
				{icon && icon}
				{this.renderButtonText()}
			</button>
		);
	}
}

Button.propTypes = {
	buttonType: PropTypes.oneOf(Object.values(BUTTON_TYPES)),
	children: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
	customStyles: PropTypes.string,
	disabled: PropTypes.bool,
	icon: PropTypes.node,
	ripple: PropTypes.bool,
	bordered: PropTypes.bool,
};

Button.defaultProps = {
	buttonType: BUTTON_TYPES.STANDARD,
	disabled: false,
	className: '',
	customStyles: '',
	icon: null,
	ripple: false,
	bordered: false,
};

export default CSSModules(Button, styles, { allowMultiple: true });
