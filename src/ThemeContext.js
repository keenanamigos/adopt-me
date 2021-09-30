import { createContext } from "react";
// You generally should provide a default value as an argument to `createContext`
const ThemeContext = createContext(['blue', () => {}]);

export default ThemeContext;