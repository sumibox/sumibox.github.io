import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('お問い合わせを受け付けました。（デモ）');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      <PageHeader 
        title="お問い合わせ" 
        subtitle="Contact Us" 
        image="https://picsum.photos/1920/1080?random=90" 
      />

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '640px' }}>
          <p style={{ color: '#4a5568', marginBottom: '3rem', textAlign: 'center', lineHeight: 1.8 }}>
            事業に関するご質問、取材のご依頼など、<br />
            下記フォームよりお気軽にお問い合わせください。
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">お名前 <span className="required">*</span></label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="山田 太郎"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">メールアドレス <span className="required">*</span></label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your-email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">お問い合わせ種別</label>
              <select 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">選択してください</option>
                <option value="service">事業内容について</option>
                <option value="recruit">採用について</option>
                <option value="press">取材・メディア掲載について</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">お問い合わせ内容 <span className="required">*</span></label>
              <textarea 
                id="message" 
                name="message" 
                rows={6}
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="詳細をご記入ください"
              ></textarea>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button 
                type="submit" 
                className="btn-submit"
              >
                送信する
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};