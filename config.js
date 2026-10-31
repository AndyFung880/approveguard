/* ============================================================
   ApproveGuard 配置层 —— 这是唯一需要你手动改的文件
   改完保存，刷新页面即生效。代码里不用动任何一行。
   ============================================================

   默认（全都留空）：直接用 GoPlus 免 Key 公共额度。
     · 能用，但没有配额保障，人一多就会被限流
     · 适合现在：自己用、小范围测试

   流量起来之后（推荐做法）：
     把 proxyBase 填成你自己部署的代理地址，例如
       proxyBase: 'https://approveguard-api.你的账号.workers.dev'
     代理会把 app_key / app_secret 留在服务端，浏览器永远看不到密钥。
     现成的代理代码在 worker/worker.js，部署步骤见 README。

   ⚠️ 千万不要把 app_secret 填到这个文件里。
      这是纯静态站点，任何人按 F12 都能读到源码，等于把密钥公开挂在互联网上。
      GoPlus 的换 token 接口需要 sha1(app_key + time + app_secret)，
      所以密钥必须待在服务端，这件事没有前端解法。
   ============================================================ */

window.APPROVE_GUARD = {
  // 例：'https://approveguard-api.your-name.workers.dev'
  proxyBase: '',

  // 仅用于本地调试：如果你手上有一个现成的 access_token，可以临时填这里。
  // 它是短时效的，且会暴露在源码里，不要用在公开部署上。
  goplusAccessToken: ''
};
