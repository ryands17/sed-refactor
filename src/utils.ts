type LogOptions = { type: "warn" | "error"; message: string };

export function logger(opts: LogOptions) {
  console[opts.type](opts.message);
}

export type Iter<T> = T[];
