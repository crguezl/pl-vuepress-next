"use strict";(self.webpackChunkpl_vuepress_next=self.webpackChunkpl_vuepress_next||[]).push([[146,502],{8502:(e,a,s)=>{s.r(a),s.d(a,{default:()=>f});var r=s(6252),t=s(3577);const u={class:"ui card"},n=["href"],l=["src"],i={class:"content"},c=["href"],o={class:"meta"},d={class:"date"},h={class:"description"},p={class:"extra content"},m=["href"],_=(e=>((0,r.dD)("data-v-b29700c8"),e=e(),(0,r.Cn)(),e))((()=>(0,r._)("i",{class:"user icon"},null,-1)));var g=s(9669),v=s.n(g);const b={props:{username:{type:String,required:!0}},computed:{githubYear(){let e=this.user.created_at;return e?e.replace(/^(\d+).*/,"$1"):""}},data:()=>({user:{}}),created(){v()({url:`https://api.github.com/users/${this.username}`,method:"GET"}).then((e=>{console.log(e),this.user=e.data}))}},f=(0,s(3744).Z)(b,[["render",function(e,a,s,g,v,b){return(0,r.wg)(),(0,r.iD)("div",u,[(0,r._)("a",{href:`https://github.com/${s.username}`,class:"image"},[(0,r._)("img",{src:v.user.avatar_url},null,8,l)],8,n),(0,r._)("div",i,[(0,r._)("a",{class:"header",href:`https://github.com/${s.username}`},(0,t.zw)(v.user.name),9,c),(0,r._)("div",o,[(0,r._)("span",d,"Joined in "+(0,t.zw)(b.githubYear),1)]),(0,r._)("div",h," Bio: "+(0,t.zw)(v.user.bio),1)]),(0,r._)("div",p,[(0,r._)("a",{href:`https://github.com/${s.username}?tab=followers`},[_,(0,r.Uk)(" "+(0,t.zw)(v.user.followers)+" Followers ",1)],8,m)])])}],["__scopeId","data-v-b29700c8"]])},8146:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var r=s(6252);const t={id:"app",class:"ui container"},u={class:"ui link cards"};var n=s(8502);const l={data:()=>({users:["crguezl","casiano","alu0101102726","Pmolmar","PaulaExposito","alu0101228587","alu0101227610","alu0101232812","lauramanzini","TeresaUll","ddialar","alu0100898293","mstoisor"],components:{githubCard:n.default}})},i=(0,s(3744).Z)(l,[["render",function(e,a,s,n,l,i){const c=(0,r.up)("github-card");return(0,r.wg)(),(0,r.iD)("div",t,[(0,r._)("div",u,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.users,(e=>((0,r.wg)(),(0,r.j4)(c,{key:e,username:e},null,8,["username"])))),128))])])}],["__scopeId","data-v-09b73810"]])}}]);