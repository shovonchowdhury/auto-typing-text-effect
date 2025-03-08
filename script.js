const span = document.querySelector('span');

const wordsList = ['Developer.', 'Coder.', 'Teacher.', 'YouTuber.'];
const word = 'Devloper';

function autoType(wordsList,element){
        let wordsListIndex = 0;
        let wordIndex = 0;
        let clearText = false;
        let updateSkip = 0;

        const intervalId=setInterval(()=>{

            if(updateSkip>0)
            {
                updateSkip--;
                return;
            }
            
            if(clearText===false)
            {
                updateSkip = 1;
                element.innerText = element.innerText + wordsList[wordsListIndex][wordIndex];
                wordIndex++;
                if(wordIndex === wordsList[wordsListIndex].length)
                    {
                        clearText = true; 
                        updateSkip = 6;
                    }
            }
            else{
                element.innerText = element.innerText.slice(0,wordIndex-1);
                wordIndex--;
                if(wordIndex<0)
                {
                    clearText = false;
                    wordIndex = 0;
                    wordsListIndex++;
                    if(wordsListIndex === wordsList.length)
                    {
                        wordsListIndex = 0;
                    }
                }
            }

            
        },100)
}

autoType(wordsList,span)