<template>
    <!-- <section class="hero is-info is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Home
                </a>
                <a class="navbar-item">
                  Examples
                </a>
                <a class="navbar-item">
                  Documentation
                </a>
                <span class="navbar-item">
                  <a class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fa fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Title
          </p>
          <p class="subtitle">
            Subtitle
          </p>
        </div>
      </div>

      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section> -->
    <section>
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item is-hidden-desktop" @click="show = !show">
                    <span class="icon" style="color: #333;">
                        <i class="fa fa-lg fa-bars"></i> Menú
                    </span>
                </a>

                <a class="navbar-item" href="/">
                    <!-- <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"> -->
                    <span class="title">
                        <H1>
                            <b>ACL</b>
                        </H1>
                    </span>
                </a>

                <!-- <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
                    <span class="icon" style="color: #333;">
                        <i class="fa fa-lg fa-github"></i>
                    </span>
                </a> -->

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
                    <router-link to="/" class="navbar-item">
                        <span v-lang.home></span>
                    </router-link>
                    <router-link to="opcion" class="navbar-item">
                        <span v-lang.menuOptions></span>
                    </router-link>
                    <router-link to="opcionrouter" class="navbar-item">
                        <span v-lang.menuOptions></span> (Router)
                    </router-link>
                    <b-dropdown class="navbar-item" v-model="selectedLanguage">
                        <button class="button" slot="trigger">
                            <span>Idiomas</span>
                            <b-icon icon="language"></b-icon>
                            <b-icon icon="arrow_drop_down"></b-icon>
                        </button>

                        <b-dropdown-item value="en" @click="seleccionarIdioma('en')">
                            <span class='idioma-items'><img src="./assets/en-640x480.png" height="33" />English</span>
                        </b-dropdown-item>
                        <b-dropdown-item value="pt" @click="seleccionarIdioma('pt')">
                            <span class='idioma-items'><img src="./assets/pt-640x480.png" height="33" />Portuguese</span>
                        </b-dropdown-item>
                        <b-dropdown-item value="es" @click="seleccionarIdioma('es')">
                            <span class='idioma-items'><img src="./assets/es-640x480.png" height="33" />Spanish</span>
                        </b-dropdown-item>
                    </b-dropdown>
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
  <aside class="menu app-sidebar animated" :class="{ slideInLeft: show, slideOutLeft: !show }">
    <p class="menu-label">
      Opciones de Menú
    </p>
    <ul class="menu-list">
        <li>
            <router-link to="opcionrouter" class="navbar-item">
                <span class="icon is-small"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                <span v-lang.menuOptions></span>
            </router-link>
        </li>
      <!-- <li v-for="(item, index) in menu">
        <router-link :to="item.path" :exact="true" :aria-expanded="isExpanded(item) ? 'true' : 'false'" v-if="item.path" @click.native="toggle(index, item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </router-link>
        <a :aria-expanded="isExpanded(item)" v-else @click="toggle(index, item)">
          <span class="icon is-small"><i :class="['fa', item.meta.icon]"></i></span>
          {{ item.meta.label || item.name }}
          <span class="icon is-small is-angle" v-if="item.children && item.children.length">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>

        <expanding v-if="item.children && item.children.length">
          <ul v-show="isExpanded(item)">
            <li v-for="subItem in item.children" v-if="subItem.path">
              <router-link :to="generatePath(item, subItem)">
                {{ subItem.meta && subItem.meta.label || subItem.name }}
              </router-link>
            </li>
          </ul>
        </expanding>
      </li> -->
    </ul>
  </aside>
        
        <!--section>
            <router-link to="/charts" aria-expanded="show" @click.native="show = !show">
                <span class="icon is-small">
                    <i class="fa fa-bar-chart-o"></i>
                </span>
                Charts
                <span class="icon is-small is-angle">
                    <i class="fa fa-angle-down"></i>
                </span>
            </router-link>
            <expanding>
                <ul v-show="show">
                    <li>
                        <router-link to="/charts/chartjs">
                            ChartJs
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/charts/chartist">
                            Chartist
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/charts/peity">
                            Peity
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/charts/plotly">
                            Plotly
                        </router-link>
                    </li>
                </ul>
            </expanding>
        </section-->

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

import Expanding from './components/extras/Expanding.vue'


export default {

    components: {
        Expanding
    },

    created() {
        //this.selectedLanguage = this.$language;
    },

    data() {
        return {
            selectedLanguage: this.$language,
            show: false,
        }
    },

    methods: {
        seleccionarIdioma(select, event) {
            this.$language = select;

            location.reload();
        }
    },

    watch: {
        $route (route) {
            this.show = false
        }
    }
}
</script>

<style lang="scss">

.idioma-items {
    display: inline-flex;
}

.navbar-item span.title {
    font-weight: bold;
    font-size: 200%;
}

/* Para el menú que se expande */
.animated {
  animation-duration: .377s;
}
/*
@import '~bulma';

@import '~wysiwyg.css/wysiwyg.sass';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';
*/
html {
  background-color: whitesmoke;
}

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/mixins';
.app-sidebar {
  position: fixed;
  top: 50px;
  left: 0;
  bottom: 0;
  padding: 20px 0 50px;
  width: 180px;
  min-width: 45px;
  max-height: 100vh;
  height: calc(100% - 50px);
  z-index: 1024 - 1;
  background: #FFF;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
  overflow-y: auto;
  overflow-x: hidden;

  @include mobile() {
    transform: translate3d(-180px, 0, 0);
  }

  .icon {
    vertical-align: baseline;
    &.is-angle {
      position: absolute;
      right: 10px;
      transition: transform .377s ease;
    }
  }

  .menu-label {
    padding-left: 5px;
  }

  .menu-list {
    li a {
      &[aria-expanded="true"] {
        .is-angle {
          transform: rotate(180deg);
        }
      }
    }

    li a + ul {
      margin: 0 10px 0 15px;
    }
  }

}

</style>
