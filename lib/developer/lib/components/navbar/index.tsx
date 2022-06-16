import {BrandGithub} from 'tabler-icons-react';
const NavBar = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 container mx-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">@whilethiscompiles/calendar</a>
      </div>
      <div className="flex-none">
        <BrandGithub />
      </div>
    </div>
  );
};

export default NavBar;
