/** Dependencies */
import * as React from 'react';
import {join} from 'lodash';

/** Interfaces */
import {AppBackgroundProps} from './appbackground.interfaces';

/** Component */
const AppBackground: React.FC<AppBackgroundProps> =  ({children, ...rest}) => {
  const Root = 'div';
  const rootStyles = join([
    // 'bg-gray-50 dark:bg-gray-800', /** bg-color */
  ], ' ');

  return (
    <Root className={rootStyles} {...rest}>
      {children}
    </Root>
  );
};

export default AppBackground;
