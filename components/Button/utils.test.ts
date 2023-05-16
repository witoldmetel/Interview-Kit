import { getButtonStyle } from "./utils";

describe("getButtonStyle", () => {
  it("returns text button styles by default", () => {
    const styles = getButtonStyle("text");

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "transparent",
    });

    expect(styles.textStyle).toEqual({
      color: "#333",
      fontSize: 16,
      fontWeight: "bold",
    });
  });

  it("returns contained button styles when variant is 'contained'", () => {
    const styles = getButtonStyle("contained");

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "#2ecc71",
    });

    expect(styles.textStyle).toEqual({
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    });
  });

  it("returns outlined button styles when variant is 'outlined'", () => {
    const styles = getButtonStyle("outlined");

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "transparent",
      borderWidth: 2,
      borderColor: "#2ecc71",
    });

    expect(styles.textStyle).toEqual({
      color: "#2ecc71",
      fontSize: 16,
      fontWeight: "bold",
    });
  });

  it("returns disabled button styles when disabled is true", () => {
    const styles = getButtonStyle("text", true);

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "transparent",
      opacity: 0.5,
    });

    expect(styles.textStyle).toEqual({
      color: "#333",
      fontSize: 16,
      fontWeight: "bold",
      opacity: 0.5,
    });
  });

  // Add more test cases to cover all possible scenarios...
});
