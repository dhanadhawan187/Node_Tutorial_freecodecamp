const {readFileSync,writeFileSync}=require("fs")

const first=readFileSync("./content/first.txt","utf8")
console.log(`first file: ${first}`)
const second=readFileSync("./content/second.txt","utf8")
console.log(`second file: ${second}`)

writeFileSync("./content/result-sync.txt",
`The New Result: ${first}, ${second}`
)
//append the text into the file
writeFileSync("./content/result-sync.txt",
`,The New appended result: Fun`,
{flag:'a'}
)
const result_sync=readFileSync("./content/result-sync.txt","utf8")
console.log(`Result file: ${result_sync}`)