import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRefresh = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-indigo-950 px-4">
          <div className="max-w-md w-full text-center">
            <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-8 shadow-xl">
              <div className="flex justify-center mb-4">
                <AlertTriangle className="h-16 w-16 text-red-400" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">出现错误</h1>
              <p className="text-indigo-200 mb-6">
                抱歉，应用遇到了一个意外错误。请尝试刷新页面。
              </p>
              {this.state.error && (
                <div className="bg-red-500/20 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 mb-6 text-left">
                  <p className="font-mono text-xs break-all">
                    {this.state.error.message}
                  </p>
                </div>
              )}
              <button
                onClick={this.handleRefresh}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center mx-auto transition-all duration-300"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                刷新页面
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 