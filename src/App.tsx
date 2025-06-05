import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// 懒加载组件以提高性能
const LoginPage = React.lazy(() => import('./pages/LoginPage'));
const DashboardPage = React.lazy(() => import('./pages/DashboardPage'));
const AIChatPage = React.lazy(() => import('./pages/AIChatPage'));
const ContractReviewPage = React.lazy(() => import('./pages/ContractReviewPage'));
const DocumentCleaningPage = React.lazy(() => import('./pages/DocumentCleaningPage'));
const PolicyAnalysisPage = React.lazy(() => import('./pages/PolicyAnalysisPage'));
const ReportWritingPage = React.lazy(() => import('./pages/ReportWritingPage'));
const MeetingMinutesPage = React.lazy(() => import('./pages/MeetingMinutesPage'));
const DeepResearchPage = React.lazy(() => import('./pages/DeepResearchPage'));
const BidAnalysisPage = React.lazy(() => import('./pages/BidAnalysisPage'));
const DisclaimerPage = React.lazy(() => import('./pages/DisclaimerPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const ProtectedRoute = React.lazy(() => import('./components/ProtectedRoute'));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route 
              path="/" 
              element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} 
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            
            {/* 受保护的路由 */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/ai-chat" element={
              <ProtectedRoute>
                <AIChatPage />
              </ProtectedRoute>
            } />
            <Route path="/deep-research" element={
              <ProtectedRoute>
                <DeepResearchPage />
              </ProtectedRoute>
            } />
            <Route path="/contract-review" element={
              <ProtectedRoute>
                <ContractReviewPage />
              </ProtectedRoute>
            } />
            <Route path="/bid-analysis" element={
              <ProtectedRoute>
                <BidAnalysisPage />
              </ProtectedRoute>
            } />
            <Route path="/document-cleaning" element={
              <ProtectedRoute>
                <DocumentCleaningPage />
              </ProtectedRoute>
            } />
            <Route path="/policy-analysis" element={
              <ProtectedRoute>
                <PolicyAnalysisPage />
              </ProtectedRoute>
            } />
            <Route path="/report-writing" element={
              <ProtectedRoute>
                <ReportWritingPage />
              </ProtectedRoute>
            } />
            <Route path="/meeting-minutes" element={
              <ProtectedRoute>
                <MeetingMinutesPage />
              </ProtectedRoute>
            } />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}

export default App;