'use client';
import { useState } from 'react';

export default function CopyToClipboard_Button({
    children,
    contentToCopy,
}: {
    children: any;
    contentToCopy: string;
}) {
    const [isCopied, setIsCopied] = useState(false);

    const copyContent = () => {
        navigator.clipboard.writeText(contentToCopy);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
    };

    return (
        <button
            className=" relative flex items-center gap-x-2 hover:text-teal-400 transition ease-in duration-100"
            onClick={copyContent}
        >
            <div className={`absolute -top-7 left-0 p-1 bg-teal-400 text-black text-sm rounded-md transition ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
                Copied!
            </div>
            {children}
        </button>
    );
}
