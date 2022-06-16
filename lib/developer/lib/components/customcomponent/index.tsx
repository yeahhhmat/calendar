/** Dependencies */
import * as React from 'react';

/** Interfaces */
import {CustomComponentProps} from './customcomponent.interfaces';

/** Component */
const CustomComponent: React.FC<CustomComponentProps> = ({root, children, className = '', ...rest}) => {
  const rootElement = (root || 'div');
  const Root = rootElement as keyof JSX.IntrinsicElements;

  return (
    <Root className={className} {...rest}>
      {children}
    </Root>
  );
};

export default CustomComponent;
