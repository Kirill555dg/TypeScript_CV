import { LayoutProps } from '../components/Layout/Layout';


const data: LayoutProps = {
  sidebar: {
    profile: {
      name: "Кирилл Миркин",
      position: "Фронтенд разработчик",
      description: "Студент 2 курса РТУ МИРЭА"
    },
    
    contacts: {
      email: "Kirill555dg@gmail.com",
      telegram: "https://t.me/Kerrodar",
      github: "https://github.com/Kirill555dg",
      vk: "https://vk.com/kerrodar"
    },

    skills: [
      { name: "HTML", category: "frontend" },
      { name: "CSS", category: "frontend" },
      { name: "JavaScript", category: "frontend" },
      { name: "React", category: "frontend" },
      { name: "Webpack", category: "tools" },
      { name: "Vite", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "БЭМ", category: "methodology" }
    ],

    languages: [
      { name: "Русский", level: "Родной" },
      { name: "Английский", level: "B1 (Intermediate)" }
    ],

    qualities: [
      "Целеустремлённый",
      "Усердный",
      "Внимательный",
      "Отзывчивый",
      "Старательный"
    ],
  },

  main: {
    about: `Студент 2 курса РТУ МИРЭА по специальности "Программная инженерия". Увлечён созданием пользовательских интерфейсов, решением алгоритмических задач и внедрением современных веб-технологий.`,

    projects: [
      {
        title: "MathCalculator",
        period: "Февраль 2025",
        description: "Калькулятор с поддержкой приоритета операций и скобок",
        stack: ["HTML", "CSS", "JavaScript", "Webpack", "БЭМ"]
      },
      {
        title: "TechSupport",
        period: "Декабрь 2024",
        description: "Клиентская часть платформы для техподдержки",
        stack: ["HTML", "CSS", "JavaScript", "Webpack"]
      }
    ],

    education: {
      university: "РТУ МИРЭА",
      degree: "Бакалавр",
      period: "2023-2027",
      specialization: "Программная инженерия",
      profile: "Разработка программных продуктов и проектирование информационных систем"
    },

    courses: [
      {
        title: "Углублённая фронтенд-разработка",
        organizer: "RTUITLab",
        period: "Февраль 2025 - настоящее время",
        duration: "В процессе",
        status: "in-progress"
      },
      {
        title: "Ручное функциональное тестирование",
        organizer: "Холдинг Т1",
        period: "Июнь-Июль 2024",
        duration: "40 часов",
        status: "completed"
      }
    ]
  }
};

export default data;