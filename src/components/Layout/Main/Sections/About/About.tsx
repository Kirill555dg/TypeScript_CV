import styles from './About.module.css';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';

export interface AboutProps {
    content: string;
}

export default function About({ content }: AboutProps) {
    return (
        <section className={styles.about}>
            <SectionTitle>Обо мне</SectionTitle>
            <div className={styles.content}>
                {content.split('\n').map((paragraph, index) => (
                    <p key={index} className={styles.paragraph}>
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
    );
}