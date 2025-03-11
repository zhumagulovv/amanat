import initialize from "./src/services/webServer.js";

async function main() {
  try {
    await initialize();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
