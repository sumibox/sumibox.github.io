import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { COMPANY_NAME, COMPANY_NAME_EN } from '../constants';

export const About: React.FC = () => {
  return (
    <div>
      <PageHeader 
        title="私たちについて" 
        subtitle="About Us" 
        image="https://picsum.photos/1920/1080?random=50" 
      />
      
      {/* Message */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <h2 className="section-title">代表挨拶</h2>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginTop: '1.5rem', lineHeight: 1.8 }}>
              「時間」という目に見えない価値を、<br />
              最高のアートに変える。
            </p>
          </div>
          <div className="philosophy-layout">
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <img src="https://picsum.photos/400/500?random=51" alt="CEO" style={{ width: '100%', borderRadius: '2px', boxShadow: '0 10px 15px rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ flex: 1, color: '#666', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                近年、人々のライフスタイルは劇的に変化し、レジャーに対するニーズも多様化・高度化しています。単なる娯楽ではなく、自己実現や心身のウェルビーイング（幸福）を求める動きが加速しています。
              </p>
              <p style={{ marginBottom: '1.5rem' }}>
                私たちホライズン・プランニングは、そうした時代の要請に応えるべく、常に常識にとらわれない発想で事業を展開してまいりました。
              </p>
              <p>
                「Designing Time, Creating Memories.」この言葉には、お客様のかけがえのない時間をデザインし、一生の記憶に残る瞬間を創り出すという私たちの強い意志が込められています。
              </p>
              <div style={{ marginTop: '3rem', textAlign: 'right' }}>
                <p style={{ fontWeight: 700, color: '#1a202c' }}>代表取締役社長</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginTop: '0.5rem' }}>早川 健太</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="section bg-light">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center" style={{ marginBottom: '3rem' }}>会社概要</h2>
          <div className="bg-white" style={{ padding: '3rem', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', borderRadius: '2px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              
              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>会社名</dt>
                <dd style={{ flex: 1 }}>{COMPANY_NAME}<br/><span style={{ fontSize: '0.85rem', color: '#999' }}>{COMPANY_NAME_EN}</span></dd>
              </div>

              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>設立</dt>
                <dd style={{ flex: 1 }}>2010年4月1日</dd>
              </div>

              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>資本金</dt>
                <dd style={{ flex: 1 }}>5,000万円</dd>
              </div>

              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>代表者</dt>
                <dd style={{ flex: 1 }}>代表取締役社長 早川 健太</dd>
              </div>

              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>従業員数</dt>
                <dd style={{ flex: 1 }}>120名（連結）</dd>
              </div>

              <div className="profile-row" style={{ display: 'flex', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>事業内容</dt>
                <dd style={{ flex: 1 }}>
                  <ul style={{ paddingLeft: '1rem', listStyle: 'disc', color: '#333' }}>
                    <li>リゾート開発・企画・運営</li>
                    <li>イベントプロデュース</li>
                    <li>レジャー施設向けコンサルティング</li>
                    <li>地方創生事業</li>
                  </ul>
                </dd>
              </div>

              <div className="profile-row" style={{ display: 'flex' }}>
                <dt style={{ width: '150px', fontWeight: 700, color: '#666', borderLeft: '4px solid var(--color-gold)', paddingLeft: '1rem', flexShrink: 0 }}>本社所在地</dt>
                <dd style={{ flex: 1 }}>
                  〒106-0032<br />
                  東京都港区六本木1-1-1 Horizon Tower 24F
                </dd>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};