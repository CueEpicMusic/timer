let input = process.argv.slice(2);

const timer = function() {
  if (!input.length) {
    console.log(null)
  }
  for (const i of input) {
    if (!Number(i) || i < 0) {
      console.log("Please provide a valid number");
    } else {
      setTimeout(() => {
        process.stdout.write(`\x07`);
      }, i * 1000);
    }
  }
}

timer()