function findRepeatedDnaSequences(s: string): string[] {
    const repeatedSequences = {}
    const k = 10
    if(s.length < k) return [];
    for(let i= 0; i < s.length ; i++){
        const currentSequence = s.substring(i, i + k);
        if(!repeatedSequences[currentSequence]) repeatedSequences[currentSequence] = 0;
        repeatedSequences[currentSequence]++;
    }
    console.log(repeatedSequences);
    const reverseMap = {}
    const sequencies = Object.keys(repeatedSequences)
    sequencies.forEach(seqKey => {
        if(!reverseMap[repeatedSequences[seqKey]]) reverseMap[repeatedSequences[seqKey]] = [seqKey]
	    else reverseMap[repeatedSequences[seqKey]].push(seqKey);
    })
    const reps : number[] = Object.keys(reverseMap).map(key => Number(key));
    console.log(reps);
    const maxRep = sequencies.length === 1? reps[0] : Math.max(...reps) > 1 ? Math.max(...reps) : -1
    console.log(maxRep)
    const maxRepsSequences: string[] = reverseMap[maxRep] || []
	return maxRepsSequences;
}