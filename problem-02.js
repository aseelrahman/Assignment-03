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

console.log(validOtp("ph-10985"));
