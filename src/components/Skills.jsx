import { useState } from 'react';
import './Skills.scss';

// Icons
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { RiJavascriptFill } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import { AiFillGitlab } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaFigma } from "react-icons/fa";

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <div>
            <ul>
              <li><FaHtml5 size={30}/></li>
              <li><FaCss3Alt size={30}/></li>
              <li><FaSass size={30}/></li>
              <li><RiJavascriptFill size={30}/></li>
              <li><FaGithub size={30}/></li>
              <li><AiFillGitlab size={30}/></li>
              <li><FaFigma size={30}/></li>
            </ul>
            
            <h3>Currently learning</h3>
              <ul>
                <li><RiTailwindCssFill size={30}/></li>
                <li><FaReact size={30}/></li>
              </ul>
          </div>
        );
      case 'courses':
        return (
          <section className='learning'>
            <h3>Scrimba</h3>
              <p>Frontend Developer Career Path, Responsive design, Accessibility etc.</p>
            <h3>Czechitas</h3>
              <p>JavaScript 2 (Czechitas, 7/2024)</p>
              <p>UX design (Czechitas, 6/2025)</p>
          </section>

        )
    }
  };

  return (
    <section className='skills'>
      <div className='section_title'>
        <h4>Skills</h4>
      </div>

      <div className='skills_container'>
        <div className='skills_tabs'>
          <button
            className={activeTab === 'skills' ? 'active' : ''}
            onClick={() => setActiveTab('skills')}
          >
            Skills
          </button>
          <button
            className={activeTab === 'awards' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
        </div>
        <div className='skills_content'>
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default Skills