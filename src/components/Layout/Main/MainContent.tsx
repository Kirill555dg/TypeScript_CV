import React from 'react';
import styles from './MainContent.module.css';
import About from './Sections/About/About';
import Projects from './Sections/Projects/Projects';
import Education from './Sections/Education/Education';
import Courses from './Sections/Courses/Courses';
import { MainContentProps } from '../../../data/interfaces';

export default function MainContent({
  about,
  projects,
  education,
  courses
}: MainContentProps) {
  return (
    <main className={styles.main}>
      <About content={about} />
      
      <Projects items={projects} />
      
      <Education
        university={education.university}
        degree={education.degree}
        period={education.period}
        specialization={education.specialization}
        profile={education.profile}
      />
      
      <Courses items={courses} />
    </main>
  );
}