import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

import { getButtonStyle } from './utils';

interface ButtonProps {
	text: string;
	variant?: 'text' | 'contained' | 'outlined';
	disabled?: boolean;

	onPress: VoidFunction;
}

export const Button = ({
	onPress,
	text,
	variant = 'text',
	disabled,
}: ButtonProps) => {
	const { buttonStyle, textStyle } = getButtonStyle(variant, disabled);

	return (
		<Pressable
			style={({ pressed }) => [
				styles.button,
				buttonStyle,
				{ opacity: pressed ? 0.6 : 1 },
			]}
			onPress={onPress}
			disabled={disabled}
		>
			<Text style={textStyle}>{text}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 8,
		elevation: 2,
	},
});
