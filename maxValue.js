const maxValue = (nums) => {
    let maximum = -Infinity;

    for(let num of nums){
        if(num > maximum) maximum = num;
    }

    return maximum;
};

maxValue([8,2,3,10]) // return 10