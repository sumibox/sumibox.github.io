import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { RECRUIT_INFO } from '../constants';
import { Briefcase, Users, Award } from 'lucide-react';

export const Recruit: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="採用情報" 
        subtitle="Recruitment" 
        image="https://picsum.photos/1920/1080?random=80" 
      />

      {/* Message */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '1000px', textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>求める人物像</h2>
          <p style={{ color: '#4a5568', lineHeight: 2, marginBottom: '4rem' }}>
            ホライズン・プランニングでは、単に業務をこなすだけでなく、<br />
            「どうすればもっと楽しくなるか」「どうすれば感動を生めるか」を<br />
            自ら考え、行動できる仲間を募集しています。
          </p>
          
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ padding: '2rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
              <Briefcase size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Professional</h3>
              <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>プロフェッショナルとしての誇りを持ち、細部までこだわり抜く姿勢。</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
              <Users size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Teamwork</h3>
              <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>個々の力を結集し、チームとして最大の成果を生み出す協調性。</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: '#f7fafc', borderRadius: '8px' }}>
              <Award size={40} style={{ color: 'var(--color-primary)', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Challenge</h3>
              <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>失敗を恐れず、新しい価値創造に挑戦し続ける情熱。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>募集要項</h2>
          
          <div style={{ backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
            {RECRUIT_INFO.map((info, idx) => (
              <div key={idx}>
                <div style={{ backgroundColor: '#1a202c', color: '#fff', padding: '1rem 1.5rem' }}>
                  <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{info.category}</h3>
                </div>
                <div style={{ padding: '0' }}>
                  {info.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      borderBottom: itemIdx !== info.items.length - 1 ? '1px solid #edf2f7' : 'none',
                      padding: '1.5rem',
                      // Media query styles are hard inline, relying on flex-direction: column for mobile, 
                      // assume desktop via external CSS if needed or acceptable compromise.
                      // Actually, let's use a common pattern:
                    }} className="recruit-item-row">
                      <dt style={{ fontWeight: 700, color: '#2d3748', marginBottom: '0.5rem', width: '100%', minWidth: '200px' }}>{item.label}</dt>
                      <dd style={{ color: '#4a5568', flex: 1 }}>{item.value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a 
              href="mailto:recruit@example.com"
              className="btn-submit"
              style={{ display: 'inline-block', borderRadius: '9999px', textDecoration: 'none' }}
            >
              エントリーする
            </a>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#718096' }}>※メーラーが起動します</p>
          </div>
        </div>
      </section>
      
      {/* Inline style for the recruit row to be responsive (simple hack for this file) */}
      <style>{`
        @media (min-width: 768px) {
          .recruit-item-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </div>
  );
};