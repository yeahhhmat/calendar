export type isValidYearType = boolean | {
  [x: string]: {
    title?: string;
    body: string;
  };
}
