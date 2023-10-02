const readline = require("readline");
const { exec } = require("child_process");
const util = require("util");

const execPromisified = util.promisify(exec);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function execute(command) {
  try {
    const { stdout, stderr } = await execPromisified(command);
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  } catch (error) {
    console.error(`Error executing command: ${error}`);
  }
}

rl.question("Enter your commit message: ", async (commitMessage) => {
  await execute("git add .");
  await execute(`git commit -m "${commitMessage}"`);
  await execute("git push origin main");

  console.log("Successfully pushed to GitHub.");
  rl.close();
});
