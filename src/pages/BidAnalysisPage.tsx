import React from 'react';
import { ArrowLeft, GanttChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const BidAnalysisPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <NetworkBackground />
      <Header />
      
      <main className="flex-1 container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-indigo-300 hover:text-white flex items-center transition-colors mb-2 sm:mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span className="text-sm sm:text-base">返回仪表板</span>
        </button>

        <div className="w-full mx-auto">
          <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-2 sm:p-4">
            <div className="flex items-center mb-2 sm:mb-3">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 sm:p-2.5 rounded-lg text-white mr-2 sm:mr-3 flex-shrink-0">
                <GanttChart size={18} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-white truncate">招投标分析</h1>
                <p className="text-xs sm:text-sm text-indigo-300">智能分析招投标文件和流程</p>
              </div>
            </div>
            
            <div className="relative w-full" style={{ 
              height: 'calc(100vh - 160px)',
              minHeight: '500px'
            }}>
              <iframe
                src="https://apps.scsup.com:9080/chatbot/Bm2dqaCjsvJQvIYD"
                className="w-full h-full rounded-lg border-0"
                style={{
                  minHeight: '500px'
                }}
                title="Bid Analysis Interface"
                allow="microphone; camera; fullscreen; display-capture; clipboard-read; clipboard-write"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-presentation allow-top-navigation"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BidAnalysisPage;