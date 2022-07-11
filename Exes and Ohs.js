function XO(str) {
    let x = 0;
    let o = 0;
    console.log(str.length);
    console.log(str.charAt(0));
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'X' || str.charAt(i) == 'x')
            x = x + 1;
        console.log(str.charAt(i), x);
        if (str.charAt(i) == 'O' || str.charAt(i) == 'o')
            o = o + 1;
        console.log(str.charAt(i), o);
    }
    if (x == o)
        return 1>0;
    else
        return 0>1;
}
