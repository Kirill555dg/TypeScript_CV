import styles from './Courses.module.css';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';
import TimelineItem from '../../../../UI/TimelineItem/TimelineItem';

export interface Course {
    title: string;
    organizer: string;
    period: string;
    duration: string;
    status: 'in-progress' | 'completed';
}

interface CoursesProps {
    items: Course[];
}

export default function Courses({ items }: CoursesProps) {
    return (
        <section className={styles.courses}>
            <SectionTitle>Курсы</SectionTitle>
            {items.map((course, index) => (
                <TimelineItem
                    key={index}
                    date={course.period}
                    title={course.title}
                    subtitle={course.organizer}
                    description={`${course.duration} • ${course.status === 'completed' ? '✅ Завершено' : '⌛ В процессе'}`}
                />
            ))}
        </section>
    );
}