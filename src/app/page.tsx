import Image from 'next/image';
import pasha_po from '../../public/pasha_po.png';
import { contact_list } from '@/utils/contact_list';
import CopyToClipboard_Button from '@/components/CopyToClipboard_Button';
import qr from '@/assets/pasha-po-QR.png';
import { BiLink, BiCopy } from 'react-icons/bi';

export default function Home() {
    return (
        <main className="mx-4 my-16 flex flex-col items-center">
            <div>
                <Image
                    src={pasha_po}
                    alt="Pasha Po icon"
                    width={96}
                    height={96}
                    className="rounded-full bg-zinc-100"
                />
            </div>
            <div className="mt-2 text-xl font-bold">Pasha Potekhin</div>
            <div className="mb-2 text-sm text-zinc-400">Story Artist / Director / Creator</div>
            <div className="flex gap-x-2">
                <CopyToClipboard_Button contentToCopy="pasha.a.potekhin@gmail.com">
                    <BiCopy className="w-5 h-5" />
                </CopyToClipboard_Button>
                pasha.a.potekhin@gmail.com
            </div>
            {/* <div>
                <CopyToClipboard_Button contentToCopy='@Pashanimation'>
                    @Pashanimation
                </CopyToClipboard_Button>
            </div> */}
            <div className="w-full max-w-[500px] mt-4 flex flex-col gap-y-3 items-center">
                {contact_list.map((contact) => (
                    <a
                        key={contact.href}
                        href={contact.href}
                        target="_blank"
                        className="w-full p-3 border rounded-full text-center uppercase flex justify-center items-center gap-3 hover:border-teal-400 hover:text-teal-400 hover:scale-[103%] transition ease-in duration-100"
                    >
                        {contact.icon ? contact.icon : contact.svgIcon && contact.svgIcon}
                        <span className="grow mr-8">{contact.label}</span>
                    </a>
                ))}
            </div>
            <div className="flex items-end gap-x-1">
                <CopyToClipboard_Button contentToCopy="https://pasha-po.vercel.app/">
                    <BiLink className="w-6 h-6 mb-1" />
                </CopyToClipboard_Button>
                <Image
                    src={qr}
                    alt="QR-code"
                    className="mt-16 mr-7 w-52 h-52"
                />
            </div>
        </main>
    );
}
