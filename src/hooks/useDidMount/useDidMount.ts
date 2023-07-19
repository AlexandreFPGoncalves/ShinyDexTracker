import { useEffect } from "react";

export const useDidMount = (arg: () => void): void => useEffect(arg, []);
