const Shulte = {}

Shulte.generateTable = function(shulte) {
    const numbers = []
    for (let i = 0; i <= shulte.cellCount ** 2 - 1; i++) numbers.push(i)

    const table = []

    for (let i = 0; i < shulte.cellCount; i++) {
        const row = []
        for (let i = 0; i < shulte.cellCount; i++) {
            let index = Math.floor(Math.random() * numbers.length)
            const number = numbers.splice(index, 1)[0]
            row.push(number)
        }
        table.push(row)
    }

    shulte.steps.now = 0
    shulte.steps.finish = shulte.cellCount ** 2 - 1
    shulte.time.start = new Date()
    shulte.time.finish = null
    shulte.table = table
}

Shulte.getTotalTime = function(shulte) {
    const start = shulte.time.start
    const finish = shulte.time.finish
    const total = new Date(Math.abs(finish - start))
    const minutes = total.getMinutes()
    const seconds = total.getSeconds()
    shulte.time.total = `${(minutes === 0) ? '00:' : minutes + ':'}${(seconds <= 9) ? '0' + seconds : seconds}`
}

export default Shulte
