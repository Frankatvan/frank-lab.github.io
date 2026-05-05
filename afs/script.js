const pages = [
  {
    id: "page-01",
    section: "封面",
    kicker: "极智语财 · 经营财务手册",
    title: "老板的财务驾驶舱",
    subtitle: "把现金、利润、税务风险，翻译成下个月的经营动作。",
    body: [
      "财务的价值不是把账做完，而是让老板提前看见判断。"
    ],
    visual: "coverHero",
    kind: "cover",
    type: "cover"
  },
  {
    id: "page-02",
    section: "开场",
    kicker: "老板场景",
    title: "利润 +42 万，账户只剩 8 万：钱卡在哪？",
    subtitle: "利润没有错，现金被经营环节占住了。",
    body: [
      "老板要追的不是利润表，而是资金被卡住的经营环节。"
    ],
    visual: "cashGap",
    type: "diagnostic"
  },
  {
    id: "page-03",
    section: "开场",
    kicker: "课程问题",
    title: "财务是在记录过去，还是帮你看未来？",
    subtitle: "传统记账回答“发生了什么”，经营财务回答“接下来怎么办”。",
    body: [
      "会计把业务整理成凭证和报表，经营财务顾问把报表翻译成经营判断。",
      "老板需要的不是更多表格，而是更少、更准、更能行动的经营信号。"
    ],
    visual: "pastFuture"
  },
  {
    id: "page-04",
    section: "主讲人背景",
    kicker: "实战经验",
    title: "这不是一堂会计课，而是经营管理复盘",
    subtitle: "内容来自长期 CFO、财务管理、经营管理和信息化建设一线经验。",
    body: [
      "30 多年财务、内控、预算、资金与企业经营管理经验，曾参与港股上市与新三板挂牌全过程。",
      "主导过企业运营 ERP、全面预算管理、成本采购、合同费用和自动化记账平台建设。"
    ],
    visual: "speakerCred"
  },
  {
    id: "page-05",
    section: "金税四期",
    kicker: "外部环境",
    title: "解释不一致，就是风险入口",
    subtitle: "金税四期背后，是税务监管从单点审核走向数据交叉验证。",
    body: [
      "解释不一致时，风险不在某张票，而在业务链条说不通。"
    ],
    visual: "taxCrossCheck",
    type: "risk"
  },
  {
    id: "page-06",
    section: "金税四期",
    kicker: "六类风险",
    title: "中小企业最容易暴露的 6 类风险",
    subtitle: "问题往往不是会计做错一笔账，而是业务管理长期粗放。",
    body: [
      "私户收款、未开票收入、虚假成本、发票品类不匹配、工资社保不一致、个体户外包滥用，是高频风险信号。",
      "这些问题会同时影响现金流、利润、税务和老板信用。"
    ],
    visual: "riskSix"
  },
  {
    id: "page-07",
    section: "金税四期",
    kicker: "经营影响",
    title: "金税四期不是只影响会计",
    subtitle: "它真正改变的是老板对业务真实性的管理要求。",
    body: [
      "一笔收入能不能解释清楚，取决于合同、交付、收款、发票和账务是否一致。",
      "一笔费用能不能列支，取决于有没有真实服务、真实付款和可追溯证据。"
    ],
    visual: "businessTrace"
  },
  {
    id: "page-08",
    section: "金税四期",
    kicker: "虚拟案例",
    title: "从“账能报”到“风险说不清”",
    subtitle: "一家贸易企业的困境，往往从几个习惯动作开始。",
    body: [
      "老板为了方便，让部分客户打到个人账户；为了补成本，又找了几张咨询服务发票。",
      "短期看，报表平了；长期看，资金流、发票流和业务流开始互相矛盾。"
    ],
    visual: "caseTrail"
  },
  {
    id: "page-09",
    section: "金税四期",
    kicker: "老板新问题",
    title: "不要只问“怎么少交税”",
    subtitle: "更重要的问题是：业务、账、税、钱怎样说得通。",
    body: [
      "好的财务管理，不是把风险藏起来，而是把业务做清楚、证据留完整、数据对得上。",
      "这也是外部 CFO 视角能给老板提供价值的起点。"
    ],
    visual: "fourTruths"
  },
  {
    id: "page-10",
    section: "经营盲区",
    kicker: "现金流盲区",
    title: "现金缺口不是月底才发生的",
    subtitle: "它通常在 8 周前就已经能被看见。",
    body: [
      "提前看到缺口，才有时间催收、延期付款、控制支出和准备融资。"
    ],
    visual: "cashTimeline",
    type: "forecast"
  },
  {
    id: "page-11",
    section: "经营盲区",
    kicker: "利润质量盲区",
    title: "哪些客户赚钱，哪些订单拖累公司？",
    subtitle: "收入大的客户，不一定是好客户。",
    body: [
      "有些客户贡献收入，但占用大量账期、售后和管理精力。",
      "有些订单毛利看起来不错，扣掉返工、物流、资金成本后并不赚钱。"
    ],
    visual: "profitMatrix"
  },
  {
    id: "page-12",
    section: "经营盲区",
    kicker: "费用盲区",
    title: "费用不是越低越好，关键是投产比",
    subtitle: "该花的钱要花得清楚，不该漏的钱要及时止住。",
    body: [
      "营销费、人工费、租金、研发费和管理费，都应该对应经营目标。",
      "老板要区分增长性投入、维持性支出和低效浪费。"
    ],
    visual: "spendRoi"
  },
  {
    id: "page-13",
    section: "经营盲区",
    kicker: "资金占用",
    title: "钱卡在哪里？",
    subtitle: "应收、库存、预付、税款和工资，都会占用现金。",
    body: [
      "很多企业不是利润不够，而是周转效率太低。",
      "经营财务顾问会把资金占用拆开，让老板知道先解决哪个环节。"
    ],
    visual: "workingCapital"
  },
  {
    id: "page-14",
    section: "经营盲区",
    kicker: "经营解释系统",
    title: "老板真正需要的不是一张报表",
    subtitle: "而是一套从指标到原因再到动作的解释系统。",
    body: [
      "报表告诉你结果，指标告诉你异常，分析告诉你原因，会议决定下一步动作。",
      "这就是经营分析型外部 CFO 服务的工作方式。"
    ],
    visual: "explainSystem"
  },
  {
    id: "page-15",
    section: "经营财务方法",
    kicker: "角色定义",
    title: "老板需要什么样的外部 CFO 视角？",
    subtitle: "不是高配会计，而是老板的经营决策外脑。",
    body: [
      "会计负责把账做对，外部 CFO 视角负责把账讲透。",
      "它连接财务、税务、业务和资金，让老板每个月知道该抓什么。"
    ],
    visual: "roleMap"
  },
  {
    id: "page-16",
    section: "经营财务方法",
    kicker: "月度驾驶舱",
    title: "每月一张经营驾驶舱",
    subtitle: "不是展示更多数据，而是锁定本月必须处理的动作。",
    body: [
      "现金、回款、毛利、费用和税务风险，都要落到动作和复盘点。"
    ],
    visual: "ownerDashboard",
    type: "method"
  },
  {
    id: "page-17",
    section: "经营财务方法",
    kicker: "现金预测",
    title: "8 周现金流预测",
    subtitle: "提前看到资金缺口，而不是等到账户见底。",
    body: [
      "把预计回款、固定支出、税费工资、供应商付款放到同一张时间表。",
      "老板可以提前决定催收、延期、融资或控制支出。"
    ],
    visual: "cashForecast"
  },
  {
    id: "page-18",
    section: "经营财务方法",
    kicker: "利润质量",
    title: "客户、项目、产品线的真实贡献",
    subtitle: "用数据判断哪里该加码，哪里该收缩。",
    body: [
      "经营财务顾问会把利润拆到客户、项目或产品线层面。",
      "老板可以据此调整报价、信用政策、资源投入和销售方向。"
    ],
    visual: "profitWaterfall"
  },
  {
    id: "page-19",
    section: "经营财务方法",
    kicker: "预算预警",
    title: "从事后补救到提前调整",
    subtitle: "预算不是限制老板，而是让经营动作更有边界。",
    body: [
      "预算可以告诉你哪些费用超速，哪些收入低于预期，哪些现金缺口正在形成。",
      "预警机制让企业在问题变大之前就开始处理。"
    ],
    visual: "warningSignals"
  },
  {
    id: "page-20",
    section: "经营财务方法",
    kicker: "月度经营会",
    title: "看数据、定动作、追结果",
    subtitle: "把财务分析变成老板团队的管理节奏。",
    body: [
      "每月固定复盘收入、毛利、现金、回款、费用和风险。",
      "会议输出不是一堆意见，而是明确负责人、截止时间和下月复盘点。"
    ],
    visual: "meetingReview"
  },
  {
    id: "page-21",
    section: "AFS 核心能力",
    kicker: "系统支撑",
    title: "AFS 先把证据链准备好",
    subtitle: "顾问判断之前，系统先让票、钱、账、业务能互相追溯。",
    body: [
      "证据链准备好，经营财务顾问才能更快判断风险和动作。"
    ],
    visual: "afsEvidenceMap",
    type: "evidence"
  },
  {
    id: "page-22",
    section: "AFS 核心能力",
    kicker: "能力演示",
    title: "从一张发票追到经营影响",
    subtitle: "发票不是孤立文件，它连接业务、现金和报表。",
    body: [
      "一张发票可以关联合同、订单、付款、凭证、报表科目和风险提示。",
      "老板看到异常指标时，可以追到背后的业务证据。"
    ],
    visual: "invoiceTrace"
  },
  {
    id: "page-23",
    section: "下一步",
    kicker: "轻量开始",
    title: "先做一次经营财务体检",
    subtitle: "不急着换系统，也不急着买服务，先把经营问题看清楚。",
    body: [
      "适合年营收 500 万到 3000 万、现金流开始复杂、老板希望看清经营的企业。",
      "体检会围绕现金流、利润质量、费用结构、回款周期和财税风险给出问题清单。"
    ],
    visual: "cta"
  },
  {
    id: "page-24",
    section: "下一步",
    kicker: "交流入口",
    title: "带一个真实经营问题来聊",
    subtitle: "从现金缺口、利润质量、费用失控、回款周期或税务风险中的任意一个问题开始。",
    body: [
      "先做轻量诊断，再判断是否需要系统、服务或管理节奏升级。"
    ],
    visual: "qrCta",
    type: "closing"
  }
];

