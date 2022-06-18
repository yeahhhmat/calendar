/** Dependencies */
import * as React from 'react';

import {BrandGithub, Menu, Minimize} from 'tabler-icons-react';
import {useStore} from '../../../../state';

/** Hooks */
import {useClickOutside} from '../../reacthaiku';

const NavBar = () => {
  // Extract State //
  const mobileNavStatus = useStore((state) => state.mobileNav);
  const openMobileNav = useStore((state) => state.openMobileNav);
  const closeMobileNav = useStore((state) => state.closeMobileNav);
    
  const handleMenuClick = () => {
    mobileNavStatus.isClosed ? openMobileNav() : closeMobileNav();
  }


  return (
    <div className='bg-base-200 w-full sticky top-0 z-20'>
      <div className="navbar px-6 lg:container mx-auto">
        <button id="safe-nav-btn" className="lg:hidden cursor-pointer btn btn-ghost mr-2" type="button" onClick={handleMenuClick}>
        {mobileNavStatus.isClosed ? <Menu id="safe-nav-icon"/> : <Minimize id="safe-nav-icon"/>}
        </button>
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">@whilethiscompiles/calendar</a>
        </div>
        <div className="flex-none">
          <a className="btn btn-ghost" href="https://github.com/yeahhhmat/calendar" target="_blank" rel="noreferrer">
            <BrandGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
