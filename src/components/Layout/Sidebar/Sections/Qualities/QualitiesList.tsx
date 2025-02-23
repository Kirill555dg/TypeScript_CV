// QualitiesList.tsx
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';
import styles from './QualitiesList.module.css';

interface QualitiesListProps {
    items: string[];
}

export default function QualitiesList({ items }: QualitiesListProps) {
    return (
        <section className={styles.qualities}>
            <SectionTitle>Личные качества</SectionTitle>
            <ul className={styles.qualities}>
                {items.map((quality, index) => (
                    <li key={index} className={styles.quality}>
                        {quality}
                    </li>
                ))}
            </ul>
        </section>
    );
}