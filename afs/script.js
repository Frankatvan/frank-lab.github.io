const pages = [
  {
    id: 'page-01',
    section: '开场',
    minutes: '0:00-1:00',
    kicker: '极智语财经营财务沙龙',
    title: '老板的财务驾驶舱',
    subtitle: '看懂现金流、利润质量与税务风险，做更清晰的经营决策。',
    body: ['财务不是月底交给会计的一摞票，也不是年底才想起的纳税申报。', '真正有价值的财务，应该帮助老板提前看见现金、利润、风险和行动选择。'],
    takeaway: '这 30 分钟，只解决一个问题：老板怎样用财务看经营。',
    visual: 'cover'
  },
  {
    id: 'page-02',
    section: '开场',
    minutes: '1:00-2:00',
    kicker: '老板场景',
    title: '利润表赚钱，为什么账户越来越紧？',
    subtitle: '很多企业不是没有利润，而是利润没有变成现金。',
    body: ['账面利润来自收入和成本的匹配，账户余额来自真实回款、付款节奏和资金占用。', '应收账款、库存、预付款、税费和工资都会把利润留在路上。'],
    takeaway: '老板不能只问赚没赚钱，还要问钱卡在哪里。',
    visual: 'cashGap'
  },
  {
    id: 'page-03',
    section: '开场',
    minutes: '2:00-3:00',
    kicker: '课程问题',
    title: '财务是在记录过去，还是帮你看未来？',
    subtitle: '传统记账回答“发生了什么”，经营财务回答“接下来怎么办”。',
    body: ['会计把业务整理成凭证和报表，经营财务顾问把报表翻译成经营判断。', '老板需要的不是更多表格，而是更少、更准、更能行动的经营信号。'],
    takeaway: '从记账到经营财务，是中小企业管理升级的关键一步。',
    visual: 'pastFuture'
  },
  {
    id: 'page-04',
    section: '主讲人背景',
    minutes: '3:00-4:00',
    kicker: '实战经验',
    title: '这不是一堂会计课，而是经营管理复盘',
    subtitle: '主讲人长期在 CFO、财务总监、企业经营负责人和信息化建设角色之间切换。',
    body: ['30 多年财务、内控、预算、资金与企业经营管理经验，曾参与港股上市与新三板挂牌全过程。', '主导过企业运营 ERP、全面预算管理、成本采购、合同费用和自动化记账平台建设。'],
    takeaway: '这场分享会尽量少讲概念，多讲老板真正会遇到的现金、利润、税务和管理问题。',
    visual: 'speakerCred'
  },
  {
    id: 'page-05',
    section: '金税四期',
    minutes: '3:00-4:30',
    kicker: '外部环境',
    title: '从“以票管税”到“以数治税”',
    subtitle: '金税四期背后，是税务监管从单点审核走向数据交叉验证。',
    body: ['发票、银行流水、业务合同、社保个税、平台交易和市场监管信息，会越来越多地被放在一起看。', '过去“票能开、账能报”不等于现在“业务能解释、数据能对上”。'],
    takeaway: '金税四期不是让企业害怕，而是要求业务、票、钱、账说同一件事。',
    visual: 'dataWeb'
  },
  {
    id: 'page-06',
    section: '金税四期',
    minutes: '4:30-6:00',
    kicker: '六类风险',
    title: '中小企业最容易暴露的 6 类风险',
    subtitle: '问题往往不是会计做错一笔账，而是业务管理长期粗放。',
    body: ['私户收款、未开票收入、虚假成本、发票品类不匹配、工资社保不一致、个体户外包滥用，是常见风险信号。', '这些问题都不是孤立存在，它们会同时影响现金流、利润、税务和老板信用。'],
    takeaway: '风险管理不是财务部门的孤岛，而是经营管理的一部分。',
    visual: 'riskSix'
  },
  {
    id: 'page-07',
    section: '金税四期',
    minutes: '6:00-7:00',
    kicker: '经营影响',
    title: '金税四期不是只影响会计',
    subtitle: '它真正改变的是老板对业务真实性的管理要求。',
    body: ['一笔收入能不能解释清楚，取决于合同、交付、收款、发票和账务是否一致。', '一笔费用能不能列支，取决于有没有真实服务、真实付款和可追溯证据。'],
    takeaway: '合规的底层不是报税技巧，而是经营过程留痕。',
    visual: 'businessTrace'
  },
  {
    id: 'page-08',
    section: '金税四期',
    minutes: '7:00-8:30',
    kicker: '虚拟案例',
    title: '从“账能报”到“风险说不清”',
    subtitle: '一家贸易企业的真实困境，往往从几个习惯动作开始。',
    body: ['老板为了方便，让部分客户打到个人账户；为了补成本，又找了几张咨询服务发票。', '短期看，报表平了；长期看，资金流、发票流和业务流开始互相矛盾。'],
    takeaway: '财务风险不是突然出现的，通常是经营习惯一点点累积出来的。',
    visual: 'caseTrail'
  },
  {
    id: 'page-09',
    section: '金税四期',
    minutes: '8:30-10:00',
    kicker: '老板新问题',
    title: '不要只问“怎么少交税”',
    subtitle: '更重要的问题是：业务、账、税、钱怎样说得通。',
    body: ['好的财务管理，不是把风险藏起来，而是把业务做清楚、证据留完整、数据对得上。', '这也是外部 CFO 视角能给老板提供价值的起点。'],
    takeaway: '先把经营讲清楚，再谈合规和效率。',
    visual: 'fourTruths'
  },
  {
    id: 'page-10',
    section: '经营盲区',
    minutes: '10:00-11:30',
    kicker: '现金流盲区',
    title: '利润不等于现金',
    subtitle: '利润是会计语言，现金是企业生命体征。',
    body: ['收入确认了，不代表钱到账；成本摊进去了，不代表现金没有流出。', '老板需要看到未来几周的现金缺口，而不是月底才知道钱不够。'],
    takeaway: '现金流预测，是老板最应该每周看的财务指标。',
    visual: 'cashCurve'
  },
  {
    id: 'page-11',
    section: '经营盲区',
    minutes: '11:30-13:00',
    kicker: '利润质量盲区',
    title: '哪些客户赚钱，哪些订单拖累公司？',
    subtitle: '收入大的客户，不一定是好客户。',
    body: ['有些客户贡献收入，但占用大量账期、售后和管理精力。', '有些订单毛利看起来不错，扣掉返工、物流、资金成本后并不赚钱。'],
    takeaway: '外部 CFO 视角要帮老板看清利润的质量，而不只是利润的数字。',
    visual: 'profitMatrix'
  },
  {
    id: 'page-12',
    section: '经营盲区',
    minutes: '13:00-14:00',
    kicker: '费用盲区',
    title: '费用不是越低越好，关键是投产比',
    subtitle: '该花的钱要花得清楚，不该漏的钱要及时止住。',
    body: ['营销费、人工费、租金、研发费和管理费，都应该对应经营目标。', '老板要区分增长性投入、维持性支出和低效浪费。'],
    takeaway: '费用管理的核心不是砍预算，而是让每一类支出有解释。',
    visual: 'spendRoi'
  },
  {
    id: 'page-13',
    section: '经营盲区',
    minutes: '14:00-15:30',
    kicker: '资金占用',
    title: '钱卡在哪里？',
    subtitle: '应收、库存、预付、税款和工资，都会占用现金。',
    body: ['很多企业不是利润不够，而是周转效率太低。', '经营财务顾问会把资金占用拆开，让老板知道先解决哪个环节。'],
    takeaway: '现金紧张时，先找资金卡点，再谈融资。',
    visual: 'workingCapital'
  },
  {
    id: 'page-14',
    section: '经营盲区',
    minutes: '15:30-17:00',
    kicker: '经营解释系统',
    title: '老板真正需要的不是一张报表',
    subtitle: '而是一套从指标到原因再到动作的解释系统。',
    body: ['报表告诉你结果，指标告诉你异常，分析告诉你原因，会议决定下一步动作。', '这就是经营分析型外部 CFO 服务的工作方式。'],
    takeaway: '财务数据只有变成行动，才真正有价值。',
    visual: 'explainSystem'
  },
  {
    id: 'page-15',
    section: '经营财务方法',
    minutes: '17:00-18:00',
    kicker: '角色定义',
    title: '老板需要什么样的外部 CFO 视角？',
    subtitle: '不是高配会计，而是老板的经营决策外脑。',
    body: ['会计负责把账做对，外部 CFO 视角负责把账讲透。', '它连接财务、税务、业务和资金，让老板每个月知道该抓什么。'],
    takeaway: '核心交付不是一份报表，而是经营判断和行动建议。',
    visual: 'roleMap'
  },
  {
    id: 'page-16',
    section: '经营财务方法',
    minutes: '18:00-20:00',
    kicker: '月度驾驶舱',
    title: '每月一张经营驾驶舱',
    subtitle: '收入、毛利、费用、现金、回款、风险，一眼看清。',
    body: ['驾驶舱不是给财务看的，是给老板做经营判断用的。', '它把复杂报表压缩成少数关键指标和异常提醒。'],
    takeaway: '老板不需要更多表格，而需要更清晰的经营信号。',
    visual: 'dashboard'
  },
  {
    id: 'page-17',
    section: '经营财务方法',
    minutes: '20:00-21:30',
    kicker: '现金预测',
    title: '8 周现金流预测',
    subtitle: '提前看到资金缺口，而不是等到账户见底。',
    body: ['把预计回款、固定支出、税费工资、供应商付款放到同一张时间表。', '老板可以提前决定催收、延期、融资或控制支出。'],
    takeaway: '现金流预测让老板从被动救火变成主动安排。',
    visual: 'eightWeeks'
  },
  {
    id: 'page-18',
    section: '经营财务方法',
    minutes: '21:30-23:00',
    kicker: '利润质量',
    title: '客户、项目、产品线的真实贡献',
    subtitle: '用数据判断哪里该加码，哪里该收缩。',
    body: ['经营财务顾问会把利润拆到客户、项目或产品线层面。', '老板可以据此调整报价、信用政策、资源投入和销售方向。'],
    takeaway: '增长不只是做大收入，更是做厚有效利润。',
    visual: 'profitWaterfall'
  },
  {
    id: 'page-19',
    section: '经营财务方法',
    minutes: '23:00-24:30',
    kicker: '预算预警',
    title: '从事后补救到提前调整',
    subtitle: '预算不是限制老板，而是让经营动作更有边界。',
    body: ['预算可以告诉你哪些费用超速，哪些收入低于预期，哪些现金缺口正在形成。', '预警机制让企业在问题变大之前就开始处理。'],
    takeaway: '好的预算，是老板的经营导航，不是财务的表格任务。',
    visual: 'warningLights'
  },
  {
    id: 'page-20',
    section: '经营财务方法',
    minutes: '24:30-27:00',
    kicker: '月度经营会',
    title: '看数据、定动作、追结果',
    subtitle: '把财务分析变成老板团队的管理节奏。',
    body: ['每月固定复盘收入、毛利、现金、回款、费用和风险。', '会议输出不是一堆意见，而是明确负责人、截止时间和下月复盘点。'],
    takeaway: '经营会的价值，在于让数据变成组织行动。',
    visual: 'meetingLoop'
  },
  {
    id: 'page-21',
    section: 'AFS 核心能力',
    minutes: '27:00-28:00',
    kicker: '系统支撑',
    title: 'AFS 怎么支撑经营财务服务？',
    subtitle: '把票据、流水、合同、凭证、报表和风险串起来。',
    body: ['AFS 减少人工整理，帮经营财务顾问更快看到经营全貌。', '系统不是替代专业判断，而是把证据链和指标准备好。'],
    takeaway: 'AFS 让经营财务服务更快、更准、更可追溯。',
    visual: 'afsChain'
  },
  {
    id: 'page-22',
    section: 'AFS 核心能力',
    minutes: '28:00-29:00',
    kicker: '能力演示',
    title: '从一张发票追到经营影响',
    subtitle: '发票不是孤立文件，它连接业务、现金和报表。',
    body: ['一张发票可以关联合同、订单、付款、凭证、报表科目和风险提示。', '老板看到异常指标时，可以追到背后的业务证据。'],
    takeaway: '看得见链路，老板才敢做判断。',
    visual: 'invoiceTrace'
  },
  {
    id: 'page-23',
    section: '下一步',
    minutes: '29:00-30:00',
    kicker: '轻量开始',
    title: '先做一次经营财务体检',
    subtitle: '不急着换系统，也不急着买服务，先把经营问题看清楚。',
    body: ['适合年营收 500 万到 3000 万、现金流开始复杂、老板希望看清经营的企业。', '体检会围绕现金流、利润质量、费用结构、回款周期和财税风险给出问题清单。'],
    takeaway: '极智语财：把财务数据翻译成老板能执行的经营动作。',
    visual: 'cta'
  },
  {
    id: 'page-24',
    section: '下一步',
    minutes: '30:00',
    kicker: '交流入口',
    title: '带着一个真实经营问题来聊',
    subtitle: '可以从现金缺口、利润质量、费用失控、回款周期或税务风险中的任意一个问题开始。',
    body: ['添加企业微信后，可围绕一个具体经营问题展开交流。', '交流会后可以基于企业现状做一次轻量诊断。'],
    takeaway: '先把问题看清楚，再决定系统、服务和管理节奏。',
    visual: 'qrCta'
  }
];

