function add(numbers) {
  if (numbers === '') return 0;
  
  let delimiters = [','];
  let numbersToProcess = numbers;
  
  if (numbers.startsWith('//')) {
    const parts = numbers.split('\n');
    const delimiterSection = parts[0].substring(2);
    
    // Handle multiple delimiters with brackets
    if (delimiterSection.includes('[')) {
      delimiters = delimiterSection
        .match(/\[(.*?)\]/g)
        .map(d => d.slice(1, -1)); // Remove brackets
    } else {
      delimiters = [delimiterSection];
    }
    
    numbersToProcess = parts[1];
  }
  
  // Replace newlines with first delimiter and create regex for all delimiters
  let normalizedInput = numbersToProcess.replace(/\n/g, delimiters[0]);
  delimiters.forEach(delimiter => {
    const regex = new RegExp(delimiter.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'g');
    normalizedInput = normalizedInput.replace(regex, ',');
  });
  
  const nums = normalizedInput.split(',').map(num => parseInt(num));
  
  const negativeNumbers = nums.filter(num => num < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(',')}`);
  }
  
  return nums
    .filter(num => num <= 1000)
    .reduce((sum, num) => sum + num, 0);
}

module.exports = { add }; 