import { User, LoginCredentials } from '../types';

// 模拟用户数据库 - 实际应用中应从服务器获取
const MOCK_USERS = [
  {
    username: 'scsup',
    password: 'scsup2025',
    name: '旭普云智慧测试员工',
    role: 'IT专员'
  }
];

// 登录会话超时时间（8小时）
const SESSION_TIMEOUT = 8 * 60 * 60 * 1000;

export const login = (credentials: LoginCredentials): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    // 输入验证
    if (!credentials.username || !credentials.password) {
      reject(new Error('用户名和密码不能为空'));
      return;
    }

    // 模拟网络请求延迟
    setTimeout(() => {
      try {
        const user = MOCK_USERS.find(
          (u) => u.username === credentials.username && u.password === credentials.password
        );
        
        if (user) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _password, ...userWithoutPassword } = user;
          
          // 创建会话信息
          const sessionData = {
            user: userWithoutPassword,
            loginTime: Date.now(),
            expiresAt: Date.now() + SESSION_TIMEOUT
          };
          
          // 使用localStorage替代sessionStorage以支持多标签页
          localStorage.setItem('userSession', JSON.stringify(sessionData));
          resolve(userWithoutPassword);
        } else {
          resolve(null);
        }
      } catch {
        reject(new Error('登录过程中发生错误'));
      }
    }, 800);
  });
};

export const logout = (): void => {
  try {
    localStorage.removeItem('userSession');
    // 清理其他可能的用户数据
    localStorage.removeItem('user'); // 兼容旧版本
    sessionStorage.removeItem('user'); // 兼容旧版本
  } catch {
    // 忽略清理过程中的错误
  }
};

export const getCurrentUser = (): User | null => {
  try {
    const sessionData = localStorage.getItem('userSession');
    if (!sessionData) {
      // 检查旧版本兼容性
      const oldUserData = sessionStorage.getItem('user');
      if (oldUserData) {
        const user = JSON.parse(oldUserData) as User;
        // 迁移到新格式
        const newSessionData = {
          user,
          loginTime: Date.now(),
          expiresAt: Date.now() + SESSION_TIMEOUT
        };
        localStorage.setItem('userSession', JSON.stringify(newSessionData));
        sessionStorage.removeItem('user');
        return user;
      }
      return null;
    }
    
    const session = JSON.parse(sessionData);
    
    // 检查会话是否过期
    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }
    
    return session.user as User;
  } catch (err) {
    console.error('获取用户信息时发生错误:', err);
    // 清理损坏的数据
    logout();
    return null;
  }
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

// 刷新会话过期时间
export const refreshSession = (): boolean => {
  try {
    const sessionData = localStorage.getItem('userSession');
    if (!sessionData) return false;
    
    const session = JSON.parse(sessionData);
    
    // 检查会话是否过期
    if (Date.now() > session.expiresAt) {
      logout();
      return false;
    }
    
    // 更新过期时间
    session.expiresAt = Date.now() + SESSION_TIMEOUT;
    localStorage.setItem('userSession', JSON.stringify(session));
    return true;
  } catch (err) {
    console.error('刷新会话时发生错误:', err);
    logout();
    return false;
  }
};

// 获取会话剩余时间（分钟）
export const getSessionRemainingTime = (): number => {
  try {
    const sessionData = localStorage.getItem('userSession');
    if (!sessionData) return 0;
    
    const session = JSON.parse(sessionData);
    const remaining = session.expiresAt - Date.now();
    
    return Math.max(0, Math.floor(remaining / (1000 * 60)));
  } catch (err) {
    console.error('获取会话剩余时间时发生错误:', err);
    return 0;
  }
};