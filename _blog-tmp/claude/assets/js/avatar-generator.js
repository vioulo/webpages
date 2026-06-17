// 高级哈希函数 - 确保输入的微小差异产生巨大输出差异
function advancedHash(str) {
  let hash = 0;

  // 第一轮：基础哈希
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // 转换为32位整数
  }

  // 第二轮：混淆处理
  hash = Math.abs(hash);
  hash = ((hash * 2654435761) >>> 0); // 乘以大质数

  // 第三轮：位运算混淆
  hash ^= (hash >>> 16);
  hash *= 0x85ebca6b;
  hash ^= (hash >>> 13);
  hash *= 0xc2b2ae35;
  hash ^= (hash >>> 16);

  return Math.abs(hash);
}

// 组合哈希 - 将用户名和邮箱以不同方式组合
function combinedHash(username, email) {
  // 多种组合方式，增加差异性
  const hash1 = advancedHash(username + email);
  const hash2 = advancedHash(email + username);
  const hash3 = advancedHash(username.split('').reverse().join('') + email);
  const hash4 = advancedHash(email.split('').reverse().join('') + username);

  // 交叉混合
  return {
    primary: hash1,
    secondary: hash2,
    tertiary: hash3,
    quaternary: hash4,
    combined: (hash1 ^ hash2 ^ hash3 ^ hash4) >>> 0
  };
}

// 生成颜色 - 使用多个哈希值确保丰富的色彩
function generateColors(hashes) {
  // 使用不同的哈希值生成不同的颜色分量
  const hue1 = hashes.primary % 360;
  const hue2 = (hashes.secondary % 360);
  const saturation = 60 + (hashes.tertiary % 30); // 60-90%
  const lightness = 45 + (hashes.quaternary % 20); // 45-65%

  // 生成渐变色
  const color1 = `hsl(${hue1}, ${saturation}%, ${lightness}%)`;
  const color2 = `hsl(${hue2}, ${saturation + 10}%, ${lightness + 10}%)`;

  return { color1, color2, hue1, hue2 };
}

// 生成渐变角度
function generateAngle(hash) {
  return hash % 360;
}

// 生成图案
function generatePattern(hash) {
  const patterns = [
    'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2) 0%, transparent 50%)',
    'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.15) 0%, transparent 60%)',
    'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%)',
    'repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)',
    'conic-gradient(from 0deg, rgba(255,255,255,0.1), transparent, rgba(255,255,255,0.1))'
  ];

  return patterns[hash % patterns.length];
}

// 获取首字母
function getInitials(username) {
  if (!username) return '?';

  const words = username.trim().split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return username.substring(0, 2).toUpperCase();
}

// 生成短哈希标识
function generateShortHash(hash) {
  return hash.toString(16).substring(0, 8).toUpperCase();
}

// 主生成函数
function generateAvatar(username, email) {
  // 输入验证
  if (!username || !email) {
    alert('请填写用户名和邮箱');
    return;
  }

  // 生成哈希
  const hashes = combinedHash(username.toLowerCase().trim(), email.toLowerCase().trim());

  // 生成颜色
  const colors = generateColors(hashes);

  // 生成角度
  const angle = generateAngle(hashes.combined);

  // 生成图案
  const pattern = generatePattern(hashes.quaternary);

  // 获取首字母
  const initials = getInitials(username);

  // 生成唯一标识
  const uniqueId = generateShortHash(hashes.combined);

  // 更新UI
  const avatarBubble = document.getElementById('avatarBubble');
  const patternOverlay = document.getElementById('patternOverlay');
  const avatarPreview = document.getElementById('avatarPreview');

  // 设置渐变背景
  avatarBubble.style.background = `linear-gradient(${angle}deg, ${colors.color1}, ${colors.color2})`;

  // 设置图案
  patternOverlay.style.background = pattern;

  // 更新信息
  document.getElementById('colorValue').textContent = `${colors.color1} → ${colors.color2}`;
  document.getElementById('angleValue').textContent = `${angle}°`;
  document.getElementById('hashValue').textContent = uniqueId;

  // 显示预览
  avatarPreview.classList.add('show');

  // 保存当前配置到全局变量
  window.currentAvatarConfig = {
    username,
    email,
    colors,
    angle,
    pattern,
    initials,
    uniqueId
  };
}

// 复制配置
function copyAvatarData() {
  if (!window.currentAvatarConfig) {
    alert('请先生成头像');
    return;
  }

  const config = window.currentAvatarConfig;
  const data = `头像配置
用户名: ${config.username}
邮箱: ${config.email}
颜色: ${config.colors.color1} → ${config.colors.color2}
角度: ${config.angle}°
唯一标识: ${config.uniqueId}
首字母: ${config.initials}`;

  navigator.clipboard.writeText(data).then(() => {
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '已复制!';
    btn.style.color = 'var(--accent)';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    alert('复制失败，请手动复制');
  });
}

// 表单提交处理
document.getElementById('avatarForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  generateAvatar(username, email);
});

// 实时预览（可选）
let debounceTimer;
function setupLivePreview() {
  const inputs = document.querySelectorAll('.form-input');

  inputs.forEach(input => {
    input.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        if (username && email) {
          generateAvatar(username, email);
        }
      }, 500);
    });
  });
}

// 启用实时预览（可选功能）
// setupLivePreview();

console.log('🎨 头像生成器已加载');
