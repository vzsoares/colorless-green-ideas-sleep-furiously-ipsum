import Alpine from "alpinejs";
import { ColorlessGreenIpsumGenerator } from "colorless-green-ipsum";

window.Alpine = Alpine;

document.addEventListener("DOMContentLoaded", () => {
    // Add your Alpine data function to window
    const colorlessGreenIpsum = new ColorlessGreenIpsumGenerator();
    window.colorlessGenerator = function () {
        return {
            paragraphCount: 3,
            sentencesPerParagraph: 4,
            generatedText: "",
            isLoading: false,
            style: "erudite", // Default style

            setStyle(newStyle) {
                this.style = newStyle;
                colorlessGreenIpsum.setStyle(newStyle);
            },
            copyButtonText: "Copy to Clipboard",

            // Use the npm package instead of local implementation
            generateText() {
                this.isLoading = true;
                setTimeout(() => {
                    this.generatedText = colorlessGreenIpsum.generate(
                        this.paragraphCount,
                        this.sentencesPerParagraph,
                    );
                    this.isLoading = false;
                    this.copyButtonText = "Copy to Clipboard";
                }, 300);
            },

            copyToClipboard() {
                navigator.clipboard.writeText(this.generatedText).then(() => {
                    this.copyButtonText = "Copied!";
                    setTimeout(() => {
                        this.copyButtonText = "Copy to Clipboard";
                    }, 2000);
                });
            },

            init() {
                this.generateText();
            },
        };
    };

    Alpine.start();
});
