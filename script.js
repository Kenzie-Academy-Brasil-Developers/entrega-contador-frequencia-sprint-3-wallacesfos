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

        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        } else { 
            letterCounts[currentLetter]++; 
        }
        
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
        if (lista[element] === undefined) {
            lista[element] = 1; 
        } else { 
            lista[element]++; 
        }
    }
    console.log(lista)

    for(let woords in lista){
        const span = document.createElement("span");
        const textContent = `"${woords}": ${lista[woords]}, `;
        span.innerText = textContent;
        const letters = document.getElementById("wordsDiv");
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

});


function limpar(){
    window.location.reload();
}

