export type ContainerProps = {
  root?: 'div' | 'main' | 'section';
  leftSideNav?: React.ReactNode;
  content: React.ReactNode;
  [x: string]: any;
 };