let currentIndex = 0;

function sectionClass(section) {
  if (section.includes('金税')) return 'section-tax';
  if (section.includes('经营盲区')) return 'section-ops';
  if (section.includes('经营财务方法')) return 'section-cfo';
  if (section.includes('主讲人')) return 'section-speaker';
  if (section.includes('AFS')) return 'section-afs';
  if (section.includes('下一步')) return 'section-next';
  return 'section-open';
}

function layoutClass(page, index) {
  if ([0, 3, 8, 13, 19, 21].includes(index)) return 'layout-poster';
  if (['cashGap', 'caseTrail', 'fourTruths', 'invoiceTrace'].includes(page.visual)) return 'layout-case';
  if (['dashboard', 'afsChain', 'cashCurve', 'profitWaterfall', 'eightWeeks'].includes(page.visual)) return 'layout-dashboard';
  if (['dataWeb', 'riskSix', 'businessTrace', 'workingCapital', 'meetingLoop'].includes(page.visual)) return 'layout-map';
  return 'layout-note';
}

function shouldLeadWithVisual(page, index) {
  return ['speakerCred', 'dashboard', 'cashCurve', 'profitWaterfall', 'afsChain', 'invoiceTrace', 'qrCta'].includes(page.visual) || [3, 8, 13, 19].includes(index);
}

