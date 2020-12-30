import React from 'react';
import './art.css';
import Iframe from 'react-iframe';

function CardUI(){
  return(
        <div class="ui">
          <Iframe width="320" height="440" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVhkFQYg3P6THKtTYgeXDzM%2FLiveNOW%3Fnode-id%3D8%253A19%26scaling%3Dcontain" allowfullscreen />
          <Iframe width="500" height="440" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FtBhb0qPdPh5urFsAvwgKIa%2FSharingCaring%3Fscaling%3Dcontain%26node-id%3D2%253A7" allowfullscreen />
        </div>
  )
}
export default CardUI;