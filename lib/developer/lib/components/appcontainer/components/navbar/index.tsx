import {BrandGithub, Menu} from 'tabler-icons-react';
import {useStore} from '../../../../state';
const NavBar = () => {
  // Extract State //
  const mobileNavStatus = useStore((state) => state.mobileNav);
  const openMobileNav = useStore((state) => state.openMobileNav);
  const closeMobileNav = useStore((state) => state.closeMobileNav);
  
  const handleMenuClick = () => {
    mobileNavStatus.isClosed ? openMobileNav() : closeMobileNav()
  }

  return (
    <div className="navbar bg-base-100 sticky top-0 z-20 px-6 lg:container mx-auto">
      <button className="lg:hidden cursor-pointer btn btn-ghost mr-2" type="button" onClick={handleMenuClick}>
        <Menu />
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
  );
};

export default NavBar;
