const brain = require('brain.js')
const data = require('./csvjson.json')
const network = new brain.NeuralNetwork()
const trainingData = data.map((item) => ({
    input: item.text,
    output: item.label
}));
network.train(trainingData,{
    iterations:1000
})
const output = network.run("im updating my blog because i feel shitty")
console.log(output)