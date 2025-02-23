import React from 'react';
import styles from './SectionTitle.module.css';

interface SectionTitleProps {
    children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className={styles.sectionTitle}>
            <span className={styles.text}>{children}</span>
        </h2>
    );
}