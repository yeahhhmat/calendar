import Link from 'next/link';
import {Prose} from '../../components';

const LandingHeroContent = () => (
  <div className="hero min-h-screen">
    <div className="hero-content">
      <div>
        <div className="flex items-center">
          <div className=''>
            <h1 className="text-5xl font-bold pr-4 lg:pr-8">Here&apos;s A Calendar!</h1>
            <small className='text-xs'>By whilethiscompiles and <a className="link" href="https://github.com/yeahhhmat/calendar/graphs/contributors" target="_blank" rel="noreferrer">company</a>.</small>
          </div>
          <img src="./cat-roomba.gif" alt="whilethiscompiles"/>
        </div>
        <Prose>
          <p className="pt-6">
            A user friendly SDK & API that returns a list of calendar dates for a given year in JSON format. Built with <a href="https://day.js.org" target="_blank" rel="noreferrer">day.js</a> & typescript.
          </p>
        </Prose>
        <div className="mockup-code my-6">
          <pre data-prefix={'%'}><code>npm i @whilethiscompiles/calendar</code></pre>
        </div>
        <Link href="/home">
          <button className="btn btn-primary" type="button">Read The Docs</button>
        </Link>

      </div>
    </div>
  </div>

);

export default LandingHeroContent;
