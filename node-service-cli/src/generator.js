import { mkdir, writeFile } from "fs/promises";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { exec } from "child_process";
import { promisify } from "util";
import chalk from "chalk";
import copy from "recursive-copy";

const __dirname = dirname(fileURLToPath(import.meta.url));
const execPromise = promisify(exec);

function showError(errorMessage, exception) {
  console.log("\n", chalk.red("⚠️ ", errorMessage), "\n");
  console.error(exception);
  process.exit(1);
}

async function createProjectFolder(name) {
  const folderPath = resolve(process.cwd(), name);

  try {
    await mkdir(folderPath);
  } catch (e) {
    showError("Não foi possível criar uma pasta com este nome", e);
  }
}

async function createPackageJson(projectName, startTool, codeFormat) {
  let packageJson = {
    name: projectName,
    version: "1.0.0",
    description: "MY first node service project",
    main: "src/index.js",
    license: "MIT",
    scripts: {
      start: "node src/index.js",
    },
  };

  if (startTool === "nodemon") {
    packageJson = {
      ...packageJson,
      scripts: { start: "nodemon src/index.js" },
      devDependecies: { nodemon: "^2.0.19" },
    };
  }

  if (codeFormat === "ecmascript") {
    packageJson = { ...packageJson, type: "module" };
  }

  const packageJsonPath = resolve(process.cwd(), projectName, "package.json");
  const dataPackageJson = JSON.stringify(packageJson, null, 2);

  try {
    await writeFile(packageJsonPath, dataPackageJson);
  } catch (e) {
    showError("Não foi possível criar o arquivo package.json", e);
  }
}

async function copySrcTemplate(projectName, codeFormat) {
  const destinyPath = resolve(process.cwd(), projectName, "src");
  const originPath = resolve(__dirname, "..", "templates", `src-${codeFormat}`);

  try {
    await copy(originPath, destinyPath);
  } catch (e) {
    showError("Não foi possível criar a pasta src", e);
  }
}

async function initGit(projectName) {
  const gitignorePath = resolve(process.cwd(), projectName, ".gitignore");

  try {
    await execPromise("git init", { cwd: resolve(process.cwd(), projectName) });
    await writeFile(gitignorePath, "node_modules");
  } catch (e) {
    showError("Não foi possível iniciar o git", e);
  }
}

async function installPackages(projectName) {
  try {
    await execPromise("npm install", {
      cwd: resolve(process.cwd(), projectName),
    });
  } catch (e) {
    showError("Não foi possível instalar os pacotes", e);
  }
}

async function generator(options) {
  const { name, startTool, codeFormat, git } = options;

  await createProjectFolder(name);
  await createPackageJson(name, startTool, codeFormat);
  await copySrcTemplate(name, codeFormat);

  if (git) {
    initGit(name);
  }

  await installPackages(name);

  console.log(
    "\n",
    chalk.green("✔️ ", "Sucesso ao criar o projeto: ", name),
    "\n"
  );
}

export default generator;
