import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Cpu, Clock, ChevronDown } from 'lucide-react';
import { getCurrentUser, logout, getSessionRemainingTime, refreshSession } from '../utils/auth';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);

  useEffect(() => {
    // 更新会话剩余时间
    const updateSessionTime = () => {
      setSessionTime(getSessionRemainingTime());
    };

    updateSessionTime();
    const interval = setInterval(updateSessionTime, 60000); // 每分钟更新一次

    return () => clearInterval(interval);
  }, []);

  // 自动刷新会话
  useEffect(() => {
    const refreshInterval = setInterval(() => {
      if (!refreshSession()) {
        navigate('/login');
      }
    }, 30 * 60 * 1000); // 每30分钟刷新一次会话

    return () => clearInterval(refreshInterval);
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatSessionTime = (minutes: number): string => {
    if (minutes < 60) {
      return `${minutes}分钟`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}小时${remainingMinutes > 0 ? `${remainingMinutes}分钟` : ''}`;
  };

  const getSessionTimeColor = (minutes: number): string => {
    if (minutes < 30) return 'text-red-300';
    if (minutes < 60) return 'text-yellow-300';
    return 'text-green-300';
  };

  if (!user) return null;

  return (
    <header className="w-full py-4 px-6 bg-indigo-950/40 backdrop-blur-md border-b border-indigo-800/30 flex justify-between items-center relative z-10">
      <div className="flex items-center space-x-2">
        <Cpu className="text-blue-400 h-6 w-6" />
        <h1 className="text-white text-lg font-bold whitespace-nowrap">旭普云</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* 会话时间显示 */}
        <div className="hidden sm:flex items-center space-x-1 text-xs">
          <Clock size={14} className="text-indigo-300" />
          <span className={`${getSessionTimeColor(sessionTime)} font-medium`}>
            {formatSessionTime(sessionTime)}
          </span>
        </div>

        {/* 用户菜单 */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center space-x-2 bg-indigo-700/40 hover:bg-indigo-600/60 px-3 py-2 rounded-lg transition-colors"
          >
            <div className="text-right">
              <p className="text-white text-sm font-medium">{user.name}</p>
              <p className="text-xs text-indigo-300">{user.role}</p>
            </div>
            <ChevronDown 
              size={16} 
              className={`text-indigo-300 transition-transform duration-200 ${showUserMenu ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* 下拉菜单 - 最高层级确保不被遮挡 */}
          {showUserMenu && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-indigo-900/95 backdrop-blur-md border border-indigo-700/50 rounded-lg shadow-xl z-[9999] animate-slide-down">
              <div className="p-3 border-b border-indigo-700/30">
                <p className="text-white font-medium text-sm">{user.name}</p>
                <p className="text-indigo-300 text-xs">{user.role}</p>
              </div>
              
              <div className="p-2">
                <div className="flex items-center space-x-2 px-3 py-2 text-xs">
                  <Clock size={14} className="text-indigo-300" />
                  <span className="text-indigo-200">会话剩余:</span>
                  <span className={`${getSessionTimeColor(sessionTime)} font-medium`}>
                    {formatSessionTime(sessionTime)}
                  </span>
                </div>
                
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2 px-3 py-2 text-red-300 hover:bg-red-500/20 rounded-md transition-colors text-left"
                >
                  <LogOut size={16} />
                  <span>退出登录</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 点击外部关闭菜单 */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-[9998]" 
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  );
};

export default Header;