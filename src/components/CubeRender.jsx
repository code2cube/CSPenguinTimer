import React, { useEffect } from 'react';

function CubeRender() {

    useEffect(() => {
        const scrambleText = document.querySelector('#scramble')
        const cubeRender = document.querySelector('#cubeRender');
        cubeRender.src = `https://visualcube.api.cubing.net/visualcube.php?fmt=svg&size=250&pzl=3&alg=x2${scrambleText.innerHTML}&bg=black`
      });

    return (
        <div className="position-absolute bottom-0 end-0">
            <img class="img-fluid" id="cubeRender" alt="cube" />
        </div>
    );
}

export default CubeRender;