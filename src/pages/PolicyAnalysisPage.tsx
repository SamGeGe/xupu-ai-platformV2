import React from 'react';
import { ArrowLeft, BookOpen, Type, FileUp, Bot, Scale, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const PolicyAnalysisPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <NetworkBackground />
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-4">
        <button 
          onClick={() => navigate('/dashboard')}
          className="text-indigo-300 hover:text-white flex items-center transition-colors mb-4"
        >
          <ArrowLeft size={20} className="mr-2" />
          返回仪表板
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Policy Analysis Info */}
          <div className="lg:col-span-4">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2.5 rounded-lg text-white mr-3">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white mb-1">政策分析</h1>
                  <p className="text-sm text-indigo-300">解读和分析各类政策</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Type className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">直接输入政策文本</h3>
                      <p className="text-xs text-indigo-300">您可以直接把政策文本粘贴到聊天框，我将对政策进行解读</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <FileUp className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">上传文件</h3>
                      <p className="text-xs text-indigo-300">您可以上传PDF、Doc、Docx或者图片文件，我将对政策文件进行识别和分析</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bot className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">智能解读</h3>
                      <p className="text-xs text-indigo-300">AI系统自动解读政策要点和关键信息</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Scale className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">影响评估</h3>
                      <p className="text-xs text-indigo-300">分析政策实施可能带来的影响和机遇</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">分析报告</h3>
                      <p className="text-xs text-indigo-300">生成详细的政策分析报告，提供建议和应对方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Chat Interface */}
          <div className="lg:col-span-8">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 rounded-lg text-white mr-3">
                  <Bot size={20} />
                </div>
                <h2 className="text-lg font-semibold text-white">政策分析专家</h2>
              </div>
              <iframe
                src="https://apps.scsup.com:9080/chatbot/fp1M1upDKFWUkMG5"
                className="w-full h-[calc(100vh-14rem)] rounded-lg"
                title="AI Chat Interface"
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

export default PolicyAnalysisPage;