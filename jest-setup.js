// Import Jest Native matchers
import "@testing-library/jest-native/extend-expect";

require("react-native-reanimated/lib/commonjs/reanimated2/jestUtils").setUpTests();

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
