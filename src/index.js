/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */


module.exports = function getLoveTrianglesCount(preferences = []) {
    var loveChains = [];
    var count = [];

    for(let i = 0; i < preferences.length; i++){
        let j = i;
        let chain = [i];
        while(!chain.includes(preferences[j] - 1)){
            chain.push(preferences[j] - 1);
            j = preferences[j] - 1;
        }

        if(chain[0] == preferences[j] - 1 && chain.length == 3){
            chain.sort();
            if(!count.includes(chain.toString()))
                {
                    count.push(chain.toString());
                }
        }

    }


    return count.length;
};
