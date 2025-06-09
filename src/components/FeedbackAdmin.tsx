import React, { useState, useEffect } from 'react';
import { Search, Calendar, User, Mail, MessageSquare, Trash2, Eye, Filter, Download, Lock, Shield } from 'lucide-react';

interface FeedbackData {
  name: string;
  email: string;
  type: 'bug' | 'feature' | 'improvement' | 'other';
  message: string;
  page: string;
  timestamp: number;
}

const FeedbackAdmin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [isAuthLoading, setIsAuthLoading] = useState(false);
  const [feedbackList, setFeedbackList] = useState<FeedbackData[]>([]);
  const [filteredFeedback, setFilteredFeedback] = useState<FeedbackData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackData | null>(null);

  const ADMIN_PASSWORD = '139805pr';

  const feedbackTypes = [
    { value: 'all', label: '全部类型', color: 'text-gray-400', bgColor: 'bg-gray-500' },
    { value: 'bug', label: '🐛 问题反馈', color: 'text-red-400', bgColor: 'bg-red-500' },
    { value: 'feature', label: '✨ 功能建议', color: 'text-green-400', bgColor: 'bg-green-500' },
    { value: 'improvement', label: '📈 改进意见', color: 'text-blue-400', bgColor: 'bg-blue-500' },
    { value: 'other', label: '💬 其他意见', color: 'text-purple-400', bgColor: 'bg-purple-500' },
  ];

  // 检查是否已认证
  useEffect(() => {
    const authStatus = localStorage.getItem('feedback_admin_auth');
    const authTime = localStorage.getItem('feedback_admin_auth_time');
    
    if (authStatus === 'true' && authTime) {
      const currentTime = Date.now();
      const lastAuthTime = parseInt(authTime);
      // 认证有效期8小时
      if (currentTime - lastAuthTime < 8 * 60 * 60 * 1000) {
        setIsAuthenticated(true);
      } else {
        // 认证过期，清除状态
        localStorage.removeItem('feedback_admin_auth');
        localStorage.removeItem('feedback_admin_auth_time');
      }
    }
  }, []);

  // 密码验证函数
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthLoading(true);
    setAuthError('');

    // 模拟验证延迟
    await new Promise(resolve => setTimeout(resolve, 800));

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('feedback_admin_auth', 'true');
      localStorage.setItem('feedback_admin_auth_time', Date.now().toString());
      setPassword('');
    } else {
      setAuthError('密码错误，请重新输入');
      setPassword('');
    }
    setIsAuthLoading(false);
  };

  // 登出函数
  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    localStorage.removeItem('feedback_admin_auth');
    localStorage.removeItem('feedback_admin_auth_time');
  };

  // 加载反馈数据
  useEffect(() => {
    const loadFeedback = () => {
      const stored = localStorage.getItem('user_feedback');
      if (stored) {
        const data = JSON.parse(stored).sort((a: FeedbackData, b: FeedbackData) => b.timestamp - a.timestamp);
        setFeedbackList(data);
        setFilteredFeedback(data);
      }
    };

    loadFeedback();
    
    // 每5秒刷新一次数据
    const interval = setInterval(loadFeedback, 5000);
    return () => clearInterval(interval);
  }, []);

  // 搜索和过滤
  useEffect(() => {
    let filtered = feedbackList;

    // 类型过滤
    if (filterType !== 'all') {
      filtered = filtered.filter(item => item.type === filterType);
    }

    // 搜索过滤
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredFeedback(filtered);
  }, [feedbackList, searchTerm, filterType]);

  // 删除反馈
  const deleteFeedback = (timestamp: number) => {
    const updated = feedbackList.filter(item => item.timestamp !== timestamp);
    setFeedbackList(updated);
    localStorage.setItem('user_feedback', JSON.stringify(updated));
  };

  // 导出反馈数据
  const exportFeedback = () => {
    const dataStr = JSON.stringify(feedbackList, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `feedback_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('zh-CN');
  };

  const getTypeInfo = (type: string) => {
    return feedbackTypes.find(t => t.value === type) || feedbackTypes[0];
  };

  const stats = {
    total: feedbackList.length,
    bug: feedbackList.filter(f => f.type === 'bug').length,
    feature: feedbackList.filter(f => f.type === 'feature').length,
    improvement: feedbackList.filter(f => f.type === 'improvement').length,
    other: feedbackList.filter(f => f.type === 'other').length,
  };

  // 如果未认证，显示密码验证界面
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="bg-indigo-900/50 backdrop-blur-md border border-indigo-700/50 rounded-xl p-8 shadow-2xl">
            {/* 头部 */}
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Shield size={32} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">管理员验证</h1>
              <p className="text-indigo-300 text-sm">请输入管理员密码以访问反馈管理系统</p>
            </div>

            {/* 密码表单 */}
            <form onSubmit={handlePasswordSubmit}>
              <div className="mb-6">
                <label className="block text-indigo-200 text-sm font-medium mb-2">
                  <Lock size={16} className="inline mr-1" />
                  管理员密码
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-3 px-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="请输入管理员密码"
                  required
                  autoFocus
                />
              </div>

              {authError && (
                <div className="mb-4 bg-red-500/20 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 animate-shake">
                  {authError}
                </div>
              )}

              <button
                type="submit"
                disabled={isAuthLoading || !password.trim()}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  !isAuthLoading && password.trim()
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isAuthLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>验证中...</span>
                  </>
                ) : (
                  <>
                    <Shield size={16} />
                    <span>验证身份</span>
                  </>
                )}
              </button>
            </form>

            <div className="flex justify-center mt-6">
              <button
                type="button"
                onClick={() => window.location.href = '/'}
                className="inline-block bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-400 hover:to-blue-400 text-white font-medium py-2 px-6 rounded-lg shadow transition-all duration-200"
              >
                返回主页
              </button>
            </div>

            {/* 提示信息 */}
            <div className="mt-6 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-blue-200 text-xs text-center">
                🔐 此界面仅限管理员访问，认证有效期8小时
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 头部 */}
        <div className="bg-indigo-900/50 backdrop-blur-md border border-indigo-700/50 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">意见反馈管理</h1>
              <p className="text-indigo-300">管理和查看用户提交的反馈意见</p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={exportFeedback}
                className="flex items-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                <Download size={16} />
                <span className="hidden sm:inline">导出数据</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                title="安全退出"
              >
                <Lock size={16} />
                <span className="hidden sm:inline">退出</span>
              </button>
            </div>
          </div>

          {/* 统计卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
            <div className="bg-indigo-950/50 border border-indigo-700/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{stats.total}</div>
                <div className="text-indigo-300 text-sm font-medium">总反馈数</div>
              </div>
              <div className="mt-2 text-xs text-indigo-400 text-center">
                所有用户提交的反馈总量，反映平台活跃度
              </div>
            </div>
            <div className="bg-red-950/50 border border-red-700/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-1">{stats.bug}</div>
                <div className="text-red-300 text-sm font-medium">🐛 问题反馈</div>
              </div>
              <div className="mt-2 text-xs text-red-300 text-center">
                用户遇到的BUG、错误或功能异常报告
              </div>
            </div>
            <div className="bg-green-950/50 border border-green-700/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">{stats.feature}</div>
                <div className="text-green-300 text-sm font-medium">✨ 功能建议</div>
              </div>
              <div className="mt-2 text-xs text-green-300 text-center">
                用户希望新增的功能或特性建议
              </div>
            </div>
            <div className="bg-blue-950/50 border border-blue-700/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">{stats.improvement}</div>
                <div className="text-blue-300 text-sm font-medium">📈 改进意见</div>
              </div>
              <div className="mt-2 text-xs text-blue-300 text-center">
                对现有功能的优化和改进建议
              </div>
            </div>
            <div className="bg-purple-950/50 border border-purple-700/30 rounded-lg p-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">{stats.other}</div>
                <div className="text-purple-300 text-sm font-medium">💬 其他意见</div>
              </div>
              <div className="mt-2 text-xs text-purple-300 text-center">
                其他类型的意见、建议或咨询
              </div>
            </div>
          </div>

          {/* 数据说明 */}
          <div className="mt-4 bg-indigo-950/30 border border-indigo-700/20 rounded-lg p-4">
            <h3 className="text-white font-medium mb-3 flex items-center">
              📊 数据统计说明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-indigo-300 mb-4">
              <div>
                <p><strong className="text-white">统计周期：</strong>全部历史数据</p>
                <p><strong className="text-white">更新频率：</strong>每5秒自动刷新</p>
              </div>
              <div>
                <p><strong className="text-white">数据来源：</strong>用户主动提交的反馈</p>
                <p><strong className="text-white">存储方式：</strong>本地浏览器存储</p>
              </div>
            </div>
            
            <h4 className="text-white font-medium mb-2 flex items-center">
              💡 管理功能说明
            </h4>
            <div className="text-sm text-indigo-300 space-y-1">
              <p>• <strong className="text-blue-400">搜索过滤：</strong>支持按姓名、邮箱、反馈内容搜索，按类型过滤</p>
              <p>• <strong className="text-green-400">查看详情：</strong>点击 👁️ 图标查看完整反馈信息</p>
              <p>• <strong className="text-red-400">删除功能：</strong>点击 🗑️ 图标删除不需要的反馈</p>
              <p>• <strong className="text-purple-400">数据导出：</strong>导出JSON格式数据，便于备份和分析</p>
              <p>• <strong className="text-indigo-400">认证安全：</strong>管理员密码保护，8小时自动过期</p>
            </div>
          </div>
        </div>

        {/* 搜索和过滤 */}
        <div className="bg-indigo-900/50 backdrop-blur-md border border-indigo-700/50 rounded-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* 搜索框 */}
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="搜索姓名、邮箱或反馈内容..."
                className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-2 pl-10 pr-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* 类型过滤 */}
            <div className="relative">
              <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-2 pl-10 pr-8 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 appearance-none cursor-pointer"
              >
                {feedbackTypes.map(type => (
                  <option key={type.value} value={type.value} className="bg-indigo-900">
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* 反馈列表 */}
        <div className="bg-indigo-900/50 backdrop-blur-md border border-indigo-700/50 rounded-xl overflow-hidden">
          {filteredFeedback.length === 0 ? (
            <div className="p-12 text-center">
              <MessageSquare size={48} className="mx-auto text-indigo-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">暂无反馈</h3>
              <p className="text-indigo-300">还没有用户提交反馈意见</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-indigo-950/50 border-b border-indigo-700/30">
                  <tr>
                    <th className="text-left p-4 text-indigo-200 font-medium">用户信息</th>
                    <th className="text-left p-4 text-indigo-200 font-medium">类型</th>
                    <th className="text-left p-4 text-indigo-200 font-medium">页面</th>
                    <th className="text-left p-4 text-indigo-200 font-medium">时间</th>
                    <th className="text-left p-4 text-indigo-200 font-medium">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFeedback.map((feedback, index) => {
                    const typeInfo = getTypeInfo(feedback.type);
                    return (
                      <tr 
                        key={feedback.timestamp}
                        className="border-b border-indigo-700/20 hover:bg-indigo-950/30 transition-colors"
                      >
                        <td className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
                              <User size={16} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white font-medium">{feedback.name}</div>
                              {feedback.email && (
                                <div className="text-indigo-300 text-sm flex items-center">
                                  <Mail size={12} className="mr-1" />
                                  {feedback.email}
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${typeInfo.bgColor}/20 ${typeInfo.color} border border-current`}>
                            {typeInfo.label}
                          </span>
                        </td>
                        <td className="p-4 text-indigo-300 text-sm">{feedback.page || '/'}</td>
                        <td className="p-4 text-indigo-300 text-sm">
                          <Calendar size={12} className="inline mr-1" />
                          {formatDate(feedback.timestamp)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setSelectedFeedback(feedback)}
                              className="text-blue-400 hover:text-blue-300 p-1 rounded transition-colors"
                              title="查看详情"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => deleteFeedback(feedback.timestamp)}
                              className="text-red-400 hover:text-red-300 p-1 rounded transition-colors"
                              title="删除"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 反馈详情模态框 */}
        {selectedFeedback && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedFeedback(null)}
            />
            <div className="relative w-full max-w-2xl bg-indigo-900/95 backdrop-blur-md border border-indigo-700/50 rounded-xl shadow-2xl">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">反馈详情</h2>
                  <button
                    onClick={() => setSelectedFeedback(null)}
                    className="text-indigo-400 hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-1">姓名</label>
                      <div className="text-white">{selectedFeedback.name}</div>
                    </div>
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-1">邮箱</label>
                      <div className="text-white">{selectedFeedback.email || '未提供'}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-1">反馈类型</label>
                      <div className="text-white">{getTypeInfo(selectedFeedback.type).label}</div>
                    </div>
                    <div>
                      <label className="block text-indigo-200 text-sm font-medium mb-1">提交时间</label>
                      <div className="text-white">{formatDate(selectedFeedback.timestamp)}</div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-1">页面</label>
                    <div className="text-white">{selectedFeedback.page || '/'}</div>
                  </div>

                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-2">反馈内容</label>
                    <div className="bg-indigo-950/50 border border-indigo-700/50 rounded-lg p-4 text-white whitespace-pre-wrap">
                      {selectedFeedback.message}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackAdmin; 