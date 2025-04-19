<template>
  <div>
    <TopHead />
    <TopAboutme />
    <TopTimeline />
    <TopWorks />
    <!-- <TopSlideshow /> -->
  </div>
</template>
<script>
export default {};
</script>
<style>
.fab,
.fas {
  font-size: 30px;
  color: gray;
  padding: 0.3em 5px 1em;
}

.fab:hover,
.fas:hover {
  color: black;
}

.icons {
  max-width: 100px;
  width: 30%;
  margin: 10px 10px;
}

@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }

  .br-sp {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }

  .br-sp {
    display: block;
  }
}

@media screen and (min-width: 650px) {
  .br-pc {
    display: block;
  }

  .br-sp {
    display: none;
  }
}

@media screen and (max-width: 650px) {
  .br-pc {
    display: none;
  }

  .br-sp {
    display: block;
  }
}
</style>
