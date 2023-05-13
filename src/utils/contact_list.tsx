import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

interface ContactItem {
    label: string;
    href: string;
    icon: JSX.Element | null;
}

export const contact_list: ContactItem[] = [
    {
        label: 'Portfolio',
        href: 'https://pashanimation.blogspot.com',
        icon: null,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/pashapotekhin/',
        icon: null,
    },
    {
        label: 'IMDB',
        href: 'https://www.imdb.com/name/nm10169053/',
        icon: null,
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/pashanimation',
        icon: null,
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/@pashanimation',
        icon: null,
    },
    {
        label: 'Vimeo',
        href: 'https://www.vimeo.com/pashanimation/',
        icon: null,
    },
    {
        label: 'Speaker Deck',
        href: 'https://speakerdeck.com/pashanimation',
        icon: null,
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/pashanimation1',
        icon: null,
    },
    {
        label: 'Twitter',
        href: 'https://twitter.com/pashanimation',
        icon: null,
    },
    {
        label: 'Telegram',
        href: 'https://t.me/pashanimation',
        icon: null,
    },
    {
        label: 'VK',
        href: 'https://vk.com/pashanimation',
        icon: null,
    },
];
