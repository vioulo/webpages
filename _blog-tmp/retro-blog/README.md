# 复古博客 - Windows 7 & MS-DOS 风格

一个充满怀旧气息的个人博客，融合了 Windows 7 Aero 特效和 MS-DOS 命令行的经典设计元素。

## 🎨 设计特色

### Windows 7 风格
- **Aero Glass 效果** - 半透明窗口边框和毛玻璃特效
- **经典窗口界面** - 标题栏、菜单栏、工具栏完整还原
- **渐变按钮** - Windows 7 标志性的按钮样式
- **蓝色主题** - 经典的 Windows 7 蓝色配色方案

### MS-DOS 风格
- **终端界面** - 蓝底白字的经典 DOS 终端
- **命令行提示符** - C:\> 提示符和光标闪烁效果
- **等宽字体** - Courier New 字体还原 DOS 体验

## 📁 页面结构

```
retro-blog/
├── index.html          # 首页 - 欢迎页面和最新文章
├── posts.html          # 文章列表 - 资源管理器风格
├── post-detail.html    # 文章详情 - Word 文档风格
├── gallery.html        # 卡片集 - 照片查看器风格
├── timeline.html       # 时间轴 - 日历风格
├── friends.html        # 友情链接 - IE 收藏夹风格
├── about.html          # 关于页面 - 系统属性风格
└── assets/
    ├── css/
    │   └── style.css   # 主样式文件
    └── js/
        └── main.js     # 交互脚本
```

## ✨ 特性

### 视觉效果
- 窗口阴影和边框
- 渐变背景和按钮
- 悬停动画效果
- DOS 光标闪烁
- 卡片旋转动画

### 交互功能
- 窗口控制按钮（最小化、最大化、关闭）
- 工具栏按钮点击反馈
- 列表项双击打开
- 卡片悬停效果
- 键盘快捷键支持

### 响应式设计
- 适配桌面和移动设备
- 灵活的网格布局
- 自适应卡片大小

## 🎯 设计理念

这个博客致敬了两个经典时代：

1. **MS-DOS (1981-1995)** - 命令行界面的简洁和高效
2. **Windows 7 (2009-2020)** - Aero 特效的优雅和现代感

通过现代 Web 技术重现这些经典设计，让用户在浏览时能够回忆起那些美好的计算机时光。

## 🚀 使用方法

1. 直接在浏览器中打开 `index.html`
2. 或使用本地服务器：
   ```bash
   # Python
   python -m http.server 8000
   
   # Node.js
   npx serve
   ```

## 🎨 自定义

### 修改配色
编辑 `assets/css/style.css` 中的 CSS 变量：

```css
:root {
  --win7-blue: #0078d7;
  --dos-bg: #000080;
  --dos-text: #ffffff;
  /* ... */
}
```

### 添加内容
- 文章：在 `posts.html` 中添加新的列表项
- 卡片：在 `gallery.html` 中添加新的卡片
- 时间轴：在 `timeline.html` 中添加新的时间节点

## 🌟 亮点功能

### DOS 终端
```
C:\Users\Blogger> welcome.exe
正在加载个人博客系统...
[████████████████████] 100%
```

### 窗口界面
- 完整的标题栏、菜单栏、工具栏
- 可交互的窗口控制按钮
- 状态栏显示信息

### 卡片动画
- 悬停时旋转和放大
- 渐变色背景
- 阴影效果

## 📝 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- Vanilla JavaScript (无框架依赖)

## 🎮 键盘快捷键

- `F5` - 刷新页面
- `Ctrl+F` - 搜索（开发中）
- `Alt+F4` - 关闭窗口

## 🖥️ 浏览器支持

- Chrome / Edge (推荐)
- Firefox
- Safari
- Opera

建议使用现代浏览器以获得最佳体验。

## 📜 许可

MIT License - 自由使用和修改

## 👨‍💻 作者

复古博主 - 2026

---

**怀念过去，创造未来** 💾✨

用现代技术重现经典设计，让复古文化在新时代焕发光彩。
