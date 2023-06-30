const words = [
    "agda",
    "basic",
    "brainfuck",
    "c",
    "clojure",
    "crystal",
    "csharp",
    "css",
    "dart",
    "delphi",
    "elixir",
    "elm",
    "erlang",
    "fortran",
    "golang",
    "groovy",
    "haskell",
    "html",
    "idris",
    "java",
]

function randomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }