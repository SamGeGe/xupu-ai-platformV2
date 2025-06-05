import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

interface FeaturePageProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturePage: React.FC<FeaturePageProps> = ({ title, description, icon }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <NetworkBackground />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6 flex flex-col">
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/dashboard')}
            className="text-indigo-300 hover:text-white flex items-center transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            返回仪表板
          </button>
        </div>
        
        <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-6">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-lg text-white mr-4">
              {icon}
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">{title}</h1>
              <p className="text-indigo-300">{description}</p>
            </div>
          </div>
          
          <div className="border border-indigo-800/30 bg-indigo-950/30 rounded-lg p-8 text-center">
            <div className="text-white mb-4">
              此功能即将推出，敬请期待！
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
            >
              返回仪表板
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FeaturePage;