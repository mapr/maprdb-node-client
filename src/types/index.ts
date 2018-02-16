export type Callback<T = any, E = Error> = (err: E | null, data?: T | null) => void;
