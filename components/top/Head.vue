<template>
  <div class="jumbotron jumbotron-fluid text-dark mb-0">
    <div class="container text-center py-5">
      <img
        class="avatar rounded-circle"
        src="/assets/img/icon.png"
        alt="Profile picture of VOID"
        width="200"
        height="200"
      />
      <h1 class="display-5 pt-3">VOID</h1>
      <p>Student, Engineer</p>
      <a href="https://twitter.com/k1h_tech" aria-label="Twitter profile">
        <font-awesome-icon icon="fa-brands fa-twitter" size="2x" :style="{ color: 'gray' }" />
      </a>
      <a href="https://github.com/csenet" aria-label="GitHub profile">
        <font-awesome-icon icon="fa-brands fa-github" size="2x" :style="{ color: 'gray' }" />
      </a>
      <p>Email: <a href="mailto:admin@k1h.dev">admin@k1h.dev</a></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
img {
  transform: rotate(0);

  &:hover {
    transform: rotate(-360deg);
    transition: transform 0.5s;
  }
}

.jumbotron {
  background: linear-gradient(48deg, #83ccd2, #c7dc68);
  background-size: 400% 400%;
}

/* Social icons styling */
a[aria-label*="profile"] {
  margin: 0 10px;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.7;
  }
}
</style>
