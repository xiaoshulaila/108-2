import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Web3Provider } from './providers/Web3Provider';
import Header from './components/Header';
import { Navigation } from './components/Navigation';
import { Home, Rankings, Rewards, FAQ, Profile } from './pages';

export const App: React.FC = () => {
  return (
    <Web3Provider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-[#0C0E12] text-white flex flex-col">
            <Header />
            <main className="flex-1 pb-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/promotions" element={<Rankings />} />
                <Route path="/rewards" element={<Rewards />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/profile" element={<Profile />} />
                {/* Add catch-all route for 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Navigation />
          </div>
        </Router>
      </LanguageProvider>
    </Web3Provider>
  );
};