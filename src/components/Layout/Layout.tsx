import React from 'react';
import styles from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './Main/MainContent';
import { AppData } from '../../data/interfaces';


export default function Layout({ sidebar, main }: AppData) {
  return (
    <div className={styles.container}>
      <Sidebar
        personal={sidebar.personal}
        skills={sidebar.skills}
        languages={sidebar.languages}
        qualities={sidebar.qualities}
      />
      <MainContent
        about={main.about}
        projects={main.projects}
        education={main.education}
        courses={main.courses}
      />
    </div>
  );
}