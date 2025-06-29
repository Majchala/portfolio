import './Projects.scss';
import { portfolioInfo } from '../ProjectData';

const Portfolio = () => {
  return (
    <section className='projects'>
      <div className='section_title'>
        <h4>Projects</h4>
      </div>

      <div className='projects_container'>
        {
          portfolioInfo.map(({id, img, link}) => (
            <a href={link} className='projects_card' key={id} target='_blank'>
              <img src={img} alt={`Project ${id}`}></img>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Portfolio