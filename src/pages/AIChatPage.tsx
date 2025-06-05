import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';
import FeedbackButton from '../components/FeedbackButton';

const AIChatPage: React.FC = () => {
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
                <MessageSquare size={18} className="sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-base sm:text-xl lg:text-2xl font-bold text-white truncate">AI智能助手对话</h1>
                <p className="text-xs sm:text-sm text-indigo-300 hidden sm:block">获取AI助手的即时回答和帮助</p>
              </div>
            </div>
            
            <div className="relative w-full" style={{ 
              height: 'calc(100vh - 160px)',
              minHeight: '500px'
            }}>
              <iframe
                src="https://apps.scsup.com:9080/chatbot/Wr0MPKEIMqgUIVqs"
                className="w-full h-full rounded-lg border-0"
                style={{
                  minHeight: '500px'
                }}
                title="AI Chat Interface"
                allow="microphone; camera; fullscreen; display-capture; clipboard-read; clipboard-write"
                sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-presentation allow-top-navigation"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg block sm:hidden">
          <p className="text-blue-200 text-xs text-center">
            💡 提示：可以横屏使用获得更好的聊天体验
          </p>
        </div>
      </main>
      
      {/* 意见反馈按钮 */}
      <FeedbackButton />
    </div>
  );
};

export default AIChatPage;