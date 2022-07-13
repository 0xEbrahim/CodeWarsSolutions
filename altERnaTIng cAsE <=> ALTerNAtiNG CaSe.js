String.prototype.toAlternatingCase = function () {
  let k = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] == this[i].toUpperCase()) {
      k += this[i].toLowerCase();
    } else if (this[i] == this[i].toLowerCase()) {
      k += this[i].toUpperCase();
    } else {
      k += " ";
    }
  }
  return k;
}
