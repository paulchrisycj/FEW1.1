document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const element = document.getElementsByClassName("basic-editor")[0];
    const isFocused = (element === document.activeElement);
    if(isFocused)
        return false;
    const spinButton = document.getElementsByTagName("canvas")[0];
    if (spinButton) {
      spinButton.click();
    }
  }
});