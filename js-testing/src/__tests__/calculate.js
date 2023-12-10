import { calculateTotal } from '../calculate.js'

test('description', () => { // функция тестирования
    const result = 23
    expect(result).toBe(23)// функция сравнения резултирующего значения с эталонным  
}); 

test('calculateTotal', () => {
    const list = [
        {
            id: 23,
            name: 'Война и мир',
            count: 3,
            price: 400
        },
        {
            id: 3,
            name: 'JavaScript',
            count: 1,
            price: 1300
        }
    ];
    const result = calculateTotal(list);
    expect(result).toBeCloseTo(2500);
});

