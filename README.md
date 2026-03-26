# Frank's Lab 官网部署指南

这个仓库是一个基于 GitHub Pages + Jekyll 的静态官网模板，用于展示 Frank's Lab 项目卡片，支持中文/英文切换。

## 1. 你需要准备的内容

1. GitHub 账号
2. 项目信息：
- 项目中英文名称
- 项目链接 URL
- 项目状态（`running` / `completed` / `paused`）
- 项目中英文简介
3. 实验室信息：
- 成立年份
- 探索领域（中英文）
4. 可选：自定义域名（如 `frankzh.top`）

## 2. 仓库配置与发布

1. 创建一个公开仓库（例如 `YOUR_USERNAME.github.io`）。
2. 上传本项目全部文件并推送到 `main` 分支。
3. 进入 GitHub 仓库 `Settings > Pages`：
- Source 选择 `Deploy from a branch`
- Branch 选择 `main`，目录选择 `/(root)`
4. 等待 1-3 分钟，访问 GitHub 给出的站点地址。

## 3. 内容修改入口

1. 项目列表：`_data/projects.yml`
2. 实验室信息：`_data/lab-info.yml`
3. 语言包（参考）：`_locales/zh.yml`、`_locales/en.yml`
4. 页面样式：`assets/css/main.scss`
5. 语言切换逻辑：`assets/js/language-switcher.js`

## 4. 自定义域名（可选）

1. 在 `Settings > Pages > Custom domain` 填入你的域名（例如 `frankzh.top`）。
2. 在 DNS 服务商配置解析记录。

示例（GitHub Pages 常用）：
- `A` 记录：`@ -> 185.199.108.153`
- `A` 记录：`@ -> 185.199.109.153`
- `A` 记录：`@ -> 185.199.110.153`
- `A` 记录：`@ -> 185.199.111.153`
- `CNAME` 记录：`www -> YOUR_USERNAME.github.io`

说明：DNS 生效通常需要几分钟到 24 小时。

## 5. 日常维护

1. 添加或修改项目后，提交并推送：

```bash
git add _data/projects.yml
git commit -m "update projects"
git push
```

2. GitHub Pages 会自动重新构建并发布。

## 6. 常见问题

1. 页面没更新：先看 `Actions` 是否构建成功，再清缓存刷新。
2. 项目卡片不显示：检查 `_data/projects.yml` YAML 缩进和字段名。
3. 语言切换无效：检查浏览器控制台是否有 JS 报错。
4. 域名无法访问：先确认 DNS 记录和值，再等待传播完成。
