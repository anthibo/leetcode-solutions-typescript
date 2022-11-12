function minWindow(s: string, t: string): string {

    // edge cases
    // if s.len < t.len return ""
    if(s.length < t.length) return "";

    // initialization
    const tMap = new Map();
    let 
    t.split('').forEach((c, i) => tMap.set(i, c));
};

console.log(minWindow("ABCD" , "ABC")) // "ABC"
