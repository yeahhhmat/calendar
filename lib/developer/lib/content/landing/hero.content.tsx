import Link from 'next/link';
import {Prose} from '../../components';

const LandingHeroContent = () => (
  <div className="hero min-h-screen">
    <div className="hero-content">
      <div>
        <div className="flex items-baseline">
          <h1 className="text-5xl font-bold pr-2">Here&apos;s A Calendar!</h1>
          <img src="./cat-roomba.gif" alt="whilethiscompiles"/>
        </div>
        <Prose>
          <p className="pt-6">
            A user friendly SDK & API that returns a list of calendar dates for a given year in JSON format. Built with <a href="https://day.js.org" target="_blank" rel="noreferrer">day.js</a> & typescript. Brought to you by whilethiscompiles and <a href="https://github.com/yeahhhmat/calendar/graphs/contributors" target="_blank" rel="noreferrer">company</a>.
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
