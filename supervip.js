document.addEventListener('DOMContentLoaded', function() {
  // 获取包含标签列表的div元素
  var tabList = document.querySelector('div[role="tablist"].el-tabs__nav.is-top');
  
  // 如果找到了这个div元素
  if (tabList) {
    // 使用Flexbox居中对齐
    tabList.style.display = 'flex';
    tabList.style.justifyContent = 'center';

    // 调整每个标签的间距（可选）
    var tabs = tabList.querySelectorAll('a');
    tabs.forEach(function(tab) {
      tab.style.margin = '0 10px'; // 左右间距10px
    });

    // 添加点击事件处理器（可选）
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接跳转行为
        
        // 移除所有标签的active类
        tabs.forEach(function(t) {
          t.classList.remove('is-active');
        });

        // 给点击的标签添加active类
        this.classList.add('is-active');
        
        // 处理标签切换逻辑
        var targetId = this.getAttribute('href').substr(1); // 获取#后面的ID
        var targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // 隐藏所有标签内容
          document.querySelectorAll('[id^="tab-"]').forEach(function(el) {
            el.style.display = 'none';
          });

          // 显示选中的标签内容
          targetElement.style.display = 'block';
        }
      });
    });
  }
});
