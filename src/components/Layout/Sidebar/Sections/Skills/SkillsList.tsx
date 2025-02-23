import styles from './SkillsList.module.css';
import TechStack from '../../../../UI/TechStack/TechStack';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';

export interface Skill {
  name: string;
  category: 'frontend' | 'tools' | 'methodology'; 
}

interface SkillsListProps {
  items: Skill[];
}

export default function SkillsList({ items }: SkillsListProps) {
  return (
    <section className={styles.skillsSection}>
      <SectionTitle>Технические навыки</SectionTitle>
      <TechStack items={items} />
    </section>
  );
}