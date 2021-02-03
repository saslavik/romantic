<template>
  <div class="wrapper">
    <headerComponent>
    </headerComponent>
    <router-view />
  </div>
</template>

<script>
import headerComponent from '@/components/headerComponent.vue';

export default {
  components: {
    headerComponent
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
