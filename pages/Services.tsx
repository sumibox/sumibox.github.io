import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SERVICES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="事業内容" 
        subtitle="Our Services" 
        image="https://picsum.photos/1920/1080?random=60" 
      />

      <div className="bg-white">
        {SERVICES.map((service, index) => (
          <section key={service.id} className={`section ${index % 2 !== 0 ? 'bg-light' : 'bg-white'}`}>
            <div className="container">
              <div className={`service-detail-section ${index % 2 !== 0 ? 'reverse' : ''}`} style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                
                <div className="service-detail-img-wrapper" style={{ width: '100%', position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', 
                    top: '-1rem', 
                    left: '-1rem', 
                    width: '100%', 
                    height: '100%', 
                    border: '2px solid rgba(212, 175, 55, 0.3)', 
                    zIndex: 0,
                    display: 'none' // Hidden on mobile initially via CSS, but hard to target from here without class
                  }} className="desktop-border" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ position: 'relative', zIndex: 1, width: '100%', height: '400px', objectFit: 'cover', borderRadius: '2px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }}
                  />
                </div>
                
                <div className="service-detail-content" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.75rem', backgroundColor: 'rgba(44, 82, 130, 0.1)', borderRadius: '50%', color: 'var(--color-primary)', marginRight: '1rem' }}>
                      <service.icon size={32} />
                    </div>
                    <span style={{ color: 'var(--color-gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>{service.enTitle}</span>
                  </div>
                  
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '2rem', color: '#1a202c' }}>{service.title}</h2>
                  
                  <p style={{ color: '#4a5568', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                    {service.description}
                  </p>
                  
                  <div style={{ backgroundColor: '#fff', padding: '2rem', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                    <h4 style={{ fontWeight: 700, color: '#2d3748', marginBottom: '1rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem' }}>主なサービス内容</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {service.details.map((detail, idx) => (
                        <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#4a5568' }}>
                          <CheckCircle2 size={20} style={{ color: 'var(--color-primary)', marginRight: '0.75rem', marginTop: '0.2rem', flexShrink: 0 }} />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
      
      {/* CTA */}
      <section style={{ padding: '5rem 0', backgroundColor: '#1a202c', color: '#fff', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>ビジネスの課題を解決するパートナーとして</h2>
          <p style={{ color: '#a0aec0', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            ご相談やご質問がございましたら、お気軽にお問い合わせください。<br />
            貴社のビジョンを実現するための最適なプランをご提案いたします。
          </p>
          <a 
            href="/contact" 
            className="btn-primary"
            style={{ backgroundColor: 'var(--color-gold)', color: '#fff', padding: '1rem 3rem', fontWeight: 700 }}
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </div>
  );
};