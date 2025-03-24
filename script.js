let cartCount = 0;

// تابع برای افزودن به سبد خرید
function addToCart() {
    cartCount++;
    document.getElementById("cartCount").textContent = cartCount;
}
