/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, r) => {
    const up = Array.from({ length: r }, (c, i) => i);
    const down = Array.from({ length: r - 2 }, (c, i) => i + 1).reverse();
    const zigzag = [...up, ...down];

    const res = new Array(r).fill``; 

    for (let i = 0; i < s.length; i++)
        res[zigzag[i % zigzag.length]] += s[i];

    return res.join``
};