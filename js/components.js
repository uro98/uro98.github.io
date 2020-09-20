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
              <p class="copyright">&copy; Yu Jo Tseng 2017–2020</p>
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
              <p class="copyright">&copy; Yu Jo Tseng 2017–2020</p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('page-footer', Footer);
customElements.define('main-footer', MainFooter);