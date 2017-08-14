#!/usr/bin/env node

// Reads JSON from stdin and writes equivalent, nicely-formatted JSON to stdout.
// Hat-tip and all credit go out to [@kristopherjohnson](https://github.com/kristopherjohnson)
// Kristopher's Original Article: [An OS X Automator Service for Reformatting JSON Text](http://undefinedvalue.com/os-x-automator-service-reformatting-json-text.html)

export default function () {
  const config = {
    width: 4, // four
    character: ' ', // spaces
  };
  const stdin = process.stdin;
  const stdout = process.stdout;

  const inputChunks = [];

  stdin.resume();
  stdin.setEncoding('utf8');

  stdin.on('data', chunk => inputChunks.push(chunk));

  stdin.on('end', () => {
    const space = config.character.repeat(config.width);
    const inputJSON = inputChunks.join();
    const parsedData = JSON.parse(inputJSON);
    const outputJSON = JSON.stringify(parsedData, null, space);

    stdout.write(outputJSON);
    stdout.write('\n');
  });
}
