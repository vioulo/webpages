// 窗口内容数据
const WINDOW_CONTENTS = {
  home: {
    title: '首页 - Microsoft Internet Explorer',
    icon: '🏠',
    content: `
      <div class="dos-terminal">
        <div class="dos-prompt">C:\\Users\\Blogger></div>
        <div class="dos-text">Microsoft Windows [Version 7.0.7601]
Copyright (c) 2009 Microsoft Corporation. All rights reserved.

C:\\Users\\Blogger> welcome.exe

正在加载个人博客系统...
[████████████████████] 100%

欢迎来到我的复古博客！
这里记录着技术、生活和思考的点滴。

系统信息:
- 博客版本: v2.0.2026
- 文章总数: 42
- 访问次数: 13,337
- 运行时间: 365 天

输入 'help' 查看可用命令
输入 'posts' 查看所有文章<span class="dos-cursor"></span></div>
      </div>

      <h2 style="margin: 30px 0 20px 0; color: #0078d7; border-bottom: 2px solid #0078d7; padding-bottom: 8px;">
        📌 最新文章
      </h2>

      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            <div class="card-icon">📝</div>
            <span>深入理解 Windows 7 Aero 特效</span>
          </div>
          <div class="card-body">
            <div class="card-meta">2026-04-25 | 阅读 8 分钟</div>
            <div class="card-excerpt">
              探索 Windows 7 标志性的 Aero Glass 毛玻璃特效背后的技术原理，以及如何在现代 Web 开发中重现这种经典效果...
            </div>
            <div class="tags">
              <span class="tag">Windows</span>
              <span class="tag">前端</span>
              <span class="tag">CSS</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon">💾</div>
            <span>MS-DOS 命令行的艺术</span>
          </div>
          <div class="card-body">
            <div class="card-meta">2026-04-20 | 阅读 10 分钟</div>
            <div class="card-excerpt">
              回顾那个黑底白字的年代，学习 DOS 命令行的精髓，以及它如何影响了现代终端工具的设计...
            </div>
            <div class="tags">
              <span class="tag">DOS</span>
              <span class="tag">命令行</span>
              <span class="tag">历史</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon">🎮</div>
            <span>复古游戏开发入门</span>
          </div>
          <div class="card-body">
            <div class="card-meta">2026-04-15 | 阅读 12 分钟</div>
            <div class="card-excerpt">
              使用现代技术重现 90 年代的像素风格游戏，从精灵图到碰撞检测，一步步构建你的复古游戏...
            </div>
            <div class="tags">
              <span class="tag">游戏开发</span>
              <span class="tag">像素艺术</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  posts: {
    title: '文章列表 - Windows 资源管理器',
    icon: '📄',
    content: `
      <div style="background: #f0f0f0; padding: 8px 12px; border: 1px solid #d0d0d0; border-radius: 3px; margin-bottom: 16px; font-size: 13px;">
        <span style="color: #666;">地址:</span>
        <span style="margin-left: 8px;">📁 我的电脑 > 文档 > 博客 > 文章列表</span>
      </div>

      <h2 style="margin: 20px 0; color: #0078d7; border-bottom: 2px solid #0078d7; padding-bottom: 8px;">
        📂 所有文章 (共 9 篇)
      </h2>

      <div class="list-view">
        <div class="list-item">
          <div class="list-item-icon">📝</div>
          <div class="list-item-content">
            <div class="list-item-title">深入理解 Windows 7 Aero 特效</div>
            <div class="list-item-meta">2026-04-25 | Windows, 前端, CSS | 8 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">💾</div>
          <div class="list-item-content">
            <div class="list-item-title">MS-DOS 命令行的艺术</div>
            <div class="list-item-meta">2026-04-20 | DOS, 命令行, 历史 | 10 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">🎮</div>
          <div class="list-item-content">
            <div class="list-item-title">复古游戏开发入门</div>
            <div class="list-item-meta">2026-04-15 | 游戏开发, 像素艺术 | 12 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">🖥️</div>
          <div class="list-item-content">
            <div class="list-item-title">Windows XP 蓝屏之谜</div>
            <div class="list-item-meta">2026-04-10 | Windows, 系统 | 9 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">🎨</div>
          <div class="list-item-content">
            <div class="list-item-title">像素艺术创作指南</div>
            <div class="list-item-meta">2026-04-05 | 设计, 像素艺术 | 15 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">⌨️</div>
          <div class="list-item-content">
            <div class="list-item-title">机械键盘的黄金时代</div>
            <div class="list-item-meta">2026-03-28 | 硬件, 键盘 | 7 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">💿</div>
          <div class="list-item-content">
            <div class="list-item-title">CD-ROM 时代的软件分发</div>
            <div class="list-item-meta">2026-03-20 | 历史, 软件 | 11 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">🔊</div>
          <div class="list-item-content">
            <div class="list-item-title">Windows 启动音效的演变</div>
            <div class="list-item-meta">2026-03-15 | Windows, 音效 | 6 分钟阅读</div>
          </div>
        </div>

        <div class="list-item">
          <div class="list-item-icon">🖱️</div>
          <div class="list-item-content">
            <div class="list-item-title">鼠标指针的设计哲学</div>
            <div class="list-item-meta">2026-03-08 | 设计, UI/UX | 8 分钟阅读</div>
          </div>
        </div>
      </div>

      <div style="margin-top: 20px; padding: 16px; background: linear-gradient(to bottom, #f8f8f8, #e8e8e8); border: 1px solid #d0d0d0; border-radius: 4px;">
        <div style="font-size: 13px; color: #666;">
          <strong>提示:</strong> 双击文章标题可以打开详细内容。使用 Ctrl+F 可以搜索文章。
        </div>
      </div>
    `
  },

  gallery: {
    title: '卡片集 - Windows 照片查看器',
    icon: '🎨',
    content: `
      <h2 style="margin: 20px 0; color: #0078d7; border-bottom: 2px solid #0078d7; padding-bottom: 8px;">
        🎨 我的卡片收藏
      </h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px; margin: 24px 0;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">💻</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">代码人生</div>
        </div>

        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🎮</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">复古游戏</div>
        </div>

        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🖥️</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">Windows 经典</div>
        </div>

        <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">💾</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">软盘时代</div>
        </div>

        <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">⌨️</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">机械键盘</div>
        </div>

        <div style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🔊</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">启动音效</div>
        </div>

        <div style="background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🖱️</div>
          <div style="color: #333; font-weight: 600; text-shadow: 2px 2px 4px rgba(255,255,255,0.5);">鼠标指针</div>
        </div>

        <div style="background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🎨</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">像素艺术</div>
        </div>

        <div style="background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">💿</div>
          <div style="color: #333; font-weight: 600; text-shadow: 2px 2px 4px rgba(255,255,255,0.5);">CD-ROM</div>
        </div>

        <div style="background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">📟</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">拨号上网</div>
        </div>

        <div style="background: linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🖼️</div>
          <div style="color: white; font-weight: 600; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">屏保程序</div>
        </div>

        <div style="background: linear-gradient(135deg, #fdcbf1 0%, #e6dee9 100%); border: 2px solid #d0d0d0; border-radius: 8px; padding: 24px; text-align: center; cursor: pointer; transition: all 0.3s; box-shadow: 3px 3px 8px rgba(0,0,0,0.2);">
          <div style="font-size: 48px; margin-bottom: 12px;">🎵</div>
          <div style="color: #333; font-weight: 600; text-shadow: 2px 2px 4px rgba(255,255,255,0.5);">MIDI 音乐</div>
        </div>
      </div>

      <div style="background: #e5f3ff; border: 1px solid #0078d7; padding: 16px; border-radius: 4px; margin-top: 24px;">
        <div style="font-weight: 600; margin-bottom: 8px; color: #0078d7;">💡 收藏说明</div>
        <div style="font-size: 13px; line-height: 1.6;">
          这些卡片代表了我对复古计算机文化的热爱。每一张卡片都承载着一段美好的回忆。
        </div>
      </div>
    `
  },

  timeline: {
    title: '时间轴 - Windows 日历',
    icon: '⏰',
    content: `
      <h2 style="margin: 20px 0; color: #0078d7; border-bottom: 2px solid #0078d7; padding-bottom: 8px;">
        ⏰ 我的技术历程
      </h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2026 年 4 月</div>
          <div class="timeline-content">
            <h3 style="color: #0078d7; margin-bottom: 8px;">🚀 创建复古风格博客</h3>
            <p style="line-height: 1.6; margin-bottom: 12px;">
              受到 Windows 7 和 MS-DOS 的启发，决定创建一个复古风格的个人博客。
            </p>
            <div class="tags">
              <span class="tag">Web 设计</span>
              <span class="tag">复古</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2026 年 3 月</div>
          <div class="timeline-content">
            <h3 style="color: #0078d7; margin-bottom: 8px;">📝 完成 Aero 特效研究</h3>
            <p style="line-height: 1.6; margin-bottom: 12px;">
              深入研究了 Windows 7 Aero 毛玻璃特效的实现原理。
            </p>
            <div class="tags">
              <span class="tag">Windows</span>
              <span class="tag">图形学</span>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-date">2026 年 2 月</div>
          <div class="timeline-content">
            <h3 style="color: #0078d7; margin-bottom: 8px;">🎮 开发复古游戏项目</h3>
            <p style="line-height: 1.6; margin-bottom: 12px;">
              使用 JavaScript 和 Canvas API 开发了一款像素风格的平台跳跃游戏。
            </p>
            <div class="tags">
              <span class="tag">游戏开发</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  friends: {
    title: '友情链接 - Internet Explorer 收藏夹',
    icon: '🔗',
    content: `
      <h2 style="margin: 20px 0; color: #0078d7; border-bottom: 2px solid #0078d7; padding-bottom: 8px;">
        🔗 我的收藏夹
      </h2>

      <div style="background: #fffacd; border: 2px solid #ffd700; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
        <div style="font-weight: 600; margin-bottom: 8px;">💡 友链说明</div>
        <div style="font-size: 13px; line-height: 1.6;">
          这些是我在互联网上发现的优秀博客和网站。
        </div>
      </div>

      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            <div class="card-icon">🖥️</div>
            <span>复古计算机博物馆</span>
          </div>
          <div class="card-body">
            <div class="card-meta">https://retro-computer-museum.com</div>
            <div class="card-excerpt">
              收藏和展示各个年代的经典计算机。
            </div>
            <div class="tags">
              <span class="tag">硬件</span>
              <span class="tag">收藏</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon">💾</div>
            <span>DOS 游戏档案馆</span>
          </div>
          <div class="card-body">
            <div class="card-meta">https://dos-games-archive.org</div>
            <div class="card-excerpt">
              保存了数千款经典 DOS 游戏。
            </div>
            <div class="tags">
              <span class="tag">游戏</span>
              <span class="tag">DOS</span>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div class="card-icon">🎨</div>
            <span>像素艺术工坊</span>
          </div>
          <div class="card-body">
            <div class="card-meta">https://pixel-art-workshop.net</div>
            <div class="card-excerpt">
              专注于像素艺术创作和教学的社区。
            </div>
            <div class="tags">
              <span class="tag">艺术</span>
            </div>
          </div>
        </div>
      </div>
    `
  },

  about: {
    title: '关于我 - 系统属性',
    icon: 'ℹ️',
    content: `
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="width: 120px; height: 120px; margin: 0 auto 16px; background: linear-gradient(135deg, #0078d7, #005a9e); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 64px; box-shadow: 4px 4px 12px rgba(0,0,0,0.2);">
          👨‍💻
        </div>
        <h1 style="color: #0078d7; margin-bottom: 8px;">复古博主</h1>
        <p style="color: #666; font-size: 14px;">全栈开发者 · 复古计算机爱好者</p>
      </div>

      <div class="dos-terminal" style="margin: 24px 0;">
        <div class="dos-prompt">C:\\Users\\Blogger></div>
        <div class="dos-text">whoami

用户名: RETRO-PC\\Blogger
组: RETRO-PC\\Developers

C:\\Users\\Blogger> systeminfo | findstr /B /C:"OS"

OS 名称: Windows 7 Ultimate
OS 版本: 6.1.7601 Service Pack 1</div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 32px 0;">
        <div style="background: linear-gradient(to bottom, #f8f8f8, #e8e8e8); border: 1px solid #d0d0d0; border-radius: 4px; padding: 20px;">
          <h3 style="color: #0078d7; margin-bottom: 16px;">👤 个人信息</h3>
          <div style="font-size: 13px; line-height: 2;">
            <div><strong>昵称:</strong> 复古博主</div>
            <div><strong>职业:</strong> 全栈开发工程师</div>
            <div><strong>爱好:</strong> 收藏老电脑、玩复古游戏</div>
          </div>
        </div>

        <div style="background: linear-gradient(to bottom, #f8f8f8, #e8e8e8); border: 1px solid #d0d0d0; border-radius: 4px; padding: 20px;">
          <h3 style="color: #0078d7; margin-bottom: 16px;">💻 技能树</h3>
          <div style="font-size: 13px; line-height: 2;">
            <div><strong>前端:</strong> HTML, CSS, JavaScript</div>
            <div><strong>后端:</strong> Node.js, Python</div>
            <div><strong>设计:</strong> Photoshop, Aseprite</div>
          </div>
        </div>
      </div>

      <div style="background: white; border: 1px solid #d0d0d0; border-radius: 4px; padding: 24px; margin: 24px 0;">
        <h2 style="color: #0078d7; margin-bottom: 16px;">📖 我的故事</h2>
        <p style="line-height: 1.8; margin-bottom: 16px;">
          我是一名 90 后开发者，从小就对计算机充满好奇。这个博客是我对那个时代的致敬。
        </p>
      </div>
    `
  }
};
