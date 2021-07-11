class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark">
        <a class="navbar-brand logo" href="http://yujotseng.com">
          <img src="../assets/img/Catstronomer.svg" width="31.2" height="31.2" class="d-inline-block" alt="">
          Yu-Jo Tseng
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="nav navbar-nav navbar-right ml-auto">
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com">HOME</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="../assets/resume.pdf">RESUME</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com/#about">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com/#work-experience">WORK EXPERIENCE</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com/#projects">PROJECTS</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com/#education">EDUCATION</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="http://yujotseng.com/#activities">ACTIVITIES</a></li>
            <li class="nav-item"><a class="nav-link hover-bg" href="#" onclick="scrollToId('contact')">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

class MainNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark main-navbar">
        <a class="navbar-brand logo" href="http://yujotseng.com">
          <img src="assets/img/Catstronomer.svg" width="31.2" height="31.2" class="d-inline-block" alt="">
          Yu-Jo Tseng
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#siteNav" aria-controls="siteNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="siteNav">
          <ul class="nav navbar-nav navbar-right ml-auto">
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="$(window).scrollTo(0, 500);">HOME</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="assets/resume.pdf">RESUME</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('about')">ABOUT</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('work-experience')">WORK EXPERIENCE</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('projects')">PROJECTS</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('education')">EDUCATION</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('activities')">ACTIVITIES</a></li>
            <li class="nav-item"><a class="nav-link main-nav-link" href="#" onclick="scrollToId('contact')">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    `;
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-7">
              <div class="row">
                <div class="col-sm-6 order-sm-2 footer-info text-center">
                  <h2 id="contact">Contact</h2>
                  <p>You can find me on</p>
                  <div class="links">
                    <a href="https://www.linkedin.com/in/yujotseng/" class="footer-link" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://github.com/uro98" class="footer-link" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="mailto:yujotseng@gmail.com"  class="footer-link" target="_blank"><i class="fas fa-envelope fa-2x"></i></a>
                  </div>
                </div>
                <div class="col-sm-6 order-sm-1 vertical-align">
                  <img class="mx-auto d-block" src="../assets/img/Catstronomer-with-name.svg"/>
                </div>
              </div>
              <p class="copyright">&copy; Yu Jo Tseng 2017–2021</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

class MainFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-md-9 col-lg-7">
              <div class="row">
                <div class="col-sm-6 order-sm-2 footer-info text-center">
                  <h2 id="contact">Contact</h2>
                  <p>You can find me on</p>
                  <div class="links">
                    <a href="https://www.linkedin.com/in/yujotseng/" class="footer-link" target="_blank"><i class="fab fa-linkedin-in fa-2x"></i></a>
                    <a href="https://github.com/uro98" class="footer-link" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="mailto:yujotseng@gmail.com"  class="footer-link" target="_blank"><i class="fas fa-envelope fa-2x"></i></a>
                  </div>
                </div>
                <div class="col-sm-6 order-sm-1 vertical-align">
                  <img class="mx-auto d-block" src="assets/img/Catstronomer-with-name.svg"/>
                </div>
              </div>
              <p class="copyright">Street background photo from <a href="http://blog.xuite.net/a303210/twblog/91675095" class="blue-link">here</a></p>
              <p class="copyright">&copy; Yu Jo Tseng 2017–2021</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('page-navbar', Navbar);
customElements.define('main-navbar', MainNavbar);
customElements.define('page-footer', Footer);
customElements.define('main-footer', MainFooter);