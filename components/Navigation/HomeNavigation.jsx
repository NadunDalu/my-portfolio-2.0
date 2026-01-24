import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState('about');

    // Define navigation items
    const navItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Services', id: 'services' },
        { label: 'Education', id: 'education' },
        { label: 'Skills', id: 'skills' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Achievements', id: 'achievement' },
        { label: 'Testimonial', id: 'testimonial' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    // Social media links
    const socialMediaLinks = [
        { label: 'Facebook', icon: 'fab fa-facebook-f', url: 'https://facebook.com/nadun.daluwatta.3/' },
        { label: 'LinkedIn', icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/nadundaluwatta' },
        { lable: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/CyborLK' },
        { label: 'X', icon: 'fab fa-twitter', url: 'https://x.com/daluwatta_nadun' },
        { label: 'Behance', icon: 'fab fa-behance', url: 'https://www.behance.net/nadundaluwattax' },
        { label: 'Medium', icon: 'fab fa-medium', url: 'https://medium.com/@nadundaluwatta26' },
        { label: 'YouTube', icon: 'fab fa-youtube', url: 'https://www.youtube.com/@nadundaluwatta' },
    ];

    // Smooth scrolling and active link management
    const handleScroll = () => {
        const scrollY = window.scrollY;
        let currentActive = activeLink;

        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element) {
                const offsetTop = element.offsetTop - 120; // Adjust for sticky nav height
                const offsetBottom = offsetTop + element.offsetHeight;
                if (scrollY >= offsetTop && scrollY < offsetBottom) {
                    currentActive = item.id;
                    break;
                }
            }
        }
        setActiveLink(currentActive);

        const headerHeight = document.getElementById('header')?.clientHeight || 0;
        const windowWidth = window.innerWidth;
        setIsFixed(windowWidth < 992 && scrollY >= headerHeight);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        const headerHeight = document.getElementById('header')?.clientHeight || 0;
        if (window.innerWidth < 992 && window.scrollY >= headerHeight) {
            setIsFixed(true);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleNavClick = (id) => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
            const topPosition = targetElement.offsetTop - 100; // Adjust for sticky nav height
            window.scrollTo({ top: topPosition, behavior: 'smooth' });
            setActiveLink(id);
        }
    };

    return (
        <div className="nav-wrapper">
            {/* Social Media Icons Section */}
            <div className="social-media-icons">
                {socialMediaLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label={social.label}
                    >
                        <i className={social.icon}></i>
                    </a>
                ))}
            </div>

            {/* Navigation Section */}
            <div className={`section-nav ${isFixed ? 'fixed' : ''}`}>
                <ul className="nav">
                    {navItems.map((item) => (
                        <li className="nav-item" key={item.id}>
                            <button
                                className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                                onClick={() => handleNavClick(item.id)}
                                aria-label={`Navigate to ${item.label}`}
                            >
                                <span className="nav-link-desktop">{item.label}</span>
                                <span className="nav-link-mobile">{item.label.charAt(0)}</span>
                                <span className={`nav-circle ${activeLink === item.id ? 'active-circle' : ''}`}></span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navigation;
