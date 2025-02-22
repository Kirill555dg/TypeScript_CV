import React from 'react';
import styles from './Sidebar.module.css';
import Profile from './Sections/Profile/Profile';
import Contacts from './Sections/Contacts/Contacts';
import SkillsList from './Sections/Skills/SkillsList';
import LanguagesList from './Sections/Languages/LanguagesList';
import QualitiesList from './Sections/Qualities/QualitiesList';
import { SidebarProps } from '../../../data/interfaces';

export default function Sidebar({
  personal,
  skills,
  languages,
  qualities
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <Profile
        name={personal.name}
        position={personal.position}
        description={personal.description}
      />
      
      <Contacts
        email={personal.contacts.email}
        telegram={personal.contacts.telegram}
        github={personal.contacts.github}
        vk={personal.contacts.vk}
      />

      <SkillsList items={skills} />
      
      <LanguagesList items={languages} />
      
      <QualitiesList items={qualities} />
    </aside>
  );
}