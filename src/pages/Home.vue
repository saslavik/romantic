<template>
    <carousel  :perPage='1'>
      <slide>
        <img src="https://cdn.pixabay.com/photo/2018/03/22/19/39/panoramic-3251636_960_720.jpg" alt="">
        <div class="container">Slide 1 Content</div>

      </slide>
      <slide>
        <img src="https://cdn.pixabay.com/photo/2016/03/16/16/31/ayasofia-1261148_960_720.jpg" alt="">

        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
    </carousel>

</template>

<style lang="scss">

.VueCarousel-wrapper {
  position: relative;
  height: 300px;
  img {
  opacity: 0.75;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: -99;
  width: 100%;
}
}
.VueCarousel-dot-container {
  position: absolute;
  bottom: 0;
  padding: 20px;
  margin-top: -20px !important;
}
</style>