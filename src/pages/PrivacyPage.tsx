import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import NetworkBackground from '../components/NetworkBackground';

const PrivacyPage: React.FC = () => {
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
              <h1 className="text-2xl md:text-3xl font-bold text-white">隐私政策</h1>
              <span className="text-indigo-300 text-sm">发布日期：2025年5月19日</span>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-indigo-200 leading-relaxed">
                旭普云智慧空间信息技术有限公司（以下简称"本公司"）尊重并保护所有使用本网站服务的用户的隐私权。为了更好地保护您的个人信息，我们制定本《隐私政策》，请您在使用服务前认真阅读。
              </p>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第一条 信息收集范围</h2>
              <div className="text-indigo-200 space-y-2">
                <p>1.1 我们仅在为您提供服务过程中收集必要的个人信息，包括但不限于：</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>姓名、邮箱地址、手机号码（注册时填写）；</li>
                  <li>登录IP地址、浏览器类型、设备信息；</li>
                  <li>用户上传的文件内容（用于AI分析）；</li>
                  <li>使用服务的时间、频率、操作记录等。</li>
                </ul>
                <p>1.2 我们不会主动收集用户的身份证号码、银行卡号、住址等敏感信息。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第二条 信息使用目的</h2>
              <div className="text-indigo-200 space-y-2">
                <p>2.1 提供、优化和改进我们的AI服务；</p>
                <p>2.2 审核用户上传内容是否合法合规；</p>
                <p>2.3 保障系统安全与稳定运行；</p>
                <p>2.4 处理用户反馈、投诉或技术支持请求；</p>
                <p>2.5 遵守法律法规要求或配合执法机关调查。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第三条 数据存储与保护</h2>
              <div className="text-indigo-200 space-y-2">
                <p>3.1 所有用户数据均存储在中国境内的服务器上。</p>
                <p>3.2 我们采取合理的技术与管理措施保护用户数据，防止未经授权的访问、泄露、篡改或破坏。</p>
                <p>3.3 用户上传的文件仅用于AI分析过程，在分析完成后自动加密存储，保留期限不超过30天，除非用户另有指定。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第四条 数据共享与披露</h2>
              <div className="text-indigo-200 space-y-2">
                <p>4.1 我们不会将用户个人信息出售、出租或交换给任何第三方，除非：</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>经用户明确授权；</li>
                  <li>法律法规另有规定；</li>
                  <li>为履行法定义务或配合司法机关调查所需。</li>
                </ul>
                <p>4.2 我们可能与第三方服务商合作（如云服务提供商、数据分析平台等），在此类合作中，我们将确保第三方遵守严格的保密义务。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第五条 Cookie与追踪技术</h2>
              <div className="text-indigo-200 space-y-2">
                <p>5.1 我们使用Cookie、本地存储等技术来识别用户身份、记录偏好设置、提升用户体验。</p>
                <p>5.2 用户可以通过浏览器设置拒绝或管理Cookie，但这可能导致部分功能无法正常使用。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第六条 用户权利</h2>
              <div className="text-indigo-200 space-y-2">
                <p>6.1 用户有权查看、更正、删除其个人信息。</p>
                <p>6.2 用户有权撤回已授权的数据使用权限。</p>
                <p>6.3 用户可通过客服渠道提出上述请求，我们将在15个工作日内予以处理。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第七条 未成年人保护</h2>
              <div className="text-indigo-200 space-y-2">
                <p>7.1 本网站不适合未满14周岁的儿童使用。</p>
                <p>7.2 如用户为未成年人，应在监护人指导下使用本网站，并取得监护人同意。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第八条 隐私政策的更新</h2>
              <div className="text-indigo-200 space-y-2">
                <p>8.1 我们可能根据法律法规变化或业务调整，更新本隐私政策。</p>
                <p>8.2 更新后的内容将在本网站公布即生效，请定期查阅最新版本。</p>
              </div>

              <h2 className="text-xl font-semibold text-white mt-8 mb-4">第九条 联系我们</h2>
              <div className="text-indigo-200 space-y-2">
                <p>如有任何关于本隐私政策的问题或投诉，您可以联系：</p>
                <p>客服电话：028-63913392</p>
                <p>地址：成都市武侯区天泰路112号四川投资大厦-南11楼</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPage;