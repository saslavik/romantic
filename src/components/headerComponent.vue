<template>
  <div class="wrapper--content">
    <div class="container">
      <div class="top">
        <div class="logo"><h2>Romantic Tur logo</h2></div>
        <div class="call">
          <div class="phone">+(373) 684 75 097</div>
          <div class="callMe">
            <button class="btn btnPrimary">Позвонить мне</button>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <ul class="navbar-list">
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <router-link
                class="tab"
                :to="link.url"
                :title="link.title">
                  {{ link.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links:[
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Поиск Тура',
          url: '/findtour',
        },
        {
          title: 'Билеты на самолет',
          url: '/about',
        },
        {
          title: 'Визы',
          url: '/about',
        },
        {
          title: 'О нас',
          url: '/about',
        },
      ]
    }
  }
}
</script>