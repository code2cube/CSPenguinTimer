import React, { useEffect } from 'react';

function Top() {
    const moves = ["R", "L", "U", "D", "F", "B"]

    function generateScramble() {
        let scramble = "";
        let scrambleCount = 21
        for(let i=0; i < scrambleCount; i++) {
            const index = Math.floor(Math.random() * moves.length);
            if(scramble.length > 0) {
                const lastLetter =  scramble.slice(-1);
                if(moves[index] === lastLetter) {
                    scrambleCount++
                    continue;
                } else {
                    scramble += `${moves[index]}`;
                }
            } else {
                scramble += `${moves[index]}`;
            }
        }
        const specialMoves = [' ', "2 ", "' "]
        let lmao = scramble
            .split('')
            .map((char, index) => {
                const seperator = specialMoves[index % specialMoves.length];
                return char + seperator;
            })
            .join('');
        return lmao;
    }

    useEffect(() => {
        const getScramble = generateScramble();
        const scrambleText = document.querySelector('#scramble')
        scrambleText.innerHTML = getScramble
      });

    return (
        <div>
            <div id="top">
                <div className="container text-center py-3">
                    <h1>Scramble:</h1>
                    <h3 id="scramble">...</h3>
                </div>
            </div>
        </div>
    );
}

export default Top;