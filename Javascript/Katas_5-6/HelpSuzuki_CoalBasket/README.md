# 5Kyuu -[Help Suzuki Pack His Coal Basket!](https://www.codewars.com/kata/help-suzuki-pack-his-coal-basket/train/javascript)
## Description:
### Help Suzuki Pack His Coal Basket!

Suzuki is preparing for a walk over fire ceremony high up in the mountains and the monks need coal for the fire. He must pack a basket of coal to the optimal level for each trip up the mountain. He must fit as much as possible into his basket. He can either take a piece of coal or leave it so he must chose which pieces will be optimal for the trip based on the weight in order to maximize the basket capacity.

10 ≤ basket ≤ 200

1 ≤ pile ≤ 100

You will be given a data structure similar to the one below:

```
pile = 'dust 1 dust 4 dust 8 dust 100 dust'

basket = 43

Return the weight of the coal:

'The basket weighs 13 kilograms'

basket = 50

pile = 'dust83dust 45 25 22 46'

Returns:

'The basket weighs 47 kilograms'
```
## Instructions:
Rake out the dust setting the pieces represented as integers for their weight aside. Take as much coal as possible filling the basket as close to its capacity as possible.

The size of the basket will change with each test as Suzuki exchanges it for an empty one on each trip up the mountain.

Return the weight of the coal as a string:

'The basket weighs 13 kilograms'

If there are no pieces of coal that will fit in the basket the solution returns:

'The basket weighs 0 kilograms'

```
//Additional Code Snippet Here if it applies
```

### Sample Tests:
```
Test.describe("Basic tests",_=>{
basket = 48;
pile = 'dust dust 1';
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 1 kilograms');
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 43
pile = 'dust 1 dust 4 dust 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 13 kilograms')
basket = 54
pile = 'dust 2 7 1 13 dust 4 75 dust 17 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 52 kilograms')
basket = 47
pile = 'dust 2 7 1 dust 4 75 dust 17 8 dust 100 dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 41
pile = 'dust 2 7 1 dust 4 75 dust 17 8dust 100dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 39 kilograms')
basket = 35
pile = 'dust83dust 61 146 51 48 170 100 114 145 191 29 7 12 139 136 62 123 43 dust46dust 36 92 dust9dust 144 2 dust150dust'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 31 kilograms')
basket = 50
pile = 'dust83dust 45 25 22 46'
Test.assertSimilar(packBasket(basket,pile),'The basket weighs 47 kilograms')
basket = 10
pile = 'dust83dust 45 25 22 46'
Test.assertSimilar(packBasket(basket,pile), 'The basket weighs 0 kilograms')
})
```