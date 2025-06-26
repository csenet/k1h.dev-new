<script setup>
import timelineData from '~/assets/json/timeline.json'

//動的srcをvueに認識させるための変換ツール
const convertImgSrc = (src) => {
  // 既に絶対パスの場合はそのまま返す
  if (src.startsWith('/') || src.startsWith('http')) {
    return src;
  }
  // 相対パスの場合は、publicディレクトリを基準に変換
  return `/${src.replace('../../', '')}`;
};

const timeline = timelineData;
</script>

<template>
  <div class="jumbotron jumbotron-fluid text-dark mt-0 mb-0 pb-5 bg-light">
    <div class="container py-5">
      <div class="text-center">
        <h1 class="display-5">Activity</h1>
        <p>これまでの活動について</p>
      </div>
      <ul class="timeline" role="list" aria-label="時系列の活動履歴">
        <li v-for="(item, index) in timeline" ref="content" v-bind:key="index">
          <p class="date">{{ item.date }}</p>
          <div v-bind:class="[item.isDot ? 'content-dot' : '', 'content']">
            <div class="badge badge-pill badge-secondary date-small">
              {{ item.date }}
            </div>
            <img
              class="icon"
              alt="icon"
              v-bind:src="convertImgSrc(item.icon)"
              v-if="item.icon"
            />
            <div v-if="!item.icon" style="height: 20px"></div>
            <h4 v-html="item.title"></h4>
            <span
              ><a class="link" v-bind:href="item.link">{{ item.link }}</a></span
            >
            <span class="eng-title">{{ item.engTitle }}</span>
            <p v-html="item.description"></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* Bootstrapの変数を直接定義 */
$secondary: #6c757d;
$dark: #343a40;

/* 配色設定 */
$LINE: $secondary;
$DOT: $dark;

.timeline {
  list-style: none;
  text-justify: inter-character;
  margin-top: 20px;
  padding-left: 10px;

  li {
    overflow: hidden;
    position: relative;
  }

  .date {
    margin-bottom: 0;
    width: 110px;
    float: left;
    display: none;
  }

  .date-small {
    width: 80px;
    display: block;
    margin-top: 5px;
    margin-bottom: 3px;
  }

  .icon {
    padding: 3px 3px 3px;
    width: 40px;
    height: 40px;
    border-radius: 5px 5px 5px 5px;
  }

  h4 {
    margin-bottom: 0;
  }

  .eng-title {
    color: gray;
    font-family: "JetBrains Mono";
    font-size: 0.8rem;
  }

  .link {
    text-decoration: none;
    color: gray;
    font-family: "JetBrains Mono";
    font-size: 0.8rem;
  }

  .child {
    list-style: none;
  }

  .content {
    width: 90%;
    float: left;
    border-left: 3px $LINE solid;
    margin-left: 4px;
    padding-left: 30px;
  }

  .content-dot:before {
    content: "";
    width: 12px;
    height: 12px;
    background: $DOT;
    position: absolute;
    top: 50px;
    left: 0;
    border-radius: 100%;
  }
}

/* for Desktop */
@media (min-width: 650px) {
  .timeline {
    li {
      margin-bottom: 0;
    }

    .date {
      margin-top: 20px;
      display: block;
    }

    .content {
      width: 75%;
      margin-left: 0;
    }

    .date-small {
      display: none;
    }

    .content-dot:before {
      left: 106px;
      top: 24px;
    }
  }
}
</style>