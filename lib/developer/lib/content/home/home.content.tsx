import {
  Heading,
  Text,
  Prose
} from '../../components';

const HomeContent = () => (
  <>
    <Prose>
      <Heading root="h1">Getting Started</Heading>
      <Text>Getting started is easy as 1, 2, 3. The steps below we walk us through how we can implement the <code>@whilethiscompiles/calendar</code> via SDK. It should be noted there is an active endpoint available should HTTP be preferred.</Text>
    </Prose>

    <div className="alert alert-info shadow-lg my-6">
      <div className='flex items-start'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Heads up! We&apos;re in BETA under active development. To stay up to date with the latest, subscribe to our <a href="https://github.com/yeahhhmat/calendar/watchers" target="_blank" rel="noreferrer" className='link'>watch list in GitHub</a>.</span>
      </div>
    </div>
    <Prose>
      <Heading root="h2">Step 1. Install the SDK</Heading>
      <p>The package lives in the <a href="https://www.npmjs.com/package/@whilethiscompiles/calendar" target="_blank" rel="noreferrer" >NPM Registry</a>, and can be installed via <code>npm</code> or <code>yarn</code> as preferred.</p>
    </Prose>
    <div className="mockup-code my-6">
      <pre data-prefix={'%'}><code>npm i @whilethiscompiles/calendar</code></pre>
    </div>
    <Prose>
      <Heading root="h2">Step 2. Implement</Heading>
    </Prose>
    <div className="mockup-code my-6">
      <pre data-prefix={1}><code>{'import {calendar} from \'@whilethiscompiles/calendar\''}</code></pre>
      <pre data-prefix={2}><code>{' '}</code></pre>
      <pre data-prefix={3}><code>var demo = calendar(1999)</code></pre>
    </div>
  </>
);

export default HomeContent;
