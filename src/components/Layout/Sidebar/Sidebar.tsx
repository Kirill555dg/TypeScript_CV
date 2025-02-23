import styles from './Sidebar.module.css';
import Profile, { ProfileProps } from './Sections/Profile/Profile';
import Contacts, { ContactsProps } from './Sections/Contacts/Contacts';
import SkillsList, { Skill } from './Sections/Skills/SkillsList';
import LanguagesList, { Language } from './Sections/Languages/LanguagesList';
import QualitiesList from './Sections/Qualities/QualitiesList';
import avatarImage from '@/assets/images/avatar.jpg'; // Добавьте импорт

export interface SidebarProps {
  profile: ProfileProps;
  contacts: ContactsProps;
  skills: Skill[];
  languages: Language[];
  qualities: string[];
}


export default function Sidebar({
  profile,
  contacts,
  skills,
  languages,
  qualities
}: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <Profile
        avatar={avatarImage}
        name={profile.name}
        position={profile.position}
        description={profile.description}
      />
      <Contacts {...contacts} />
      <SkillsList items={skills} />
      <LanguagesList items={languages} />
      <QualitiesList items={qualities} />
    </aside>
  );
}