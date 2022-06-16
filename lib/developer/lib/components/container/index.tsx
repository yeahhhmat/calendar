/** Dependencies */
import * as React from 'react';

/** Interfaces */
import {ContainerProps} from './container.interfaces';

/** Component */
const Container: React.FC<ContainerProps> = ({root, leftSideNav, content, ...rest}) => {
  const Root = (root === 'section' ? 'section' : root === 'main' ? 'main' : root === 'div' ? 'div' : 'div');
  return (
    <Root className="container mx-auto" {...rest}>
      <div className="container mx-auto px-4 flex pt-12">
        {leftSideNav && (
          <div className="w-1/4 pr-4">
            <div className="sticky top-16">
              {leftSideNav}
            </div>
          </div>
        )}
        <div className="w-1/2">
          {content}
        </div>
      </div>
    </Root>
  );
};

export default Container;
