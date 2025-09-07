import { Helmet } from 'react-helmet-async';

const SEOHead = () => {
  return (
    <Helmet>
      <title>Jerald Batal - Frontend Web Developer | React.js Specialist</title>
      <meta 
        name="description" 
        content="Jerald Batal is a passionate Frontend Web Developer specializing in React.js, JavaScript, and modern web technologies. View my portfolio of projects and get in touch for collaboration opportunities." 
      />
      <meta 
        name="keywords" 
        content="Jerald Batal, Frontend Developer, React.js, JavaScript, Web Developer, Portfolio, HTML, CSS, Tailwind CSS, Node.js, MongoDB, Philippines" 
      />
      <meta name="author" content="Jerald Malacaste Batal" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jeraldbatal22.github.io/jerald-dev-portfolio/" />
      <meta property="og:title" content="Jerald Batal - Frontend Web Developer" />
      <meta property="og:description" content="Passionate Frontend Web Developer specializing in React.js and modern web technologies. View my portfolio and let's work together!" />
      <meta property="og:image" content="/images/jerald2.jpg" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jeraldbatal22.github.io/jerald-dev-portfolio/" />
      <meta property="twitter:title" content="Jerald Batal - Frontend Web Developer" />
      <meta property="twitter:description" content="Passionate Frontend Web Developer specializing in React.js and modern web technologies." />
      <meta property="twitter:image" content="/images/jerald2.jpg" />
      
      {/* Additional SEO */}
      <link rel="canonical" href="https://jeraldbatal22.github.io/jerald-dev-portfolio/" />
      <meta name="theme-color" content="#3b82f6" />
    </Helmet>
  );
};

export default SEOHead;
