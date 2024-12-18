const priceToggle = document.getElementById('price-toggle');
const priceToggleText = document.getElementById('price-toggle-text');
const prices = document.querySelectorAll('.price');

priceToggle.addEventListener('change', () => {
    prices.forEach(price => {
        if (priceToggle.checked) {
            price.textContent = price.getAttribute('data-annual');
            priceToggleText.innerText = "Toggle to Monthly Pricing";
        } else {
            price.textContent = price.getAttribute('data-monthly');
            priceToggleText.innerText = "Toggle to Annual Pricing";
        }
    });
});