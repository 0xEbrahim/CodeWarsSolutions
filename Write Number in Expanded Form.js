function expandedForm(num) {
  num = String(num).split('');
  let final = '';
  for (let i = 0; i < num.length; i++) {
    if (num[i] == '0') {
      continue;
    } else {
      const x = num.length - i - 1;
      final += num[i] + '0'.repeat(num.length - i - 1) + ' ';
    }
  }
  return final.trim().replace(/ /gi, ' + ');
}
