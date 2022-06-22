"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7285],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,g=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98448:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},37358:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(87462),r=a(67294),l=a(51048),i=a(22713);var o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(12613),u=a(86010),d="tabItem_1uMI";function p(e){var t,a,n,l=e.lazy,i=e.block,p=e.defaultValue,m=e.values,c=e.groupId,g=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),h=(0,s.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==N&&!b.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=o(),y=f.tabGroupChoices,v=f.setTabGroupChoices,T=(0,r.useState)(N),w=T[0],C=T[1],D=[],S=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=c){var _=y[c];null!=_&&_!==w&&b.some((function(e){return e.value===_}))&&C(_)}var E=function(e){var t=e.currentTarget,a=D.indexOf(t),n=b[a].value;n!==w&&(S(t),C(n),null!=c&&v(c,n))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=D.indexOf(e.currentTarget)+1;a=D[n]||D[0];break;case"ArrowLeft":var r=D.indexOf(e.currentTarget)-1;a=D[r]||D[D.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},b.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,u.Z)("tabs__item",d,{"tabs__item--active":w===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:P,onFocus:E,onClick:E},null!=a?a:t)}))),l?(0,r.cloneElement)(k.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function m(e){var t=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(t)},e))}},22713:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},11589:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return g}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=a(37358),o=a(98448),s=["components"],u={title:"Tableau",sidebar_label:"Tableau",slug:"/generated/ingestion/sources/tableau",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/tableau.md"},d="Tableau",p={unversionedId:"docs/generated/ingestion/sources/tableau",id:"docs/generated/ingestion/sources/tableau",isDocsHomePage:!1,title:"Tableau",description:"Module tableau",source:"@site/genDocs/docs/generated/ingestion/sources/tableau.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/tableau",permalink:"/docs/generated/ingestion/sources/tableau",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/tableau.md",tags:[],version:"current",frontMatter:{title:"Tableau",sidebar_label:"Tableau",slug:"/generated/ingestion/sources/tableau",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/tableau.md"},sidebar:"overviewSidebar",previous:{title:"Superset",permalink:"/docs/generated/ingestion/sources/superset"},next:{title:"Trino",permalink:"/docs/generated/ingestion/sources/trino"}},m=[{value:"Module <code>tableau</code>",id:"module-tableau",children:[{value:"Important Capabilities",id:"important-capabilities",children:[],level:3},{value:"Install the Plugin",id:"install-the-plugin",children:[],level:3},{value:"Quickstart Recipe",id:"quickstart-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Prerequisites",id:"prerequisites",children:[],level:3}],level:2},{value:"Integration Details",id:"integration-details",children:[{value:"Concept Mapping",id:"concept-mapping",children:[{value:"Workbook",id:"workbook",children:[],level:4},{value:"Dashboard",id:"dashboard",children:[],level:4},{value:"Sheet",id:"sheet",children:[],level:4},{value:"Embedded Data Source",id:"embedded-data-source",children:[],level:4},{value:"Published Data Source",id:"published-data-source",children:[],level:4},{value:"Custom SQL Data Source",id:"custom-sql-data-source",children:[],level:4},{value:"Lineage",id:"lineage",children:[],level:4},{value:"Caveats",id:"caveats",children:[],level:4}],level:3}],level:2},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Why are only some workbooks/custom SQLs/published datasources ingested from the specified project?",id:"why-are-only-some-workbookscustom-sqlspublished-datasources-ingested-from-the-specified-project",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],c={toc:m};function g(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tableau"},"Tableau"),(0,l.kt)("h2",{id:"module-tableau"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"tableau")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-incubating-blue",alt:"Incubating"})),(0,l.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Capability"),(0,l.kt)("th",{parentName:"tr",align:null},"Status"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"},"Data Profiling")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Usage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Descriptions"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#removal-of-stale-tables-and-views"},"Detect Deleted Entities")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/domains"},"Domains")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires transformer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Ownership"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires recipe configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract Tags"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Requires recipe configuration")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Partition Support"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Not applicable to source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/platform-instances"},"Platform Instance")),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:null},"Not applicable to source")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,l.kt)("h3",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[tableau]'\n")),(0,l.kt)("h3",{id:"quickstart-recipe"},"Quickstart Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: tableau\n  config:\n    # Coordinates\n    connect_uri: https://prod-ca-a.online.tableau.com\n    site: acryl\n    projects: ["default", "Project 2"]\n\n    # Credentials\n    username: "${TABLEAU_USER}"\n    password: "${TABLEAU_PASSWORD}"\n\n    # Options\n    ingest_tags: True\n    ingest_owner: True\n    default_schema_map:\n      mydatabase: public\n      anotherdatabase: anotherschema\n\nsink:\n  # sink configs\n')),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect_uri"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau host URL."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau username, must be set if authenticating using username/password."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau password, must be set if authenticating using username/password."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token_name"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau token name, must be set if authenticating using a personal access token."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"token_value"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau token value, must be set if authenticating using a personal access token."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"site"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Tableau Site. Always required for Tableau Online. Use emptystring  to connect with Default site on Tableau Server."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"projects"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Array of string"),(0,l.kt)("td",{parentName:"tr",align:null},"List of projects"),(0,l.kt)("td",{parentName:"tr",align:null},"['default']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"default_schema_map"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null},"Default schema to use when schema is not found."),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingest_tags"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingest Tags from source. This will override Tags entered from UI"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingest_owner"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingest Owner from source. This will override Owner info entered from UI"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ingest_tables_external"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Ingest details for tables external to (not embedded in) tableau as entities."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workbooks_page_size"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"@deprecated(use page_size instead) Number of workbooks to query at a time using Tableau api."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page_size"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of metadata objects (e.g. CustomSQLTable, PublishedDatasource, etc) to query at a time using Tableau api."),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs."),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")))))),(0,l.kt)(o.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "TableauConfig",\n  "type": "object",\n  "properties": {\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Tableau host URL.",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Tableau username, must be set if authenticating using username/password.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Tableau password, must be set if authenticating using username/password.",\n      "type": "string"\n    },\n    "token_name": {\n      "title": "Token Name",\n      "description": "Tableau token name, must be set if authenticating using a personal access token.",\n      "type": "string"\n    },\n    "token_value": {\n      "title": "Token Value",\n      "description": "Tableau token value, must be set if authenticating using a personal access token.",\n      "type": "string"\n    },\n    "site": {\n      "title": "Site",\n      "description": "Tableau Site. Always required for Tableau Online. Use emptystring  to connect with Default site on Tableau Server.",\n      "default": "",\n      "type": "string"\n    },\n    "projects": {\n      "title": "Projects",\n      "description": "List of projects",\n      "default": [\n        "default"\n      ],\n      "type": "array",\n      "items": {\n        "type": "string"\n      }\n    },\n    "default_schema_map": {\n      "title": "Default Schema Map",\n      "description": "Default schema to use when schema is not found.",\n      "default": {},\n      "type": "object"\n    },\n    "ingest_tags": {\n      "title": "Ingest Tags",\n      "description": "Ingest Tags from source. This will override Tags entered from UI",\n      "default": false,\n      "type": "boolean"\n    },\n    "ingest_owner": {\n      "title": "Ingest Owner",\n      "description": "Ingest Owner from source. This will override Owner info entered from UI",\n      "default": false,\n      "type": "boolean"\n    },\n    "ingest_tables_external": {\n      "title": "Ingest Tables External",\n      "description": "Ingest details for tables external to (not embedded in) tableau as entities.",\n      "default": false,\n      "type": "boolean"\n    },\n    "workbooks_page_size": {\n      "title": "Workbooks Page Size",\n      "description": "@deprecated(use page_size instead) Number of workbooks to query at a time using Tableau api.",\n      "type": "integer"\n    },\n    "page_size": {\n      "title": "Page Size",\n      "description": "Number of metadata objects (e.g. CustomSQLTable, PublishedDatasource, etc) to query at a time using Tableau api.",\n      "default": 10,\n      "type": "integer"\n    },\n    "env": {\n      "title": "Env",\n      "description": "Environment to use in namespace when constructing URNs.",\n      "default": "PROD",\n      "type": "string"\n    }\n  },\n  "required": [\n    "connect_uri"\n  ],\n  "additionalProperties": false\n}\n')))),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"In order to ingest metadata from tableau, you will need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Python 3.6+"),(0,l.kt)("li",{parentName:"ul"},"Tableau Server Version 2021.1.10 and above. It may also work for older versions."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_start.html#enable-the-tableau-metadata-api-for-tableau-server"},"Enable the Tableau Metadata API")," for Tableau Server, if its not already enabled."),(0,l.kt)("li",{parentName:"ul"},"Tableau Credentials (Username/Password or ",(0,l.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/pro/desktop/en-us/useracct.htm#create-and-revoke-personal-access-tokens"},"Personal Access Token"),") ")),(0,l.kt)("h2",{id:"integration-details"},"Integration Details"),(0,l.kt)("p",null,"This plugin extracts Sheets, Dashboards, Embedded and Published Data sources metadata within Workbooks in a given project\non a Tableau site. This plugin is in beta and has only been tested on PostgreSQL database and sample workbooks\non Tableau online. Tableau's GraphQL interface is used to extract metadata information. Queries used to extract metadata are located\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata-ingestion/src/datahub/ingestion/source/tableau_common.py")),(0,l.kt)("h3",{id:"concept-mapping"},"Concept Mapping"),(0,l.kt)("p",null,"This ingestion source maps the following Source System Concepts to DataHub Concepts:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Source Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"DataHub Concept"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'"Tableau"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataplatform"},"Data Platform")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Embedded DataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null},"SubType ",(0,l.kt)("inlineCode",{parentName:"td"},'"Embedded Data Source"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Published DataSource"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null},"SubType ",(0,l.kt)("inlineCode",{parentName:"td"},'"Published Data Source"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom SQL Table"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null},"SubTypes ",(0,l.kt)("inlineCode",{parentName:"td"},'"View"'),", ",(0,l.kt)("inlineCode",{parentName:"td"},'"Custom SQL"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Embedded or External Tables"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dataset"},"Dataset")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Sheet"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/chart"},"Chart")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/dashboard"},"Dashboard")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/corpuser"},"User (a.k.a CorpUser)")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Workbook"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/container"},"Container")),(0,l.kt)("td",{parentName:"tr",align:null},"SubType ",(0,l.kt)("inlineCode",{parentName:"td"},'"Workbook"'))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tag"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/docs/generated/metamodel/entities/tag"},"Tag")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Workbook"},"Workbook")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Dashboard"},"Dashboard")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Sheet"},"Sheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Embedded-Data-Source"},"Embedded Data source")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Published-Data-Source"},"Published Data source")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#Custom-SQL-Data-Source"},"Custom SQL Data source"))),(0,l.kt)("h4",{id:"workbook"},"Workbook"),(0,l.kt)("p",null,"Workbooks from Tableau are ingested as Container in datahub. ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  workbooksConnection(first: 10, offset: 0, filter: {projectNameWithin: ["default", "Project 2"]}) {\n    nodes {\n      id\n      name\n      luid\n      uri\n      projectName\n      owner {\n        username\n      }\n      description\n      uri\n      createdAt\n      updatedAt\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n')),(0,l.kt)("h4",{id:"dashboard"},"Dashboard"),(0,l.kt)("p",null,"Dashboards from Tableau are ingested as Dashboard in datahub. ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  workbooksConnection(first: 10, offset: 0, filter: {projectNameWithin: ["default", "Project 2"]}) {\n    nodes {\n      .....\n      dashboards {\n        id\n        name\n        path\n        createdAt\n        updatedAt\n        sheets {\n          id\n          name\n        }\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n\n')),(0,l.kt)("h4",{id:"sheet"},"Sheet"),(0,l.kt)("p",null,"Sheets from Tableau are ingested as charts in datahub. ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  workbooksConnection(first: 10, offset: 0, filter: {projectNameWithin: ["default"]}) {\n    .....\n      sheets {\n        id\n        name\n        path\n        createdAt\n        updatedAt\n        tags {\n          name\n        }\n        containedInDashboards {\n          name\n          path\n        }\n        upstreamDatasources {\n          id\n          name\n        }\n        datasourceFields {\n          __typename\n          id\n          name\n          description\n          upstreamColumns {\n            name\n          }\n          ... on ColumnField {\n            dataCategory\n            role\n            dataType\n            aggregation\n          }\n          ... on CalculatedField {\n            role\n            dataType\n            aggregation\n            formula\n          }\n          ... on GroupField {\n            role\n            dataType\n          }\n          ... on DatasourceField {\n            remoteField {\n              __typename\n              id\n              name\n              description\n              folderName\n              ... on ColumnField {\n                dataCategory\n                role\n                dataType\n                aggregation\n              }\n              ... on CalculatedField {\n                role\n                dataType\n                aggregation\n                formula\n              }\n              ... on GroupField {\n                role\n                dataType\n              }\n            }\n          }\n        }\n      }\n    }\n     .....\n  }\n}\n')),(0,l.kt)("h4",{id:"embedded-data-source"},"Embedded Data Source"),(0,l.kt)("p",null,"Embedded Data source from Tableau is ingested as a Dataset in datahub."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  workbooksConnection(first: 10, offset: 0, filter: {projectNameWithin: ["default"]}) {\n    nodes {\n      ....\n      embeddedDatasources {\n        __typename\n        id\n        name\n        hasExtracts\n        extractLastRefreshTime\n        extractLastIncrementalUpdateTime\n        extractLastUpdateTime\n        upstreamDatabases {\n          id\n          name\n          connectionType\n          isEmbedded\n        }\n        upstreamTables {\n          name\n          schema\n          columns {\n            name\n            remoteType\n          }\n        }\n        fields {\n          __typename\n          id\n          name\n          description\n          isHidden\n          folderName\n          ... on ColumnField {\n            dataCategory\n            role\n            dataType\n            defaultFormat\n            aggregation\n            columns {\n              table {\n                ... on CustomSQLTable {\n                  id\n                  name\n                }\n              }\n            }\n          }\n          ... on CalculatedField {\n            role\n            dataType\n            defaultFormat\n            aggregation\n            formula\n          }\n          ... on GroupField {\n            role\n            dataType\n          }\n        }\n        upstreamDatasources {\n          id\n          name\n        }\n        workbook {\n          name\n          projectName\n        }\n      }\n    }\n    ....\n  }\n}\n')),(0,l.kt)("h4",{id:"published-data-source"},"Published Data Source"),(0,l.kt)("p",null,"Published Data source from Tableau is ingested as a Dataset in datahub."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  publishedDatasourcesConnection(first: 10, offset: 0, filter: {idWithin: ["00cce29f-b561-bb41-3557-8e19660bb5dd", "618c87db-5959-338b-bcc7-6f5f4cc0b6c6"]}) {\n    nodes {\n      __typename\n      id\n      name\n      hasExtracts\n      extractLastRefreshTime\n      extractLastIncrementalUpdateTime\n      extractLastUpdateTime\n      downstreamSheets {\n        id\n        name\n      }\n      upstreamTables {\n        name\n        schema\n        fullName\n        connectionType\n        description\n        contact {\n          name\n        }\n      }\n      fields {\n        __typename\n        id\n        name\n        description\n        isHidden\n        folderName\n        ... on ColumnField {\n          dataCategory\n          role\n          dataType\n          defaultFormat\n          aggregation\n          columns {\n            table {\n              ... on CustomSQLTable {\n                id\n                name\n              }\n            }\n          }\n        }\n        ... on CalculatedField {\n          role\n          dataType\n          defaultFormat\n          aggregation\n          formula\n        }\n        ... on GroupField {\n          role\n          dataType\n        }\n      }\n      owner {\n        username\n      }\n      description\n      uri\n      projectName\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n  }\n}\n')),(0,l.kt)("h4",{id:"custom-sql-data-source"},"Custom SQL Data Source"),(0,l.kt)("p",null,"For custom sql data sources, the query is viewable in UI under View Definition tab. ",(0,l.kt)("br",null)),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GraphQL query ",(0,l.kt)("br",null))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  customSQLTablesConnection(first: 10, offset: 0, filter: {idWithin: ["22b0b4c3-6b85-713d-a161-5a87fdd78f40"]}) {\n    nodes {\n      id\n      name\n      query\n      columns {\n        id\n        name\n        remoteType\n        description\n        referencedByFields {\n          datasource {\n            id\n            name\n            upstreamDatabases {\n              id\n              name\n            }\n            upstreamTables {\n              id\n              name\n              schema\n              connectionType\n              columns {\n                id\n              }\n            }\n            ... on PublishedDatasource {\n              projectName\n            }\n            ... on EmbeddedDatasource {\n              workbook {\n                name\n                projectName\n              }\n            }\n          }\n        }\n      }\n      tables {\n        id\n        name\n        schema\n        connectionType\n      }\n    }\n  }\n}\n')),(0,l.kt)("h4",{id:"lineage"},"Lineage"),(0,l.kt)("p",null,"Lineage is emitted as received from Tableau's metadata API for"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Sheets contained in Dashboard"),(0,l.kt)("li",{parentName:"ul"},"Embedded or Published datasources upstream to Sheet"),(0,l.kt)("li",{parentName:"ul"},"Published datasources upstream to Embedded datasource"),(0,l.kt)("li",{parentName:"ul"},"Tables upstream to Embedded or Published datasource"),(0,l.kt)("li",{parentName:"ul"},"Custom SQL datasources upstream to Embedded or Published datasource"),(0,l.kt)("li",{parentName:"ul"},"Tables upstream to Custom SQL datasource")),(0,l.kt)("h4",{id:"caveats"},"Caveats"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Tableau metadata API might return incorrect schema name for tables for some databases, leading to incorrect metadata in DataHub. This source attempts to extract correct schema from databaseTable's fully qualified name, wherever possible. Read ",(0,l.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_model.html#schema_attribute"},"Using the databaseTable object in query")," for caveats in using schema attribute.")),(0,l.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,l.kt)("h3",{id:"why-are-only-some-workbookscustom-sqlspublished-datasources-ingested-from-the-specified-project"},"Why are only some workbooks/custom SQLs/published datasources ingested from the specified project?"),(0,l.kt)("p",null,'This may happen when the Tableau API returns NODE_LIMIT_EXCEEDED error in response to metadata query and returns partial results with message "Showing partial results. , The request exceeded the \u2018n\u2019 node limit. Use pagination, additional filtering, or both in the query to adjust results." To resolve this, consider '),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"reducing the page size using the ",(0,l.kt)("inlineCode",{parentName:"li"},"page_size")," config param in datahub recipe (Defaults to 10)."),(0,l.kt)("li",{parentName:"ul"},"increasing tableau configuration ",(0,l.kt)("a",{parentName:"li",href:"https://help.tableau.com/current/server/en-us/cli_configuration-set_tsm.htm#metadata_nodelimit"},"metadata query node limit")," to higher value. ")),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.tableau.TableauSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/tableau.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Tableau, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);