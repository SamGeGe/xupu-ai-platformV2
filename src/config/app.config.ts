// 应用配置文件
export const appConfig = {
  // 基本信息
  app: {
    name: '旭普云AI智能办公',
    version: '1.0.0',
    description: '智能办公平台，提升工作效率',
    author: '旭普云智慧空间信息技术有限公司',
    copyright: `© ${new Date().getFullYear()} 旭普云智慧空间信息技术有限公司`,
  },

  // API配置
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://apps.scsup.com:9080',
    searchEngineUrl: import.meta.env.VITE_SEARCH_ENGINE_URL || 'http://183.221.24.83:4000',
    chatbotUrl: import.meta.env.VITE_CHATBOT_URL || 'https://apps.scsup.com:9080/chatbot/Wr0MPKEIMqgUIVqs',
    timeout: 30000, // 30秒超时
  },

  // 认证配置
  auth: {
    sessionTimeoutHours: parseInt(import.meta.env.VITE_SESSION_TIMEOUT_HOURS || '8'),
    refreshIntervalMinutes: 30,
    storageKey: 'userSession',
    legacyStorageKey: 'user', // 兼容旧版本
  },

  // UI配置
  ui: {
    theme: {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      success: '#22c55e',
      warning: '#f59e0b',
      danger: '#ef4444',
    },
    animations: {
      enabled: !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      duration: {
        fast: 150,
        normal: 300,
        slow: 500,
      },
    },
    breakpoints: {
      xs: 475,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
      '3xl': 1920,
    },
  },

  // 功能开关
  features: {
    debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
    showConsoleLogs: import.meta.env.VITE_SHOW_CONSOLE_LOGS === 'true',
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    enableErrorReporting: import.meta.env.VITE_ENABLE_ERROR_REPORTING === 'true',
    enableSessionWarning: true,
    enableKeyboardNavigation: true,
    enableAutoSave: true,
  },

  // 安全配置
  security: {
    maxLoginAttempts: 5,
    lockoutDurationMinutes: 15,
    passwordMinLength: 6,
    sessionWarningMinutes: 10, // 会话过期前10分钟显示警告
  },

  // 页面路由配置
  routes: {
    public: [
      '/login',
      '/disclaimer',
      '/privacy',
      '/terms',
    ],
    protected: [
      '/dashboard',
      '/ai-chat',
      '/deep-research',
      '/contract-review',
      '/bid-analysis',
      '/document-cleaning',
      '/policy-analysis',
      '/report-writing',
      '/meeting-minutes',
    ],
    default: {
      authenticated: '/dashboard',
      unauthenticated: '/login',
    },
  },

  // 应用功能配置
  modules: {
    aiChat: {
      enabled: true,
      title: 'AI智能助手对话',
      description: '获取AI助手的即时回答和帮助',
      icon: 'MessageSquare',
    },
    contractReview: {
      enabled: true,
      title: '合同审查',
      description: '使用AI辅助分析合同和法律文件',
      icon: 'FileText',
    },
    bidAnalysis: {
      enabled: true,
      title: '招投标分析',
      description: '智能分析招投标文件和流程',
      icon: 'GanttChart',
    },
    policyAnalysis: {
      enabled: true,
      title: '政策分析',
      description: '解读和分析各类政策',
      icon: 'BookOpen',
    },
    meetingMinutes: {
      enabled: true,
      title: '会议纪要整理',
      description: '自动整理会议记录和要点',
      icon: 'FileEdit',
    },
    reportWriting: {
      enabled: true,
      title: '报告撰写',
      description: '智能辅助撰写各类专业报告',
      icon: 'ClipboardEdit',
    },
    documentCleaning: {
      enabled: true,
      title: '文件清洗',
      description: '提取图片或文件里的内容',
      icon: 'FileSearch',
    },
    deepResearch: {
      enabled: true,
      title: '深度探索2.0',
      description: '通过用户上传的文档和多维度网络搜索获取答案',
      icon: 'BookOpenCheck',
      variant: 'special',
    },
    searchEngine: {
      enabled: true,
      title: '使用AI搜索引擎',
      description: '智能搜索和信息检索',
      icon: 'Search',
      variant: 'special',
      external: true,
    },
  },

  // 错误消息配置
  errorMessages: {
    network: '网络连接失败，请检查网络设置',
    timeout: '请求超时，请稍后重试',
    unauthorized: '登录已过期，请重新登录',
    forbidden: '没有权限访问此资源',
    notFound: '请求的资源不存在',
    serverError: '服务器内部错误，请稍后重试',
    unknown: '发生未知错误，请稍后重试',
    validationFailed: '输入信息不符合要求',
    loginFailed: '用户名或密码错误',
  },

  // 成功消息配置
  successMessages: {
    loginSuccess: '登录成功',
    logoutSuccess: '已安全退出',
    saveSuccess: '保存成功',
    uploadSuccess: '上传成功',
    deleteSuccess: '删除成功',
    updateSuccess: '更新成功',
  },

  // 开发模式配置
  development: {
    enableMockData: import.meta.env.DEV,
    enableDevTools: import.meta.env.DEV && import.meta.env.VITE_DEBUG_MODE === 'true',
    mockDelay: 800, // 模拟API延迟
  },
} as const;

// 环境检查
export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;

// 工具函数
export const getAppConfig = () => appConfig;
export const getApiUrl = (endpoint: string) => `${appConfig.api.baseUrl}${endpoint}`;
export const getModuleConfig = (moduleKey: keyof typeof appConfig.modules) => appConfig.modules[moduleKey];

// 日志工具
export const logger = {
  info: (...args: unknown[]) => {
    if (appConfig.features.showConsoleLogs) {
      console.info('[INFO]', ...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (appConfig.features.showConsoleLogs) {
      console.warn('[WARN]', ...args);
    }
  },
  error: (...args: unknown[]) => {
    if (appConfig.features.showConsoleLogs) {
      console.error('[ERROR]', ...args);
    }
  },
  debug: (...args: unknown[]) => {
    if (appConfig.features.debugMode && appConfig.features.showConsoleLogs) {
      console.debug('[DEBUG]', ...args);
    }
  },
}; 