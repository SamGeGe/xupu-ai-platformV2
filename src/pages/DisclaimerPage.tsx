import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

const DisclaimerPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <NetworkBackground />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <button 
          onClick={() => navigate('/login')}
          className="text-indigo-300 hover:text-white flex items-center transition-colors mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          返回登录
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="bg-indigo-900/30 backdrop-blur-md border border-indigo-700/30 rounded-xl p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">免责声明</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-indigo-200 leading-relaxed">
                欢迎使用由旭普云智慧空间信息技术有限公司（以下简称"本公司"）运营的AI网站服务。在您使用本网站提供的AI咨询服务前，请仔细阅读以下免责声明内容。您继续使用本网站即表示您已充分理解并接受本免责声明的所有条款。
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">一、用户上传内容的责任</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.用户对其通过本网站上传、提交、存储或传输的所有内容（包括但不限于文本、图像、音频、视频、文档等文件）承担全部法律责任。</p>
                <p>2.用户承诺其上传的内容不侵犯任何第三方的合法权益（如版权、商标权、隐私权等），不违反国家法律法规及社会公共秩序。</p>
                <p>3.若因用户上传的内容引发任何法律纠纷、权利主张或行政处罚，均由用户自行承担全部责任，本公司不承担任何责任，并有权依法追究用户的赔偿责任。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">二、内容审查与处理权利</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.本公司保留对用户上传内容进行审查的权利，但并无义务主动审查所有内容。</p>
                <p>2.若发现用户上传的内容涉嫌违法、侵权或违反本网站使用规则，本公司有权在不事先通知的情况下删除相关内容，并采取相应措施（如限制账户、终止服务等）。</p>
                <p>3.本公司不对用户上传内容的真实性、合法性、准确性负责。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">三、知识产权说明</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.用户上传的内容版权归原作者所有，本公司仅为提供AI分析服务之目的，对内容进行临时性处理、存储与分析。</p>
                <p>2.用户在此授予本公司一项全球范围内、非独占、免版税、可撤销的许可，允许本公司为提供服务所需，对内容进行复制、传输、处理、展示、存储等操作。</p>
                <p>3.本公司不会将用户上传的内容用于商业用途，除非获得用户的明确授权。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">四、数据安全与隐私保护</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.本公司高度重视用户的数据安全与隐私保护，相关数据仅用于AI分析服务，不会向第三方泄露，除非法律法规另有规定或用户明示同意。</p>
                <p>2.请参阅我们的《隐私政策》以了解我们如何收集、使用和保护您的个人信息。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">五、服务的提供与免责</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.本网站提供的AI咨询服务是"按现状"和"按可用性"原则提供的，本公司不保证服务的连续性、准确性、完整性或安全性。</p>
                <p>2.对于因服务中断、数据丢失、系统故障或其他不可抗力导致的任何损失，本公司不承担任何责任。</p>
                <p>3.本公司不对AI分析结果的正确性、适用性或可靠性做出任何明示或暗示的担保，用户应根据自身判断合理使用分析结果。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">六、链接与第三方内容</h2>
              <p className="text-indigo-200">
                本网站可能包含指向第三方网站的链接，这些链接仅供用户参考。本公司对这些网站的内容、隐私政策或服务不作任何担保或认可，也不承担任何责任。
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">七、免责声明的修改</h2>
              <p className="text-indigo-200">
                本公司保留随时修改本免责声明的权利，修改后的内容将在本网站公布即生效。建议用户定期查阅最新版本的免责声明。
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">八、适用法律与争议解决</h2>
              <p className="text-indigo-200">
                本免责声明适用中华人民共和国法律。因使用本网站或本服务引起的任何争议，双方应友好协商解决；协商不成的，任何一方可向本公司所在地有管辖权的人民法院提起诉讼。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DisclaimerPage;