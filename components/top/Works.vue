<script setup>
import { ref, onMounted } from 'vue';

// 動的srcをvueに認識させるための変換ツール
const convertImgSrc = (src) => {
  return new URL(src, import.meta.url).href;
};

// markedライブラリをロードする
let markedLoaded = ref(false);
onMounted(() => {
  if (!window.marked) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/marked/marked.min.js';
    script.onload = () => {
      markedLoaded.value = true;
    };
    document.head.appendChild(script);
  } else {
    markedLoaded.value = true;
  }
});

// Markdownをパースする関数
const parseMarkdown = (markdown) => {
  if (!markedLoaded.value || !window.marked) {
    // markedがロードされていない場合は、HTMLタグだけを解釈して表示
    return markdown;
  }
  
  // markedの設定を変更して、HTMLタグをエスケープしないようにする
  window.marked.setOptions({
    gfm: true,
    breaks: true,
    sanitize: false, // HTMLタグをエスケープしない
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  
  // markedを使用してMarkdownをパース
  return window.marked.parse(markdown);
};

// モーダル関連の状態
const showModal = ref(false);
const selectedWork = ref(null);
const modalContent = ref('');
const isLoading = ref(false);

// モーダルを開く関数
const openModal = async (work) => {
  selectedWork.value = work;
  showModal.value = true;
  isLoading.value = true;
  modalContent.value = '<p>読み込み中...</p>';
  
  try {
    // about.mdの内容を取得する処理
    const response = await fetch(`/assets/works/${work.slag}/about.md`);
    if (response.ok) {
      let content = await response.text();
      
      // 画像パスを修正（相対パスを絶対パスに変換）
      content = content.replace(/src="([^"]+)"/g, (match, src) => {
        // 既に絶対パスの場合はそのまま
        if (src.startsWith('/') || src.startsWith('http')) {
          return `src="${src}"`;
        }
        // 相対パスの場合は、作品のディレクトリを基準に変換
        return `src="/assets/works/${work.slag}/${src}"`;
      });
      
      // HTMLタグとMarkdownが混在しているため、そのまま表示する場合は以下のようにする
      if (!markedLoaded.value || !window.marked) {
        modalContent.value = content;
      } else {
        // Markdownをパース
        modalContent.value = parseMarkdown(content);
      }
    } else {
      modalContent.value = '<p>コンテンツを読み込めませんでした。</p>';
    }
  } catch (error) {
    console.error('Error loading content:', error);
    modalContent.value = '<p>エラーが発生しました。</p>';
  } finally {
    isLoading.value = false;
  }
};

// モーダルを閉じる関数
const closeModal = () => {
  showModal.value = false;
  selectedWork.value = null;
};

// ESCキーでモーダルを閉じる
onMounted(() => {
  const handleEscKey = (event) => {
    if (event.key === 'Escape' && showModal.value) {
      closeModal();
    }
  };
  
  document.addEventListener('keydown', handleEscKey);
  
  // クリーンアップ
  return () => {
    document.removeEventListener('keydown', handleEscKey);
  };
});
</script>

<template>
  <div class="jumbotron jumbotron-fluid text-dark mt-0 mb-0 pb-5 bg-white">
    <div class="container py-5">
      <div class="text-center">
        <h1 class="display-5">Works</h1>
        <p>これまでの制作物について</p>
      </div>
      
      <div class="row">
        <div v-for="(work, index) in works" :key="index" class="col-md-4 mb-4">
          <div class="card work-card h-100" @click="openModal(work)" role="button" tabindex="0" 
               :aria-label="`${work.title}の詳細を表示`"
               @keydown.enter="openModal(work)" @keydown.space="openModal(work)">
            <img :src="`/img/${work.slag}/thumnail.jpg`" class="card-img-top" :alt="`${work.title}のサムネイル画像`">
            <div class="card-body">
              <h5 class="card-title">{{ work.title }}</h5>
              <p class="card-subtitle text-muted">{{ work.subTitle }}</p>
              <p class="card-text mt-2">{{ work.outline }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- モーダル -->
      <div v-if="showModal" class="modal-overlay" @click.self="closeModal" 
           role="dialog" aria-modal="true" :aria-labelledby="selectedWork ? 'modal-title' : undefined">
        <div class="modal-content">
          <button class="close-button" @click="closeModal" aria-label="モーダルを閉じる">&times;</button>
          <div v-if="selectedWork" class="modal-body">
            <h2 id="modal-title" class="sr-only">{{ selectedWork.title }}の詳細</h2>
            <div v-if="isLoading" class="text-center">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <div v-else v-html="modalContent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import worksData from '../../assets/json/works.json';

export default {
  name: "works",
  data() {
    return {
      works: worksData
    };
  }
};
</script>

<style scoped lang="scss">
.work-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover, &:focus {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
  
  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 20px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
  color: #333;
}

.modal-body {
  margin-top: 20px;
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
  
  h1, h2, h3 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .content {
    text-align: justify;
  }
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    padding: 15px;
  }
}
</style>
