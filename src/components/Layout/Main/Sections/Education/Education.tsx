import styles from './Education.module.css';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';
import TimelineItem from '../../../../UI/TimelineItem/TimelineItem';

export interface EducationProps {
    university: string;
    degree: string;
    period: string;
    specialization: string;
    profile: string;
}

export default function Education({
    university,
    degree,
    period,
    specialization,
    profile
}: EducationProps) {
    return (
        <section className={styles.education}>
            <SectionTitle>Образование</SectionTitle>
            <TimelineItem
                date={period}
                title={`${degree}, ${specialization}`}
                subtitle={university}
                description={profile}
            />
        </section>
    );
}