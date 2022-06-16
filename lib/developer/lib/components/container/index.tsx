/** Dependencies */
import * as React from 'react';

/** Interfaces */
import {ContainerProps} from './container.interfaces';

/** Component */
const Container: React.FC<ContainerProps> = ({root, children, ...rest}) => {
  const Root = (root === 'section' ? 'section' : root === 'main' ? 'main' : root === 'div' ? 'div' : 'div');
  return (
    <Root className="container mx-auto" {...rest}>
      {children}
    </Root>
  );
};

export default Container;
