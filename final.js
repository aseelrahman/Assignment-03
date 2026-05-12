// --------------- Problem - 01 ----------------------
function newPrice(currentPrice, discount) {
    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100){
        return 'Invalid';
    }
    else{
        let discountPrice = (currentPrice * discount)/100;
        let newPrice = currentPrice - discountPrice;
        return newPrice.toFixed(3);
    }
}

// --------------- Problem - 02 ----------------------

function validOtp(otp) {
    if(typeof otp !== 'string'){
        return 'Invalid';
    }
    else if(otp.length !== 8 || otp.slice(0, 3) !== "ph-"){
        return false
    }
    else{
        return true;
    }
}

// --------------- Problem - 03 ----------------------

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

// --------------- Problem - 04 ----------------------

function gonoVote(array) {
    let ha = 0;
    let na = 0;
    if(!Array.isArray(array)){
        return 'Invalid'
    }
    else{
        for(const each of array){
            if(each === 'ha'){
                ha++;
            }
            else{
                na++
            }
        }

        if(ha > na){
            return true;
        }
        else if(ha < na){
            return false;
        }
        else{
            return 'equal'
        }
    }

}

