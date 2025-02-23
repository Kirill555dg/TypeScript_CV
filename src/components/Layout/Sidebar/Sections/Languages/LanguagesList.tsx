import styles from './LanguagesList.module.css';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';

export interface Language {
  name: string;
  level: string;
}

interface LanguagesListProps {
  items: Language[];
}

export default function LanguagesList({ items }: LanguagesListProps) {
  return (
    <section className={styles.languagesSection}>
      <SectionTitle>Языки</SectionTitle>
      <ul className={styles.languagesList}>
        {items.map((lang, index) => (
          <li key={index} className={styles.languageItem}>
            <span className={styles.languageName}>{lang.name}</span>
            <span className={styles.languageLevel}>{lang.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}