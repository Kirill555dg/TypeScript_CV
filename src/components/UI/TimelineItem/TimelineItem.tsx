import React from 'react';
import styles from './TimelineItem.module.css';

interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    description?: string;
}

export default function TimelineItem({ date, title, subtitle, description }: TimelineItemProps) {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                <div className={styles.dot} />
                <div className={styles.line} />
            </div>
            <div className={styles.content}>
                <div className={styles.date}>{date}</div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
                {description && <p className={styles.description}>{description}</p>}
            </div>
        </div>
    );
}