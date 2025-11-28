# 网站内容修改指南（中文）

本指南面向没有网页编程经验的同学，分步骤说明如何更新学术主页的所有内容（姓名、论文、链接、PDF 等）。只要按照步骤操作，就能安全地完成修改。

---

## 1. 需要准备的工具

1. **电脑**（Windows / macOS / Linux 均可）。
2. **Git 与 Node.js**（如果只在 CMS 后台修改，可忽略）。
3. **文本编辑器**（推荐 VS Code，用来查看或编辑仓库文件）。
4. **浏览器**：访问在线后台或预览页面。

> ✅ 如果你只想用后台（Decap CMS）修改内容，确保仓库已经部署在 GitHub，并根据 README 中说明完成 `/admin` 的 GitHub 授权即可。

---

## 2. 两种修改方式

| 方式 | 适用场景 | 优点 | 步骤概要 |
| --- | --- | --- | --- |
| **方式 A：Decap CMS 后台** | 需要图形化界面，少量改动 | 不需要写代码，表单式操作 | 访问 `https://你的域名/admin` → 登录 → 选择对应栏目（Publications/Research/Bio/Updates/Settings） → 编辑 → 保存并发布 |
| **方式 B：直接编辑仓库文件** | 想批量修改或离线编辑 | 完全掌控、可批量复制 | 在 VS Code 打开仓库 → 修改 `src/content/` 下的 Markdown/JSON 文件 → 运行 `npm run dev` 预览 → `git commit` + `git push` |

> 两种方式二选一即可；后台本质上也是修改同一套内容文件。

---

## 3. 站点内容结构一览

所有内容都存放在 `src/content/` 目录，具体如下：

| 页面/模块 | 文件位置 | 内容格式 | 说明 |
| --- | --- | --- | --- |
| 站点基本信息（姓名、头衔、简介、联系方式） | `src/content/settings/site.json` | JSON | 更改姓名、头衔、研究宣言、地址、社交链接、微信等；保存后首页和联系页同步更新 |
| 研究方向 | `src/content/research/*.md` | Markdown + Frontmatter | 每个文件代表一个研究主题；可修改标题、简介、关键词、相关论文链接、配图 URL |
| 论文出版物 | `src/content/publications/*.md` | Markdown + Frontmatter | 包含标题、作者、年份、会议、摘要、PDF/ArXiv/Slides/Code 链接等；可新增或修改 |
| 时间线/个人经历 | `src/content/bio/*.md` | Markdown + Frontmatter | 用于 Biography 页面；`type` 字段控制分类（education/research/teaching/service/honor） |
| 新闻/动态 | `src/content/updates/*.md` | Markdown + Frontmatter | 驱动 Updates 页面与 RSS；包括标题、日期、类别、摘要、外部链接 |
| 微信二维码 | `public/wechat.png` | 图片 | 直接替换该文件即可更新二维码；注意保持相同文件名 |
| 额外图像/文件 | `public/` | 静态资源 | PDF 或图片可放这里，然后用 `/文件名` 方式引用 |

---

## 4. 通过 CMS 后台修改

1. 浏览器打开 `https://你的域名/admin`。
2. 第一次使用需要 GitHub 登录授权。
3. 左侧列表对应：
   - **Site Settings**：修改姓名、简介、社交链接、联系方式。
   - **Research Areas**：新增或编辑研究方向。
   - **Publications**：维护论文列表，支持上传 PDF 链接、代码仓库等。
   - **Biography Timeline**：调整教育/科研/教学/荣誉条目。
   - **Updates**：添加新闻、获奖、讲座等动态。
4. 编辑后点击 **Save** → **Publish**，触发 Git 提交与部署流程。

> 若后台 `Publish` 失败，请检查你是否有该仓库写权限，或改为方式 B 手动提交。

---

## 5. 手动编辑详细步骤

### 5.1 运行本地预览

```bash
cd academic_site   # 进入仓库目录
npm install        # 首次使用需要安装依赖
npm run dev        # 启动开发服务器，浏览器访问 http://localhost:4321
```

