import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { NEWS_ITEMS, SERVICES } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <img 
          src="https://picsum.photos/1920/1080?random=1" 
          alt="Hero Background" 
          className="hero-bg"
        />
        <div className="hero-overlay" />
        
        <div className="container">
          <div className="hero-content fade-in">
            <span className="hero-tagline">
              Designing Time, Creating Memories
            </span>
            <h1 className="hero-title">
              想像を超える、<br />
              感動のその先へ。
            </h1>
            <p className="hero-desc">
              私たちホライズン・プランニングは、<br style={{display: 'none'}} className="hidden-mobile" />
              心を揺さぶるレジャー体験と空間を創造し、<br style={{display: 'none'}} className="hidden-mobile" />
              人生を豊かにする「時」をデザインします。
            </p>
            <NavLink 
              to="/about" 
              className="btn-hero"
            >
              <span>私たちについて</span>
              <ArrowRight size={20} className="btn-icon" />
            </NavLink>
          </div>
        </div>
      </section>

      {/* News Ticker */}
      <section className="bg-white">
        <div className="container">
          <div className="news-ticker">
            <div className="news-ticker-inner">
              <h2 className="news-label">NEWS</h2>
              <div className="news-list">
                {NEWS_ITEMS.slice(0, 2).map((news) => (
                  <NavLink key={news.id} to="/news" className="news-item-row">
                    <span className="news-date">{news.date}</span>
                    <span className={`news-tag ${news.category === 'Press Release' ? 'press' : ''}`}>
                      {news.category}
                    </span>
                    <span className="news-title-row" style={{ flexGrow: 1, marginLeft: '1rem' }}>
                      {news.title}
                    </span>
                    <ChevronRight size={16} style={{ color: '#ccc' }} />
                  </NavLink>
                ))}
              </div>
              <NavLink to="/news" className="link-arrow" style={{ whiteSpace: 'nowrap' }}>
                VIEW ALL <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">事業紹介</h2>
          </div>

          <div className="services-grid">
            {SERVICES.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-img-wrapper">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-img"
                  />
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.1)' }} />
                </div>
                <div className="service-content">
                  <div className="service-icon-float">
                    <service.icon size={32} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-subtitle">{service.enTitle}</p>
                  <p className="service-desc">
                    {service.description}
                  </p>
                  <NavLink to="/services" className="link-arrow">
                    詳細を見る <ArrowRight size={14} style={{ marginLeft: '0.5rem' }} />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy/Concept Area */}
      <section className="section bg-white">
        <div className="container">
          <div className="philosophy-layout">
            <div className="philosophy-img-wrapper">
               <img 
                src="https://picsum.photos/800/1000?random=30" 
                alt="Philosophy" 
                className="philosophy-img"
              />
            </div>
            <div className="philosophy-text">
              <span className="section-label">Philosophy</span>
              <h2>
                余暇を、<br/>
                文化にする。
              </h2>
              <p className="philosophy-desc">
                単なる「遊び」や「休息」として捉えられがちなレジャーを、私たちは人生を彩る重要な「文化」として捉え直します。
                <br /><br />
                心身の解放、知的好奇心の充足、そして人との繋がり。
                <br />
                私たちが提供するのは、それら全てが調和した上質な時間です。
                <br /><br />
                誠実な企画力と、細部までこだわり抜いた実行力で、
                お客様の期待を超える価値を創造し続けます。
              </p>
              <NavLink 
                to="/about" 
                className="btn-primary"
              >
                企業理念を読む
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Recruit Banner */}
      <section className="recruit-banner">
        <img 
          src="https://picsum.photos/1920/600?random=40" 
          alt="Office" 
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        
        <div className="container recruit-content">
          <h2 className="recruit-title">RECRUIT</h2>
          <p style={{ fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '2.5rem', fontWeight: 300 }}>
            新しい景色を、共に創ろう。
          </p>
          <NavLink 
            to="/recruit" 
            className="btn-hero"
          >
            採用情報を見る
          </NavLink>
        </div>
      </section>
    </div>
  );
};