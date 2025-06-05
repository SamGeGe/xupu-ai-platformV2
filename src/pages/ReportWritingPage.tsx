import React from 'react';
import { ArrowLeft, ClipboardEdit, Type, FileUp, Bot, Scale, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const ReportWritingPage: React.FC = () => {
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
          {/* Left Panel - Report Writing Info */}
          <div className="lg:col-span-4">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2.5 rounded-lg text-white mr-3">
                  <ClipboardEdit size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white mb-1">报告撰写</h1>
                  <p className="text-sm text-indigo-300">智能辅助撰写各类专业报告</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Type className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">直接输入内容</h3>
                      <p className="text-xs text-indigo-300">您可以直接输入报告内容或大纲，我将协助您完善和优化</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <FileUp className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">上传文件</h3>
                      <p className="text-xs text-indigo-300">您可以上传PDF、Doc、Docx或者其他格式文件，我将协助您完善报告内容</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bot className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">智能写作</h3>
                      <p className="text-xs text-indigo-300">AI辅助生成专业的报告内容和建议</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Scale className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">格式规范</h3>
                      <p className="text-xs text-indigo-300">确保报告格式符合行业标准和要求</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">质量检查</h3>
                      <p className="text-xs text-indigo-300">自动检查报告质量，提供修改建议和优化方案</p>
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
                <h2 className="text-lg font-semibold text-white">报告撰写助手</h2>
              </div>
              <iframe
                src="https://apps.scsup.com:9080/chatbot/0BMVkfAUEh7hHhUV"
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

export default ReportWritingPage;