import React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import './About.scss';

const About = props => {
  return (
    <Layout className="About">
      <h1>About Shutterwax</h1>
      <h2 className="visually-hidden">Band Photos</h2>
      <section className="band-photos">
        <div 
          style={{backgroundImage: "url('/images/band/jeff.jpg')"}}
        >
          <img 
            src="/images/band/jeff.jpg" 
            alt="Jeff" 
            className="visually-hidden"
          />
          <div className="member-bio">
            <p><strong>Jeff Brayne:</strong> Co-founder of Shutterwax. Lead and rhythm guitars, drums, keys, bass, vocals.</p>
          </div>
        </div>
        <div
          style={{backgroundImage: "url('/images/band/jessica.jpg')"}}
        >
          <img 
            src="/images/band/jessica.jpg" 
            alt="Jessica" 
            className="visually-hidden"
          />
          <div className="member-bio">
            <p><strong>Jessica Brayne:</strong> Lead Vocalist of Shutterwax.</p>
          </div>
        </div>
        <div
          style={{backgroundImage: "url('/images/band/mark.jpg')"}}
        >
          <img 
            src="/images/band/mark.jpg" 
            alt="Mark" 
            className="visually-hidden"
          />
          <div className="member-bio">
            <p><strong>Mark Rufino:</strong> Co-founder of Shutterwax. Bass, guitars, synths, engineering.</p>
          </div>
        </div>
      </section>
      <h2 className="visually-hidden">Band Bio</h2>
      <section className="band-bio">
        <p>Donec sed odio dui. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        <p>Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue.</p>
      </section>
    
      <h2>Site credits</h2>
      <ul className="list-unstyled">
        <li>Site designed by <strong>Mike Gregoire</strong> for <a href="https://defexperience.com" target="_blank" rel="noopener noreferrer">TDX</a></li>
        <li>Background photos:
          <ul>
            <li><a href="https://unsplash.com/photos/GqQNQwdDucc" target="_blank" rel="noopener noreferrer">“Road to Pic d'Anie, Lescun, France”</a> used courtesy of <strong>Simon Marsault</strong></li>
            <li><a href="https://unsplash.com/photos/sCFxdZTlsFY" target="_blank" rel="noopener noreferrer">“A view of the Milky Way straight down the split in the road at Otter Point, located in Acadia National Park.”</a> used courtesy of <strong>Evan Leith</strong></li>
            <li><a href="https://unsplash.com/photos/OJev0ModVw8" target="_blank" rel="noopener noreferrer">“Acadia National Park Pond, Bar Harbor, United States.”</a> used courtesy of <strong>Adrian Pelletier</strong></li>
          </ul>
        </li>
      </ul>
    </Layout>
  );
};

export default withRouter(About);