const tabLists = Array.from(document.querySelectorAll('.tabs'));

for (let i = 0; i < tabLists.length; i++) {
    k = i + 1;

    
    const tabsNavigation = document.querySelector('#tabs' + k + ' > .tab__navigation');
    const tabs = Array.from(document.querySelectorAll('#tabs' + k + ' > .tab__navigation > .tab'));
    let activeTab = document.querySelector('#tabs' + k + ' > .tab__navigation > .tab_active');
    const tabContents = Array.from(document.querySelectorAll('#tabs' + k + ' > .tab__contents > .tab__content'));
    let activeTabContent = document.querySelector('#tabs' + k + ' > .tab__contents > .tab__content_active');


    function setActiveTab(tab) {
        if (activeTab) {
            activeTab.classList.remove('tab_active');
        }
        activeTab = tab;
        activeTab.classList.add('tab_active');

        const tabActiveIndex = tabs.indexOf(activeTab);

        if (activeTabContent) {
            activeTabContent.classList.remove('tab__content_active');
        }   

        function findContent() {
            for (let j = 0; j < tabContents.length; j++) {
                if (j === tabActiveIndex) {
                    return tabContents[j];     
                }           
            }
        }

        activeTabContent = findContent();
        if (activeTabContent) {
            activeTabContent.classList.add('tab__content_active');
        }
    }

    tabsNavigation.addEventListener("click", (e) => {
        let target = e.target;

        if (!target.classList.contains('tab')) {
            return;
        }

        setActiveTab(target);
        
       });   

}
