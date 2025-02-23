import React from 'react';
import styles from './Main.module.css';
import About from './Sections/About/About';
import Projects, { Project } from './Sections/Projects/Projects';
import Education, { EducationProps } from './Sections/Education/Education';
import Courses, { Course } from './Sections/Courses/Courses';

export interface MainProps {
  about: string;
  projects: Project[];
  education: EducationProps;
  courses: Course[];
}

export default function Main({
  about,
  projects,
  education,
  courses
}: MainProps) {
  return (
    <main className={styles.main}>
      <About content={about} />
      <Projects items={projects} />
      <Education {...education} />
      <Courses items={courses} />
    </main>
  );
}