function testst() {
  var f = 1232;

  for (var i = 1; i < 10; i++) {
    if (f === 1234 || f === 12412 || f === 12214) {
      fetch(f);
      if (window === "undefined") {
        fetch(f);
      }
    }
  }
}

function jsx() {
  const message = () => <span>Test</span>;
}
