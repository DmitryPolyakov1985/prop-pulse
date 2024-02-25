import '@/assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find Your Dream Rental Property',
  keywords: 'rental, find rental, finc properties',
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default MainLayout;
