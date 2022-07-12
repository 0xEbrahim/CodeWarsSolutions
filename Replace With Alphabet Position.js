function alphabetPosition(text) {
  text = text.toLowerCase();
  let res = '';
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i).match(/[a-z]/i)) res += `${text.charCodeAt(i) - 96} `;
  }
  res = res.split(' ');
  res.splice(res.length - 1, 1);
  return res.join(' ');
}
