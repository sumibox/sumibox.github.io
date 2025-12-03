import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="page-header">
      <div 
        className="page-header-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-header-overlay" />
      <div className="page-header-content fade-in">
        <h1 className="page-header-title">{title}</h1>
        <p className="page-header-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};