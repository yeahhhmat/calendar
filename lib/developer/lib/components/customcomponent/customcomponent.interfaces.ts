export type CustomComponentProps = {
  root?: 'div' | string;
  className?: string | undefined | null;
  children: React.ReactNode;
  [x: string]: any;
 };
