import React from 'react';
import { ArrowLeft, BookOpenCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const DeepResearchPage: React.FC = () => {
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
              <div className="bg-gradient-to-br from-purple-400 to-fuchsia-500 p-2 sm:p-2.5 rounded-lg text-white mr-2 sm:mr-3 flex-shrink-0">
                <BookOpenCheck size={18} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-white truncate">深度探索2.0</h1>
                <p className="text-xs sm:text-sm text-indigo-300">通过文档上传和网络搜索获取深度答案</p>
              </div>
            </div>
            
            <div className="relative w-full" style={{ 
              height: 'calc(100vh - 180px)',
              minHeight: '400px'
            }}>
              <iframe
                src="https://apps.scsup.com:9080/chatbot/X7Fu8eHOhrQKWcZU"
                className="w-full h-full rounded-lg border-0"
                style={{
                  minHeight: '400px',
                  maxHeight: '800px'
                }}
                title="Deep Research Interface"
                allow="microphone; camera; fullscreen; display-capture; clipboard-read; clipboard-write"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-presentation allow-top-navigation"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/30 rounded-lg block sm:hidden">
          <p className="text-purple-200 text-xs text-center">
            📚 提示：支持文档上传，横屏使用体验更佳
          </p>
        </div>
      </main>
    </div>
  );
};

export default DeepResearchPage;