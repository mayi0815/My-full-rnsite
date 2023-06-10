function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "HOME")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "INTRODUCTION")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "PROJETS")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "CONTACT"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "Yi", /*#__PURE__*/

    React.createElement("strong", null, "conseil ")), /*#__PURE__*/
    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    //React.createElement("div", { className: "forest" }), /*#__PURE__*/
    //React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
   //React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Innover avec"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "excellence"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, /*#__PURE__*/
    React.createElement("span", { className: "color" }, "votre réussite"), " est notre priorité.")), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#projects" }, "Projets réalisés"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Contact")))));






};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Pourquoi Yiconseil?"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Solutions sur mesure, service de qualité."), /*#__PURE__*/
    React.createElement("p", null, "Chez Yiconseil, nous offrons une expertise de pointe en IT et des solutions sur mesure de qualité supérieure pour répondre aux besoins uniques de nos clients."), /*#__PURE__*/
    ), /*#__PURE__*/


    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Services"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Développement 👇"),
    React.createElement("h4", { className: "subtitle" }, "Site web 🖥️ "), 
    React.createElement("h4", { className: "subtitle" }, "Boutique en ligne 🛒"), 
    React.createElement("h4", { className: "subtitle" }, "Applications mobiles📱"), 
    React.createElement("h4", { className: "subtitle" }, "Microservices 🧩"), 
    React.createElement("h4", { className: "subtitle" }, "-------------------------------"), 
    React.createElement("h4", { className: "subtitle" }, "Business Intelligence 👇"),
    React.createElement("h4", { className: "subtitle" }, "BI-Data Analyse 📊"), 
    React.createElement("h4", { className: "subtitle" }, "Solution SEO 🛠"),
    ), /*#__PURE__*/


    ))));





};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    api: 'fab fa-api',
    wechat:'fab fa-weixin',
    vue: 'fab fa-vuejs',
    bootstrap:'fab fa-bootstrap',
    html5:'fab fa-html5',
    php: 'fab fa-php',
    d3: 'far fa-chart-bar',
      google :'fab fa-google',
      docker :'fab fa-docker',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/
    React.createElement("a", { className: "project-link", href: link, target: "_blank", rel: "noopener noreferrer" }, /*#__PURE__*/
    React.createElement("img", { className: "project-image", src: props.img, alt: 'Screenshot of ' + props.title })), /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: link, target: "_blank", rel: "noopener noreferrer" }, "Voir", /*#__PURE__*/
    React.createElement("i", { className: "fas fa-external-link-alt" }))))));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Projets"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
   ), /*#__PURE__*/

    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
        React.createElement(Project, {
                title: "GT 3.0 Publish System",
                img: "./assets/gt.png", // fixed img property value
                tech: "js css php sass",
                link: "https://www.gutenberg-technology.com/for-publishers"
            },
            React.createElement("small", null, "Construit avec l'équipe GT DEV en utilisant PHP, CSS, HTML et Twig ainsi que JavaScript."),
            React.createElement("p", null, "Plateforme Tout-En-Un Pour Industrialiser La Production de Contenus"),
           )
        , /*#__PURE__*/

    React.createElement(Project, {
            title: "Efashion Paris Web V3 et V4",
            img: "./assets/efp_web.png", // fixed img property value
            tech: "js css php sass node vue html5 bootstrap docker",
            link: "https://www.efashion-paris.com/"
        },
        React.createElement("small", null, "Construit en utilisant PHP, CSS, HTML 5,Node,Vue  ainsi que Docker."),
        React.createElement("p", null, "Marketplace pour la vente BTOB en ligne dans la mode"),
        )
    , /*#__PURE__*/

    React.createElement(Project, {
            title: "Efashion Paris Application Mobile",
            img: "./assets/app_mobile.jpeg", // fixed img property value
            tech: "js css node html5 docker react-native",
            link: "https://apps.apple.com/us/app/efashion-paris/id1460584296"
        },
        React.createElement("small", null, "Construit en utilisant react native et node"),
        React.createElement("p", null, "App mobile en 4 lang: Marketplace pour la vente BTOB en ligne dans la mode"),
        )
    , /*#__PURE__*/


    React.createElement(Project, {
      title: "Efashion Paris Application Mobile Verison Pro",
      img: "./assets/efp_app_pro.png", // fixed img property value
      tech: "node docker react-native",
      link: ""
  },
  React.createElement("small", null, "Construit en utilisant react native et node"),
  React.createElement("p", null, "App mobile : Marketplace BO pour les vendeurs"),
  )
