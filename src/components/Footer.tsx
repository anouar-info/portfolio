// src/components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent font-inter py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-ocean dark:text-blue-300">
          © {new Date().getFullYear()} Anouar Faraji. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
