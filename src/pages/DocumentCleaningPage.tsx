import React from 'react';
import { ArrowLeft, FileSearch, Type, FileUp, Bot, Scale, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const DocumentCleaningPage: React.FC = () => {
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
          {/* Left Panel - Document Cleaning Info */}
          <div className="lg:col-span-4">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2.5 rounded-lg text-white mr-3">
                  <FileSearch size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white mb-1">文件清洗</h1>
                  <p className="text-sm text-indigo-300">提取图片或文件里的内容</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Type className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">直接输入文本</h3>
                      <p className="text-xs text-indigo-300">您可以直接把文本粘贴到聊天框，我将对内容进行提取和清洗</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <FileUp className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">上传文件</h3>
                      <p className="text-xs text-indigo-300">您可以上传PDF、Doc、Docx或者图片文件，我将对上传文件的内容进行识别和提取</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bot className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">智能识别</h3>
                      <p className="text-xs text-indigo-300">AI系统自动识别和提取文件中的关键信息</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Scale className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">格式转换</h3>
                      <p className="text-xs text-indigo-300">支持多种格式之间的转换和内容提取</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-3 mt-1" size={18} />
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1">清洗报告</h3>
                      <p className="text-xs text-indigo-300">生成详细的文件清洗报告，展示提取的内容和处理结果</p>
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
                <h2 className="text-lg font-semibold text-white">文件清洗助手</h2>
              </div>
              <div className="relative w-full" style={{ 
                height: 'calc(100vh - 220px)',
                minHeight: '500px'
              }}>
                <iframe
                  src="https://apps.scsup.com:9080/chatbot/u57Jfk2WbVT24LAn"
                  className="w-full h-full rounded-lg border-0"
                  style={{
                    minHeight: '500px'
                  }}
                  title="Document Cleaning Interface"
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

export default DocumentCleaningPage;