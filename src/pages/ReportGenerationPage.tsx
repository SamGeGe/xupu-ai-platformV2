import React from 'react';
import { ClipboardEdit } from 'lucide-react';
import FeaturePage from './FeaturePage';

const ReportGenerationPage: React.FC = () => {
  return (
    <FeaturePage
      title="报告与会议纪要"
      description="自动生成报告和会议记录"
      icon={<ClipboardEdit size={24} />}
    />
  );
};

export default ReportGenerationPage;