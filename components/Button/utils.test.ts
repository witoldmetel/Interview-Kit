import { getButtonStyle } from "./utils";

describe("getButtonStyle", () => {
  it("returns text button styles by default", () => {
    const styles = getButtonStyle("text");

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "transparent",
      opacity: 1,
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
      backgroundColor: "#F3E7D1",
      opacity: 1,
    });

    expect(styles.textStyle).toEqual({
      color: "#612e3a",
      fontSize: 16,
      fontWeight: "bold",
    });
  });

  it("returns outlined button styles when variant is 'outlined'", () => {
    const styles = getButtonStyle("outlined");

    expect(styles.buttonStyle).toEqual({
      backgroundColor: "white",
      opacity: 1,
    });

    expect(styles.textStyle).toEqual({
      color: "#612e3a",
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
    });
  });
});
