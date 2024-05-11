import React, {useCallback} from 'react';
import image11 from './expand.png'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function Fulll() {
  const handle = useFullScreenHandle();

  return (
    <div>

        <img src={image11} onClick={handle.enter} />


      

      <FullScreen handle={handle}>
        ap
      </FullScreen>
    </div>
  );
}

export default Fulll;