const imageAssets = {
  coverHero: "hero-cockpit-v2.png",
  cashForecast: "cash-forecast-v2.png",
  dashboard: "hero-cockpit-v2.png",
  profitWaterfall: "profit-waterfall-v2.png",
  warningSignals: "warning-signals-v2.png",
  meetingReview: "meeting-review-v2.png",
  afsEvidence: "afs-evidence-v2.png"
};

let currentIndex = 0;
let pageMotion = "settled";

function sectionClass(section) {
  if (section.includes("封面")) return "section-cover";
  if (section.includes("金税")) return "section-tax";
  if (section.includes("经营盲区")) return "section-ops";
  if (section.includes("经营财务方法")) return "section-cfo";
  if (section.includes("主讲人")) return "section-speaker";
  if (section.includes("AFS")) return "section-afs";
  if (section.includes("下一步")) return "section-next";
  return "section-open";
}

function visualMarkup(type) {
  if (imageAssets[type]) {
    return `<img class="scene-image" src="./assets/${imageAssets[type]}" alt="" loading="eager">`;
  }

  const visuals = {
    cashGap: `
      <div class="cash-pipe">
        <div class="cash-node profit"><small>利润表</small><strong>+42万</strong><em>账面利润</em></div>
        <div class="pipe-track">
          <i class="pipe-flow">利润流向现金</i>
          <span class="blocker b1"><b>应收</b><em>28万</em></span>
          <span class="blocker b2"><b>库存</b><em>19万</em></span>
          <span class="blocker b3"><b>税费</b><em>7万</em></span>
        </div>
        <div class="cash-node bank"><small>银行账户</small><strong>8万</strong><em>可用现金</em></div>
        <p>钱没有消失，只是被经营环节占住了。</p>
      </div>`,
    pastFuture: `
      <div class="compare-board">
        <div class="compare-card">
          <small>传统记账</small>
          <b>记录过去</b>
          <span>凭证 · 报表 · 申报</span>
        </div>
        <div class="compare-arrow">→</div>
        <div class="compare-card accent">
          <small>经营财务</small>
          <b>看见未来</b>
          <span>预测 · 预警 · 行动</span>
        </div>
      </div>`,
    speakerCred: `
      <div class="cred-grid">
        <div><strong>30+ 年</strong><span>财务与经营管理</span></div>
        <div><strong>上市 / 挂牌</strong><span>资本与治理实战</span></div>
        <div><strong>ERP / 预算</strong><span>系统建设与流程落地</span></div>
      </div>`,
    taxCrossCheck: `
      <div class="tax-check-board">
        <div class="check-source">发票</div><div class="check-source">资金</div><div class="check-source">合同</div>
        <div class="check-source">社保</div><div class="risk-core"><span>解释不一致</span><strong>风险</strong></div><div class="check-source">平台</div>
        <div class="check-source">主体</div><div class="check-source">申报</div><div class="check-source">业务</div>
      </div>`,
    riskSix: `
      <div class="tag-grid">
        <span>私户收款</span><span>未开票收入</span><span>虚假成本</span>
        <span>品类不匹配</span><span>工资社保不一致</span><span>个体户外包</span>
      </div>`,
    businessTrace: `
      <div class="step-flow">
        <span>合同</span><span>交付</span><span>收款</span><span>发票</span><span>凭证</span>
      </div>`,
    caseTrail: `
      <div class="timeline-board">
        <div><b>方便</b><span>个人账户收款</span></div>
        <div><b>补票</b><span>咨询发票补成本</span></div>
        <div><b>矛盾</b><span>票钱账不一致</span></div>
        <div><b>风险</b><span>业务解释断裂</span></div>
      </div>`,
    fourTruths: `
      <div class="truth-board">
        <span>业务</span><span>账</span><span>税</span><span>钱</span>
        <b>说同一件事</b>
      </div>`,
    profitMatrix: `
      <div class="matrix-board">
        <div class="matrix-cell featured">高利润<br>低占用</div>
        <div class="matrix-cell">高利润<br>高占用</div>
        <div class="matrix-cell">低利润<br>低占用</div>
        <div class="matrix-cell danger">低利润<br>高占用</div>
      </div>`,
    cashTimeline: `
      <div class="cash-timeline">
        <div class="timeline-kpis"><span><b>8周</b>预测窗口</span><span><b>W5</b>缺口出现</span><span><b>-12万</b>最低余额</span></div>
        <svg viewBox="0 0 760 300" role="img" aria-label="8周现金流预测">
          <path class="safe-zone" d="M40 72H720V170H40Z"></path>
          <path class="risk-zone" d="M40 170H720V252H40Z"></path>
          <path class="axis" d="M40 170H720"></path>
          <path class="cash-line" d="M50 104 C130 92 160 118 230 124 C306 132 330 154 382 184 C430 212 486 238 552 218 C616 198 648 166 710 144"></path>
          <circle cx="382" cy="184" r="8"></circle>
          <circle cx="552" cy="218" r="8"></circle>
          <text x="382" y="160" text-anchor="middle">W5 缺口出现</text>
          <text x="552" y="248" text-anchor="middle" class="danger-label">最低余额 -12万</text>
          <text x="650" y="118" text-anchor="middle" class="action-label">可提前动作</text>
        </svg>
        <div class="timeline-labels"><span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span><span>W6</span><span>W7</span><span>W8</span></div>
        <div class="cash-actions"><b>本周动作</b><span>催收</span><span>延期付款</span><span>控制支出</span><span>融资准备</span></div>
      </div>`,
    spendRoi: `
      <div class="roi-board">
        <div class="roi-bar" style="--h:42%"></div>
        <div class="roi-bar" style="--h:68%"></div>
        <div class="roi-bar" style="--h:56%"></div>
        <div class="roi-bar" style="--h:88%"></div>
        <p>费用投产比需要被解释，而不是只被压缩。</p>
      </div>`,
    workingCapital: `
      <div class="capital-board">
        <span>应收</span><span>库存</span><span>预付</span><span>税费</span><span>工资</span>
        <b>现金占用链</b>
      </div>`,
    explainSystem: `
      <div class="logic-board">
        <span>报表</span><span>指标</span><span>原因</span><span>动作</span><span>复盘</span>
      </div>`,
    ownerDashboard: `
      <div class="owner-dashboard">
        <div class="dashboard-conclusion"><small>本月经营结论</small><strong>现金缺口已出现，毛利回落，费用需要收口。</strong></div>
        <div class="dashboard-main">
          <div class="dash-kpis">
            <span class="warn"><b>-12万</b><small>现金缺口</small></span>
            <span><b>47天</b><small>回款周期</small></span>
            <span class="bad"><b>-6pt</b><small>毛利异常</small></span>
            <span class="bad"><b>+18%</b><small>费用超速</small></span>
            <span><b>2项</b><small>税务疑点</small></span>
          </div>
          <div class="dashboard-trend">
            <small>现金余额趋势</small>
            <svg viewBox="0 0 420 132" aria-label="现金余额趋势">
              <path class="trend-safe" d="M18 24H402V64H18Z"></path>
              <path class="trend-risk" d="M18 64H402V116H18Z"></path>
              <path class="trend-axis" d="M18 64H402"></path>
              <path class="trend-line" d="M22 42 C78 36 112 58 158 62 C212 68 234 96 280 94 C330 92 354 72 398 54"></path>
              <circle cx="238" cy="86" r="6"></circle>
            </svg>
            <div class="status-lights"><span class="green">现金安全线</span><span class="gold">费用超速</span><span class="red">税务疑点</span></div>
          </div>
        </div>
        <div class="action-panel">
          <strong>本月动作</strong>
          <p><b>催收</b><span>前 5 大应收客户</span><em>本周</em></p>
          <p><b>报价</b><span>暂停低毛利订单</span><em>本周</em></p>
          <p><b>复核</b><span>咨询费与合同证据</span><em>月末</em></p>
        </div>
        <div class="review-points"><b>下月复盘点</b><span>现金余额是否回到安全线</span><span>低毛利订单是否减少</span><span>税务疑点是否解释清楚</span></div>
      </div>`,
    roleMap: `
      <div class="role-board">
        <div class="role-pill">会计<br><small>做对账</small></div>
        <div class="role-core">外部 CFO 视角<br><small>讲透经营</small></div>
        <div class="role-pill">老板<br><small>做决策</small></div>
      </div>`,
    afsEvidenceMap: `
      <div class="afs-evidence-map">
        <div class="trace-alert"><small>异常指标</small><strong>毛利率 -6pt</strong><em>系统预警</em></div>
        <div class="trace-chain">
          <span>报表科目</span><span>凭证</span><span>发票 / 流水 / 合同</span><span class="risk">风险解释</span><span class="action">经营动作</span>
        </div>
        <div class="trace-loop"><span>动作执行</span><i></i><span>下月复盘</span><i></i><span>指标回看</span></div>
        <div class="evidence-proof">
          <b>AFS 证据链</b>
          <p>异常不是停在提示，而是追到证据、形成解释、落到动作，再回到复盘。</p>
        </div>
      </div>`,
    invoiceTrace: `
      <div class="trace-board">
        <strong>发票</strong><em></em><span>合同</span><span>付款</span><span>凭证</span><span>报表</span><span>风险提示</span>
      </div>`,
    cta: `
      <div class="health-board">
        <span>现金流</span><span>利润质量</span><span>费用结构</span><span>财税风险</span>
        <b>经营财务体检</b>
      </div>`,
    qrCta: `
      <div class="qr-cta">
        <div class="qr-topics">
          <b>可以从这 5 个问题开始</b>
          <span>现金缺口</span><span>利润质量</span><span>费用失控</span><span>回款周期</span><span>税务风险</span>
        </div>
        <div class="qr-card"><img src="./assets/contact-qr.png" alt="企业微信二维码"></div>
        <p>先做轻量诊断，再判断是否需要系统、服务或管理节奏升级。</p>
      </div>`
  };

  return visuals[type] || "";
}

