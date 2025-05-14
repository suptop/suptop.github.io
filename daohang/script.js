// 切换夜间模式
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});

// 网站数据
const sites = [
  { name: "MoeRanker", url: "https://moe.ys.al/" },
  { name: "Reddit", url: "https://www.reddit.com/" },
  { name: "愛上傳", url: "https://img.chkaja.com/" },
  { name: "X / Twitter", url: "https://twitter.com/home" },
  { name: "Dcard", url: "https://www.dcard.tw/f" },
  { name: "Twitter.com", url: "https://twitter.com/" },
  { name: "Twitch", url: "https://www.twitch.tv/zenkaigoose/schedule" },
  { name: "Discord", url: "https://discord.com/channels/@me" },
  { name: "NGA玩家社区", url: "http://bbs.nga.cn/" },
  { name: "吾爱破解", url: "https://www.52pojie.cn/" },
  { name: "NGA-网页游戏", url: "https://bbs.nga.cn/thread.php?fid=428" },
  { name: "南+", url: "https://www.south-plus.net/" },
  { name: "宇千鹤", url: "https://go.yuqianhe.xyz/auth/login" },
  { name: "RuTracker", url: "https://rutracker.org/forum/index.php" },
  { name: "ByRut", url: "https://byrut.org/" },
  { name: "Scighost", url: "https://scighost.coding.net/public-artifacts/xunkong/releases/packages" },
  { name: "据点探索 Mew", url: "https://mew.fun/sector-explore?sectorId=114995938315218944" },
  { name: "虎牙直播", url: "https://www.huya.com/" },
  { name: "吕德华直播", url: "https://www.huya.com/243547" },
  { name: "戴森球 NGA", url: "https://bbs.nga.cn/thread.php?fid=839" },
  { name: "接水管游戏", url: "https://cn.puzzle-pipes.com/" },
  { name: "MyFreeMP3", url: "http://tool.liumingye.cn/music/?page=discoverPage#/" },
  { name: "CPU天梯榜", url: "https://topic.expreview.com/CPU/" },
  { name: "Kmoe 漫画", url: "https://volmoe.com/" }
];

// 创建卡片
function createSiteCard(site) {
  const domain = new URL(site.url).hostname;
  const icon = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  const card = document.createElement("a");
  card.href = site.url;
  card.target = "_blank";
  card.className = "flip-card block w-full aspect-square";
  card.innerHTML = `
    <div class="flip-inner w-full h-full relative">
      <div class="flip-front absolute w-full h-full bg-white dark:bg-gray-800 rounded-lg shadow flex flex-col items-center justify-center text-center p-2">
        <img src="${icon}" alt="${site.name}" class="w-10 h-10 mb-2">
        <span class="text-sm font-medium">${site.name}</span>
      </div>
      <div class="flip-back absolute w-full h-full bg-indigo-600 text-white rounded-lg shadow flex items-center justify-center text-xl font-semibold">
        进入
      </div>
    </div>
  `;
  return card;
}

// 插入到页面中
const grid = document.querySelector(".grid");
sites.forEach(site => grid.appendChild(createSiteCard(site)));
