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