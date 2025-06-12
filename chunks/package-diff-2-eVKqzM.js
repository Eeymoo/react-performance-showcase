import{y as c,C as j,E as v,B as e,F as w,G as N,H as A}from"./vendor-react-CTURZAkq.js";import{n as g}from"./@vendor-emotion-h398TVVv.js";import{S,B as M,I as b,a as T}from"./vendor-antd-DVG3APET.js";import"./vendor-react-dom-Dj5QkJX1.js";import"./vendor-antd-icons-SJ3w7482.js";const E=g.span`
  color: #333;
  border-radius: 4px;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`,k=g.span`
  color: #999;
  background-color: #f0f0f0;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`,K=g.span`
  color: green;
  background-color: #e6ffed;
  padding: 0 2px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
`,D=g.span`
  color: red;
  background-color: #fff1f0;
  padding: 0 2px;
  font-size: 14px;
  line-height: 1.5;
  display: inline;
  white-space: pre-wrap;
  text-decoration: line-through;
`,f=a=>{const{diffType:o="char",diffMode:s="current",historyContent:d="",currentContent:l,toArray:h=t=>t.split(`
`)}=a,[p,y]=c.useState([]);return c.useEffect(()=>{let t=v,i=[];if(o==="array"){const n=h(d||""),r=h(l||"");i=j(n,r)}o==="word"?t=w:o==="line"?t=N:o==="sentence"?t=A:o==="char"&&(t=v),s==="history"?i=[{value:d,added:!1,removed:!1,count:d.length}]:s==="current"?i=[{value:l,added:!1,removed:!1,count:l.length}]:o!=="array"&&(i=t(d,l)),y(i||[])},[d,l,o,s,h]),e.jsx("div",{className:"diff-container",children:e.jsx("div",{className:"diff-content",children:p?.map((t,i)=>{let n=E,r=t.value||"",m="diff-normal";if(t.added)n=K,m="diff-added";else if(t.removed)n=D,m="diff-removed";else if(s==="abridge"&&!t.added&&!t.removed&&r.length>20){n=k;const u=r.slice(0,10),x=r.slice(-10);r=`${u} ... ${x}`,m="diff-abridge"}return e.jsx(n,{className:m,children:r},`${t.value}-${i}`)})})})};function q(){const[a,o]=c.useState("word"),[s,d]=c.useState("compare"),[l,h]=c.useState(""),[p,y]=c.useState(""),t=c.useMemo(()=>[{historyContent:"你好，世界！今天天气真好。",currentContent:"你好，小明！明天天气挺好的。"},{historyContent:`《量子回声》讲述2085年科学家林薇研发出跨维度通信装置"量子铃"，却意外接收到平行宇宙的求救信号。
当团队解码信号时，发现所有平行世界的文明都面临同种量子病毒威胁。
人类必须与镜像宇宙的自己合作，在72小时内破解病毒源码防止现实崩塌。`,currentContent:`《量子回声》聚焦2085年科学家林薇发明的跨维度设备"量子铃"，该装置意外捕获平行宇宙的濒危信号。
研究团队破译后发现所有平行世界遭受同种量子病毒侵袭。
书中核心冲突在于人类必须与平行自我联手，在三天内破解病毒编码阻止现实维度瓦解。`},{historyContent:`"Neural Frontier" depicts neuro-engineer Kael's creation of a dream-sharing network that accidentally releases repressed collective trauma. As nightmares manifest physically across London, Kael must enter the collective subconscious with his prototype "Cortex Key" device to confront the entity absorbing human hope before consciousness collapses.`,currentContent:'"Neural Frontier" follows neuro-engineer Kael whose dream-sharing technology triggers the materialization of buried collective trauma. When nightmares physically erupt in London, Kael deploys his experimental "Cortex Key" to journey into the shared subconscious and stop an entity consuming human optimism before global consciousness fails.'},{historyContent:`当Tokyo的neural-network系统遭quantum-level病毒入侵，《意识边境》的AI伦理官Yumi发现这源于人类恐惧的具象化。
她必须用尚未验证的quantum-entanglement协议进入数字collective unconscious，在防火墙collapse前消除源头entity。`,currentContent:`《意识边境》危机始于Tokyo的neural-network被量子级病毒渗透，AI伦理官Yumi溯源发现是人类集体恐惧的manifestation。
剧情高潮在于她必须采用未经测试的quantum-entanglement技术闯入digital collective unconscious，赶在security-matrix崩溃前清除寄生entity的核心代码。`},{historyContent:"为体系化推进ESG议题的改善与提升，公司基于“维度—议题—指标”三个层级构建ESG管理指标体系，并对指标情况开展对标分析，根据不同特性将指标分类，明确不同类型指标的差异化管控模式。公司将所有指标分配到相关责任部门，结合外部要求和公司业务特点，持续推动指标的改善或提升。报告期内，“应对气候变化”“生态系统与生物多样性保护”“风险管理与内部控制”2等ESG议题相关管理指标实现改善提升。此外，公司建立ESG信息化管理平台，实现ESG数据管理体系化、标准化与智能化，进一步提升公司ESG数据治理与信息管理效率。",currentContent:"为体系化推进 ESG 议题的改善与提升，公司构建了“维度—议题—指标”三层级管理指标体系，并对指标进行对标分析。根据不同特性，公司将指标分类并明确差异化管控模式。所有指标均分配至责任部门，相关部门结合外部要求与公司业务特点，持续推动各项指标的改善或提升。报告期内，在“应对气候变化”、“生态系统与生物多样性保护”、“风险管理与内部控制”等重要实质性议题相关的管理指标上取得进展。此外，公司建立了 ESG 信息化管理平台，实现 ESG 数据的体系化、标准化与智能化管理，有效提升了数据治理与信息管理效率。"}],[]),i=c.useMemo(()=>n=>{if(typeof n!="string")return[];if(typeof Intl<"u"&&Intl.Segmenter)try{const x=new Intl.Segmenter("zh",{granularity:"word"}).segment(n);return Array.from(x).map(C=>C.segment)}catch(u){console.warn("系统分词失败，使用标点分词:",u)}const r="、。，！？；：“”‘’（）【】《》…—「」",m=new RegExp(`([${r}])|(
)|( )`,"g");return n.split(m).filter(u=>u&&u.trim())},[]);return e.jsxs("div",{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"mr-2",children:"Diff Type:"}),e.jsx(S,{options:[{label:"Word",value:"word"},{label:"Line",value:"line"},{label:"Sentence",value:"sentence"},{label:"Char",value:"char"},{label:"Array",value:"array"}],value:a,onChange:n=>o(n)})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("span",{className:"mr-2",children:"Diff Mode:"}),e.jsx(S,{options:[{label:"History",value:"history"},{label:"Current",value:"current"},{label:"Compare",value:"compare"},{label:"Abridge",value:"abridge"}],value:s,onChange:n=>d(n)})]}),e.jsxs("div",{className:"mb-4 p-4 border border-gray-300 rounded-lg bg-gray-100",children:[e.jsx("div",{className:"flex gap-2 mb-4",children:t.map((n,r)=>e.jsxs(M,{onClick:()=>{h(n.historyContent),y(n.currentContent)},children:["示例 ",r+1]},r))}),e.jsxs("div",{className:"flex gap-4 mb-4",children:[e.jsx("div",{className:"w-1/2",children:e.jsx(b.TextArea,{autoSize:{minRows:4,maxRows:1/0},style:{height:"100%"},value:l,onChange:n=>h(n.target.value)})}),e.jsx("div",{className:"w-1/2",children:e.jsx(b.TextArea,{autoSize:{minRows:4,maxRows:1/0},style:{height:"100%"},value:p,onChange:n=>y(n.target.value)})})]}),e.jsx("div",{className:"bg-white p-4 rounded-lg",children:e.jsx(f,{diffType:a,diffMode:s,historyContent:l,currentContent:p,toArray:i})})]}),e.jsxs(T,{direction:"vertical",style:{width:"100%"},size:24,children:[e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"中文示例:"}),e.jsx(f,{diffType:a,diffMode:s,historyContent:`《量子回声》讲述2085年科学家林薇研发出跨维度通信装置"量子铃"，却意外接收到平行宇宙的求救信号。
当团队解码信号时，发现所有平行世界的文明都面临同种量子病毒威胁。
人类必须与镜像宇宙的自己合作，在72小时内破解病毒源码防止现实崩塌。`,currentContent:`《量子回声》聚焦2085年科学家林薇发明的跨维度设备"量子铃"，该装置意外捕获平行宇宙的濒危信号。
研究团队破译后发现所有平行世界遭受同种量子病毒侵袭。
书中核心冲突在于人类必须与平行自我联手，在三天内破解病毒编码阻止现实维度瓦解。`})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"英文示例:"}),e.jsx(f,{diffType:a,diffMode:s,historyContent:`"Neural Frontier" depicts neuro-engineer Kael's creation of a dream-sharing network that accidentally releases repressed collective trauma. As nightmares manifest physically across London, Kael must enter the collective subconscious with his prototype "Cortex Key" device to confront the entity absorbing human hope before consciousness collapses.`,currentContent:'"Neural Frontier" follows neuro-engineer Kael whose dream-sharing technology triggers the materialization of buried collective trauma. When nightmares physically erupt in London, Kael deploys his experimental "Cortex Key" to journey into the shared subconscious and stop an entity consuming human optimism before global consciousness fails.'})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"混合示例:"}),e.jsx(f,{diffType:a,diffMode:s,historyContent:`当Tokyo的neural-network系统遭quantum-level病毒入侵，《意识边境》的AI伦理官Yumi发现这源于人类恐惧的具象化。
她必须用尚未验证的quantum-entanglement协议进入数字collective unconscious，在防火墙collapse前消除源头entity。`,currentContent:`《意识边境》危机始于Tokyo的neural-network被量子级病毒渗透，AI伦理官Yumi溯源发现是人类集体恐惧的manifestation。
剧情高潮在于她必须采用未经测试的quantum-entanglement技术闯入digital collective unconscious，赶在security-matrix崩溃前清除寄生entity的核心代码。`})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"中文示例:"}),e.jsx(f,{diffType:a,diffMode:s,historyContent:"你好，世界！今天天气真好。",currentContent:"你好，小明！明天天气挺好的。"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"浏览器中文分词处理示例:"}),e.jsx(f,{diffType:"array",diffMode:s,toArray:i,historyContent:"你好，世界！今天天气真好。",currentContent:"你好，小明！明天天气挺好的。"})]}),e.jsxs("div",{children:[e.jsx("span",{className:"mb-4",children:"中文大文本示例:"}),e.jsx(f,{diffMode:s,historyContent:`
人类预测在不久的将来，太阳核心急速老化，将膨胀吞噬整个太阳系，地球面临毁灭。为求生存，人类社会开启“流浪地球”计划，制造一万座“行星发动机”和两千座“转向发动机”, 试图带着地球一起逃出太阳系前往新家园。人类建造和发射了“领航者号”国际空间站，为地球提供预警、领航、通讯服务[15]。

2075年，为利用引力弹弓效应，地球航行到木星附近。航天员刘培强的儿子刘启带着妹妹韩朵朵从北京地下城来到地表，用外公韩子昂的车卡偷开运载车，被发现并被关押于济宁派出所。韩子昂赶到并行贿看守未果，被一同关押。

此时，木星引力突然增大，地球地壳变动，五千余座行星发动机停机，地球失去足够的推力而逐渐坠入木星，将因进入木星的刚体洛希极限而解体。联合政府紧急动员救援部队抢修故障发动机，刘启、韩朵朵、韩子昂和狱友Tim四人从倒塌的派出所逃出，他们驾驶的运载车被CN171-11救援队（队长为王磊）征用，前去救援杭州一号行星发动机。经过已完全冰封上海地面裂缝时运输车队被地壳变动导致的冰层塌方压毁，其后在徒步运送火石的过程中多名救援队员牺牲，与小队失散的韩子昂也因防护服破损导致氧气泄漏及失温死亡。之后刘启、韩朵朵、Tim因不满王磊过度着重任务而离开救援队，随后找到另外一台因大气层稀薄化导致飞机坠毁、救援队全体失踪但车况良好的火石运载车以及技术员李一一，在后者极力争辩下三人决定执行该救援队既定的救援苏拉威西三号转向发动机的任务，前往苏拉威西。而王磊小队得知杭州一号行星发动机损坏且杭州4号行星发动机的地下城被岩浆毁灭且火石损耗殆尽导致无处可去之下亦加入了刘启等人。即将到达苏拉威西时，他们得知苏拉威西三号转向发动机已被其他救援队重启。“领航者号”国际空间站人工智能（名为“MOSS”）随后以联合政府名义向全球广播：大部分发动机已经修复，但不足以将地球推离木星，地球将在七天后解体。广播后不论地下世界和救援部队顿时分崩离析，无处可去的刘启想到可以点燃混有木星原有的氢气和从地球吸引而来的氧气的木星大气，从而制造足够的冲击波推开地球。

“领航者号”国际空间站上的刘培强即将进入休眠时与刘启失联。刘培强强行打开休眠舱，发现空间站正在远离木星，刘培强说服被MOSS唤醒来阻止他的俄罗斯航天员马卡洛夫，他们经空间站外通过太空行走前往空间站主控室，在途中马卡洛夫因航天员头盔被MOSS击碎而死。刘培强在主控室得知，木星引力引力激增发生时，MOSS在三号紧急预案启动后的0.42秒后即推算得出“流浪地球计划”失败兼且救援行动和点燃木星方案无用，而基于此推算之下自行授权、启动携带人类文明记录逃离的“火种计划”。地面上的刘启等人决定修改发动机程序，用苏拉威西三号转向发动机点燃木星大气，刘培强说服联合政府为王磊小队打开全球广播呼唤支持，并共享了点燃木星方案，随后还在撤离当中的救援部队顿时回到岗位全力协助。苏拉威西三号发动机、新加坡一号发动机及雅加达四号发动机，三座行星发动机实行了点燃木星方案，但它们的喷射流距木星大气仍有五千多公里而无法点燃。刘培强向联合政府申请牺牲空间站以换取其燃料在木星地球夹缝当中爆炸去补足那五千公里的引爆距离，MOSS随即屏蔽空间站通讯。刘培强关闭消防系统并以马卡洛夫送给他的伏特加烧毁MOSS的核心节点让其失效，以夺得空间站控制权，并释放空间站的休眠仓，经联合政府同意，刘培强手动驾驶空间站进入喷射流。空间站的爆炸点燃了木星大气，地球被推离木星。

三年后，刘启成长为一名运载车初阶驾驶员，韩朵朵和李一一也成为了运载车车组成员，而他前往地表经过的北京地下城也从之前的木星引力危机当中恢复过来[注 2]，而地球则继续前往新家园的旅途。`,currentContent:`
人类预测在不久的将来，太阳核心急速老化，将膨胀吞噬整个太阳系，地球面临毁灭。为求生存，人类社会开启“流浪地球”计划，制造一万座“行星发动机”和两千座“转向发动机”, 试图带着地球一起逃出太阳系前往新家园。人类建造和发射了“领航者号”国际空间站，为地球提供预警、领航、通讯服务。

2075年，为利用引力弹弓效应，地球航行到木星附近。航天员刘培强的儿子刘启带着妹妹韩朵朵从北京地下城来到地表，用外公韩子昂的车卡偷开运载车，被发现并被关押于济宁派出所。韩子昂赶到并行贿看守未果，被一同关押。

此时，木星引力突然增大，地球地壳变动，五千余座行星发动机停机，地球失去足够的推力而逐渐坠入木星，将因进入木星的刚体洛希极限而解体。联合政府紧急动员救援部队抢修故障发动机，刘启、韩朵朵、韩子昂和狱友Tim四人从倒塌的派出所逃出，他们驾驶的运载车被CN171-11救援队征用，前去救援杭州一号行星发动机。经过已完全冰封上海地面裂缝时运输车队被地壳变动导致的冰层塌方压毁，其后在徒步运送火石的过程中多名救援队员牺牲，与小队失散的韩子昂也因防护服破损导致氧气泄漏及失温死亡。之后刘启、韩朵朵、Tim因不满王磊过度着重任务而离开救援队，随后找到另外一台因大气层稀薄化导致飞机坠毁、救援队全体失踪但车况良好的火石运载车以及技术员李一一，在后者极力争辩下三人决定执行该救援队既定的救援苏拉威西三号转向发动机的任务，前往苏拉威西。而王磊小队得知杭州一号行星发动机损坏且杭州4号行星发动机的地下城被岩浆毁灭且火石损耗殆尽导致无处可去之下亦加入了刘启等人。即将到达苏拉威西时，他们得知苏拉威西三号转向发动机已被其他救援队重启。“领航者号”国际空间站人工智能随后以联合政府名义向全球广播：大部分发动机已经修复，但不足以将地球推离木星，地球将在七天后解体。广播后不论地下世界和救援部队顿时分崩离析，无处可去的刘启想到可以点燃混有木星原有的氢气和从地球吸引而来的氧气的木星大气，从而制造足够的冲击波推开地球。

“领航者号”国际空间站上的刘培强即将进入休眠时与刘启失联。刘培强强行打开休眠舱，发现空间站正在远离木星，刘培强说服被MOSS唤醒来阻止他的俄罗斯航天员马卡洛夫，他们经空间站外通过太空行走前往空间站主控室，在途中马卡洛夫因航天员头盔被MOSS击碎而死。刘培强在主控室得知，木星引力引力激增发生时，MOSS在三号紧急预案启动后的0.42秒后即推算得出“流浪地球计划”失败兼且救援行动和点燃木星方案无用，而基于此推算之下自行授权、启动携带人类文明记录逃离的“火种计划”。地面上的刘启等人决定修改发动机程序，用苏拉威西三号转向发动机点燃木星大气，刘培强说服联合政府为王磊小队打开全球广播呼唤支持，并共享了点燃木星方案，随后还在撤离当中的救援部队顿时回到岗位全力协助。苏拉威西三号发动机、新加坡一号发动机及雅加达四号发动机，三座行星发动机实行了点燃木星方案，但它们的喷射流距木星大气仍有五千多公里而无法点燃。刘培强向联合政府申请牺牲空间站以换取其燃料在木星地球夹缝当中爆炸去补足那五千公里的引爆距离，MOSS随即屏蔽空间站通讯。刘培强关闭消防系统并以马卡洛夫送给他的伏特加烧毁MOSS的核心节点让其失效，以夺得空间站控制权，并释放空间站的休眠仓，经联合政府同意，刘培强手动驾驶空间站进入喷射流。空间站的爆炸点燃了木星大气，地球被推离木星。

三年后，刘启成长为一名运载车初阶驾驶员，韩朵朵和李一一也成为了运载车车组成员，而他前往地表经过的北京地下城也从之前的木星引力危机当中恢复过来，而地球则继续前往新家园的旅途。
`})]})]})]})}export{q as default};
