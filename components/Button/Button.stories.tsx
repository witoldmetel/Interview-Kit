import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button } from './Button';

const ButtonMeta: ComponentMeta<typeof Button> = {
	title: 'Basic Button',
	component: Button,
	argTypes: {
		onPress: { action: 'pressed the button' },
	},
	args: {
		text: 'Press Me!',
	},
};

export default ButtonMeta;

type ButtonStory = ComponentStory<typeof Button>;

export const Text: ButtonStory = (args) => <Button {...args} />;
export const Contained: ButtonStory = (args) => (
	<Button variant="contained" {...args} />
);
export const Outlined: ButtonStory = (args) => (
	<Button variant="outlined" {...args} />
);