, /*#__PURE__*/


    React.createElement(Project, {
      title: "E6 Express",
      img: './assets/e6.png',
      tech: "js node css vue",
      link: "https://www.e6express.com/" }, /*#__PURE__*/

    React.createElement("small", null, "Réalisé en utilisant Node, Express, Mysql, JS + Axios, CSS + Bootstrap."),
    React.createElement("p", null, "Plateforme logistique de chaîne d'approvisionnement complète et efficace, disponible pour les clients chinois et européens."),
    ), /*#__PURE__*/

    React.createElement(Project, {
      title: "Hk logistic mini-programmes WeChat",
      img: './assets/hkmicroapp.png',
      tech: "js react vue node css html5 bootstrap wechat",
      link: "" }, /*#__PURE__*/

    React.createElement("small", null, "Réalisé en utilisant Node, Html5/Css3, Vue et Bootstrap."), /*#__PURE__*/
    React.createElement("p", null, "Programme de commande logistique BtoB, disponible en trois langues : chinois, anglais et français.")), /*#__PURE__*/


    React.createElement(Project, {
      title: "Google Analytics",
      img: './assets/GA.png',
      tech: "js html5 node google",
      link: "https://analytics.google.com/analytics/web/provision/#/provision" }, /*#__PURE__*/

    React.createElement("small", null, "Réalisé en utilisant CSS, JS, Node, Google Api"), /*#__PURE__*/
    React.createElement("p", null, "Déployer Google Analytics et fournir des stratégies publicitaires en ligne correspondantes et considérablement augmenté le chiffre d'affaires et booster les ventes en ligne.")), /*#__PURE__*/

    React.createElement(Project, {
      title: "Data Analyse",
      img: './assets/tableau.jpg',
      tech: "node js html5 css docker react",
      link: "" }, /*#__PURE__*/

    React.createElement("small", null, "Réalisé en utilisant Tableau, Rest API,SQL, React et Node."), /*#__PURE__*/
    React.createElement("p", null, "Solutions de Business Intelligence sur mesure pour répondre aux besoins commerciaux de nos clients, en analysant les données et en créant des rapports trimestriels spécifiques pour leur permettre de mieux comprendre et suivre les tendances de leur entreprise.")), /*#__PURE__*/


  ))));

};


/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Nous Contacter", /*#__PURE__*/
    React.createElement("br", null), "un beau projet en tête ? "), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
        React.createElement("p", { className: "subtitle" },
            "remplir 📃 - ou cliquer direct 👉 ",
            React.createElement("span", { className: "mail" },
                React.createElement("a", { href: "mailto:contact@yiconseil.com", style: { textDecoration: "underline" } },
                    React.createElement("span", { style: { color: "white" } }, "contact"),
                    /*#__PURE__*/ React.createElement("i", { className: "fas fa-at at" }),
                    React.createElement("span", { style: { color: "white" } }, "yiconseil"),
                    /*#__PURE__*/ React.createElement("i", { className: "fas fa-circle dot" }),
                    React.createElement("span", { style: { color: "white" } }, "com")
                )
            ),
        ),
    ), /*#__PURE__*/





    React.createElement(SocialLinks, null)), /*#__PURE__*/

    React.createElement("form", { id: "contact-form", action: "#" }, /*#__PURE__*/
    React.createElement("input", { placeholder: "Prénom Nom", name: "name", type: "text", required: true }), /*#__PURE__*/
    React.createElement("input", { placeholder: "Email", name: "email", type: "email", required: true }), /*#__PURE__*/
    React.createElement("textarea", { placeholder: "Message", type: "text", name: "message" }), /*#__PURE__*/
    React.createElement("input", { className: "button", id: "submit", value: "ENVOYER", type: "submit" })))));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "Merci pour votre visite."), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), "Copyright © Yiconseil.All right reserved."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Twitter profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-twitter" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://github.com/mayi0815",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's GitHub Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-github" })), /*#__PURE__*/

    React.createElement("a", {
      href: "",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-codepen" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
   
    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        //silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        //forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));