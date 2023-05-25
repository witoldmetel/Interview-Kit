import { render, screen } from "@testing-library/react-native";
import React from "react";
import { useDerivedValue } from "react-native-reanimated";

import { ProgressBar } from "./ProgressBar";

jest.mock("react-native-reanimated", () => {
  const Reanimated = jest.requireActual("react-native-reanimated");

  return {
    ...Reanimated,
    useDerivedValue: jest.fn(),
    withTiming: jest.fn(),
    interpolate: jest.fn(),
  };
});

describe("ProgressBar", () => {
  it("renders the progress bar with the correct width", () => {
    useDerivedValue.mockReturnValue({ value: 0.5 });

    render(<ProgressBar step={2} totalSteps={10} />);

    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar.props.style).toEqual({
      width: "20%",
    });
  });

  it("renders the progress bar with full width when step is equal to totalSteps", () => {
    render(<ProgressBar step={5} totalSteps={5} />);

    const progressBar = screen.getByTestId("progress-bar");

    expect(progressBar.props.style).toEqual({
      width: "100%",
    });
  });
});
