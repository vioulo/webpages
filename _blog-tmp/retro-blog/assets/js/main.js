// 窗口管理系统
class WindowManager {
  constructor() {
    this.windows = new Map();
    this.zIndexCounter = 100;
    this.windowContents = WINDOW_CONTENTS; // 使用外部定义的内容
  }

  // 创建或显示窗口
  createWindow(windowId) {
    // 如果窗口已存在
    if (this.windows.has(windowId)) {
      const windowEl = this.windows.get(windowId);

      // 如果窗口被最小化，恢复显示
      if (windowEl.style.display === 'none') {
        windowEl.style.display = 'flex';
        windowEl.style.transition = 'all 0.3s ease';
        windowEl.style.opacity = '1';
        windowEl.style.transform = windowEl.dataset.lastTransform || 'translate(-50%, -50%)';
      }

      // 置顶
      this.bringToFront(windowId);
      return;
    }

    const windowData = this.windowContents[windowId];
    if (!windowData) return;

    const windowEl = document.createElement('div');
    windowEl.className = 'window';
    windowEl.dataset.windowId = windowId;
    windowEl.style.zIndex = ++this.zIndexCounter;

    // 随机初始位置（稍微偏移）
    const offsetX = this.windows.size * 30;
    const offsetY = this.windows.size * 30;
    windowEl.style.left = `calc(50% + ${offsetX}px)`;
    windowEl.style.top = `calc(50% + ${offsetY}px)`;
    windowEl.style.transform = 'translate(-50%, -50%)';
    windowEl.dataset.lastTransform = 'translate(-50%, -50%)';

    windowEl.innerHTML = `
      <div class="window-titlebar">
        <div class="window-title">
          <div class="window-icon">${windowData.icon}</div>
          <span>${windowData.title}</span>
        </div>
        <div class="window-controls">
          <div class="window-btn minimize">_</div>
          <div class="window-btn maximize">□</div>
          <div class="window-btn close">✕</div>
        </div>
      </div>
      <div class="window-content">
        ${windowData.content}
      </div>
      <div class="statusbar">
        <div>就绪</div>
        <div>页面已加载 | 本地 Intranet | 受保护模式: 关闭</div>
      </div>
    `;

    // 添加打开动画
    windowEl.style.opacity = '0';
    windowEl.style.transform = 'translate(-50%, -50%) scale(0.8)';

    document.getElementById('windows-container').appendChild(windowEl);

    // 触发动画
    setTimeout(() => {
      windowEl.style.transition = 'all 0.3s ease';
      windowEl.style.opacity = '1';
      windowEl.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);

    // 保存窗口引用
    this.windows.set(windowId, windowEl);

    // 绑定事件
    this.bindWindowEvents(windowEl, windowId);
  }

  // 绑定窗口事件
  bindWindowEvents(windowEl, windowId) {
    const titlebar = windowEl.querySelector('.window-titlebar');
    const minimizeBtn = windowEl.querySelector('.window-btn.minimize');
    const maximizeBtn = windowEl.querySelector('.window-btn.maximize');
    const closeBtn = windowEl.querySelector('.window-btn.close');

    // 点击窗口置顶
    windowEl.addEventListener('mousedown', () => {
      this.bringToFront(windowId);
    });

    // 拖拽
    this.makeDraggable(windowEl, titlebar);

    // 最小化
    minimizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      // 保存当前的 transform 状态
      const currentTransform = windowEl.style.transform;
      if (currentTransform && currentTransform !== 'none') {
        windowEl.dataset.lastTransform = currentTransform;
      }

      windowEl.style.transition = 'all 0.3s ease';
      windowEl.style.opacity = '0';
      windowEl.style.transform = 'translate(-50%, 100%) scale(0.5)';
      setTimeout(() => {
        windowEl.style.display = 'none';
        windowEl.style.transition = '';
      }, 300);
    });

    // 最大化
    maximizeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (windowEl.classList.contains('maximized')) {
        windowEl.classList.remove('maximized');
        maximizeBtn.textContent = '□';
      } else {
        windowEl.classList.add('maximized');
        maximizeBtn.textContent = '❐';
      }
    });

    // 关闭
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this.closeWindow(windowId);
    });
  }

  // 窗口置顶
  bringToFront(windowId) {
    const windowEl = this.windows.get(windowId);
    if (!windowEl) return;

    windowEl.style.zIndex = ++this.zIndexCounter;
  }

  // 关闭窗口
  closeWindow(windowId) {
    const windowEl = this.windows.get(windowId);
    if (!windowEl) return;

    windowEl.style.transition = 'all 0.3s ease';
    windowEl.style.opacity = '0';
    windowEl.style.transform = 'translate(-50%, -50%) scale(0.8)';

    setTimeout(() => {
      windowEl.remove();
      this.windows.delete(windowId);
    }, 300);
  }

  // 拖拽功能
  makeDraggable(windowEl, titlebar) {
    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    titlebar.addEventListener('mousedown', (e) => {
      if (e.target.closest('.window-controls')) return;
      if (windowEl.classList.contains('maximized')) return;

      isDragging = true;

      const rect = windowEl.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      // 移除 transition 避免拖拽抖动
      windowEl.style.transition = 'none';
      windowEl.style.transform = 'none';
      windowEl.style.left = rect.left + 'px';
      windowEl.style.top = rect.top + 'px';

      titlebar.style.cursor = 'move';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();

      let newX = e.clientX - offsetX;
      let newY = e.clientY - offsetY;

      const maxX = window.innerWidth - windowEl.offsetWidth;
      const maxY = window.innerHeight - windowEl.offsetHeight;

      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));

      windowEl.style.left = newX + 'px';
      windowEl.style.top = newY + 'px';
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        titlebar.style.cursor = '';
      }
    });
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  const windowManager = new WindowManager();

  // 桌面图标点击事件
  const desktopIcons = document.querySelectorAll('.desktop-icon');
  desktopIcons.forEach(icon => {
    icon.addEventListener('dblclick', () => {
      const windowId = icon.dataset.window;
      windowManager.createWindow(windowId);
    });

    // 单击选中效果
    icon.addEventListener('click', () => {
      desktopIcons.forEach(i => i.classList.remove('selected'));
      icon.classList.add('selected');
    });
  });

  // 点击桌面取消选中
  document.body.addEventListener('click', (e) => {
    if (!e.target.closest('.desktop-icon')) {
      desktopIcons.forEach(i => i.classList.remove('selected'));
    }
  });

  console.log('%c欢迎来到复古博客！', 'color: #0078d7; font-size: 16px; font-weight: bold;');
  console.log('%c双击桌面图标打开窗口', 'color: #666; font-size: 12px;');
});
