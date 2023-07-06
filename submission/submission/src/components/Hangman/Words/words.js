const words = [
    //Kept them in lowercase
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
    //Generating a random index within the range of the array
    return words[Math.floor(Math.random() * words.length)]
}

export { randomWord }