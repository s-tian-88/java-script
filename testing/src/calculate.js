export function calculateTotal(purchases, applyDiscount) {
    const sum = purchases.reduce(
        (accumulator, currentValue) => accumulator + currentValue.price * currentValue.count,
        0,
    );
    if (applyDiscount) {
        return sum * 0.5;
    }
    return sum;
}

