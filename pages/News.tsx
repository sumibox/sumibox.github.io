import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { NEWS_ITEMS } from '../constants';

export const News: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Press Release' | 'Info' | 'Event'>('All');
  
  const filteredNews = filter === 'All' 
    ? NEWS_ITEMS 
    : NEWS_ITEMS.filter(item => item.category === filter);

  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'Press Release': return '#3182ce';
      case 'Event': return '#d4af37';
      default: return '#718096';
    }
  };

  return (
    <div>
      <PageHeader 
        title="ニュース" 
        subtitle="News Release" 
        image="https://picsum.photos/1920/1080?random=70" 
      />

      <section className="section bg-light" style={{ minHeight: '60vh' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
            {['All', 'Press Release', 'Info', 'Event'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                style={{
                  padding: '0.5rem 1.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  backgroundColor: filter === cat ? '#1a202c' : '#fff',
                  color: filter === cat ? '#fff' : '#4a5568',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* News List */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {filteredNews.map((news) => (
              <article key={news.id} style={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', transition: 'box-shadow 0.3s', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                     <span style={{ 
                       fontSize: '0.75rem', 
                       padding: '0.3rem 0.6rem', 
                       borderRadius: '4px', 
                       color: '#fff', 
                       backgroundColor: getCategoryColor(news.category)
                      }}>
                      {news.category}
                    </span>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <time style={{ fontSize: '0.85rem', color: '#a0aec0', marginBottom: '0.5rem', display: 'block' }}>{news.date}</time>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1a202c', marginBottom: '1rem', lineHeight: 1.4 }}>
                    {news.title}
                  </h3>
                  <p style={{ color: '#4a5568', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {news.content}
                  </p>
                  <div style={{ borderTop: '1px solid #edf2f7', paddingTop: '1rem', textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', cursor: 'pointer' }}>READ MORE</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredNews.length === 0 && (
            <p className="text-center" style={{ color: '#718096', padding: '4rem 0' }}>該当する記事はありません。</p>
          )}

        </div>
      </section>
    </div>
  );
};