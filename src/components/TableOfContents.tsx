import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, List, Eye, EyeOff } from 'lucide-react';

interface TOCItem {
  id: string;
  title: string;
  level: number;
  element?: HTMLElement;
}

interface TableOfContentsProps {
  containerSelector?: string;
  headingSelector?: string;
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  containerSelector = '.prose',
  headingSelector = 'h1, h2, h3, h4, h5, h6',
  className = ''
}) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 生成目录项
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const headings = container.querySelectorAll(headingSelector) as NodeListOf<HTMLElement>;
    const items: TOCItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      const level = parseInt(heading.tagName.charAt(1));
      items.push({
        id,
        title: heading.textContent || '',
        level,
        element: heading
      });
    });

    setTocItems(items);
  }, [containerSelector, headingSelector]);

  // 监听滚动，高亮当前章节
  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => item.element).filter(Boolean) as HTMLElement[];
      
      let currentActiveId = '';
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
        
        if (rect.top <= 100) {
          currentActiveId = heading.id;
          break;
        }
      }
      
      setActiveId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化

    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  // 滚动到指定章节
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // 获取缩进样式
  const getIndentClass = (level: number) => {
    const indents = {
      1: 'pl-0',
      2: 'pl-4',
      3: 'pl-8',
      4: 'pl-12'
    };
    return indents[level as keyof typeof indents] || 'pl-16';
  };

  if (!tocItems.length) return null;

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-30 ${className}`}>
      {/* 切换可见性按钮 */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="mb-2 p-2 bg-indigo-900/90 backdrop-blur-sm border border-indigo-700/50 rounded-lg text-indigo-300 hover:text-white transition-colors"
        title={isVisible ? '隐藏目录' : '显示目录'}
      >
        {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>

      {/* 目录内容 */}
      {isVisible && (
        <div className="w-72 bg-indigo-900/90 backdrop-blur-md border border-indigo-700/50 rounded-xl shadow-xl overflow-hidden flex flex-col max-h-[32rem]">
          {/* 目录头部 */}
          <div className="flex items-center justify-between p-3 border-b border-indigo-700/30 flex-shrink-0">
            <div className="flex items-center space-x-2">
              <List size={16} className="text-indigo-400" />
              <h3 className="text-sm font-medium text-white">目录导航</h3>
            </div>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-indigo-400 hover:text-white transition-colors"
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          {/* 目录列表 */}
          {!isCollapsed && (
            <div className="flex-1 overflow-y-auto p-2 min-h-0">
              <nav className="space-y-1">
                {tocItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToHeading(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${getIndentClass(item.level)} ${
                      activeId === item.id
                        ? 'bg-indigo-700/50 text-white font-medium border-l-2 border-blue-400'
                        : 'text-indigo-300 hover:text-white hover:bg-indigo-800/30'
                    }`}
                  >
                    <span className="block truncate">{item.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          )}

          {/* 快捷提示 */}
          {!isCollapsed && (
            <div className="border-t border-indigo-700/30 bg-indigo-950/30 p-3 flex-shrink-0">
              <p className="text-xs text-indigo-400 text-center leading-relaxed">
                💡 点击章节标题快速跳转
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TableOfContents; 