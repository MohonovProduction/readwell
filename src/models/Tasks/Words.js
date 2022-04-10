import Tools from '@/models/Tools.js'

const Words = {}

Words.generateTable = function(count) {
    const same = Tools.shuffle(Words.dictionary)
    const different = Tools.shuffle(Words.differentDictionary)

    console.log(same)
    console.log(different)

    const sameCount = 10 //Math.floor(Math.random() * (count / 2)) + 1
    const differentCount = count - sameCount
    const rawTable = same.splice(0, sameCount).concat(different.splice(0, differentCount))

    return Tools.shuffle(rawTable)
}

Words.generateMap = function(arr) {
    const ids = []

    for (let id in arr) if (!arr[id].same) ids.push(id)
}

Words.generateCell = function(words) {
    this.words = {}
    if (Math.floor(Math.random() * 10)  > 30) {
        const randomElIndex = Math.floor(Math.random() * 2)
        this.words.first = words[randomElIndex]
        this.words.second = words[randomElIndex]

        this.isAns = false
        this.finded = null
    } else {
        this.words = words
        this.isAns = true
        this.finded = false
    }
}

Words.dictionary = [
    {
        words: ['тот', 'тот'],
        same: true
    },
    {
        words: ['или', 'или'],
        same: true
    },
    {
        words: ['ура', 'ура'],
        same: true
    },
    {
        words: ['увы', 'увы'],
        same: true
    },
    {
        words: ['сэр', 'сэр'],
        same: true
    },
    {
        words: ['еле', 'еле'],
        same: true
    },
    {
        words: ['сад', 'сад'],
        same: true
    },
    {
        words: ['там', 'там'],
        same: true
    },
    {
        words: ['бак', 'бак'],
        same: true
    },
    {
        words: ['нос', 'нос'],
        same: true
    },
    {
        words: ['мой', 'мой'],
        same: true
    },
    {
        words: ['суп', 'суп'],
        same: true
    },
    /* Template
    {
        words: ['', ''],
        same: true
    },*/
]

Words.differentDictionary = [
    {
        words: ['вес', 'век'],
        same: false
    },
    {
        words: ['пир', 'пар'],
        same: false
    },
    /* Template
    {
        words: ['', ''],
        same: false
    },*/
]

export default Words
