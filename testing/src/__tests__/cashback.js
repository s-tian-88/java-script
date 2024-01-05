import calculateCashback from '../cashback.js'

test.each(
    [
        ['gold', 100000, 5000],
        ['silver', 10000, 200],
        ['regular', 1000, 10],
        ['no', 500, 0],
    ]
)(
    'testing cashback function with %s status and %i amount',
    (status, amount, expected) => {
        expect(calculateCashback(amount)).toBe(expected);
    }
)
