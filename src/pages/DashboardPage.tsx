import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  FileText, 
  FileSearch, 
  BookOpen, 
  ClipboardEdit,
  FileEdit,
  Cpu,
  Search,
  BookOpenCheck,
  GanttChart
} from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import FeatureButton from '../components/FeatureButton';
import Header from '../components/Header';
import FeedbackButton from '../components/FeedbackButton';
import { getCurrentUser } from '../utils/auth';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: 'AI智能助手对话',
      description: '获取AI助手的即时回答和帮助',
      path: '/ai-chat'
    },
    {
      icon: <FileEdit size={24} />,
      title: 'AI合同审查',
      description: '上传合同或输入文本，自动识别风险与合规问题',
      path: '/contract-review'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'AI政策分析',
      description: '解读和分析各类政策',
      path: '/policy-analysis'
    },
    {
      icon: <ClipboardEdit size={24} />,
      title: 'AI报告撰写',
      description: '智能辅助撰写各类专业报告',
      path: '/report-writing'
    },
    {
      icon: <FileEdit size={24} />,
      title: 'AI会议纪要整理',
      description: '自动整理会议记录和要点',
      path: '/meeting-minutes'
    },
    {
      icon: <FileSearch size={24} />,
      title: 'AI文件清洗',
      description: '提取图片或文件里的内容',
      path: '/document-cleaning'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col safe-area-padding">
      <NetworkBackground />
      <Header />

      <main className="flex-1 container mx-auto px-3 sm:px-4 py-3 sm:py-6">
        <div className="relative z-10 text-center mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
            欢迎使用旭普云AI
          </h1>
          <p className="text-indigo-200 text-xs sm:text-sm max-w-2xl mx-auto">
            集成多种AI工具，助力地理信息与政企办公智能化
          </p>
        </div>

        <div className="text-lg font-semibold text-indigo-300 mt-6 mb-2">智能对话与分析</div>

        {/* Search and Research Buttons - Centered in Single Rows */}
        <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4 max-w-sm mx-auto">
          <FeatureButton
            icon={<Search size={22} className="sm:w-6 sm:h-6" />}
            title="使用AI搜索引擎"
            description="智能搜索和信息检索"
            onClick={() => {
              window.location.href = 'http://183.221.24.83:4000/';
            }}
            variant="special"
          />
          <FeatureButton
            icon={<BookOpenCheck size={22} className="sm:w-6 sm:h-6" />}
            title="深度探索2.0"
            description="通过用户上传的文档和多维度网络搜索获取答案"
            onClick={() => navigate('/deep-research')}
            variant="special"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {features.map((feature, index) => (
            <FeatureButton
              key={index}
              icon={React.cloneElement(feature.icon, { 
                size: 20, 
                className: "sm:w-6 sm:h-6" 
              })}
              title={feature.title}
              description={feature.description}
              onClick={() => navigate(feature.path)}
            />
          ))}
        </div>

        {/* 移动端使用提示 */}
        <div className="mt-6 p-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg block sm:hidden">
          <p className="text-blue-200 text-xs text-center leading-relaxed">
            💡 提示：横屏使用体验更佳，长按功能按钮可查看详细说明
          </p>
        </div>

        <footer className="py-4 sm:py-6 text-center text-indigo-300/70 text-xs">
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              <Cpu size={12} />
              <p className="whitespace-nowrap">旭普云智慧空间信息技术有限公司 © {new Date().getFullYear()}</p>
            </div>
            <button
              onClick={() => navigate('/feedback-admin')}
              className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors underline"
            >
              🔐 管理员入口（仅限授权用户）
            </button>
          </div>
        </footer>
      </main>
      
      {/* 意见反馈按钮 */}
      <FeedbackButton />
    </div>
  );
};

export default DashboardPage;