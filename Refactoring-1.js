function getMaxIndex(string, char1, char2) {

    if (string === '') return -1;
  
    let index = string.length - 1;
  
    let char1Index = -1;
  
    let char2Index = -1;
  
    while (char1Index === -1 && char2Index === -1 && index > 0) {
  
      let char = string[index];
  
      if (char === char1) {
        char1Index = index;
      }
  
      if (char === char2) {
        char2Index = index;
      }
  
      index--;
  
    }
  
    return Math.max(char1Index, char2Index);
  }