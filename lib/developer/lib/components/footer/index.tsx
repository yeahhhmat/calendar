import CustomComponent from '../customcomponent';
const Footer = () => {
  return (
    <CustomComponent root="footer" className="footer p-10 bg-base-200 text-base-content">
      <div>
        <img className='h-24 w-24' src='./calendar-unicode-1F4C5.svg' alt='logo'/>
        <p>
          WhileThisCompiles
          <br />
          This project is licensed under the MIT license since 2022
        </p>
      </div>
      <div>
        <span className="footer-title">Get Involved</span>
        <a className="link link-hover" href="https://github.com/yeahhhmat/calendar" target="_blank" rel="noreferrer" >GitHub</a>
        <a className="link link-hover" href="https://github.com/yeahhhmat/calendar/issues/new" target="_blank" rel="noreferrer" >Open An Issue</a>
        <a className="link link-hover" href="https://github.com/yeahhhmat/calendar/issues" target="_blank" rel="noreferrer" >Contribute</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </CustomComponent>
  );
};

export default Footer;
