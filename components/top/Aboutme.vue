<template>
  <div class="jumbotron jumbotron-fluid mb-0">
    <b-container class="py-5">
      <h4>$ whoami</h4>
      <ul>
        <li>name : VOID</li>
        <li>jobs : engineer, student</li>
        <li>school : University of Electro-Communications</li>
      </ul>
      <h4>$ interests</h4>
      <ul>
        <li>Electronics</li>
        <li>Network System</li>
        <li>Edge Computing</li>
        <li>Security</li>
      </ul>

      <h4>$ qualifications</h4>
      <ul>
        <li>実用英語技能検定 2級 (2018.4)</li>
        <li>実用英語技能検定 準1級 (2021.3)</li>
        <li>基本情報技術者 (2019.11)</li>
        <li>応用情報技術者 (2023.11)</li>
      </ul>

      <h4>$ awarded</h4>
      <ul>
        <li>パフォーマンスロボット競技大会 準優勝 (2018)</li>
        <li>RCJ Rescue Line NL 関東ブロック大会 ベストプレゼンテーション賞 (2018)</li>
        <li>HackU 2020 Online Vol.1 Happy Hacking賞 (2020)</li>
        <li>SSH生徒研究発表会 生徒投票賞 (2020)</li>
        <li>Discovery Hackathon 最優秀賞 (2021)</li>
        <li>SecHack365 優秀修了 (2022)</li>
        <li>UEC BugBountry Contest 優秀賞(2022)</li>
        <li>技育展2022 インフラ・セキュリティ部門 優秀賞(2022)</li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Aboutme.vue",
};
</script>

<style lang="scss">
@import "assets/css/morokai";
.jumbotron-fluid {
  background-color: $bg;
  color: $text;
}

pre {
  color: $text;
}

ul {
  list-style: "-> ";
}
</style>
