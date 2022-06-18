/** Components */
import Link from 'next/link';
import {Heading,Prose} from '../../components';

/** Return Component */
const LeftSideNavContent = () => {
  return (
  //     <div class="drawer">
  //   <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  //   <div class="drawer-content">
  //     <!-- Page content here -->
  //     <label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label>
  //   </div>
  //   <div class="drawer-side">
  //     <label for="my-drawer" class="drawer-overlay"></label>
  //     <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
  //       <!-- Sidebar content here -->
  //       <li><a>Sidebar Item 1</a></li>
  //       <li><a>Sidebar Item 2</a></li>

  //     </ul>
  //   </div>
  // </div>
    <div className='drawer-side md:block'>
      <Prose className="pb-8">
        <hr />
      </Prose>
      <ul className="menu">
        <li>
          <Link href={'/'}>
            <a className="active rounded">Getting Started</a>
          </Link>
        </li>
        <li>
          <Link href="/documentation">
            <a className="rounded">Documentation</a>
          </Link>
        </li>
        <li>
          <Link href="/road-map">
            <a className="rounded">Road Map</a>
          </Link>
        </li>
        <li>
          <Link href="/change-log">
            <a className="rounded">Change Log</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideNavContent;
