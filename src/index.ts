import * as core from "@actions/core";
import { parseSync } from "@swc/core";

async function main() {
	const modelVersion = core.getInput("MODEL_VERSION");

	console.log(`The model version is: ${modelVersion}`);

	const sourceCode = `import * as core from "@actions/core";
async function main() {
	const modelVersion = core.getInput("MODEL_VERSION");
}
main();`;

	const ast = parseSync(sourceCode, {
		syntax: 'typescript',
		tsx: false,
	});

	console.log("--------- HERE IS YOUR AST --------------")
	console.log(JSON.stringify(ast));
}

main();
