//950. Reveal Cards In Increasing Order

function deckRevealedIncreasing(deck) {
    // Passo 1: Ordenar o deck
    deck.sort((a, b) => a - b);

    // Passo 2: Criar uma fila de índices
    const indexQueue = [...Array(deck.length).keys()];

    // Passo 3: Processar a fila de índices
    const result = [];
    while (indexQueue.length) {
        result.push(indexQueue.shift()); // Revela a carta no topo da fila
        if (indexQueue.length) {
            indexQueue.push(indexQueue.shift()); // Move a próxima carta não revelada para o final do deck
        }
    }

    // Passo 4: Construir o resultado
    const orderedDeck = [];
    for (let i = 0; i < deck.length; i++) {
        orderedDeck[result[i]] = deck[i];
    }

    return orderedDeck;
}
//console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // [2,13,3,11,5,17,7]

