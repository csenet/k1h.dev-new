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
      <h4>$ affiliation</h4>
      <ul>
        <li>電気通信大学 UEC-CSIRT 技術支援員</li>
        <li>電気通信大学 共創進化スマート社会実現推進機構 共創進化スマート大学実現部門 技術支援員</li>
        <li>電気通信大学 ピクトラボ 技術支援員</li>
      </ul>

      <h4>$ qualifications</h4>
      <ul>
        <li>実用英語技能検定 2級 (2018.4)</li>
        <li>実用英語技能検定 準1級 (2021.3)</li>
        <li>基本情報技術者 (2019.11)</li>
        <li>応用情報技術者 (2023.11)</li>
        <li>エンベデッドシステムスペシャリスト (2023.12)</li>
        <li>TOEIC 750点</li>
      </ul>

      <h4>$ awarded</h4>
      <ul>
        <li>パフォーマンスロボット競技大会 準優勝 (2018)</li>
        <li>RCJ Rescue Line NL 関東ブロック大会 ベストプレゼンテーション賞 (2018)</li>
        <li>HackU 2020 Online Vol.1 Happy Hacking賞 (2020)</li>
        <li>SSH生徒研究発表会 生徒投票賞 (2020)</li>
        <li>Discovery Hackathon 最優秀賞 (2021)</li>
        <li>SecHack365 優秀修了 (2022)</li>
        <li>UEC BugBountry Contest 2022 優秀賞</li>
        <li>技育展2022 インフラ・セキュリティ部門 優秀賞(2022)</li>
        <li>U☆PoC～UECアイディア実証コンテスト2023～ B-Storm賞</li>
        <li>JPHACKS 2023 Hack Day 東京会場 Jストリーム賞受賞 & Award Day進出</li>
        <li>ICTトラブルシューティングコンテスト2022 本戦3位</li>
        <li>ICTトラブルシューティングコンテスト2023 準優勝</li>
        <li>U☆PoC～UECアイディア実証コンテスト2024～ 多摩信用金庫賞,G&N賞,B-STORM賞</li>
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
/* モロカイカラースキームの変数を使用 */
.jumbotron-fluid {
  background-color: morokai.$bg;
  color: morokai.$text;
}

pre {
  color: morokai.$text;
}

ul {
  list-style: "-> ";
}
</style>
