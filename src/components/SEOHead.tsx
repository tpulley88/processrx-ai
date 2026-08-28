import React from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, keywords, path = '/' }) => {
  React.useEffect(() => {
    // Update title
    document.title = `${title} - ProcessRx.ai`;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', `${title} - ProcessRx.ai`);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', `https://processrx.ai${path}`);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', `${title} - ProcessRx.ai`);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterUrl) twitterUrl.setAttribute('content', `https://processrx.ai${path}`);
  }, [title, description, keywords, path]);

  return null;
};

export default SEOHead;