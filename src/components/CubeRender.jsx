import React, { useEffect } from 'react';

function CubeRender() {

    useEffect(() => {
        const scrambleText = document.querySelector('#scramble')
        const cubeRender = document.querySelector('#cubeRender');
        cubeRender.src = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=500&pzl=3&alg=x2${scrambleText.innerHTML}`
      });

    return (
        <div className="text-center">
            <img class="img-fluid" id="cubeRender" alt="cube" />
        </div>
    );
}

export default CubeRender;