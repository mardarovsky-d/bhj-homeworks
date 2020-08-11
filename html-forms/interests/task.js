const interests = Array.from(document.querySelectorAll('ul.interests_active input.interest__check'));

interests.forEach((interest) => {
    const interestMain = interest.closest('div.interests_main > ul > li.interest').firstElementChild.firstElementChild;
    interestMain.addEventListener('change', () => {
        if (interestMain.checked) {
            interest.checked = true;
        } else {
            interest.checked = false;
        }
    })
})