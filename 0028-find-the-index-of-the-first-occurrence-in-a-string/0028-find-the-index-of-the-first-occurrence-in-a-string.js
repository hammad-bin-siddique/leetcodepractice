/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    const hayLength = haystack.length; 
    const neeLength = needle.length;

    if(neeLength === 0) {
        return 0;
    }

    let i = 0; 
    while(i < hayLength) {
        let neeIndex = 0; 
        let j = i; 

        while(j < hayLength && neeIndex < neeLength && haystack[j] === needle[neeIndex]) {
            j++; 
            neeIndex++;
        }

        if(neeIndex === neeLength) {
            return i; 
        }
        i++;
    }
    return -1;
}