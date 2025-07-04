import{y as o,B as e,C as K,E as G,H as U,F,G as W,I as Q}from"./vendor-react-DWgs7P1Q.js";import{S as A,I as M,F as N,B as R}from"./vendor-antd-CSRLxrmE.js";import{R as q,a as H,b as X,c as Z}from"./vendor-antd-icons-CI5mvRFz.js";import"./vendor-react-dom-DIVDlCre.js";import"./@vendor-emotion-B8A_lSe8.js";const ee=({content:t,onChange:y,readOnly:a,id:v})=>{const[s,d]=o.useState(t.content);return o.useEffect(()=>{d(t.content)},[t.content]),o.useEffect(()=>{const i=setTimeout(()=>{t.content!==s&&y?.({...t,content:s})},300);return()=>clearTimeout(i)},[s,y,t]),e.jsx("div",{className:"paragraph-block",id:v,children:a?e.jsx("p",{children:t.content.split(`
`).map((i,x,u)=>e.jsxs(e.Fragment,{children:[i,x<u.length-1&&e.jsx("br",{})]}))}):e.jsx(A.Compact,{style:{width:"100%"},children:e.jsx(M.TextArea,{value:s,onChange:i=>d(i.target.value),variant:"filled",autoSize:{minRows:2,maxRows:1/0}})})})},O={id:"paragraph-block",type:"paragraph",component:ee,defaultContent:{id:`paragraph_${Date.now()}_${Math.random()}`,order:0,type:"paragraph",content:"",required:!1},label:"输入框",icon:e.jsx(e.Fragment,{children:"输入框图标"})},te=({content:t,onChange:y,readOnly:a,id:v})=>{const[s,d]=o.useState(t.content);return o.useEffect(()=>{d(t.content)},[t.content]),o.useEffect(()=>{const i=setTimeout(()=>{t.content!==s&&y?.({...t,content:s})},300);return()=>clearTimeout(i)},[s,y,t]),e.jsx("div",{className:"title-block",id:v,children:a?e.jsx("h1",{children:t.content}):e.jsx(M,{type:"text",className:"title-input",value:s,variant:"filled",onChange:i=>d(i.target.value),placeholder:"输入标题内容..."})})},z={id:"title-block",type:"title",component:te,defaultContent:{id:`title_${Date.now()}_${Math.random()}`,order:0,type:"title",content:"默认标题",required:!0},label:"标题",icon:e.jsx(e.Fragment,{children:"标题图标"})},I=Array.from({length:4},()=>Array.from({length:3},()=>({content:[],rowSpan:1,colSpan:1})));function L(t){if(!t)return I;if(Array.isArray(t))return t;if(typeof t=="string")try{const y=JSON.parse(t);if(Array.isArray(y))return y}catch{return I}return I}const ne=({content:t,onChange:y,readOnly:a,id:v})=>{const[s,d]=o.useState(L(t.content));o.useEffect(()=>{d(L(t.content))},[t.content]),o.useEffect(()=>{const h=setTimeout(()=>{JSON.stringify(t.content)!==JSON.stringify(s)&&y?.({...t,content:JSON.stringify(s)})},300);return()=>clearTimeout(h)},[s,y,t]);const i=(h,l,c,m)=>{d(f=>f.map((C,$)=>C.map((j,b)=>{if($===h&&b===l&&j){const B=j.content.map((_,n)=>n===c?{..._,value:m}:_);return{...j,content:B}}return j})))},x=h=>{d(l=>l.length>1?l.filter((c,m)=>m!==h):l)},u=h=>{d(l=>l.map(c=>[...c.slice(0,h+1),{content:[],rowSpan:1,colSpan:1},...c.slice(h+1)]))},E=h=>{d(l=>l[0].length>1?l.map(c=>c.filter((m,f)=>f!==h)):l)},S=o.useRef([]);return e.jsxs("div",{className:"table-block",id:v,style:{position:"relative"},children:[e.jsx("style",{children:`
          .table-block .cell-action {
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }
          .table-block:hover .cell-action {
            opacity: 1;
            pointer-events: auto;
          }
          .table-block .table-ops-col,
          .table-block .table-ops-row {
            opacity: 0;
            transition: opacity 0.2s;
            pointer-events: none;
          }
          .table-block:hover .table-ops-col,
          .table-block:hover .table-ops-row {
            opacity: 1;
            pointer-events: auto;
          }
        `}),e.jsx("div",{style:{position:"relative",display:"inline-block",width:"100%"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%"},children:[e.jsx("thead",{children:!a&&Array.isArray(s[0])&&e.jsxs("tr",{children:[s[0].map((h,l)=>e.jsx("th",{style:{padding:0,border:"none",background:"transparent"},children:e.jsxs("div",{className:"table-ops-col",style:{display:"flex",justifyContent:"end"},children:[e.jsx(q,{style:{color:"#0064ff",fontSize:16,marginRight:4,cursor:"pointer"},onClick:()=>u(l)}),s[0].length>1&&e.jsx(H,{style:{color:"#0064ff",fontSize:16,cursor:"pointer"},onClick:()=>E(l)})]})},l)),e.jsx("th",{style:{border:"none",background:"transparent"}})]})}),e.jsx("tbody",{children:Array.isArray(s)&&s.map((h,l)=>e.jsxs("tr",{ref:c=>{S.current[l]=c},style:{position:"relative"},children:[Array.isArray(h)&&h.map((c,m)=>c?e.jsx("td",{rowSpan:c.rowSpan??1,colSpan:c.colSpan??1,style:{border:"1px solid #E5E5E5",padding:4,minWidth:80,verticalAlign:"top",minHeight:40,height:40},children:e.jsx("div",{children:c.content.length===0?e.jsx(M.TextArea,{autoSize:{minRows:1,maxRows:1/0},value:"",readOnly:a,variant:"borderless",style:{resize:"none",width:"100%",boxSizing:"border-box",padding:0,minHeight:40,height:40},onChange:a?void 0:f=>d(C=>C.map(($,j)=>$.map((b,B)=>j===l&&B===m&&b?{...b,content:[{type:"input",value:f.target.value}]}:b)))}):c.content.map((f,C)=>e.jsxs("div",{style:{marginBottom:4},children:[f.type==="label"&&e.jsx("div",{style:{fontSize:12,color:"#888",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:f.value}),f.type==="input"&&e.jsx(M.TextArea,{autoSize:{minRows:1,maxRows:1/0},value:f.value,readOnly:a,variant:"borderless",style:{resize:"none",width:"100%",boxSizing:"border-box",padding:0,minHeight:40,height:40},onChange:a?void 0:$=>i(l,m,C,$.target.value)})]},C))})},m):null),!a&&e.jsx("td",{style:{position:"relative",padding:0,border:"none"},children:e.jsxs("div",{className:"table-ops-row",style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"end",height:"100%"},children:[e.jsx(q,{style:{color:"#0064ff",fontSize:16,marginBottom:4,cursor:"pointer"},onClick:()=>{d(c=>{const m=c[0]?c[0].map(()=>({content:[],rowSpan:1,colSpan:1})):[{content:[],rowSpan:1,colSpan:1}];return[...c.slice(0,l+1),m,...c.slice(l+1)]})}}),s.length>1&&e.jsx(H,{style:{color:"#0064ff",fontSize:16,cursor:"pointer"},onClick:()=>x(l)})]})})]},l))})]})})]})},J={id:"table-block",type:"table",component:ne,defaultContent:{id:`table_${Date.now()}_${Math.random()}`,order:0,type:"table",content:"",required:!1},label:"表格",icon:e.jsx(e.Fragment,{children:"表格图标"})},V=[{id:`title_${Date.now()}_${Math.random()}`,order:0,type:"title",content:"默认标题",required:!0}],P="BLOCK",re=({id:t,index:y,moveBlock:a,children:v,canDrag:s,canDelete:d,onDelete:i})=>{const x=F.useRef(null),u=F.useRef(null),[E,S]=F.useState(!1),[{isOver:h},l]=W({accept:P,hover(C,$){if(!x.current)return;const j=C.index,b=y;if(j===b)return;const B=x.current.getBoundingClientRect(),_=$.getClientOffset();if(!_)return;const n=(B.bottom-B.top)/2,r=_.y-B.top;j<b&&r<n||j>b&&r>n||(a(j,b),C.index=b)},collect:C=>({isOver:C.isOver({shallow:!0})})}),[{isDragging:c},m]=Q({type:P,item:{id:t,index:y},canDrag:s,collect:C=>({isDragging:C.isDragging()})});m(u),l(x);const f=E||h||c;return e.jsxs("div",{ref:x,className:["flex items-center mb-2 rounded px-2 py-2 transition-all",f?"bg-gray-100":"",h?"border border-blue-400":"border border-transparent",c?"opacity-50":"opacity-100"].join(" "),onMouseEnter:()=>S(!0),onMouseLeave:()=>S(!1),children:[e.jsx("span",{ref:u,className:"mr-2 text-gray-400 text-lg flex items-center justify-center",style:{width:24,height:24,cursor:s&&f?"grab":"default",opacity:f&&s?1:0,transition:"opacity 0.2s"},title:"拖拽排序",children:f&&s?e.jsx(X,{}):null}),e.jsx("div",{className:"flex-1 flex justify-center py-2",children:e.jsx("div",{className:"max-w-[800px] w-full",children:v})}),e.jsx("span",{className:"ml-2 text-red-500 cursor-pointer flex items-center justify-center",style:{width:24,height:24,opacity:f&&d?1:0,transition:"opacity 0.2s",pointerEvents:f&&d?"auto":"none"},onClick:f&&d?i:void 0,title:"删除",children:f&&d?e.jsx(Z,{}):null})]})},oe=o.forwardRef((t,y)=>{const[a]=N.useForm(),[v,s]=o.useState(t.readOnly||!1),[d]=o.useState((t.content||V).map(n=>({...n,id:n.id||`${n.type}_${Date.now()}_${Math.random()}`}))),[i,x]=o.useState((t.content||V).map(n=>({...n,id:n.id||`${n.type}_${Date.now()}_${Math.random()}`}))),[u,E]=o.useState([]),[S,h]=o.useState(new Map),l=o.useCallback((n,r)=>{x(g=>g.map(w=>w.id===n?{...w,...r}:w)),t.onChange&&t.onChange(JSON.stringify(i))},[t,i]),c=o.useCallback(n=>()=>{x(r=>r.filter(g=>g.id!==n))},[]),m=o.useCallback(n=>{E(r=>r.some(g=>g.type===n.type)?(console.warn(`Block type ${n.type} is already registered.`),r):[...r,n]),h(r=>new Map(r).set(n.type,n))},[]),f=o.useCallback(()=>i||[],[i]),C=o.useCallback(()=>{const n=d?.map(p=>JSON.stringify(p)),r=i?.map(p=>JSON.stringify(p));return K(n,r).map(p=>({...p,value:p.value.map(k=>JSON.parse(k))||[]})).filter(p=>p.added||p.removed).map(p=>{const k=Array.isArray(p.value)&&p.value.length>0?p.value[0].order:void 0;return{added:p.added||!1,removed:p.removed||!1,originalContent:d.find(D=>D.order===k),newContent:p.value}})},[i,d]),$=o.useCallback(()=>u||[],[u]),j=o.useCallback(n=>r=>{a.setFieldsValue({[`block-${r.order}`]:r.content}),l(n,r)},[a,l]),b=o.useCallback(n=>{const r=S.get(n);if(!r){console.warn(`Block type ${n} is not registered.`);return}x(g=>{const w=g.length||0,p={...r.defaultContent,order:w,type:r.type,content:r.defaultContent.content||"",id:`${r.type}_${Date.now()}_${Math.random()}`},k=[...g,p],D={};return k.forEach(T=>{D[`block-${T.order}`]=T.content}),a.setFieldsValue(D),k})},[S,a]),B=o.useCallback(()=>a.validateFields(),[a]);o.useEffect(()=>{h(new Map(u?.map(n=>[n.type,n])||[]))},[u]),o.useEffect(()=>{m({...O,defaultContent:{...O.defaultContent,id:O.defaultContent.id||`paragraph_${Date.now()}_${Math.random()}`}}),m({...z,draggable:!1,defaultContent:{...z.defaultContent,id:z.defaultContent.id||`title_${Date.now()}_${Math.random()}`}}),m({...J,defaultContent:{...J.defaultContent,id:J.defaultContent.id||`table_${Date.now()}_${Math.random()}`}})},[]),o.useEffect(()=>{s(t.readOnly||!1)},[t.readOnly]),o.useImperativeHandle(y,()=>({registerBlockType:m,getContent:f,setContent:n=>x(n.map(r=>({...r,id:r.id||`${r.type}_${Date.now()}_${Math.random()}`}))),getDiff:C,getBlockTypes:$,addContent:b,validate:B,getFormValues:()=>a?.validateFields().catch(n=>{a?.scrollToField(`block-${n.blockId}`)})})),o.useEffect(()=>{const n={};(t.content||V).forEach(r=>{n[`block-${r.order}`]=r.content}),a.setFieldsValue(n)},[a,t.content]);const _=o.useCallback((n,r)=>{x(g=>{const w=[...g],[p]=w.splice(n,1);w.splice(r,0,p);const k=w.map((T,Y)=>({...T,order:Y})),D={};return k.forEach(T=>{D[`block-${T.order}`]=T.content}),a.setFieldsValue(D),k})},[a]);return e.jsxs("div",{className:"block-editor",children:[JSON.stringify(i,null,2),e.jsx(G,{backend:U,children:e.jsx(N,{form:a,scrollToFirstError:!0,children:i?.map((n,r)=>{if(!S.has(n.type))return console.warn(`Block type ${n.type} not registered`),null;const g=S.get(n.type),w=g?.component||(()=>e.jsx(e.Fragment,{})),p=!v&&g?.draggable!==!1,k=!v&&g?.canDelete!==!1&&i.length>1;return e.jsx(re,{id:n.id,index:r,moveBlock:_,canDrag:p,canDelete:k,onDelete:c(n.id),children:e.jsx(N.Item,{name:`block-${n.order}`,rules:[{required:n.required,message:`${g?.label||"该块"}内容不能为空`}],noStyle:!0,children:e.jsx(w,{id:n.id,content:n,required:n.required,readOnly:v,onDelete:()=>c(n.id),canDelete:k,onChange:j(n.id)})})},n.id)})})})]})}),de=()=>{const t=o.useRef(null),[y,a]=F.useState(`
[
  {
    "order": 2,
    "type": "table",
    "content": [
      [
        {
          "content": [
            {
              "type": "input",
              "value": "香港联交所"
            }
          ],
          "rowSpan": 1,
          "colSpan": 4
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "方面"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "强度"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "位置"
            }
          ],
          "rowSpan": 1,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "管治架构"
            }
          ],
          "rowSpan": 18,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "内容"
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 1,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "环境"
            }
          ],
          "rowSpan": 4,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 4,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "策略"
            }
          ],
          "rowSpan": 6,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 6,
          "colSpan": 2
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": "管治"
            }
          ],
          "rowSpan": 7,
          "colSpan": 1
        }
      ],
      [
        {
          "content": [
            {
              "type": "input",
              "value": null
            }
          ],
          "rowSpan": 7,
          "colSpan": 2
        }
      ]
    ],
    "required": true
  }
]

    `),[v,s]=F.useState(!1),[d,i]=F.useState([]);o.useEffect(()=>{i(t?.current?.getBlockTypes?.()??[])},[t]);const x=()=>{try{const E=JSON.parse(y).map(S=>({id:S.id||`${S.type}_${Date.now()}_${Math.random()}`,...S}));t?.current?.setContent&&t?.current?.setContent(E)}catch(u){console.error("设置内容失败:",u)}};return e.jsx(e.Fragment,{children:e.jsxs(A,{direction:"vertical",style:{width:"100%"},children:[e.jsxs(A,{direction:"vertical",style:{width:"100%"},children:[e.jsx(M.TextArea,{style:{width:"100%"},placeholder:"BlockEditor 组件",autoSize:{minRows:2,maxRows:6},value:y,onChange:u=>{a(u.target.value)}}),e.jsx(R,{onClick:x,children:"导入数据"})]}),e.jsxs(A,{children:[e.jsx(R,{onClick:()=>{s(!v)},children:v?"编辑":"只读"}),e.jsx(R,{onClick:()=>{console.log(t?.current?.getContent&&t?.current?.getContent())},children:"获取内容"}),e.jsx(R,{onClick:()=>{console.log(t?.current?.getDiff&&t?.current?.getDiff())},children:"获取差异"}),e.jsx(R,{onClick:()=>{i(t?.current?.getBlockTypes?.()??[])},children:"获取块"}),e.jsx(R,{onClick:()=>{t?.current?.validate&&t?.current?.validate().then(u=>{console.log("校验结果:",u)})},children:"是否通过校验"}),e.jsx(R,{onClick:()=>{t?.current?.getFormValues&&console.log("Form Values:",t?.current?.getFormValues())},children:"从 Form 获取数据"})]}),e.jsx(A,{children:d?.map(u=>e.jsxs(R,{onClick:()=>{t?.current?.addContent&&t?.current?.addContent(u.type)},children:["添加 ",u.label]},u.id??u.type))}),e.jsx(oe,{ref:t,readOnly:v})]})})};export{de as default};
