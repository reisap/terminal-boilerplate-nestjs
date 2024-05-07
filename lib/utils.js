export const containsWhitespace = (str) => /\s/.test(str);
export const removeWhitespace = (str) => {
	return str.replace(/\s+/g, "");
};
export const compactWhitespace = (str) => {
	return str.replace(/\s{2,}/g, " ");
};
