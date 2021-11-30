let seconds = 100;

// Need to escape the backslash since it's a special character.
let string = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|",];

for (let element of string) {
  setTimeout(() => {
    process.stdout.write('\r'+ element +'   ');
  }, seconds);
  seconds += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, seconds);