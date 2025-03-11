import { ColorlessGreenIpsumGenerator } from "./generator";

export { ColorlessGreenIpsumGenerator };

// Create a default instance for easy use
const defaultGenerator = new ColorlessGreenIpsumGenerator();

export default {
    generate: (paragraphs = 3, sentencesPerParagraph = 4) =>
        defaultGenerator.generateIpsum(paragraphs, sentencesPerParagraph),
    generateParagraph: (sentences = 4) =>
        defaultGenerator.generateParagraph(sentences),
    generateSentence: () => defaultGenerator.generateSentence(),
};
