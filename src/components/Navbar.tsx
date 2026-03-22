import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from './ui/sheet';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'INÍCIO', href: '/' },
        { name: 'RVL CULTURE', href: '/revival-culture' },
    ];

    const isHome = location.pathname === '/';
    const isGame = location.pathname === '/game';

    if (isGame) return null;

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled || !isHome ? 'bg-rvl-escuro/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                    <img
                        src="/images/RVL 26 (250 x 250 px).png"
                        alt="Revival Logo"
                        className="h-16 md:h-24 w-auto mix-blend-screen"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                "font-inter text-sm md:text-base font-bold tracking-widest transition-colors hover:text-rvl-laranja",
                                location.pathname === link.href ? "text-rvl-laranja" : "text-rvl-creme"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-rvl-creme hover:bg-white/10">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-rvl-escuro border-white/10 p-0 w-[80%] sm:w-[350px]">
                            <div className="flex flex-col h-full pt-24 px-8 gap-6">
                                <div className="mb-2">
                                    <p className="font-inter text-[10px] text-rvl-laranja font-bold tracking-[0.2em] uppercase mb-1">Menu</p>
                                    <div className="h-px w-8 bg-rvl-laranja" />
                                </div>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        onClick={() => {
                                            setOpen(false);
                                            if (link.href.startsWith('/#')) {
                                                const target = document.getElementById(link.href.split('#')[1]);
                                                if (target) target.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className={cn(
                                            "font-bebas text-3xl tracking-wider transition-all hover:translate-x-1",
                                            location.pathname === link.href ? "text-rvl-laranja" : "text-rvl-creme hover:text-white"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="mt-auto pb-12">
                                    <p className="font-inter text-[10px] text-rvl-creme/40 tracking-[0.2em] uppercase">
                                        Revival Conference 26
                                    </p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
