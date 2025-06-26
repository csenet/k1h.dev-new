<template>
  <div class="jumbotron jumbotron-fluid text-dark mb-0">
    <div class="container text-center py-5">
      <img
        class="avatar rounded-circle"
        src="/assets/img/icon.png"
        alt="VOIDのプロフィール写真"
        width="200"
        height="200"
      />
      <h1 class="display-5 pt-3">VOID</h1>
      <p class="lead">Student, Engineer</p>
      <div class="social-links mb-3" role="navigation" aria-label="ソーシャルメディアリンク">
        <a href="https://twitter.com/k1h_tech" aria-label="Twitter アカウント" class="social-link">
          <font-awesome-icon icon="fa-brands fa-twitter" size="2x" />
        </a>
        <a href="https://github.com/csenet" aria-label="GitHub アカウント" class="social-link">
          <font-awesome-icon icon="fa-brands fa-github" size="2x" />
        </a>
      </div>
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

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  .social-link {
    color: gray;
    transition: color 0.3s ease, transform 0.3s ease;
    
    &:hover {
      color: black;
      transform: scale(1.1);
      text-decoration: none;
    }
  }
}
</style>
