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

        <div className="max-w-[95%] sm:max-w-[90%] mx-auto h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)]">
          <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-2 sm:p-4 h-full">
            <div className="flex items-center mb-2 sm:mb-3">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 sm:p-2.5 rounded-lg text-white mr-2 sm:mr-3">
                <GanttChart size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">招投标分析</h1>
                <p className="text-sm text-indigo-300">智能分析招投标文件和流程</p>
              </div>
            </div>
            <div className="h-[calc(100%-2.75rem)] sm:h-[calc(100%-3.5rem)] flex items-center justify-center">
              <iframe
                src="https://apps.scsup.com:9080/chatbot/Bm2dqaCjsvJQvIYD"
                className="rounded-lg"
                style={{
                  width: '1024px',
                  height: '768px',
                  maxWidth: '100%',
                  maxHeight: '100%'
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