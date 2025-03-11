class ColorlessGreenIpsumGenerator {
    private adjectives: string[] = [
        "colorless",
        "green",
        "abstract",
        "theoretical",
        "invisible",
        "dormant",
        "ephemeral",
        "transparent",
        "conceptual",
        "metaphorical",
        "intangible",
        "paradoxical",
        "philosophical",
        "synthetic",
        "fragmented",
    ];

    private nouns: string[] = [
        "ideas",
        "concepts",
        "notions",
        "theories",
        "thoughts",
        "abstractions",
        "hypotheses",
        "paradigms",
        "frameworks",
        "constructs",
        "principles",
        "postulates",
        "philosophies",
        "methodologies",
        "premises",
    ];

    private adverbs: string[] = [
        "furiously",
        "silently",
        "vigorously",
        "peacefully",
        "quietly",
        "rapidly",
        "gradually",
        "theoretically",
        "metaphorically",
        "paradoxically",
        "abstractly",
        "potentially",
        "implicitly",
        "virtually",
        "conceptually",
    ];

    private verbs: string[] = [
        "sleep",
        "dance",
        "contemplate",
        "resonate",
        "fluctuate",
        "dissolve",
        "evolve",
        "transcend",
        "illuminate",
        "obfuscate",
        "deconstruct",
        "materialize",
        "synthesize",
        "meditate",
        "proliferate",
    ];

    private conjunctions: string[] = [
        "while",
        "although",
        "yet",
        "and",
        "but",
        "nevertheless",
        "however",
        "moreover",
        "furthermore",
        "meanwhile",
    ];

    private getRandomElement<T>(array: T[]): T {
        return array[Math.floor(Math.random() * array.length)];
    }

    private capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    private generateSentence(): string {
        const patterns: (() => string)[] = [
            // Colorless green ideas sleep furiously pattern
            () => {
                const adj1 = this.getRandomElement(this.adjectives);
                const adj2 = this.getRandomElement(
                    this.adjectives.filter((a) => a !== adj1),
                );
                const noun = this.getRandomElement(this.nouns);
                const verb = this.getRandomElement(this.verbs);
                const adverb = this.getRandomElement(this.adverbs);
                return `${this.capitalizeFirstLetter(adj1)} ${adj2} ${noun} ${verb} ${adverb}.`;
            },

            // Alternative pattern with conjunction
            () => {
                const adj1 = this.getRandomElement(this.adjectives);
                const noun1 = this.getRandomElement(this.nouns);
                const verb1 = this.getRandomElement(this.verbs);
                const conjunction = this.getRandomElement(this.conjunctions);
                const adj2 = this.getRandomElement(this.adjectives);
                const noun2 = this.getRandomElement(this.nouns);
                const verb2 = this.getRandomElement(this.verbs);
                const adverb = this.getRandomElement(this.adverbs);
                return `${this.capitalizeFirstLetter(adj1)} ${noun1} ${verb1}, ${conjunction} ${adj2} ${noun2} ${verb2} ${adverb}.`;
            },

            // Inverted adverb pattern
            () => {
                const adverb = this.getRandomElement(this.adverbs);
                const adj = this.getRandomElement(this.adjectives);
                const noun = this.getRandomElement(this.nouns);
                const verb = this.getRandomElement(this.verbs);
                return `${this.capitalizeFirstLetter(adverb)}, ${adj} ${noun} ${verb}.`;
            },
        ];

        return this.getRandomElement(patterns)();
    }

    public generateParagraph(sentenceCount: number = 5): string {
        const sentences: string[] = [];
        for (let i = 0; i < sentenceCount; i++) {
            sentences.push(this.generateSentence());
        }
        return sentences.join(" ");
    }

    public generateIpsum(
        paragraphCount: number = 3,
        sentencesPerParagraph: number = 5,
    ): string {
        const paragraphs: string[] = [];
        for (let i = 0; i < paragraphCount; i++) {
            paragraphs.push(this.generateParagraph(sentencesPerParagraph));
        }
        return paragraphs.join("\n\n");
    }
}

// Example usage
const generator = new ColorlessGreenIpsumGenerator();
console.log(generator.generateIpsum(3, 4));
