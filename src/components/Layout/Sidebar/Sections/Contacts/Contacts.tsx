import React from 'react';
import styles from './Contacts.module.css';
import Icon from '../../../../UI/Icon/Icon';
import SectionTitle from '../../../../UI/SectionTitle/SectionTitle';
import EmailIcon from '../../../../../assets/icons/email.svg?react';
import TelegramIcon from '../../../../../assets/icons/telegram.svg?react';
import GithubIcon from '../../../../../assets/icons/github.svg?react';
import VkIcon from '../../../../../assets/icons/vk.svg?react';

export interface ContactsProps {
    email: string;
    telegram: string;
    github: string;
    vk?: string;
}

export default function Contacts({ email, telegram, github, vk }: ContactsProps) {
    const getUsername = (url: string) => {
        try {
            return new URL(url).pathname.replace(/^\//, '');
        } catch {
            return url;
        }
    };

    return (
        <section className={styles.container}>
            <SectionTitle>Контакты</SectionTitle>

            <div className={styles.contact}>
                <Icon size="sm">
                    <EmailIcon />
                </Icon>
                <a href={`mailto:${email}`} className={styles.link}>
                    {email}
                </a>
            </div>

            <div className={styles.contact}>
                <Icon size="sm">
                    <TelegramIcon />
                </Icon>
                <a
                    href={telegram}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    @{getUsername(telegram)}
                </a>
            </div>

            <div className={styles.contact}>
                <Icon size="sm">
                    <GithubIcon />
                </Icon>
                <a
                    href={github}
                    className={styles.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {getUsername(github)}
                </a>
            </div>

            {vk && (
                <div className={styles.contact}>
                    <Icon size="sm">
                        <VkIcon />
                    </Icon>
                    <a
                        href={vk}
                        className={styles.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {getUsername(vk)}
                    </a>
                </div>
            )}
        </section>
    );
}