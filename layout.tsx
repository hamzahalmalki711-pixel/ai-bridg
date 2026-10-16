import type { Metadata } from 'next';
import './style.css';
export const metadata: Metadata = { title: 'AI Bridge | منصة الربط الذكي', description: 'ChatGPT + Claude in one private workspace' };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="ar" dir="rtl"><body>{children}</body></html>}
