import { render, fireEvent, screen } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

import { Button } from "./Button";

describe("Button", () => {
  const onPressMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders text correctly", () => {
    render(<Button onPress={onPressMock} text="Click me" />);

    const buttonText = screen.getByText("Click me");

    expect(buttonText).toBeTruthy();
  });

  it("renders children correctly", () => {
    render(
      <Button onPress={onPressMock}>
        <Text>Custom Text</Text>
      </Button>
    );
    const customText = screen.getByText("Custom Text");

    expect(customText).toBeTruthy();
  });

  it("calls onPress callback when pressed", () => {
    render(<Button onPress={onPressMock} text="Click me" />);
    const button = screen.getByTestId("button");

    fireEvent.press(button);

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled prop is true", () => {
    render(<Button onPress={onPressMock} text="Click me" disabled />);
    const button = screen.getByTestId("button");

    expect(button.props.accessibilityState.disabled).toBeTruthy();
  });

  it("shows loading indicator when loading prop is true", () => {
    render(<Button onPress={onPressMock} text="Click me" loading />);
    const loadingIndicator = screen.getByTestId("loading-indcator");

    expect(loadingIndicator).toBeTruthy();
  });

  it("applies custom styles correctly", () => {
    const customStyle = { backgroundColor: "red" };
    render(
      <Button onPress={onPressMock} text="Click me" style={customStyle} />
    );
    const button = screen.getByTestId("button");

    expect(button.props.style).toContainEqual(customStyle);
  });
});
