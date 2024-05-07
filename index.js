import { intro, outro, confirm, text, isCancel, cancel } from "@clack/prompts";
import { getNameProject } from "./startup/name.js";

intro("Create application node js es6 !!!");
const shouldContinue = await confirm({
	message: "Do you want to continue?",
});

if (shouldContinue) {
	getNameProject();
} else {
	cancel("Operation cancelled.");
	process.exit(0);
}
