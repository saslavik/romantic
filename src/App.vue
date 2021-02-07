<template>
  <div class="wrapper">
    <headerComponent>
    </headerComponent>
    <router-view />
    <footerComponent />
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent.vue';
import footerComponent from '@/components/footerComponent.vue';

export default {
  components: {
    headerComponent,
    footerComponent
  }
}
</script>

<style lang="scss">
.call {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .phone {
    margin-right: 20px;
  }
}
</style>
