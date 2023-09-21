import ReactGA from 'react-ga4';
function About() {
  ReactGA.send({
    hitType: 'pageview',
    page: '/about',
    title: 'About Page',
  });
  return <div>About</div>;
}
export default About;
