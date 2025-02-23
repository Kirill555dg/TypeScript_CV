import styles from './Layout.module.css';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';

import { SidebarProps } from './Sidebar/Sidebar';
import { MainProps } from './Main/Main';

export interface LayoutProps {
  sidebar: SidebarProps;
  main: MainProps;
}

export default function Layout({ sidebar, main }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Sidebar {...sidebar} />
      <Main {...main} />
    </div>
  );
}