const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach((tip) => {
    const tipText = tip.getAttribute('title');
    let toolTipIsShown = false;
    const tipPositionBottom = tip.getBoundingClientRect().bottom;
    const tipPositionLeft = tip.getBoundingClientRect().left;

    tip.addEventListener('click', (e) => {
        e.preventDefault();
        if (toolTipIsShown === false) {
            tip.insertAdjacentHTML('beforeend',
            `<div class="tooltip" style="left: ${tipPositionLeft}px; top: ${tipPositionBottom}px; display: block; position: absolute">
                ${tipText}
            </div>`
            );
            toolTipIsShown = true;
        } else {
            tip.removeChild(tip.lastChild);
            toolTipIsShown = false;
        }
    });
    tip.addEventListener('blur', () => {
        if (toolTipIsShown === true) {
            tip.removeChild(tip.lastChild);
            toolTipIsShown = false;
        }   
    });
});