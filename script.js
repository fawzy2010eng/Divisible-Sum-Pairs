function divisibleSumPairs(n, k, ar) {
    var pair = 0;
    for(var i = 0; i < n; i++){
        for(var j = 0; j < n;j++){
            if(i<j && ((ar[i]+ar[j])%k == 0)){
                 pair++;
            }
        }  
    }
    return pair
}
