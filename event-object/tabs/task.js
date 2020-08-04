const tabs = Array.from(document.querySelectorAll('.tab')),
      tabsContent = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('tab_active');
            tabsContent[j].classList.remove('tab__content_active');
        };
        tab.classList.add('tab_active');
        tabsContent[i].classList.add('tab__content_active');
    });
});