function visualMarkup(type) {
  const imageAssets = {
    cover: 'cover-studio.svg',
    dataWeb: 'tax-network.svg',
    cashCurve: 'cash-command.svg',
    dashboard: 'cash-command.svg',
    meetingLoop: 'cfo-meeting.svg',
    afsChain: 'afs-pipeline.svg',
    invoiceTrace: 'afs-pipeline.svg'
  };
  if (imageAssets[type]) {
    return `<img class="scene-image" src="./assets/${imageAssets[type]}" alt="" loading="eager">`;
  }

  const visuals = {
    cover: `
      <div class="cover-hero">
        <div class="seal">CFO</div>
        <div class="cover-stack">
          <span>现金流</span><span>利润质量</span><span>经营风险</span>
        </div>
      </div>`,
    cashGap: `
      <div class="cash-gap-visual">
        <div class="statement-card"><small>利润表</small><strong>+42万</strong><span>账面利润</span></div>
        <div class="cash-bridge"><i></i><b>应收 / 库存 / 税费</b></div>
        <div class="statement-card cash"><small>银行账户</small><strong>8万</strong><span>可用现金</span></div>
      </div>`,
    pastFuture: `
      <div class="past-future-visual">
        <div><small>传统记账</small><b>记录过去</b><span>凭证 · 报表 · 申报</span></div>
        <em>→</em>
        <div><small>经营财务</small><b>看见未来</b><span>预测 · 预警 · 行动</span></div>
      </div>`,
    dataWeb: `
      <div class="data-web-visual">
        <span class="center">以数治税</span>
        <i style="--x:0;--y:-1">发票</i><i style="--x:1;--y:-.3">资金</i><i style="--x:.65;--y:.85">业务</i><i style="--x:-.65;--y:.85">社保</i><i style="--x:-1;--y:-.3">平台</i>
      </div>`,
    riskSix: `
      <div class="risk-board">
        <span>私户收款</span><span>未开票收入</span><span>虚假成本</span><span>品类不匹配</span><span>工资社保不一致</span><span>个体户外包</span>
      </div>`,
    businessTrace: `
      <div class="trace-ladder">
        <span>合同</span><span>交付</span><span>收款</span><span>发票</span><span>凭证</span>
      </div>`,
    caseTrail: `
      <div class="case-timeline">
        <div><b>方便</b><span>个人账户收款</span></div><div><b>补票</b><span>咨询发票补成本</span></div><div><b>矛盾</b><span>票钱账不一致</span></div><div><b>风险</b><span>业务解释断裂</span></div>
      </div>`,
    fourTruths: `
      <div class="truth-diamond">
        <span>业务</span><span>账</span><span>税</span><span>钱</span><b>说同一件事</b>
      </div>`,
    cashCurve: `
      <div class="chart-card">
        <svg viewBox="0 0 320 160"><path class="gridline" d="M20 36H300M20 78H300M20 120H300"/><path class="area" d="M20 118 C62 72 90 132 132 94 S230 42 300 70 L300 145 L20 145Z"/><path class="curve" d="M20 118 C62 72 90 132 132 94 S230 42 300 70"/></svg>
        <div class="chart-caption"><b>8周现金预测</b><span>提前看到缺口</span></div>
      </div>`,
    profitMatrix: `
      <div class="matrix-rich">
        <div class="axis x">资金占用</div><div class="axis y">利润贡献</div>
        <span class="good">高利润<br>低占用</span><span>高利润<br>高占用</span><span>低利润<br>低占用</span><span class="bad">低利润<br>高占用</span>
      </div>`,
    spendRoi: `
      <div class="roi-chart"><i style="height:42%"></i><i style="height:82%"></i><i style="height:58%"></i><i style="height:92%"></i><small>费用投产比</small></div>`,
    workingCapital: `
      <div class="capital-pipeline"><span>应收</span><span>库存</span><span>预付</span><span>税费</span><span>工资</span><b>现金占用链</b></div>`,
    explainSystem: `
      <div class="explain-stack"><span>报表</span><span>指标</span><span>原因</span><span>动作</span><span>复盘</span></div>`,
    roleMap: `
      <div class="role-map"><span>会计<br><small>做对账</small></span><b>外部 CFO 视角<br><small>讲透经营</small></b><span>老板<br><small>做决策</small></span></div>`,
    speakerCred: `
      <div class="speaker-cred">
        <div><b>30+年</b><span>财务与经营管理</span></div>
        <div><b>上市/挂牌</b><span>港股上市与新三板实战</span></div>
        <div><b>系统建设</b><span>预算、ERP、自动化记账</span></div>
      </div>`,
    dashboard: `
      <div class="dashboard-visual">
        <div class="kpi"><small>现金</small><b>8周</b></div><div class="kpi"><small>毛利</small><b>32%</b></div><div class="kpi"><small>回款</small><b>76%</b></div>
        <div class="mini-line"></div><div class="mini-bars"><i></i><i></i><i></i><i></i></div>
      </div>`,
    eightWeeks: `
      <div class="week-map"><span>W1</span><span>W2</span><span class="warn">W3</span><span class="warn">W4</span><span>W5</span><span>W6</span><span>W7</span><span>W8</span><b>资金缺口预警</b></div>`,
    profitWaterfall: `
      <div class="waterfall-rich"><i></i><i></i><i></i><i></i><i></i><span>收入 → 毛利 → 费用 → 资金成本 → 净贡献</span></div>`,
    warningLights: `
      <div class="warning-panel"><span class="green"></span><span class="gold"></span><span class="red"></span><b>绿 / 黄 / 红</b><small>提前处理异常</small></div>`,
    meetingLoop: `
      <div class="meeting-loop"><span>数据整理</span><span>经营分析</span><span>月度会议</span><span>行动清单</span><span>下月复盘</span></div>`,
    afsChain: `
      <div class="afs-system"><span>票据</span><span>流水</span><span>合同</span><span>凭证</span><span>报表</span><span>风险</span><b>AFS 证据链</b></div>`,
    invoiceTrace: `
      <div class="invoice-demo"><strong>发票</strong><i></i><span>合同</span><span>付款</span><span>凭证</span><span>报表</span><span>风险提示</span></div>`,
    cta: `
      <div class="health-check"><span>现金流</span><span>利润质量</span><span>费用结构</span><span>财税风险</span><b>经营财务体检</b></div>`,
    qrCta: `
      <div class="qr-cta">
        <img src="./assets/contact-qr.png" alt="企业微信二维码">
        <div><b>扫码交流</b><span>围绕现金流、利润质量、费用结构和财税风险做一次轻量诊断。</span></div>
      </div>`
  };
  return visuals[type] || visuals.cover;
}

