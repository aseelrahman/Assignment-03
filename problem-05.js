function analyzeText(str) {
    if(typeof str !== 'string' || str === ""){
        return 'Invalid';
    }
    else{
        let words = str.split(' ');
        const wordProperty = {
            'longwords': words[0],
            'token': 0,
        }

        for(const word of words){
            wordProperty.token = wordProperty.token + word.length;

            if(word.length > wordProperty.longwords.length){
                wordProperty.longwords = word;
            }
        }

        return wordProperty;
    }
}