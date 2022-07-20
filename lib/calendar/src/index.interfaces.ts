
/** Interfaces */
export type getDaysInMonthInterface = {
  year: string;
  months: string[];
  current: string;
}

export type commonKeyValueInterface = {
  [x: string]: string | string;
}

export type formatResponseInterface = {
  [x: string]: {
    count: number;
    collection: commonKeyValueInterface;
  };
}

export type formatResponseProps = {
  collector: formatResponseInterface;
  current: string;
  months: string[];
  year: string;
}

export type formatErrorResponseInterface = {
  [x: string]: {
    title?: string;
    body: string;
  };
}
