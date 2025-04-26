1. It will print 3, because i is var variable, meaning it can be accessed outside of the loop it was defined in. 
2. This will return 150 because after iterating 3 times, discountedPrice has a value of 150 and, even after the for loop, discountedPrice is still acessible because it is a var type. 
3. In its final iteration, finalPrice is set to 150 after doing this calculation : finalPrice = Math.round(150*100)/100 = 150. finalPrice actually sets its value to the discountedPrice in every iteration. 
4. This will return [50,100,150] because it takes the each element in the prices array, calculates the discount for each one, applies it, and pushes the new price to "discounted" array.    
5. This returns an error because the variable i was declared a "let" type and therefore is not accessible outside of its for loop. 
6. Similar to the last question, this returns an error because discountedPrice was defined in the for loop. Once the program leaves the for loop, discountedPrice is not longer accessible. 
7. This will return 150 and not an error because finalPrice was defined outside of a loop or block. This makes it accessible after the for loop. It has a value of 150 because in its last iteration, it was calculating a discount for the last price (300). 
8. This will return [50,100,150] because, like finalPrice, the discounted array was defined outside the for loop, meaning it can be accessed later. It has the correct values because after each iteration, finalPrice was calculated and its value was pushed to this array. 
9. This will return an error because i was defined as a "let" type and defined inside the for loop. Therefore, i is not accessible outside of the for loop. 
10. This returns 3 because length is a "const" variable type that was defined outside of any loops. Moreover, there were no attempts in the program to reassign length. Therefore, errors weren't returned and it is accessible later on.
11. This returns [50,100,150] because in each iteration the discount is applied to the price, which is then pushed to the discounted array. Modifiying the array, like pushing, seems to be okay with const variables. 
12. 
    A. student.name
    B. student['Grad year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. 
    A.'32' because 2 maps to '2', string concatenation. 
    B. 1 because '3' is concerted to an integer to be able to do subtraction.
    C. 3, because null is treated as a 0
    D.'3null' because addition is treated as string concatentation if at least one value is a string. 
    E. 4 because true maps to 1. 
    F. 0 because false and null map to 0 
    G. '3undefined' because '3' is a string, so it performs string concatenation.
    H. NaN. Because it's a subtraction problem, '3' is mapped to 3 and undefined is mapped to NaN. 3-NaN = NaN
14. 
    A. true, because '2' is converted to integer so it can perform comparison (because 1 is already an int). 
    B. false, because both are strings, so then it compares first character in the string.
    C. true, because '2' is treated as an int to do compare values. 2 == 2 is true.
    D. false, because its a strict comparison so types are also compared. int is not equal to string. 
    E. false, because true (which is mapped to 1) does not equal to 2.
    F. Boolean(2) is equal to true (it seems as every Boolean(x) except Boolean(0) equals to true), So true === true returns true. 
15. "==" and "===" both check for equivalency but "===" is more strict, and doesn't do type conversions in order to perform the comparison, like "==". This means that "===" checks for value AND type to be equal. 
16. GO TO .js FILE
17. The result will be [2,4,6]. This is because for each index of "array", the function modifyArray calls doSomething and sets the values of "array as the parameter. doSomething takes a parameter and then multiplies it by 2. After it does this to one value, modifyArray pushes that new value to newArray. By the end of the for loop, the program has gone through "array" and effectively multiplied each value by two and setting this new array as "newArr". 
18. GO TO .js FILE
19. It prints:
1
4
3
2




