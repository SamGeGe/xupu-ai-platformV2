import React from 'react';
import { ArrowLeft, FileEdit, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const ContractReviewPage: React.FC = () => {
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
          {/* 左侧说明区 */}
          <div className="lg:col-span-4">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2.5 rounded-lg text-white mr-3">
                  <FileEdit size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white mb-1">AI合同审查专家</h1>
                  <p className="text-sm text-indigo-300">AI智能辅助分析合同和法律文件</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">1</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">多格式上传</h3>
                    <p className="text-xs text-indigo-300">支持PDF、Word、图片等格式，自动识别内容</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">2</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">智能风险识别</h3>
                    <p className="text-xs text-indigo-300">自动识别合同关键条款、权利义务和潜在风险</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">3</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">法律合规检查</h3>
                    <p className="text-xs text-indigo-300">自动检查合同条款是否符合相关法律法规要求</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 font-bold mr-2">4</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">审查报告生成</h3>
                    <p className="text-xs text-indigo-300">生成专业的合同审查报告，提供修改建议和优化方案</p>
                  </div>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-2 mt-2">
                  <p className="text-xs text-blue-200">适用场景：工程、采购、服务等合同审查。</p>
                </div>
              </div>
              <div className="text-xs text-indigo-400 mt-2">
                如遇加载缓慢请刷新页面。所有上传内容仅用于本地分析，绝不外传。
              </div>
            </div>
          </div>
          {/* 右侧AI聊天区 */}
          <div className="lg:col-span-8">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 rounded-lg text-white mr-3">
                  <Bot size={20} />
                </div>
                <h2 className="text-lg font-semibold text-white">AI合同审查助手</h2>
              </div>
              <div className="relative w-full" style={{ 
                height: 'calc(100vh - 220px)',
                minHeight: '500px'
              }}>
                <iframe
                  src="https://apps.scsup.com:9080/chatbot/7BmdVUosP7MN5vjH"
                  className="w-full h-full rounded-lg border-0"
                  style={{
                    minHeight: '500px'
                  }}
                  title="Contract Review AI Interface"
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

export default ContractReviewPage; 