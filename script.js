const firstTextarea = document.getElementById('first-lyrics-textarea')
const secondTextarea = document.getElementById('second-lyrics-textarea')
const btn = document.querySelector('.compare-btn')
const outputContainer = document.querySelector('.output-container')

btn.addEventListener('click', compareLyrics);

function compareLyrics() {
    let allFirstLyricsWords = firstTextarea?.value.toLowerCase().replace(/\n/g, " ").split(' ');
    let allSecondLyricsWords = secondTextarea?.value.toLowerCase().replace(/\n/g, " ").split(' ');

    let output = [];

    for (let i = 0; i < allFirstLyricsWords.length - 1; i++) {
        for (let j = 0; j < allSecondLyricsWords.length - 1; j++) {
            if (allFirstLyricsWords[i] == allSecondLyricsWords[j] ) {
                // if (!output.map(word => word == allFirstLyricsWords[i])) return;
                // if (allFirstLyricsWords[i].length < 3) return;

                output.push(allFirstLyricsWords[i])
            }
        }
    }

    // if (output.length < 1) outputContainer.innerHTML = 'no results'
    console.log(output)

    //display output
    outputContainer.innerHTML = `${output}`
} 
