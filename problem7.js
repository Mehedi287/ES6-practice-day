//  problem 7

const oppos =
    [
        { name: 'oppo', id: 98, price: 909 },
        { name: 'samsung', id: 897, price: 5000 },
        { name: 'samsung', id: 897, price: 3298 },
        { name: 'samsung', id: 897, price: 328 },
        { name: 'samsung', id: 897, price: 3248 }


    ]

const price = oppos.find(l => l.price == 500);
console.log(price);
