const letterCounts = {};
const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
   // teu código vai aqui ...
   let lista = {};
   let typedText = document.getElementById("textInput").value;
   typedText = typedText.toLowerCase();
   typedText = typedText.replace(/[^a-z'\s]+/g, "");

   for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    count(letterCounts, currentLetter)
    }

    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span);
        letters.style.width = '90%'
        letters.style.height = '200px'
        letters.style.backgroundColor = 'lightgray'
        letters.style.boxShadow = "10px 5px 5px black"
        letters.style.Color = 'black'
        letters.style.border = '2px solid gray'
        letters.style.marginTop = '20px'
        span.style.color = 'black'
    
    }
    words = typedText.split(/\s/);

    for (let i = 0; i < words.length; i++) {
        const element = words[i];
        count(lista, element)
    }

    

});

function count(x, y){
    if (x[y] === undefined) {
        x[y] = 1; 
    } else { 
        x[y]++; 
    }
}


