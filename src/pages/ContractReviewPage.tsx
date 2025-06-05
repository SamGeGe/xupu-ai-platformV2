import React, { useState } from 'react';
import { ArrowLeft, FileText, Type, FileUp, Bot, Scale, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import Header from '../components/Header';

const ContractReviewPage: React.FC = () => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

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

        {/* 移动端信息展开/收起按钮 */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowInfo(!showInfo)}
            className="w-full bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-lg p-3 flex items-center justify-between text-white"
          >
            <div className="flex items-center">
              <FileText size={18} className="mr-2 text-blue-400" />
              <span className="text-sm font-medium">功能说明</span>
            </div>
            {showInfo ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Left Panel - Contract Review Info */}
          <div className={`lg:col-span-4 ${showInfo ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-3 sm:p-4">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 sm:p-2.5 rounded-lg text-white mr-2 sm:mr-3 flex-shrink-0">
                  <FileText size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="text-lg sm:text-xl font-bold text-white mb-1">合同审查</h1>
                  <p className="text-xs sm:text-sm text-indigo-300">使用AI辅助分析合同和法律文件</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Type className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">直接输入合同文本</h3>
                      <p className="text-xs text-indigo-300">您可以直接把合同文本粘贴到聊天框，我将对合同进行审查</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <FileUp className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">上传文件</h3>
                      <p className="text-xs text-indigo-300">您可以上传PDF、Doc、Docx或者图片文件，我将对上传文件的内容进行识别并提供审查服务</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Bot className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">智能分析</h3>
                      <p className="text-xs text-indigo-300">AI系统自动识别和分析合同关键条款、权利义务和潜在风险</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <Scale className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">法律合规</h3>
                      <p className="text-xs text-indigo-300">自动检查合同条款是否符合相关法律法规要求</p>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-900/30 border border-indigo-700/30 rounded-lg p-3">
                  <div className="flex items-start">
                    <CheckCircle className="text-blue-400 mr-2 sm:mr-3 mt-1 flex-shrink-0" size={16} />
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm sm:text-base font-semibold text-white mb-1">审查报告</h3>
                      <p className="text-xs text-indigo-300">生成专业的合同审查报告，提供修改建议和优化方案</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Chat Interface */}
          <div className="lg:col-span-8">
            <div className="bg-indigo-950/40 backdrop-blur-md border border-indigo-800/30 rounded-xl p-3 sm:p-4">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-2 rounded-lg text-white mr-2 sm:mr-3 flex-shrink-0">
                  <Bot size={18} className="sm:w-5 sm:h-5" />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-white">合同审查专家</h2>
              </div>
              
              {/* 响应式iframe容器 */}
              <div className="relative w-full" style={{ 
                height: showInfo ? 'calc(100vh - 400px)' : 'calc(100vh - 200px)', // 根据信息面板状态调整高度
                minHeight: '350px' // 最小高度保证可用性
              }}>
                <iframe
                  src="https://apps.scsup.com:9080/chatbot/7BmdVUosP7MN5vjH"
                  className="w-full h-full rounded-lg border-0"
                  style={{
                    minHeight: '350px',
                    maxHeight: '700px' // 桌面端最大高度限制
                  }}
                  title="Contract Review AI Interface"
                  allow="microphone; camera; fullscreen; display-capture; clipboard-read; clipboard-write"
                  sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals allow-presentation allow-top-navigation"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* 移动端提示信息 */}
        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg block lg:hidden">
          <p className="text-blue-200 text-xs text-center">
            📄 提示：点击"功能说明"了解更多功能，横屏使用体验更佳
          </p>
        </div>
      </main>
    </div>
  );
};

export default ContractReviewPage;