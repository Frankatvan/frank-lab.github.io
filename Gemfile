# Gemfile for Frank's Lab Website
# 使用 Ruby 3.2 或更高版本

source "https://rubygems.org"

# 固定 Ruby 版本
ruby ">= 3.2.0"

# Jekyll - 静态网站生成器
gem "jekyll", "~> 4.3.4"

# Jekyll SEO Tag - SEO 优化插件
gem "jekyll-seo-tag", "~> 2.8.0"

# Jekyll Sitemap - 自动生成 sitemap.xml
gem "jekyll-sitemap", "~> 1.4.0"

# Minima - Jekyll 默认主题
gem "minima", "~> 2.5"

# WEBrick - 用于本地开发服务器（Ruby 3.0+ 需要）
gem "webrick", "~> 1.8"

# Rake - 构建任务工具
gem "rake", "~> 13.1"

# 以下是可选的依赖，根据需要取消注释

# # 用于处理 HTML 压缩
# gem "jekyll-compress-html", "~> 6.0"

# # 用于图片优化
# gem "jekyll-purgecss", "~> 0.11"

# # 用于创建摘要
# gem "jekyll-feed", "~> 0.2"

# # 用于语法高亮
# gem "jekyll-gist", "~> 1.5"

# # 用于处理中文分词
# gem "jekyll-textile-converter", "~> 0.1"

group :jekyll_plugins do
  # Jekyll 插件组
end

# Windows 和 JRuby 不需要的平台特定依赖
platforms :mingw, :x64_mingw, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 性能相关
gem "html-proofer", "~> 5.0", group: :test

# 本地开发服务器优化
gem "listen", "~> 3.9", group: :development

# 日志和调试
gem "logger", "~> 1.5"

# 文件监控（用于实时预览）
gem "jekyll-watch", "~> 2.2"

# Markdown 解析器
gem "kramdown", "~> 2.4"

# 语法高亮
gem "rouge", "~> 4.2"

# 支持的 Markdown 扩展
gem "kramdown-parser-gfm", "~> 1.1"

# 安全相关
gem "jekyll-mentions", "~> 1.6"
gem "jekyll-redirect-from", "~> 0.16"

# 国际化支持
gem "jekyll-polyglot", "~> 1.8"

# 本地化支持
gem "i18n", "~> 1.14"

# 时间处理
gem "i18n_data", "~> 0.9"

# 配置说明:
#
# 安装依赖:
#   bundle install
#
# 启动本地开发服务器:
#   bundle exec jekyll serve
#
# 构建网站:
#   bundle exec jekyll build
#
# 清理构建文件:
#   bundle exec jekyll clean
#
# 更新依赖:
#   bundle update
#
# 检查过时的依赖:
#   bundle outdated