function renderPage(page, side = 'single', index = 0) {
  const visual = `<div class="visual visual-${page.visual}" aria-hidden="true">${visualMarkup(page.visual)}</div>`;
  const body = `
    <div class="body-text">
      <p>${page.body[0]}</p>
      ${page.body[1] ? `<span>${page.body[1]}</span>` : ''}
    </div>
  `;
  const leadVisual = shouldLeadWithVisual(page, index);
  return `
    <article class="book-page ${side} ${sectionClass(page.section)} ${layoutClass(page, index)}" data-page-id="${page.id}">
      <div class="page-meta">
        <span>${page.section}</span>
        <span class="page-number">${String(index + 1).padStart(2, '0')} / ${pages.length}</span>
      </div>
      <div class="page-content">
        <p class="kicker">${page.kicker}</p>
        <h2>${page.title}</h2>
        <p class="subtitle">${page.subtitle}</p>
        ${leadVisual ? visual : body}
        ${leadVisual ? body : visual}
        <p class="takeaway">${page.takeaway}</p>
      </div>
    </article>
  `;
}

function normalizeIndex(index) {
  return Math.max(0, Math.min(pages.length - 1, index));
}

function render() {
  currentIndex = normalizeIndex(currentIndex);
  const page = pages[currentIndex];
  const progress = Math.round(((currentIndex + 1) / pages.length) * 100);

  document.getElementById('app').innerHTML = `
    <main class="training-book">
      <nav class="topbar">
        <div class="brand">
          <div class="mark">AFS</div>
          <div>
            <strong>极智语财</strong>
            <span>老板的财务驾驶舱 · 30 分钟经营财务沙龙</span>
          </div>
        </div>
        <div class="top-actions">
          <button class="ghost-button" type="button" data-action="toc">目录</button>
        </div>
      </nav>
      <section class="book-wrap" aria-label="培训材料">
        <div class="showcase-stage">
          <div class="stage-orbit" aria-hidden="true"></div>
          <div class="stage-grid" aria-hidden="true"></div>
          ${renderPage(page, 'single active', currentIndex)}
        </div>
      </section>
      <footer class="controls">
        <button type="button" data-action="prev" ${currentIndex === 0 ? 'disabled' : ''}>上一页</button>
        <div class="progress" aria-label="阅读进度"><span style="width:${progress}%"></span></div>
        <span>${Math.min(currentIndex + 1, pages.length)} / ${pages.length}</span>
        <button type="button" data-action="next" ${currentIndex >= pages.length - 1 ? 'disabled' : ''}>下一页</button>
      </footer>
      <aside class="toc" hidden>
        <div class="toc-panel">
          <button type="button" data-action="close-toc">关闭</button>
          <h3>目录</h3>
          <div class="toc-list">
            ${pages.map((page, index) => `<button type="button" data-goto="${index}">${String(index + 1).padStart(2, '0')} ${page.title}</button>`).join('')}
          </div>
        </div>
      </aside>
    </main>
  `;
}

function go(delta) {
  const target = normalizeIndex(currentIndex + delta);
  if (target === currentIndex) return;
  currentIndex = target;
  render();
}

document.addEventListener('click', (event) => {
  const action = event.target.dataset.action;
  if (action === 'next') go(1);
  if (action === 'prev') go(-1);
  if (action === 'toc') document.querySelector('.toc').hidden = false;
  if (action === 'close-toc') document.querySelector('.toc').hidden = true;
  if (event.target.dataset.goto) {
    currentIndex = normalizeIndex(Number(event.target.dataset.goto));
    render();
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') go(1);
  if (event.key === 'ArrowLeft') go(-1);
});

render();
