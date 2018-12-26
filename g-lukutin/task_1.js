function correctSentence(text) {
    const firstLetter = text[0].toUpperCase();
    let remainingText = text.slice(1);


    if (text[text.length - 1] !== '.') {
        remainingText = remainingText + '.';
    }

    return firstLetter + remainingText;
}