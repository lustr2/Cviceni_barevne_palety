import React from 'react';

const VykresliPaletu = ({name, colors, descr, image, attrib, direction}) => {
    return (
      <>
        <div className="palette">
          <div className={'backgroundColor: palette-scheme palette-scheme--' + direction}>
            <img className="scheme-image" src={image} alt={name} />
            <div className="scheme-colors">
              {colors.map(c => <div className="scheme-color" key={c} style={{ backgroundColor: `${c}`}} > {c} </div> )}
            </div>
          </div>
          <div className="palette-info">
            <h2>{name}</h2>
            <p>{descr}</p>
            <p>Photo by <a href={{attrib}.url} target="_blank">{{attrib}.name}</a>.</p>
          </div>
        </div>
      </> 
    )
}
export default VykresliPaletu;
