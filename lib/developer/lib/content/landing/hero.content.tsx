import Link from 'next/link';
import {Prose} from '../../components';

const LandingHeroContent = () => (

  <div className="hero min-h-screen relative">
    <div className="hero-content z-10">
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
    <div className='absolute bottom-0 w-full'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='w-full'>
        <path
          className="fill-base-200"
          d="M0 128l180 96L360 96h180l180 128L900 64l180 192 180 32 180-64v96H0z"
        ></path>
      </svg>
    </div>
  </div>

);

export default LandingHeroContent;
