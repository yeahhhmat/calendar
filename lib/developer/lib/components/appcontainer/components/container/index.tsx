/** Dependencies */
import * as React from 'react';

/** Components */
import CustomComponent from '../../../customcomponent';

/** Interfaces */
import {ContainerProps} from './container.interfaces';

/** State */
import {useStore} from '../../../../state';

/** Hooks */
import {useMediaQuery, useClickOutside} from './container.index';
import {useWindowSize} from './container.hooks';

/** Default Component */
const Container: React.FC<ContainerProps> = ({root, leftSideNav, content, ...rest}) => {
  const ref = React.useRef(null);
  const {height} = useWindowSize();
  const mobileNavStatus = useStore((state) => state.mobileNav);
  const openMobileNav = useStore((state) => state.openMobileNav);
  const closeMobileNav = useStore((state) => state.closeMobileNav);
  const breakpoint = useMediaQuery('(max-width: 1024px)'); /** width < 1024 === true */

  React.useEffect(() => {
    if(!breakpoint) {
      openMobileNav(true);
    } else {
      closeMobileNav(true);
    }
  }, [breakpoint])
  
  const handleClickOutside = () => {
    closeMobileNav(true)
  };

  useClickOutside(ref, handleClickOutside);
  
  const Root = (root === 'section' ? 'section' : root === 'main' ? 'main' : root === 'div' ? 'div' : 'div');
  return (
    <Root className="relative flex lg:container lg:mx-auto px-6 lg:px-4" style={{minHeight: (height + 100) + 'px'}} {...rest}>
      { mobileNavStatus.isOpen && (
        <div className="bg-base-100 w-3/4 md:w-1/2 absolute h-full z-10 lg:static lg:w-1/4 pr-8" ref={ref}>
          <CustomComponent className="sticky top-16 z-10" style={{minHeight: (height - 100) + 'px'}}>
            {leftSideNav}
          </CustomComponent>
        </div>
      )}
      <CustomComponent className="w-full lg:w-3/4 xl:w-2/4" style={{minHeight: (height + 100) + 'px'}}>
        {content}
      </CustomComponent>
    </Root>
  );
};

export default Container;
