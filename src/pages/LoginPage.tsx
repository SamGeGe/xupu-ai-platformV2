import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Shield, Cpu, Eye, EyeOff } from 'lucide-react';
import NetworkBackground from '../components/NetworkBackground';
import FeedbackButton from '../components/FeedbackButton';
import { login } from '../utils/auth';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('scsup');
  const [password, setPassword] = useState('scsup2025');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usernameInput = document.getElementById('username');
    if (usernameInput) {
      usernameInput.focus();
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError('请输入用户名和密码');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const user = await login({ username: username.trim(), password });
      if (user) {
        navigate('/dashboard');
      } else {
        setError('用户名或密码错误，请检查后重试');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('登录时发生错误，请稍后重试');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NetworkBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-3">
              <Cpu className="h-12 w-12 text-blue-400" />
            </div>
            <div className="text-4xl font-extrabold text-white mb-1 tracking-wide">旭普云</div>
            <h2 className="text-2xl font-bold text-blue-200 mb-2">
              地理信息、自然资源、农业农村行业专用AI平台
            </h2>
          </div>

          <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-8 shadow-xl shadow-purple-950/30">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="username" className="block text-indigo-200 text-sm font-medium mb-2">
                  用户名
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-3 px-4 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="请输入用户名"
                  required
                  autoComplete="username"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-indigo-200 text-sm font-medium mb-2">
                  密码
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-indigo-950/50 border border-indigo-700/50 rounded-lg py-3 px-4 pr-12 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="请输入密码"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-400 hover:text-indigo-300 transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-4 bg-red-500/20 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 animate-shake">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !username.trim() || !password.trim()}
                className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isLoading ? 'opacity-70' : ''
                }`}
              >
                {isLoading ? (
                  <>
                    <span className="inline-block h-5 w-5 border-2 border-white/40 border-t-white rounded-full animate-spin mr-2"></span>
                    登录中...
                  </>
                ) : (
                  <>
                    <Shield className="h-5 w-5 mr-2" />
                    立即登录
                  </>
                )}
              </button>
            </form>

            <div className="text-xs text-indigo-400 mt-1">您的信息仅用于身份验证，绝不存储密码</div>

            <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <p className="text-blue-200 text-xs text-center">
                💡 默认账号信息已预填，直接点击"立即登录"即可体验
              </p>
              <p className="text-indigo-300 text-xs text-center mt-2">
                适用对象：自然资源、农业农村、地理信息等行业用户。如需帮助请点击右下角"意见反馈"
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="text-center space-x-4 text-indigo-300/60 text-sm mb-4">
            <Link to="/disclaimer" className="hover:text-indigo-200 transition-colors">免责声明</Link>
            <Link to="/privacy" className="hover:text-indigo-200 transition-colors">隐私政策</Link>
            <Link to="/terms" className="hover:text-indigo-200 transition-colors">用户协议</Link>
          </div>
          <div className="flex items-center justify-center gap-1 text-indigo-300/70 text-xs">
            <Cpu size={12} />
            <p className="whitespace-nowrap">旭普云智慧空间信息技术有限公司 © {new Date().getFullYear()}</p>
          </div>
          <a href="mailto:service@scsup.com" className="hover:text-indigo-200 transition-colors">联系我们</a>
        </div>
      </footer>
      
      {/* 意见反馈按钮 */}
      <FeedbackButton />
    </div>
  );
};

export default LoginPage;