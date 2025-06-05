import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';
import TableOfContents from '../components/TableOfContents';

const TermsPage: React.FC = () => {
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
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-white">用户协议</h1>
              <span className="text-indigo-300 text-sm">发布日期：2025年6月5日 | 版本：v2.0</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-indigo-200 leading-relaxed">
                欢迎使用由旭普云智慧空间信息技术有限公司（以下简称"本公司"）提供的AI网站服务（以下简称"本网站"或"本服务"）。在您访问或使用本网站前，请仔细阅读以下用户协议条款。一旦您点击"我已阅读并同意"按钮或以其他方式使用本网站，即表示您已充分理解并接受本协议的所有内容。
              </p>

              <h2 id="service-overview" className="text-xl font-semibold text-white mt-8 mb-4">第一条 服务概述</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.1 本网站为本公司开发并运营的AI服务平台，旨在为用户提供基于人工智能技术的免费信息分析与咨询服务。</p>
                <p>1.2 用户可通过本网站上传文件（包括但不限于文本、图像、音频、视频、文档等），由AI系统进行分析并提供反馈结果。</p>
                <p>1.3 本服务目前为免费性质，但本公司保留在未来调整服务模式的权利。</p>
              </div>

              <h2 id="account-management" className="text-xl font-semibold text-white mt-8 mb-4">第二条 注册与账户管理</h2>
              <div className="text-indigo-200 space-y-2">
                <p>2.1 用户无需注册即可使用部分基础功能，但若需使用完整服务（如保存历史记录、获取个性化建议等），需完成注册流程。</p>
                <p>2.2 用户应确保所提供的注册信息真实、准确、完整。</p>
                <p>2.3 用户有责任妥善保管其账户及密码信息，并对使用该账户所进行的一切操作负责。</p>
                <p>2.4 若发现账户被盗用或其他异常情况，用户应及时通知本公司客服团队。</p>
              </div>

              <h2 id="user-behavior-standards" className="text-xl font-semibold text-white mt-8 mb-4">第三条 用户行为规范</h2>
              <div className="text-indigo-200 space-y-2">
                <p>3.1 用户不得利用本网站从事任何违法、违规、侵权或违反社会公序良俗的行为。</p>
                <p>3.2 用户不得上传含有以下内容的文件：</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>涉及国家秘密、商业机密的内容；</li>
                  <li>含有色情、暴力、恐怖、赌博、诈骗等内容；</li>
                  <li>侵犯他人知识产权、隐私权、肖像权等合法权益的内容；</li>
                  <li>其他法律法规禁止传播的内容。</li>
                </ul>
                <p>3.3 用户不得干扰本网站的正常运行，包括但不限于攻击服务器、篡改数据、恶意爬取等行为。</p>
              </div>

              <h2 id="content-rights-obligations" className="text-xl font-semibold text-white mt-8 mb-4">第四条 内容权利与义务</h2>
              <div className="text-indigo-200 space-y-2">
                <p>4.1 用户对其上传至本网站的所有内容享有完整的知识产权，但须保证其内容不侵犯第三方权益。</p>
                <p>4.2 用户授权本公司为实现服务目的，可对内容进行临时性处理、存储、展示、传输等操作。</p>
                <p>4.3 未经用户明确许可，本公司不会将用户上传内容用于其他用途。</p>
              </div>

              <h2 id="intellectual-property-statement" className="text-xl font-semibold text-white mt-8 mb-4">第五条 知识产权声明</h2>
              <div className="text-indigo-200 space-y-2">
                <p>5.1 本网站及其所有内容（包括但不限于文字、图像、软件代码、界面设计等）的知识产权归本公司所有。</p>
                <p>5.2 未经本公司书面许可，任何单位或个人不得擅自复制、修改、传播、展示、出租、出售本网站相关内容。</p>
              </div>

              <h2 id="service-termination" className="text-xl font-semibold text-white mt-8 mb-4">第六条 服务终止与账户注销</h2>
              <div className="text-indigo-200 space-y-2">
                <p>6.1 用户可随时申请注销账户，删除个人信息及历史数据。</p>
                <p>6.2 本公司有权在下列情况下暂停或终止用户的使用权限：</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>用户违反本协议条款；</li>
                  <li>用户上传内容涉嫌违法或侵权；</li>
                  <li>因技术升级、系统维护等原因需要暂时停止服务；</li>
                  <li>其他影响平台正常运营的情形。</li>
                </ul>
                <p>6.3 服务终止后，本公司有权保留相关数据备份，但不再继续提供服务。</p>
              </div>

              <h2 id="liability-limitation" className="text-xl font-semibold text-white mt-8 mb-4">第七条 责任限制</h2>
              <div className="text-indigo-200 space-y-2">
                <p>7.1 本网站提供的AI服务仅为辅助工具，分析结果仅供参考，用户应自行判断并承担使用后果。</p>
                <p>7.2 对于因服务中断、数据丢失、系统故障或其他不可抗力导致的任何损失，本公司不承担赔偿责任。</p>
                <p>7.3 在任何情况下，本公司对用户或第三方承担的总责任不超过人民币500元。</p>
              </div>

              <h2 id="agreement-modification" className="text-xl font-semibold text-white mt-8 mb-4">第八条 协议的修改</h2>
              <div className="text-indigo-200 space-y-2">
                <p>8.1 本公司有权根据业务发展或法律法规变化，修改本协议内容。</p>
                <p>8.2 修改后的协议将在本网站公告后生效，用户继续使用服务即视为接受新版本协议。</p>
              </div>

              <h2 id="dispute-resolution" className="text-xl font-semibold text-white mt-8 mb-4">第九条 争议解决</h2>
              <div className="text-indigo-200 space-y-2">
                <p>9.1 本协议适用中华人民共和国法律。</p>
                <p>9.2 因本协议引起的或与本协议有关的任何争议，双方应友好协商解决；协商不成的，任何一方可向本公司所在地有管辖权的人民法院提起诉讼。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* 目录导航 */}
      <TableOfContents className="hidden lg:block" />
    </div>
  );
};

export default TermsPage;