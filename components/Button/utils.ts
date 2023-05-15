import { StyleSheet } from 'react-native';

export const getButtonStyle = (
	variant: 'text' | 'contained' | 'outlined',
	disabled = false
) => {
	let buttonStyle, textStyle;

	switch (variant) {
		case 'contained':
			buttonStyle = disabled
				? styles.disabledContainedButton
				: styles.containedButton;
			textStyle = disabled
				? styles.disabledContainedButtonText
				: styles.containedButtonText;
			break;
		case 'outlined':
			buttonStyle = disabled
				? styles.disabledOutlinedButton
				: styles.outlinedButton;
			textStyle = disabled
				? styles.disabledOutlinedButtonText
				: styles.outlinedButtonText;
			break;
		case 'text':
		default:
			buttonStyle = disabled ? styles.disabledTextButton : styles.textButton;
			textStyle = disabled
				? styles.disabledTextButtonText
				: styles.textButtonText;
			break;
	}

	return {
		buttonStyle,
		textStyle,
	};
};

const styles = StyleSheet.create({
	textButton: {
		backgroundColor: 'transparent',
	},
	textButtonText: {
		color: '#333',
		fontSize: 16,
		fontWeight: 'bold',
	},
	disabledTextButton: {
		backgroundColor: 'transparent',
		opacity: 0.5,
	},
	disabledTextButtonText: {
		color: '#333',
		fontSize: 16,
		fontWeight: 'bold',
		opacity: 0.5,
	},
	containedButton: {
		backgroundColor: '#2ecc71',
	},
	containedButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	disabledContainedButton: {
		backgroundColor: 'gray',
		opacity: 0.5,
	},
	disabledContainedButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
		opacity: 0.7,
	},
	outlinedButton: {
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: '#2ecc71',
	},
	outlinedButtonText: {
		color: '#2ecc71',
		fontSize: 16,
		fontWeight: 'bold',
	},
	disabledOutlinedButton: {
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: 'gray',
		opacity: 0.5,
	},
	disabledOutlinedButtonText: {
		color: 'gray',
		fontSize: 16,
		fontWeight: 'bold',
		opacity: 0.5,
	},
});
