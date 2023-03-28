document.addEventListener("DOMContentLoaded", function () {
  const productItems = document.querySelectorAll(".product-item");
  const productsGrid = document.querySelector(".products-grid");

  productItems.forEach((item) => {
    item.addEventListener("click", () => {
      const itemRect = item.getBoundingClientRect();
      const gridRect = productsGrid.getBoundingClientRect();
      const scrollPosition = itemRect.left - gridRect.left;

      productsGrid.scrollBy({
        left: scrollPosition,
        behavior: "smooth",
      });
    });
  });
});
