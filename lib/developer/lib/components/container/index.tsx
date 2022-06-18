/** Dependencies */
import * as React from 'react';

/** Components */
import CustomComponent from '../customcomponent';

/** Interfaces */
import {ContainerProps} from './container.interfaces';

/** Default Component */
const Container: React.FC<ContainerProps> = ({root, leftSideNav, content, ...rest}) => {
  const Root = (root === 'section' ? 'section' : root === 'main' ? 'main' : root === 'div' ? 'div' : 'div');
  return (
    <Root className="flex lg:container lg:mx-auto px-6 pt-12 lg:px-4" {...rest}>
      <CustomComponent className="hidden md:block md:w-1/4 pr-4">
        <CustomComponent className="sticky top-16">
          {leftSideNav}
        </CustomComponent>
      </CustomComponent>
      <CustomComponent className="w-full md:w-3/4 lg:w-2/4">
        {content}
      </CustomComponent>
    </Root>
  );
};

export default Container;
