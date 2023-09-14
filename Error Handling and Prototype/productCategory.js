const products = [
    { id: 1, name: "Refrigrator", category: "Electronics" },
    { id: 2, name: "Tshirt", category: "Clothing" },
    { id: 3, name: "Trimmer", category: "Electronics" },
    { id: 4, name: "Novel", category: "Books" },
    { id: 5, name: "Doglapan", category: "Books" },
    { id: 6, name: "Microwave", category: "Electronics" },
    { id: 7, name: "Jeans", category: "Clothing" },
    { id: 8, name: "Cargo", category: "Clothing" },
];

function filterProductsByCategory(products) {
    return function(category) {
        return products.filter((p) => p.category === category)
    }
}
const filterByCategory = filterProductsByCategory(products);
  
const electronicsProducts = filterByCategory("Books");
console.log(electronicsProducts);
  