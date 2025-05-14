const sites = [
  { name: "MoeRanker", url: "https://moe.ys.al/", icon: "https://moe.ys.al/favicon.ico" },
  { name: "Reddit", url: "https://www.reddit.com/", icon: "https://www.redditstatic.com/desktop2x/img/favicon.ico" },
  { name: "愛上傳", url: "https://img.chkaja.com/", icon: "https://img.chkaja.com/favicon.ico" },
  { name: "X / Twitter", url: "https://twitter.com/home", icon: "https://twitter.com/favicon.ico" },
  { name: "Dcard", url: "https://www.dcard.tw/f", icon: "https://www.dcard.tw/favicon.ico" },
  { name: "Twitch", url: "https://www.twitch.tv/zenkaigoose/schedule", icon: "https://static.twitchcdn.net/assets/favicon-8f3fefed255b2e7a3a5e2d5c57a0b6da.ico" },
  // 继续添加其他网站...
];

const siteGrid = document.getElementById("siteGrid");
const starredSites = document.getElementById("starredSites");

function createSiteCard(site) {
  const card = document.createElement("div");
  card.className = "flip-card block w-full aspect-square";

  card.innerHTML = `
    <div class="flip-inner w-full h-full relative">
      <div class="flip-front absolute w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow flex items-center justify-center text-center p-2">
        <img src="${site.icon}" alt="${site.name} Icon" class="w-8 h-8 rounded-full" />
        <span class="text-base font-bold">${site.name}</span>
        <button class="ml-2 text-xl text-gray-500 hover:text-gray-700" onclick="toggleStar(this, '${site.name}')">
          ★
        </button>
      </div>
      <div class="flip-back absolute w-full h-full bg-indigo-600 text-white rounded-lg shadow flex items-center justify-center text-xl font-semibold">
        进入
      </div>
    </div>
  `;

  return card;
}

function toggleStar(button, siteName) {
  const isStarred = button.classList.contains('starred');

  // 在所有网站区域移除该网站卡片
  const allSiteCard = Array.from(siteGrid.children).find(card =>
    card.querySelector('.flip-front span').textContent === siteName
  );
  if (allSiteCard) {
    siteGrid.removeChild(allSiteCard);
  }

  // 如果已被标记为星标，将其添加到星标区域
  if (isStarred) {
    // 取消星标
    button.classList.remove('starred');
    // 重新添加到所有网站区域
    siteGrid.appendChild(createSiteCard(sites.find(site => site.name === siteName)));
  } else {
    // 添加星标
    button.classList.add('starred');
    // 移动到星标区域
    starredSites.appendChild(createSiteCard(sites.find(site => site.name === siteName)));
  }
}

// 初始化页面
sites.forEach(site => {
  siteGrid.appendChild(createSiteCard(site));
});
