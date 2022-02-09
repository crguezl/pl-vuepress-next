"use strict";(self.webpackChunkpl_vuepress_next=self.webpackChunkpl_vuepress_next||[]).push([[9],{576:(e,a,l)=>{l.r(a),l.d(a,{data:()=>r});const r={key:"v-afcb57fa",path:"/practicas/iaas.html",title:"IAAS",lang:"en-US",frontmatter:{title:"IAAS",published:!0,date:"2022/02/14 04",prev:"visual-studio-code",order:5,rubrica:["<code>SSH</code> configurada para trabajar sin password","<code>git</code> configurado para trabajar con GitHub","Aplicación Web Desplegada en iaas","Tutorial README.md bien presentado","El prompt de la shell muestra la rama actual","Ha instalado <code>nvm</code>"]},excerpt:"",headers:[{level:2,title:"Rúbrica",slug:"rubrica",children:[]}],git:{contributors:[{name:"Casiano Rodriguez-Leon",email:"crguezl@ull.edu.es",commits:1}]},filePathRelative:"practicas/iaas.md"}},262:(e,a,l)=>{l.r(a),l.d(a,{default:()=>fe});var r=l(6252);const n=(0,r._)("h1",{id:"descripcion-de-la-practica-iaas",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#descripcion-de-la-practica-iaas","aria-hidden":"true"},"#"),(0,r.Uk)(" Descripción de la Práctica iaas")],-1),t=(0,r.Uk)("Siguiendo las instrucciones en el "),i={href:"https://github.com/SYTW/iaas-ull-es",target:"_blank",rel:"noopener noreferrer"},o=(0,r.Uk)("repositorio SYTW/iaas-ull-es"),s=(0,r.Uk)(" despliegue un ejemplo como el que aparece en "),u={href:"https://github.com/crguezl/express-start",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("crguezl/express-start"),c=(0,r.Uk)(" en su máquina virtual del servicio "),d={href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"},m=(0,r.Uk)("iaas.ull.es"),_=(0,r.Uk)("."),b=(0,r.Uk)("Puede encontrar un vídeo del profesor introduciendo el "),h={href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("iaas.ull.es aquí"),k=(0,r.Uk)(". "),f={href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"},U=(0,r._)("img",{src:"http://i3.ytimg.com/vi/qKHgbV0lYbA/hqdefault.jpg",alt:"iaas.ull.es"},null,-1),v=(0,r._)("li",null,"El vídeo es de 2018 y varias de las apps usadas han cambiado de versión pero la esencia de la metodología es la misma",-1),W=(0,r.Uk)("Añada en el "),q=(0,r._)("code",null,"README.md",-1),x=(0,r.Uk)(" un pequeño tutorial de como usar y desplegar una aplicación web en "),S={href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"},j=(0,r.Uk)("iaas.ull.es"),w=(0,r.Uk)(". "),E=(0,r._)("ul",null,[(0,r._)("li",null,"Haga capturas de pantalla que muestren que su máquina esta bien configurada y funcionando")],-1),P=(0,r._)("li",null,"La IP dinámica de su máquina virtual no debería cambiar si no la apaga. Publique la URL de despliegue en su máquina",-1),I=(0,r.Uk)("Prepare la máquina para poder trabajar: "),A=(0,r._)("li",null,[(0,r._)("p",null,"Instale git si es necesario")],-1),R={href:"https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("Configura git"),z=(0,r.uE)('<p>Procure que la rama actual aparezca en el prompt de la terminal.</p><ul><li>Ejemplo para una bash. Pon en el fichero <code>~/.bash_profile</code> o <code>~/.bashrc</code> estas líneas:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>parse_git_branch() {\n  git branch 2&gt; /dev/null | sed -e &#39;/^[^*]/d&#39; -e &#39;s/* \\(.*\\)/ (\\1)/&#39;\n}\nexport PS1=&quot;\\u@\\h \\[\\033[32m\\]\\w\\[\\033[33m\\]\\$(parse_git_branch)\\[\\033[00m\\] $ &quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',3),H=(0,r.Uk)("También puede usar "),D={href:"https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh",target:"_blank",rel:"noopener noreferrer"},L=(0,r.Uk)("git prompt"),T=(0,r._)("li",null,[(0,r.Uk)("Puede añadir algo como esto a su PS1: "),(0,r._)("code",null,"PS1=\"\\$(git branch 2>/dev/null | sed -n 's/* \\(.*\\)/\\1 /p')$ \"")],-1),C=(0,r._)("li",null,[(0,r.Uk)("Recuerde que si su prompt es muy largo siempre puede acortarlo con "),(0,r._)("code",null,"PROMPT_DIRTRIM=1")],-1),Y={href:"https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases",target:"_blank",rel:"noopener noreferrer"},G=(0,r.Uk)("git aliases"),M={href:"https://github.com/cli/cli",target:"_blank",rel:"noopener noreferrer"},$=(0,r.Uk)("Instale GitHub CLI"),J=(0,r.Uk)(" y aprenda a usarla"),K={href:"https://cli.github.com/manual/",target:"_blank",rel:"noopener noreferrer"},N=(0,r.Uk)("manual"),O=(0,r.Uk)("Opcionalmente puede instalar "),V={href:"http://linuxbrew.sh/",target:"_blank",rel:"noopener noreferrer"},Z=(0,r.Uk)("linuxbrew"),B=(0,r.Uk)("Instale "),F={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},Q=(0,r.Uk)("nvm"),X=(0,r._)("li",null,[(0,r._)("p",null,"Instale nodeJS usando nvm")],-1),ee={href:"http://jshint.com/install/",target:"_blank",rel:"noopener noreferrer"},ae=(0,r.Uk)("jshint"),le=(0,r.Uk)(" y "),re={href:"https://coderwall.com/p/zfhquw/jshint-in-vim",target:"_blank",rel:"noopener noreferrer"},ne=(0,r.Uk)("jshint on vim"),te=(0,r.Uk)(" o JSLint o "),ie={href:"https://www.slant.co/topics/2411/~best-javascript-linting-tools",target:"_blank",rel:"noopener noreferrer"},oe=(0,r.Uk)("equivalente"),se=(0,r.Uk)("Instale "),ue={href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"},pe=(0,r.Uk)("NERDTree"),ce=(0,r.Uk)(" para vim"),de=(0,r._)("p",null,"Instale Express.js",-1),me={href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",target:"_blank",rel:"noopener noreferrer"},_e=(0,r.Uk)("Express Web Framework (Node.js/JavaScript)"),be=(0,r.Uk)(" (Mozilla)"),he=(0,r._)("h2",{id:"rubrica",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#rubrica","aria-hidden":"true"},"#"),(0,r.Uk)(" Rúbrica")],-1),ge=(0,r._)("p",null,"!!!include(all-labs.md)!!!",-1),ke={},fe=(0,l(3744).Z)(ke,[["render",function(e,a){const l=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,(0,r._)("ul",null,[(0,r._)("li",null,[t,(0,r._)("a",i,[o,(0,r.Wm)(l)]),s,(0,r._)("a",u,[p,(0,r.Wm)(l)]),c,(0,r._)("a",d,[m,(0,r.Wm)(l)]),_]),(0,r._)("li",null,[b,(0,r._)("a",h,[g,(0,r.Wm)(l)]),k,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",f,[U,(0,r.Wm)(l)])]),v])]),(0,r._)("li",null,[W,q,x,(0,r._)("a",S,[j,(0,r.Wm)(l)]),w,E]),P,(0,r._)("li",null,[I,(0,r._)("ul",null,[A,(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",R,[y,(0,r.Wm)(l)])])]),(0,r._)("li",null,[z,(0,r._)("ul",null,[(0,r._)("li",null,[H,(0,r._)("a",D,[L,(0,r.Wm)(l)])]),T,C])]),(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",Y,[G,(0,r.Wm)(l)])])]),(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",M,[$,(0,r.Wm)(l)]),J]),(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",K,[N,(0,r.Wm)(l)])])])]),(0,r._)("li",null,[(0,r._)("p",null,[O,(0,r._)("a",V,[Z,(0,r.Wm)(l)])])]),(0,r._)("li",null,[(0,r._)("p",null,[B,(0,r._)("a",F,[Q,(0,r.Wm)(l)])])]),X,(0,r._)("li",null,[(0,r._)("p",null,[(0,r._)("a",ee,[ae,(0,r.Wm)(l)]),le,(0,r._)("a",re,[ne,(0,r.Wm)(l)]),te,(0,r._)("a",ie,[oe,(0,r.Wm)(l)])]),(0,r._)("ul",null,[(0,r._)("li",null,[se,(0,r._)("a",ue,[pe,(0,r.Wm)(l)]),ce])])]),(0,r._)("li",null,[de,(0,r._)("ul",null,[(0,r._)("li",null,[(0,r._)("a",me,[_e,(0,r.Wm)(l)]),be])])])])])]),he,ge],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,r]of a)l[e]=r;return l}}}]);