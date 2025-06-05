import React, { useState } from 'react';
import { MessageCircle, X, Send, User, Mail, MessageSquare } from 'lucide-react';

interface FeedbackData {
  name: string;
  email: string;
  type: 'bug' | 'feature' | 'improvement' | 'other';
  message: string;
  page: string;
  timestamp: number;
}

const FeedbackButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'improvement' as const,
    message: '',
  });

  const feedbackTypes = [
    { value: 'bug', label: '🐛 问题反馈', color: 'text-red-400' },
    { value: 'feature', label: '✨ 功能建议', color: 'text-green-400' },
    { value: 'improvement', label: '📈 改进意见', color: 'text-blue-400' },
    { value: 'other', label: '💬 其他意见', color: 'text-purple-400' },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const feedbackData: FeedbackData = {
        ...formData,
        page: window.location.pathname,
        timestamp: Date.now(),
      };

      // 存储到localStorage (后续可以替换为API调用)
      const existingFeedback = JSON.parse(localStorage.getItem('user_feedback') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('user_feedback', JSON.stringify(existingFeedback));

      // 模拟API延迟
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        setFormData({ name: '', email: '', type: 'improvement', message: '' });
      }, 2000);

    } catch (error) {
      console.error('提交反馈失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name.trim() && formData.message.trim();

  return (
    <>
      {/* 浮动反馈按钮 */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {/* 桌面端：带文字标签的横向按钮 */}
        <button
          onClick={() => setIsOpen(true)}
          className="hidden sm:flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group space-x-3"
          aria-label="意见反馈"
        >
          <MessageCircle size={20} className="group-hover:animate-bounce flex-shrink-0" />
          <span className="text-sm font-medium whitespace-nowrap">意见反馈</span>
          <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            !
          </span>
        </button>

        {/* 移动端：圆形图标按钮 + 悬浮文字标签 */}
        <div className="sm:hidden group">
          {/* 悬浮文字标签 */}
          <div className="absolute right-0 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap shadow-lg">
              💬 意见反馈
              {/* 箭头 */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/90"></div>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group-hover:scale-110"
            aria-label="意见反馈"
          >
            <MessageCircle size={24} className="group-hover:animate-bounce" />
            <span className="absolute -top-2 -left-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              !
            </span>
          </button>
        </div>
      </div>

      {/* 反馈模态框 */}
      {isOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* 模态框内容 */}
          <div className="relative w-full max-w-md bg-indigo-900/95 backdrop-blur-md border border-indigo-700/50 rounded-xl shadow-2xl animate-scale-in">
            {/* 头部 */}
            <div className="flex items-center justify-between p-6 border-b border-indigo-700/30">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">意见反馈</h2>
                  <p className="text-xs text-indigo-300">您的建议对我们很重要</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-indigo-400 hover:text-white transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>

            {/* 表单内容 */}
            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">提交成功！</h3>
                  <p className="text-indigo-300 text-sm">感谢您的宝贵意见，我们会认真考虑</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* 姓名 */}
                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-2">
                      <User size={16} className="inline mr-1" />
                      姓名 *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-2 px-3 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="请输入您的姓名"
                      required
                    />
                  </div>

                  {/* 邮箱 */}
                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-2">
                      <Mail size={16} className="inline mr-1" />
                      邮箱 (可选)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-2 px-3 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                      placeholder="请输入您的邮箱"
                    />
                  </div>

                  {/* 反馈类型 */}
                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-2">
                      反馈类型
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {feedbackTypes.map(type => (
                        <label key={type.value} className="cursor-pointer">
                          <input
                            type="radio"
                            name="type"
                            value={type.value}
                            checked={formData.type === type.value}
                            onChange={(e) => handleInputChange('type', e.target.value)}
                            className="sr-only"
                          />
                          <div className={`p-2 rounded-lg border transition-all text-center text-xs ${
                            formData.type === type.value
                              ? 'border-purple-500 bg-purple-500/20 text-white'
                              : 'border-indigo-700/50 bg-indigo-950/30 text-indigo-300 hover:border-purple-500/50'
                          }`}>
                            <span className={type.color}>{type.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* 反馈内容 */}
                  <div>
                    <label className="block text-indigo-200 text-sm font-medium mb-2">
                      <MessageSquare size={16} className="inline mr-1" />
                      详细描述 *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={4}
                      className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-2 px-3 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm resize-none"
                      placeholder="请详细描述您的问题或建议..."
                      required
                    />
                  </div>

                  {/* 提交按钮 */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      isFormValid && !isSubmitting
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>提交中...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>提交反馈</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackButton; 