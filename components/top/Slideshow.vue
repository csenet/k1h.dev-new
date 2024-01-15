<template>
  <div>
    <b-jumbotron fluid class="mb-0 py-5">
      <b-container>
        <div class="text-center">
          <h1>Gallery</h1>
          <p>今まで作成したものや携わった作品です<br />Worksで詳細が見れます</p>
        </div>
        <b-container style="max-width: 600px">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="3000"
            controls
            indicators
            fade
            img-height="300px"
            img-width="400px"
            style="text-shadow: 3px 5px 3px #333"
            class="d-flex justify-content-center"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <b-carousel-slide
              v-for="work in data"
              :key="work.title"
              :img-src="require('~/assets/works/' + work.slag + '/thumnail.jpg?webp')"
              type="image/webp"
            >
              <div class="image-overlay"></div>
            </b-carousel-slide>
          </b-carousel>
          <h4 class="text-center pt-3">{{ data[slide].title }}</h4>
        </b-container>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Slideshow",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
  computed: {
    ...mapGetters({ data: "works/getAll" }),
  },
};
</script>

<style scoped></style>
