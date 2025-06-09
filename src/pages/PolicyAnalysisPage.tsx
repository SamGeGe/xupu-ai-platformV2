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
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">1</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">多渠道政策导入</h3>
                    <p className="text-xs text-indigo-300">支持直接输入或上传PDF、Word、图片等政策文件</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">2</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">智能政策解读</h3>
                    <p className="text-xs text-indigo-300">AI自动提炼政策要点、关键信息与合规要求</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">3</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">影响评估与多维报告</h3>
                    <p className="text-xs text-indigo-300">分析政策实施影响，生成多维度分析报告与建议</p>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 mt-2">
                  <p className="text-xs text-blue-200">适用场景：政策解读、合规分析、行业影响评估等。</p>
                </div>
              </div>
              <div className="text-xs text-indigo-400 mt-2">
                如遇加载缓慢请刷新页面。所有上传内容仅用于本地分析，绝不外传。
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
              <div className="relative w-full" style={{ 
                height: 'calc(100vh - 220px)',
                minHeight: '500px'
              }}>
                <iframe
                  src="https://apps.scsup.com:9080/chatbot/fp1M1upDKFWUkMG5"
                  className="w-full h-full rounded-lg border-0"
                  style={{
                    minHeight: '500px'
                  }}
                  title="Policy Analysis Interface"
                  allow="microphone; camera; fullscreen; display-capture; clipboard-read; clipboard-write"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-presentation allow-top-navigation"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolicyAnalysisPage;