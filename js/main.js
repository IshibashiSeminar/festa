
// ===================================
// 学生作品データ
// ===================================

const works = [
  {
    name: "シューティングゲーム",
    student: "小山さん",
    category: "ゲーム",
    description: "敵を倒して高得点を目指すゲームです。",
    icon: "🚀",
    url: "./works/koyama/"
  },
  {
    name: "4択クイズ",
    student: "学生02",
    category: "学習",
    description: "オリジナルのクイズに挑戦できます。",
    icon: "💡",
    url: "./works/student02/"
  },
  {
    name: "ToDo管理アプリ",
    student: "学生03",
    category: "ツール",
    description: "日々のタスクを簡単に管理できます。",
    icon: "📝",
    url: "./works/student03/"
  }
];

// ===================================
// 作品一覧の表示
// ===================================

const worksList = document.getElementById("works-list");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");

function displayWorks() {
  const keyword = searchInput.value.toLowerCase();
  const category = categorySelect.value;

  const filtered = works.filter(work => {
    const matchesKeyword =
      (work.name + work.student + work.description)
        .toLowerCase()
        .includes(keyword);

    const matchesCategory =
      category === "all" || work.category === category;

    return matchesKeyword && matchesCategory;
  });

  document.getElementById("work-count").textContent =
    `${filtered.length}作品`;

  worksList.innerHTML = "";

  document.getElementById("empty-message").hidden =
    filtered.length !== 0;

  filtered.forEach(work => {
    const card = document.createElement("article");
    card.className = "work-card";

    card.innerHTML = `
      <div class="work-art">${work.icon}</div>
      <div class="work-info">
        <span class="category-label">${work.category}</span>
        <h3>${work.name}</h3>
        <div class="student-name">${work.student}</div>
        <p class="description">${work.description}</p>
        <a class="work-link" href="${work.url}">
          作品を見る →
        </a>
      </div>
    `;

    worksList.appendChild(card);
  });
}

// 検索・カテゴリ変更時に再表示
searchInput.addEventListener("input", displayWorks);
categorySelect.addEventListener("change", displayWorks);

// 初回表示
displayWorks();
