let button = {
  initialValue: 0,
  increasefunc() {
    this.initialValue++;
    document.getElementById("number").value = this.initialValue;
  },
  decreasefunc() {
    this.initialValue--;
    document.getElementById("number").value = this.initialValue;
  },
};
