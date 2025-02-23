import styles from './TechStack.module.css';

export interface TechItem {
  name: string;
  category?: 'frontend' | 'tools' | 'methodology'; 
}

interface TechStackProps {
  items: TechItem[];
}

export default function TechStack({ items }: TechStackProps) {
  return (
    <div className={styles.stack}>
      {items.map((tech, index) => (
        <span 
          key={index} 
          className={styles.tech}
          data-category={tech.category} 
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}