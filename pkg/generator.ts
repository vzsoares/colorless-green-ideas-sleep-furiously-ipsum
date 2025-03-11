export class ColorlessGreenIpsumGenerator {
    // Style-specific word banks
    private adjectivesByStyle = {
        common: [
            "colorless",
            "green",
            "abstract",
            "invisible",
            "dormant",
            "transparent",
            "conceptual",
            "intangible",
            "fragmented",
            "synthetic",
            "quiet",
            "hollow",
            "vague",
            "undefined",
            "theoretical",
            "complex",
            "virtual",
            "potential",
            "symbolic",
        ],
        erudite: [
            "epistemological",
            "ontological",
            "phenomenological",
            "hermeneutic",
            "dialectical",
            "teleological",
            "metaphysical",
            "transcendental",
            "existential",
            "apophatic",
            "axiomatic",
            "liminal",
            "ineffable",
            "solipsistic",
            "quiescent",
            "noumenal",
            "categorical",
            "heuristic",
            "apodictic",
            "antinomical",
            "hegelian",
            "aristotelian",
            "kantian",
        ],
        whimsical: [
            "fluffy",
            "bouncy",
            "twirling",
            "dancing",
            "giggling",
            "bubbling",
            "sparkling",
            "silly",
            "zigzagging",
            "floating",
            "wobbling",
            "topsy-turvy",
            "squiggly",
            "loopy",
            "upside-down",
            "inside-out",
            "ticklish",
            "wiggly",
            "whirling",
            "buzzing",
            "fizzy",
            "squishy",
        ],
    };

    private nounsByStyle = {
        common: [
            "ideas",
            "concepts",
            "notions",
            "theories",
            "thoughts",
            "abstractions",
            "principles",
            "constructs",
            "hypotheses",
            "frameworks",
            "methods",
            "systems",
            "structures",
            "functions",
        ],
        erudite: [
            "qualia",
            "phenomena",
            "antinomies",
            "dichotomies",
            "aporia",
            "axioms",
            "monads",
            "syllogisms",
            "heuristics",
            "noumena",
            "isomorphisms",
            "ontologies",
            "epistemologies",
            "teleologies",
            "dialectics",
            "hermeneutics",
            "propositions",
            "quiddities",
            "essences",
            "entelechy",
            "teleologies",
            "nomologies",
        ],
        whimsical: [
            "daydreams",
            "giggles",
            "whispers",
            "bubbles",
            "rainbows",
            "clouds",
            "sparkles",
            "noodles",
            "kittens",
            "hiccups",
            "snowflakes",
            "tidbits",
            "doodles",
            "wiggles",
            "sprinkles",
            "butterflies",
            "cupcakes",
            "twinkles",
            "ponies",
            "confetti",
        ],
    };

    private adverbsByStyle = {
        common: [
            "silently",
            "rapidly",
            "gradually",
            "peacefully",
            "quietly",
            "slowly",
            "clearly",
            "barely",
            "simply",
            "directly",
            "suddenly",
            "plainly",
            "easily",
            "nearly",
            "basically",
            "practically",
        ],
        erudite: [
            "ontologically",
            "dialectically",
            "teleologically",
            "axiomatically",
            "phenomenologically",
            "hermeneutically",
            "epistemologically",
            "apodictically",
            "heuristically",
            "categorically",
            "ineffably",
            "noumenally",
            "antinomically",
            "solipsistically",
            "quiescently",
            "a priori",
            "a posteriori",
            "sui generis",
            "ipso facto",
        ],
        whimsical: [
            "gleefully",
            "merrily",
            "playfully",
            "cheerfully",
            "joyfully",
            "whimsically",
            "topsy-turvily",
            "helter-skelter",
            "willy-nilly",
            "higgledy-piggledy",
            "dizzily",
            "twirly",
            "bubbly",
            "bouncily",
            "squiggly",
            "giggly",
            "wiggly",
            "wobblily",
            "floatingly",
        ],
    };

    private verbsByStyle = {
        common: [
            "sleep",
            "move",
            "shift",
            "change",
            "appear",
            "remain",
            "develop",
            "continue",
            "exist",
            "persist",
            "evolve",
            "emerge",
            "grow",
            "form",
            "dissolve",
            "expand",
            "shrink",
        ],
        erudite: [
            "reify",
            "dialectize",
            "instantiate",
            "substantiate",
            "subsume",
            "interpenetrate",
            "particularize",
            "universalize",
            "contextualize",
            "problematize",
            "delineate",
            "presuppose",
            "systematize",
            "essentialize",
            "deterritorialize",
            "actualize",
            "ontologize",
            "phenomenologize",
            "disembed",
            "deconstruct",
            "synthesize",
        ],
        whimsical: [
            "frolic",
            "dance",
            "twirl",
            "bounce",
            "flutter",
            "giggle",
            "bubble",
            "wiggle",
            "whoosh",
            "zoom",
            "shimmer",
            "sparkle",
            "whirl",
            "swirl",
            "tumble",
            "jiggle",
            "hiccup",
            "tiptoe",
            "cartwheel",
            "hopscotch",
            "pirouette",
            "somersault",
            "skip",
        ],
    };

    private conjunctionsByStyle = {
        common: [
            "while",
            "although",
            "yet",
            "and",
            "but",
            "however",
            "meanwhile",
            "therefore",
            "besides",
            "still",
            "then",
        ],
        erudite: [
            "nevertheless",
            "notwithstanding",
            "consequently",
            "conversely",
            "ergo",
            "henceforth",
            "wherefore",
            "qua",
            "insofar as",
            "vis-à-vis",
            "a fortiori",
            "mutatis mutandis",
            "ceteris paribus",
            "ex hypothesi",
            "pace",
            "per se",
        ],
        whimsical: [
            "wibble",
            "meanwhile",
            "topsy-turvily",
            "in a jiffy",
            "lo and behold",
            "believe it or not",
            "by the way",
            "before you can say 'abracadabra'",
            "in a flash",
            "ta-da",
            "whoosh",
            "surprise surprise",
            "hooray",
        ],
    };

    // Current style
    private style: "common" | "erudite" | "whimsical" = "erudite";

    // Get current word banks based on style
    private get adjectives(): string[] {
        return this.adjectivesByStyle[this.style];
    }

    private get nouns(): string[] {
        return this.nounsByStyle[this.style];
    }

    private get adverbs(): string[] {
        return this.adverbsByStyle[this.style];
    }

    private get verbs(): string[] {
        return this.verbsByStyle[this.style];
    }

    private get conjunctions(): string[] {
        return this.conjunctionsByStyle[this.style];
    }

    // Method to change the style
    public setStyle(style: "common" | "erudite" | "whimsical"): void {
        this.style = style;
    }

    // Get current style
    public getStyle(): "common" | "erudite" | "whimsical" {
        return this.style;
    }

    private getRandomElement<T>(array: T[]): T {
        return array[Math.floor(Math.random() * array.length)];
    }

    private capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    generateSentence(): string {
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

            // Philosophical predication pattern
            () => {
                const adj = this.getRandomElement(this.adjectives);
                const noun1 = this.getRandomElement(this.nouns);
                const verb = this.getRandomElement(this.verbs);
                const noun2 = this.getRandomElement(
                    this.nouns.filter((n) => n !== noun1),
                );
                return `${this.capitalizeFirstLetter(adj)} ${noun1} ${verb} the ${noun2} of being.`;
            },

            // Nested abstractions pattern
            () => {
                const adj1 = this.getRandomElement(this.adjectives);
                const adj2 = this.getRandomElement(
                    this.adjectives.filter((a) => a !== adj1),
                );
                const noun1 = this.getRandomElement(this.nouns);
                const noun2 = this.getRandomElement(
                    this.nouns.filter((n) => n !== noun1),
                );
                const verb = this.getRandomElement(this.verbs);
                return `${this.capitalizeFirstLetter(adj1)} ${noun1} of ${adj2} ${noun2} ${verb} intrinsically.`;
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

    // Alias method to match the name used in the README example
    public generate(
        paragraphCount: number = 3,
        sentencesPerParagraph: number = 5,
    ): string {
        return this.generateIpsum(paragraphCount, sentencesPerParagraph);
    }
}
