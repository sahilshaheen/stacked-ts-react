import { createContext } from "react"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const TokenContext = createContext<[string, (token: string) => void]>(["", () => {}]);

export default TokenContext;