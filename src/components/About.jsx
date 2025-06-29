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
        <div className='about_desc_top'>
          <h1>
            What is my <span>story?</span>
          </h1>
          <p>
            I'm a frontend developer with a creative spirit focused on creating intuitive and user-friendly web applications. I enjoy combining aesthetics with functionality.
          </p>
          <p>
            A few years ago, as an IT recruiter, I started to learn more and more about the IT world. Very soon I realized that I wanted to be <span>part of it and not just an observer</span>.
            I'm currently working at a startup in Fintech, which I find incredibly fun and fulfilling. I'm constantly trying to improve my skills and learn new ones.
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
