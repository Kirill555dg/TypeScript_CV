import styles from './Projects.module.css';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';
import TechStack from '../../../../UI/TechStack/TechStack';

export interface Project {
  title: string;
  period: string;
  description: string;
  stack: string[];
}

interface ProjectsProps {
  items: Project[];
}

export default function Projects({ items }: ProjectsProps) {
  return (
    <section className={styles.projects}>
      <SectionTitle>Проекты</SectionTitle>
      <div className={styles.grid}>
        {items.map((project, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.header}>
              <h3 className={styles.title}>{project.title}</h3>
              <span className={styles.period}>{project.period}</span>
            </div>
            <p className={styles.description}>{project.description}</p>
            <TechStack items={project.stack.map(tech => ({ name: tech }))} />
          </div>
        ))}
      </div>
    </section>
  );
}