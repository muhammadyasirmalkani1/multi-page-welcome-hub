
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import GetStarted from '@/components/GetStarted';
import DocsHero from '@/components/docs/DocsHero';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsContent from '@/components/docs/DocsContent';

const Docs = () => {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <DocsHero />

        {/* Documentation Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <DocsSidebar />
              </div>
              
              <div className="md:col-span-2">
                <DocsContent />
              </div>
            </div>
          </div>
        </section>
        
        {/* Add Get Started Section */}
        <GetStarted />
      </main>
      <Footer />
    </>
  );
};

export default Docs;