function renderBody(page) {
  return `
    <div class="body-text">
      ${page.body.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
  `;
}

function renderPage(page, index) {
  const visual = `<div class="visual visual-${page.visual}" aria-hidden="true">${visualMarkup(page.visual)}</div>`;
  const chips = page.chips
    ? `<div class="cover-chips">${page.chips.map((chip) => `<span>${chip}</span>`).join("")}</div>`
    : "";
  const motionClass = pageMotion === "settled" ? "" : ` page-${pageMotion}`;
  const typeClass = ` page-type-${page.type || "standard"}`;

  if (page.kind === "cover") {
    return `
      <article class="book-page single cover-page ${sectionClass(page.section)}${typeClass}${motionClass}" data-page-id="${page.id}">
        <div class="page-content page-content-cover">
          ${visual}
          <div class="cover-copy">
            <p class="kicker">${page.kicker}</p>
            <h1>${page.title}</h1>
            <p class="subtitle">${page.subtitle}</p>
            ${chips}
            ${renderBody(page)}
          </div>
        </div>
      </article>
    `;
  }

  return `
    <article class="book-page single ${sectionClass(page.section)}${typeClass}${motionClass}" data-page-id="${page.id}">
      <div class="page-content">
        <div class="copy-column">
          <p class="kicker">${page.kicker}</p>
          <h2>${page.title}</h2>
          <p class="subtitle">${page.subtitle}</p>
          ${renderBody(page)}
        </div>
        ${visual}
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
  const nextPage = pages[currentIndex + 1];
  const progress = Math.round(((currentIndex + 1) / pages.length) * 100);

  document.getElementById("app").innerHTML = `
    <main class="training-book">
      <section class="book-wrap" aria-label="培训材料">
        <div class="showcase-stage">
          <div class="stage-glow" aria-hidden="true"></div>
          <div class="stage-grid" aria-hidden="true"></div>
          ${renderPage(page, currentIndex)}
          ${nextPage ? `<div class="page-peek" aria-hidden="true"><span>${String(currentIndex + 2).padStart(2, "0")}</span></div>` : ""}
        </div>
      </section>
      <footer class="controls">
        <button type="button" data-action="prev" ${currentIndex === 0 ? "disabled" : ""}>上一页</button>
        <div class="progress" aria-label="阅读进度"><span style="width:${progress}%"></span></div>
        <span class="progress-label">${currentIndex + 1} / ${pages.length}</span>
        <button type="button" data-action="toc">目录</button>
        <button type="button" data-action="next" ${currentIndex >= pages.length - 1 ? "disabled" : ""}>下一页</button>
      </footer>
      <aside class="toc" hidden>
        <div class="toc-panel">
          <button type="button" class="toc-close" data-action="close-toc">关闭</button>
          <h3>目录</h3>
          <div class="toc-list">
            ${pages.map((entry, idx) => `<button type="button" data-goto="${idx}">${String(idx + 1).padStart(2, "0")} ${entry.title}</button>`).join("")}
          </div>
        </div>
      </aside>
    </main>
  `;
}

function go(delta) {
  const target = normalizeIndex(currentIndex + delta);
  if (target === currentIndex) return;
  pageMotion = delta > 0 ? "forward" : "back";
  currentIndex = target;
  render();
}

document.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if (action === "next") go(1);
  if (action === "prev") go(-1);
  if (action === "toc") document.querySelector(".toc").hidden = false;
  if (action === "close-toc") document.querySelector(".toc").hidden = true;

  if (event.target.dataset.goto) {
    const target = normalizeIndex(Number(event.target.dataset.goto));
    pageMotion = target >= currentIndex ? "forward" : "back";
    currentIndex = target;
    render();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown") go(1);
  if (event.key === "ArrowLeft" || event.key === "PageUp") go(-1);
  if (event.key === "Escape") {
    const toc = document.querySelector(".toc");
    if (toc) toc.hidden = true;
  }
});

render();
