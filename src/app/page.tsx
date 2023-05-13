import Image from 'next/image';
import pasha_po from '../../public/pasha_po.png';
import { contact_list } from '@/utils/contact_list';
import { BsLinkedin } from 'react-icons/bs';

export default function Home() {
    return (
        <main className="m-4 flex flex-col items-center">
            <div>
                <Image
                    src={pasha_po}
                    alt="Pasha Po icon"
                    width={96}
                    height={96}
                    className="rounded-full bg-zinc-100"
                />
            </div>
            <div className="my-2 text-xl font-bold">Pasha Potekhin</div>
            <div>@Pashanimation</div>
            <div>pasha.a.potekhin@gmail.com</div>
            <div className="w-full max-w-[500px] mt-4 flex flex-col gap-y-3 items-center">
                {contact_list.map((contact) => (
                    <a
                        key={contact.href}
                        href={contact.href}
                        target="_blank"
                        className="w-full p-3 border rounded-full text-center uppercase"
                    >
                        <span>{contact.label}</span>
                    </a>
                ))}
            </div>
        </main>
    );
}
