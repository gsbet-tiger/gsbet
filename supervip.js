document.addEventListener('DOMContentLoaded', (event) => {
  const tabs = document.querySelectorAll('.vip-tab-box .el-tabs__item');
  const activeBar = document.querySelector('.vip-tab-box .el-tabs__active-bar');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = e.target;
      
      // 移除所有标签的激活状态
      tabs.forEach(t => {
        t.classList.remove('is-active');
        t.style.color = ''; // 恢复默认颜色
      });
      // 添加激活状态到点击的标签
      targetTab.classList.add('is-active');
      targetTab.style.color = '#409EFF';

      // 通过锚点跳转
      const href = targetTab.getAttribute('href');
      document.querySelector(href).scrollIntoView({behavior: 'smooth'});
    });

    // 添加悬停效果
    tab.addEventListener('mouseenter', () => {
      if (!tab.classList.contains('is-active')) {
        tab.style.color = '#409EFF';
      }
    });
    tab.addEventListener('mouseleave', () => {
      if (!tab.classList.contains('is-active')) {
        tab.style.color = ''; // 恢复默认颜色
      }
    });
  });
});
