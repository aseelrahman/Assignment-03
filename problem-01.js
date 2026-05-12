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

console.log(newPrice(2000, 15));

