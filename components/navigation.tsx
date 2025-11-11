import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

export default function Navigation() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="animate-in fade-in-50 slide-in-from-left-5 text-xl font-bold text-slate-900 duration-500 dark:text-slate-100">
            Portfolio
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <Link href="#about">About</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#blog">Blog</Link>
            <Link href="#contact">Contact</Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
