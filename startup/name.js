import { text, outro } from "@clack/prompts";
import { exec } from "child_process";

export const getNameProject = async () => {
	let meaning = await text({
		message: "Nama project yang mau dibuat apa ?",
		placeholder: "aplikasi yang keliatannya keren kan :D",
		//initialValue: "apps",
		validate(value) {
			if (value.length === 0) return `Value is required!`;
		},
	});

	meaning = meaning.replace(/\s+/g, "-");

	console.log("nilai nya == ", meaning);
	if (meaning) {
		await exec(
			`git clone https://github.com/reisap/nestjs-microservices.git ${meaning} && cd ${meaning} && git remote remove origin`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`error: ${error.message}`);
					return;
				}
				if (stderr) {
					console.error(`stderr: ${stderr}`);
					return;
				}
			}
		);
		outro(`You're all set!`);
		process.exit(0);
	} else {
		process.exit(0);
	}
};

/*
module.exports = async function () {

}
*/
