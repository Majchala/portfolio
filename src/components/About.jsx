import './About.scss'
import HeroImg from '../assets/imgs/hero.png'
import divider from '../assets/imgs/divider.png'

// Icons
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  const events = [
    { year: 2021, title: "IT Recruiter", description: "Finding candidates for various positions, getting to know the world of IT" },
    { year: 2022, title: "HR Generalist", description: "Internal HR and employee care. In spare time I'm learning frontend and hey, it's pretty cool!" },
    { year: 2024, title: "Frontend Dev", description: "First full time job in dev. HTML, SCSS, JS, sometimes PHP, React and Tailwind." },
  ];

  return (
    <section className='about'>
      <div className='about_desc'>
      <div className="about_desc_top">
        <h1>
          What is my <span>story?</span>
        </h1>
        <p>
          I'm a frontend developer with a creative spirit, focused on building intuitive and user-friendly web applications. I love combining aesthetics with functionality to create meaningful digital experiences.
        </p>
        <p>
          A few years ago, while working as an IT recruiter, I became increasingly fascinated by the tech world. It didn’t take long for me to realize that I wanted to be <span>part of it — not just an observer</span>.
        </p>
        <p>
          Over the past two years, I’ve worked at a fintech startup, where I contributed to various projects. I mainly worked with React, JavaScript, SCSS, and occasionally PHP. It was a challenging yet rewarding experience that helped me grow both technically and personally. During this time, I also earned two new certifications with Czechitas — JavaScript 2 and UX.
        </p>
        <p>
          I’m now looking for a creative project where I can grow, collaborate with a great team, and combine <span>meaningful work with creativity</span>.
        </p>
      </div>

        <div className='about_desc_bottom'>
          <img src={HeroImg} alt='Hero picture' />
        </div>
        
        <div className='about_jobs'>
          {events.map((event, index) => (
            <div key={event.year} className={`timeline-event ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div>
                <time>{event.year}</time>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              {index !== events.length - 1 && <FaArrowDown />
} 
            </div>
          ))}

          <img src={divider} alt='Divider' />
        </div>
      </div>
    </section>
  );
};

export default About;
