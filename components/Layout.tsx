import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin } from 'lucide-react';
import { COMPANY_NAME, NAV_ITEMS } from '../constants';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="layout">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container header-inner">
          <NavLink to="/" className="logo">
            HORIZON
          </NavLink>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="mobile-nav-link"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>HORIZON</h2>
              <p className="footer-address">
                株式会社ホライズン・プランニング<br />
                〒106-0032<br />
                東京都港区六本木1-1-1<br />
                Horizon Tower 24F
              </p>
            </div>
            
            <div className="footer-links-group" style={{ display: 'flex', gap: '4rem' }}>
              <div>
                <h3>Company</h3>
                <ul className="footer-links">
                  <li><NavLink to="/about">私たちについて</NavLink></li>
                  <li><NavLink to="/services">事業内容</NavLink></li>
                  <li><NavLink to="/news">ニュース</NavLink></li>
                </ul>
              </div>
              <div>
                <h3>Support</h3>
                <ul className="footer-links">
                  <li><NavLink to="/recruit">採用情報</NavLink></li>
                  <li><NavLink to="/contact">お問い合わせ</NavLink></li>
                  <li><span style={{ cursor: 'pointer', color: '#aaa', fontSize: '0.9rem' }}>プライバシーポリシー</span></li>
                </ul>
              </div>
            </div>

            <div className="footer-social">
              <div className="footer-links-group">
                 <h3>Follow Us</h3>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon"><Instagram size={18} /></a>
                <a href="#" className="social-icon"><Facebook size={18} /></a>
                <a href="#" className="social-icon"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} All Rights Reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>Designed with Integrity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};