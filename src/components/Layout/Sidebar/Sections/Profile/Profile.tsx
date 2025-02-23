import React from 'react';
import styles from './Profile.module.css';

export interface ProfileProps {
  name: string;
  position: string;
  description: string;
  avatar?: string; // Добавляем пропс для аватарки
}

export default function Profile({ 
  name, 
  position, 
  description,
  avatar 
}: ProfileProps) {
  return (
    <section className={styles.profile}>
      {avatar && (
        <div className={styles.avatarContainer}>
          <img 
            src={avatar} 
            alt="Profile photo" 
            className={styles.avatar}
          />
        </div>
      )}
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.position}>{position}</p>
      <p className={styles.description}>{description}</p>
    </section>
  );
}