export type callback<T = void, E = Error> = (err: E | null, data: T | null) => void;
