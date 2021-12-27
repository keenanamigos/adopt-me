import { createContext } from "react";
// You generally should provide a default value as an argument to `createContext`
const ThemeContext = createContext<[string, (theme: string) => void]>(['blue', () => {}]);

export default ThemeContext;