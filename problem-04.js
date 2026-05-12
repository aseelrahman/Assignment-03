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