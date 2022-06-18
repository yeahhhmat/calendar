/** Components */
import Link from 'next/link';
import {Heading,Prose} from '../../components';

/** Default Component */
const LeftSideNavContent = () => {
  return (
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