function finalScore(omr) {
    let total = 0;
    if(omr.right + omr.wrong + omr.skip !== 100){
        return 'Invalid'
    }
    else{
        total = omr.right;
        total = total - (omr.wrong*0.5);

    }
    return Math.round(total);
}

const omr = {
    "right": 67,
    "wrong": 23,
    "skip": 10,
}