import{r as s,o as l,a as r,d as e,e as o,F as a,b as n,c as i}from"./app.bebeb26d.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const _={},d=e("h1",{id:"descripcion-de-la-practica-iaas",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#descripcion-de-la-practica-iaas","aria-hidden":"true"},"#"),n(" Descripci\xF3n de la Pr\xE1ctica iaas")],-1),u=n("Siguiendo las instrucciones en el "),h={href:"https://github.com/SYTW/iaas-ull-es",target:"_blank",rel:"noopener noreferrer"},p=n("repositorio SYTW/iaas-ull-es"),m=n(" despliegue un ejemplo como el que aparece en "),b={href:"https://github.com/crguezl/express-start",target:"_blank",rel:"noopener noreferrer"},g=n("crguezl/express-start"),f=n(" en su m\xE1quina virtual del servicio "),v={href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"},k=n("iaas.ull.es"),x=n("."),q=n("Puede encontrar un v\xEDdeo del profesor introduciendo el "),j={href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"},P=n("iaas.ull.es aqu\xED"),E=n(". "),I={href:"https://youtu.be/qKHgbV0lYbA",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:"http://i3.ytimg.com/vi/qKHgbV0lYbA/hqdefault.jpg",alt:"iaas.ull.es"},null,-1),w=e("li",null,"El v\xEDdeo es de 2018 y varias de las apps usadas han cambiado de versi\xF3n pero la esencia de la metodolog\xEDa es la misma",-1),y=n("A\xF1ada en el "),z=e("code",null,"README.md",-1),R=n(" un peque\xF1o tutorial de como usar y desplegar una aplicaci\xF3n web en "),L={href:"https://iaas.ull.es",target:"_blank",rel:"noopener noreferrer"},N=n("iaas.ull.es"),T=n(". "),V=e("ul",null,[e("li",null,"Haga capturas de pantalla que muestren que su m\xE1quina esta bien configurada y funcionando")],-1),A=e("li",null,"La IP din\xE1mica de su m\xE1quina virtual no deber\xEDa cambiar si no la apaga. Publique la URL de despliegue en su m\xE1quina",-1),H=n("Prepare la m\xE1quina para poder trabajar: "),Y=e("li",null,[e("p",null,"Instale git si es necesario")],-1),B={href:"https://git-scm.com/book/es/v1/Empezando-Configurando-Git-por-primera-vez",target:"_blank",rel:"noopener noreferrer"},C=n("Configura git"),D=i(`<p>Procure que la rama actual aparezca en el prompt de la terminal.</p><ul><li>Ejemplo para una bash. Pon en el fichero <code>~/.bash_profile</code> o <code>~/.bashrc</code> estas l\xEDneas:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>parse_git_branch() {
  git branch 2&gt; /dev/null | sed -e &#39;/^[^*]/d&#39; -e &#39;s/* \\(.*\\)/ (\\1)/&#39;
}
export PS1=&quot;\\u@\\h \\[\\033[32m\\]\\w\\[\\033[33m\\]\\$(parse_git_branch)\\[\\033[00m\\] $ &quot;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,3),G=n("Tambi\xE9n puede usar "),M={href:"https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh",target:"_blank",rel:"noopener noreferrer"},$=n("git prompt"),F=e("li",null,[n("Puede a\xF1adir algo como esto a su PS1: "),e("code",null,`PS1="\\$(git branch 2>/dev/null | sed -n 's/* \\(.*\\)/\\1 /p')$ "`)],-1),J=e("li",null,[n("Recuerde que si su prompt es muy largo siempre puede acortarlo con "),e("code",null,"PROMPT_DIRTRIM=1")],-1),K={href:"https://git-scm.com/book/tr/v2/Git-Basics-Git-Aliases",target:"_blank",rel:"noopener noreferrer"},W=n("git aliases"),O={href:"https://github.com/cli/cli",target:"_blank",rel:"noopener noreferrer"},U=n("Instale GitHub CLI"),Q=n(" y aprenda a usarla"),X={href:"https://cli.github.com/manual/",target:"_blank",rel:"noopener noreferrer"},Z=n("manual"),ee=n("Opcionalmente puede instalar "),ne={href:"http://linuxbrew.sh/",target:"_blank",rel:"noopener noreferrer"},te=n("linuxbrew"),oe=n("Instale "),se={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},le=n("nvm"),re=e("li",null,[e("p",null,"Instale nodeJS usando nvm")],-1),ae={href:"http://jshint.com/install/",target:"_blank",rel:"noopener noreferrer"},ie=n("jshint"),ce=n(" y "),_e={href:"https://coderwall.com/p/zfhquw/jshint-in-vim",target:"_blank",rel:"noopener noreferrer"},de=n("jshint on vim"),ue=n(" o JSLint o "),he={href:"https://www.slant.co/topics/2411/~best-javascript-linting-tools",target:"_blank",rel:"noopener noreferrer"},pe=n("equivalente"),me=n("Instale "),be={href:"https://github.com/scrooloose/nerdtree",target:"_blank",rel:"noopener noreferrer"},ge=n("NERDTree"),fe=n(" para vim"),ve=e("p",null,"Instale Express.js",-1),ke={href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",target:"_blank",rel:"noopener noreferrer"},xe=n("Express Web Framework (Node.js/JavaScript)"),qe=n(" (Mozilla)"),je=e("h2",{id:"rubrica",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#rubrica","aria-hidden":"true"},"#"),n(" R\xFAbrica")],-1),Pe=e("p",null,"!!!include(all-labs.md)!!!",-1);function Ee(Ie,Se){const t=s("ExternalLinkIcon");return l(),r(a,null,[d,e("ul",null,[e("li",null,[u,e("a",h,[p,o(t)]),m,e("a",b,[g,o(t)]),f,e("a",v,[k,o(t)]),x]),e("li",null,[q,e("a",j,[P,o(t)]),E,e("ul",null,[e("li",null,[e("a",I,[S,o(t)])]),w])]),e("li",null,[y,z,R,e("a",L,[N,o(t)]),T,V]),A,e("li",null,[H,e("ul",null,[Y,e("li",null,[e("p",null,[e("a",B,[C,o(t)])])]),e("li",null,[D,e("ul",null,[e("li",null,[G,e("a",M,[$,o(t)])]),F,J])]),e("li",null,[e("p",null,[e("a",K,[W,o(t)])])]),e("li",null,[e("p",null,[e("a",O,[U,o(t)]),Q]),e("ul",null,[e("li",null,[e("a",X,[Z,o(t)])])])]),e("li",null,[e("p",null,[ee,e("a",ne,[te,o(t)])])]),e("li",null,[e("p",null,[oe,e("a",se,[le,o(t)])])]),re,e("li",null,[e("p",null,[e("a",ae,[ie,o(t)]),ce,e("a",_e,[de,o(t)]),ue,e("a",he,[pe,o(t)])]),e("ul",null,[e("li",null,[me,e("a",be,[ge,o(t)]),fe])])]),e("li",null,[ve,e("ul",null,[e("li",null,[e("a",ke,[xe,o(t)]),qe])])])])])]),je,Pe],64)}var ze=c(_,[["render",Ee]]);export{ze as default};