修改文件后浏览器会自动刷新。

### 5.2 修改站点基本信息

1. 打开 `src/content/settings/site.json`。
2. 主要字段说明：
   - `hero.name`：姓名
   - `hero.title`：头衔，例如 “PhD Candidate, Computer Science”
   - `hero.mission`：研究宣言（首页大字）
   - `contact.email`：邮箱（为防爬虫可写 `name [at] school.edu`）
   - `social.cv` / `social.scholar` / `social.github` 等：链接直接写完整 URL
3. 保存后刷新页面即可看到更新。

### 5.3 新增或修改论文

1. 进入 `src/content/publications/`。
2. 每篇论文是一个 `.md` 文件，文件名示例：`2024-graph-privacy.md`。
3. 文件上方 `---` 之间为 Frontmatter，示例字段：
   ```yaml
   ---
   title: "Paper Title"
   venue: "NeurIPS"
   year: 2024
   authors:
     - "Your Name"
     - "Coauthor"
   summary: "一句话亮点"
   abstract: "更详细的摘要"
   topics:
     - "Federated Learning"
   links:
     pdf: "https://.../paper.pdf"
     code: "https://github.com/..."
   badges:
     - "open-source"
   ---
   正文（可留空或写补充说明）。
   ```
4. 需要新增论文时复制现有文件，修改内容即可。注意 `year` 为数字，`links` 中未使用的字段删掉或留空。

### 5.4 修改研究方向

1. 打开 `src/content/research/` 下的 `.md` 文件。
2. `figure.src` 支持网络图片或放在 `public/` 下的本地图。
3. `relatedPublications` 列表填入论文文件名（不含扩展名），用于在研究卡片中显示关联论文。

### 5.5 更新 Biography 时间线

1. 前往 `src/content/bio/`。
2. 字段含义：
   - `start`、`end`：日期，格式 `YYYY-MM-DD`，如果在读可写 `end: present`。
   - `type`：必须是 `education` / `research` / `teaching` / `service` / `honor` 之一。
   - `highlights`：用 `-` 罗列要点。

### 5.6 更新新闻 / Updates

1. 目录：`src/content/updates/`。
2. `date` 字段会生成时间排序；`category` 可选值：`publication`、`talk`、`award`、`grant`、`media`、`service`、`reflection`。
3. 若需要链接外部报道，在 `links` 列表中填写 `{ label, url }`。

### 5.7 更换微信二维码或其他媒体

1. 将新的二维码图片命名为 `wechat.png`，覆盖 `public/wechat.png`。
2. 刷新联系页面即可看到更新。
3. 其他公共资源（PDF、头像等）也放在 `public/` 目录，引用方式为 `/文件名`。

### 5.8 修改联系表单说明等文案

- 联系页面文件：`src/pages/contact.astro`。
- 直接编辑文案（例如 WeChat 提示语）即可。注意保持 HTML 结构完整。

---

## 6. 保存与部署

1. 完成本地修改后，运行 `npm run build` 确认无错误。
2. 使用 Git 提交：
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```
3. GitHub Actions 会自动执行部署，几分钟后即可在生产站点看到更新。

> 如果使用 CMS，发布操作会自动完成 `git commit/push`，等待部署完成即可。

---

## 7. 常见问题

1. **改了内容却不生效？**
   - 确认是否已保存、提交，并等待部署完成；若是浏览器缓存，可强制刷新或开无痕窗口。
2. **图片/链接 404？**
   - 检查路径是否以 `/` 开头，以及文件确实放在 `public/` 目录。
3. **字段写错导致构建失败？**
   - 运行 `npm run astro check` 可以检查内容格式；终端会指出哪一行出错。

---

按照以上步骤，就能安全地修改网站上的所有内容。若有新的栏目需求，可在 `docs/MAINTENANCE.md` 中查阅扩展指南或联系开发人员。祝使用顺利！
