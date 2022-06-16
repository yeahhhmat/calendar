/** Dependencies */
import * as React from 'react';
import clsx from 'clsx';

/** Interfaces */
import {ProseProps} from './prose.interfaces';

const Prose: React.FC<ProseProps> = ({root, className, children, ...rest}) => {
  const Root = root ? root : 'div';
  return (
    <Root className={clsx('prose', className && className)} {...rest}>
      {children}
    </Root>
  );
};

export default Prose;
