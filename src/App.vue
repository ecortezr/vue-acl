<template>
<section>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
        <span class="title"><H1><b>ACL</b></H1></span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-lg fa-github"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/jgthms" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <!--
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link  is-active" href="/documentation/overview/start/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="/documentation/overview/start/">
              Overview
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/modifiers/syntax/">
              Modifiers
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/columns/basics/">
              Columns
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/layout/container/">
              Layout
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/form/general/">
              Form
            </a>
            <a class="navbar-item " href="http://bulma.io/documentation/elements/box/">
              Elements
            </a>

            <a class="navbar-item is-active" href="http://bulma.io/documentation/components/breadcrumb/">
              Components
            </a>

            <hr class="navbar-divider">
            <div class="navbar-item">
              <div>
                <p class="is-size-6-desktop">
                  <strong class="has-text-info">0.5.3</strong>
                </p>

                <small>
                  <a class="bd-view-all-versions" href="/versions">View all versions</a>
                </small>

              </div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link " href="http://bulma.io/blog/">
            Blog
          </a>
          <div id="blogDropdown" class="navbar-dropdown is-boxed" data-style="width: 18rem;">

            <a class="navbar-item" href="/2017/08/03/list-of-tags/">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">03 Aug 2017</small>
                </p>
                <p>New feature: list of tags</p>
              </div>
            </a>

            <a class="navbar-item" href="/2017/08/01/bulma-bootstrap-comparison/">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">01 Aug 2017</small>
                </p>
                <p>Bulma / Bootstrap comparison</p>
              </div>
            </a>

            <a class="navbar-item" href="/2017/07/24/access-previous-bulma-versions/">
              <div class="navbar-content">
                <p>
                  <small class="has-text-info">24 Jul 2017</small>
                </p>
                <p>Access previous Bulma versions</p>
              </div>
            </a>

            <a class="navbar-item" href="http://bulma.io/blog/">
              More posts
            </a>
            <hr class="navbar-divider">
            <div class="navbar-item">
              <div class="navbar-content">
                <div class="level is-mobile">
                  <div class="level-left">
                    <div class="level-item">
                      <strong>Stay up to date!</strong>
                    </div>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <a class="button bd-is-rss is-small" href="http://bulma.io/atom.xml">
                        <span class="icon is-small">
                          <i class="fa fa-rss"></i>
                        </span>
                        <span>Subscribe</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div class="navbar-link">
            More
          </div>
          <div id="moreDropdown" class="navbar-dropdown is-boxed">
            <a class="navbar-item " href="http://bulma.io/extensions/">
              <div class="level is-mobile">
                <div class="level-left">
                  <div class="level-item">
                    <p>
                      <strong>Extensions</strong>
                      <br>
                      <small>Side projects to enhance Bulma</small>
                    </p>
                  </div>
                </div>
                <div class="level-right">
                  <div class="level-item">
                    <span class="icon has-text-info">
                      <i class="fa fa-plug"></i>
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        -->
        <router-link to="/" class="navbar-item"><span v-lang.home></span></router-link>
        <router-link to="opcion" class="navbar-item" ><span v-lang.menuOptions></span></router-link>
        <router-link to="opcionrouter" class="navbar-item"><span v-lang.menuOptions></span> (Router)</router-link>
        <b-dropdown class="navbar-item" v-model="selectedLanguage">
            <button class="button" slot="trigger">
                <span>Idiomas</span>
                <b-icon icon="language"></b-icon>
                <b-icon icon="arrow_drop_down"></b-icon>
            </button>

            <b-dropdown-item value="en" @click="seleccionarIdioma('en')"><span class='idioma-items'><img src="./assets/en-640x480.png" height="33"/>English</span></b-dropdown-item>
            <b-dropdown-item value="pt" @click="seleccionarIdioma('pt')"><span class='idioma-items'><img src="./assets/pt-640x480.png" height="33"/>Portuguese</span></b-dropdown-item>
            <b-dropdown-item value="es" @click="seleccionarIdioma('es')"><span class='idioma-items'><img src="./assets/es-640x480.png" height="33"/>Spanish</span></b-dropdown-item>
        </b-dropdown>
        <!-- <b-field class="navbar-item ">
            <b-select placeholder="Idioma" icon="language" @change="seleccionarIdioma(rowId, $event)">
          <option value="AF">Afrikanns</option>
          <option value="SQ">Albanian</option>
          <option value="AR">Arabic</option>
          <option value="HY">Armenian</option>
          <option value="EU">Basque</option>
          <option value="BN">Bengali</option>
          <option value="BG">Bulgarian</option>
          <option value="CA">Catalan</option>
          <option value="KM">Cambodian</option>
          <option value="ZH">Chinese (Mandarin)</option>
          <option value="HR">Croation</option>
          <option value="CS">Czech</option>
          <option value="DA">Danish</option>
          <option value="NL">Dutch</option>
          <option value="EN">English</option>
          <option value="ET">Estonian</option>
          <option value="FJ">Fiji</option>
          <option value="FI">Finnish</option>
          <option value="FR">French</option>
          <option value="KA">Georgian</option>
          <option value="DE">German</option>
          <option value="EL">Greek</option>
          <option value="GU">Gujarati</option>
          <option value="HE">Hebrew</option>
          <option value="HI">Hindi</option>
          <option value="HU">Hungarian</option>
          <option value="IS">Icelandic</option>
          <option value="ID">Indonesian</option>
          <option value="GA">Irish</option>
          <option value="IT">Italian</option>
          <option value="JA">Japanese</option>
          <option value="JW">Javanese</option>
          <option value="KO">Korean</option>
          <option value="LA">Latin</option>
          <option value="LV">Latvian</option>
          <option value="LT">Lithuanian</option>
          <option value="MK">Macedonian</option>
          <option value="MS">Malay</option>
          <option value="ML">Malayalam</option>
          <option value="MT">Maltese</option>
          <option value="MI">Maori</option>
          <option value="MR">Marathi</option>
          <option value="MN">Mongolian</option>
          <option value="NE">Nepali</option>
          <option value="NO">Norwegian</option>
          <option value="FA">Persian</option>
          <option value="PL">Polish</option>
          <option value="PT">Portuguese</option>
          <option value="PA">Punjabi</option>
          <option value="QU">Quechua</option>
          <option value="RO">Romanian</option>
          <option value="RU">Russian</option>
          <option value="SM">Samoan</option>
          <option value="SR">Serbian</option>
          <option value="SK">Slovak</option>
          <option value="SL">Slovenian</option>
          <option value="ES">Spanish</option>
          <option value="SW">Swahili</option>
          <option value="SV">Swedish </option>
          <option value="TA">Tamil</option>
          <option value="TT">Tatar</option>
          <option value="TE">Telugu</option>
          <option value="TH">Thai</option>
          <option value="BO">Tibetan</option>
          <option value="TO">Tonga</option>
          <option value="TR">Turkish</option>
          <option value="UK">Ukranian</option>
          <option value="UR">Urdu</option>
          <option value="UZ">Uzbek</option>
          <option value="VI">Vietnamese</option>
          <option value="CY">Welsh</option>
          <option value="XH">Xhosa</option>
            </b-select>
        </b-field> -->        
        <!-- <a class="navbar-item " href="http://bulma.io/expo/">
          <span class="bd-emoji">⭐️</span>
          Expo
        </a>
        <a class="navbar-item " href="http://bulma.io/love/">
          <span class="bd-emoji">❤️</span>
          Love
        </a> -->
      </div>
      
      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="https://github.com/jgthms/bulma" target="_blank">
          <span class="icon" style="color: #333;">
            <i class="fa fa-lg fa-github"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="https://twitter.com/jgthms" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=http://bulma.io&via=jgthms">
                <span class="icon">
                  <i class="fa fa-twitter"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>

            </p>

            <p class="control">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.5.3.zip">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <!-- Despliegue de los componentes -->
  <router-view></router-view>

</section>

</template>

<script>

// Para mostrar la hamburguesa

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default {

  created() {
    //this.selectedLanguage = this.$language;
  },

  data() {
    return {
      selectedLanguage: this.$language,
    }
  },

  methods: {
    seleccionarIdioma(select, event) {
      this.$language = select;

      location.reload();
    }
  }

}
</script>

<style>
.idioma-items {
  display: inline-flex;
}

.navbar-item span.title {
  font-weight: bold;
  font-size: 200%;
}
</style>
