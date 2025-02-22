export interface AppData {
    sidebar: SidebarProps
    main: MainContentProps;
}

export interface SidebarProps {
    personal: PersonalInfo;
    skills: Skill[];
    languages: Language[];
    qualities: string[];
}

export interface MainContentProps {
    about: string;
    projects: Project[];
    education: Education;
    courses: Course[];
}

export interface PersonalInfo {
    name: string;
    position: string;
    description: string;
    contacts: {
        email: string;
        telegram: string;
        github: string;
        vk?: string;
    };
    birthDate: string;
    citizenship: string;
}

export interface Skill {
    name: string;
    category: 'frontend' | 'tools' | 'methodology';
}

export interface Project {
    title: string;
    period: string;
    description: string;
    stack: string[];
}

export interface Education {
    university: string;
    degree: string;
    period: string;
    specialization: string;
    profile: string;
}

export interface Course {
    title: string;
    organizer: string;
    period: string;
    duration: string;
    status: 'completed' | 'in-progress';
}

export interface Language {
    name: string;
    level: string;
}