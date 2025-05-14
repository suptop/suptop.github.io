const sites = [
  { name: "Figma", url: "https://figma.com", tags: ["设计", "协作", "UI"], category: "设计", starred: true },
  { name: "Dribbble", url: "https://dribbble.com", tags: ["设计", "灵感", "作品集"], category: "设计", starred: false },
  { name: "GitHub", url: "https://github.com", tags: ["开发", "代码托管", "协作"], category: "开发", starred: true },
  { name: "Stack Overflow", url: "https://stackoverflow.com", tags: ["开发", "问答", "社区"], category: "开发", starred: false },
  { name: "MDN Web Docs", url: "https://developer.mozilla.org", tags: ["文档", "HTML", "CSS", "JS"], category: "开发", starred: false },
  { name: "TinyPNG", url: "https://tinypng.com", tags: ["工具", "图片压缩"], category: "工具", starred: false },
  { name: "Canva", url: "https://www.canva.com", tags: ["设计", "在线编辑", "模板"], category: "设计", starred: false },
  { name: "Notion", url: "https://www.notion.so", tags: ["笔记", "知识管理", "工具"], category: "工具", starred: true },
  { name: "ChatGPT", url: "https://chat.openai.com", tags: ["AI", "聊天", "创作"], category: "AI", starred: true },
  { name: "Hugging Face", url: "https://huggingface.co", tags: ["AI", "模型", "社区"], category: "AI", starred: false },
  { name: "Google Fonts", url: "https://fonts.google.com", tags: ["设计", "字体", "资源"], category: "设计", starred: false },
  { name: "Vercel", url: "https://vercel.com", tags: ["部署", "前端", "工具"], category: "开发", starred: false },
  { name: "Netlify", url: "https://www.netlify.com", tags: ["部署", "静态网站", "工具"], category: "开发", starred: false },
  { name: "CodePen", url: "https://codepen.io", tags: ["前端", "实验", "分享"], category: "开发", starred: false },
  { name: "W3Schools", url: "https://www.w3schools.com", tags: ["学习", "HTML", "入门"], category: "学习", starred: false },
  { name: "Coursera", url: "https://www.coursera.org", tags: ["学习", "课程", "大学"], category: "学习", starred: false },

  // 以下为新增 20 个示例网站
  { name: "Freepik", url: "https://www.freepik.com", tags: ["素材", "设计", "图标"], category: "设计", starred: false },
  { name: "Behance", url: "https://www.behance.net", tags: ["设计", "作品集"], category: "设计", starred: false },
  { name: "Bootstrap", url: "https://getbootstrap.com", tags: ["开发", "CSS框架"], category: "开发", starred: false },
  { name: "Vue.js", url: "https://vuejs.org", tags: ["开发", "前端框架"], category: "开发", starred: false },
  { name: "React", url: "https://reactjs.org", tags: ["开发", "前端", "组件"], category: "开发", starred: false },
  { name: "Squoosh", url: "https://squoosh.app", tags: ["图片压缩", "工具"], category: "工具", starred: false },
  { name: "Remove.bg", url: "https://www.remove.bg", tags: ["抠图", "AI", "工具"], category: "工具", starred: false },
  { name: "Tool.lu", url: "https://tool.lu", tags: ["在线工具", "开发", "格式化"], category: "工具", starred: false },
  { name: "Jupyter", url: "https://jupyter.org", tags: ["开发", "数据", "Python"], category: "开发", starred: false },
  { name: "DeepL", url: "https://www.deepl.com", tags: ["翻译", "AI", "语言"], category: "AI", starred: false },
  { name: "Kaggle", url: "https://www.kaggle.com", tags: ["AI", "数据", "比赛"], category: "AI", starred: false },
  { name: "Midjourney", url: "https://www.midjourney.com", tags: ["AI", "图像生成"], category: "AI", starred: false },
  { name: "OpenProcessing", url: "https://openprocessing.org", tags: ["创意", "代码", "艺术"], category: "设计", starred: false },
  { name: "Archive.org", url: "https://archive.org", tags: ["资料库", "历史", "图书"], category: "学习", starred: false },
  { name: "YouTube EDU", url: "https://www.youtube.com/education", tags: ["视频", "学习", "公开课"], category: "学习", starred: false },
  { name: "Aliyun", url: "https://www.aliyun.com", tags: ["云服务", "工具"], category: "工具", starred: false },
  { name: "腾讯云", url: "https://cloud.tencent.com", tags: ["云服务", "工具"], category: "工具", starred: false },
  { name: "Designspiration", url: "https://www.designspiration.com", tags: ["设计", "灵感"], category: "设计", starred: false },
  { name: "Typeform", url: "https://www.typeform.com", tags: ["表单", "交互", "工具"], category: "工具", starred: false },
  { name: "FlowCV", url: "https://flowcv.io", tags: ["简历", "设计", "工具"], category: "工具", starred: false }
];

const siteList = document.getElementById("siteList");
const categoryList = document.getElementById("categoryList");

function getFavicon(url) {
  const domain = new URL(url).hostname;
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

function renderSites(filter = "all") {
  siteList.innerHTML = "";
  const filtered = filter === "all" ? sites : sites.filter(s => s.category === filter);

  filtered.forEach(site => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-category", site.category);
    card.innerHTML = `
      <div class="star ${site.starred ? 'active' : ''}">★</div>
      <a href="${site.url}" target="_blank" rel="noopener">
        <img src="${getFavicon(site.url)}" alt="${site.name}" class="favicon"/>
        <div class="title">${site.name}</div>
      </a>
      <div class="tags">${site.tags.join(", ")}</div>
    `;
    card.querySelector(".star").addEventListener("click", (e) => {
      e.stopPropagation();
      site.starred = !site.starred;
      renderSites(filter);
    });
    siteList.appendChild(card);
  });
}

categoryList.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    categoryList.querySelectorAll("button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderSites(btn.dataset.category);
  });
});

renderSites();
