function createProduct(id, price, title, cat) {
    return {
        id: id,
        price: price,
        title: title,
        category: cat
    }
}

const tshirt = createProduct(1, 199, 'tshirt', 'clothes')

console.log(tshirt)
