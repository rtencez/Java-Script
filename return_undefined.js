function abTest(a, b ) {
    if ( a < b)   {
        return undefined;
    }

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
} console.log(abTest(-2,2));