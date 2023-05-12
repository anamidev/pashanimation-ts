import './globals.css';

export const metadata = {
    title: 'Pasha Po',
    description: 'Pasha Potekhin - story artist / director / creator',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
