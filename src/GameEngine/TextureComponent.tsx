
function TextureComponent(aImgSrc : string, aX : number, aY : number, aWidth : number, aHeight : number, rotation = 0) {

    return (
        <img 
            src = {`${aImgSrc}`}
            alt = "Unable to display texture" 
            style = {{
            position: "absolute",
            left: `${aX}px`,
            top: `${aY}px`,
            width: `${aWidth}px`,
            height: `${aHeight}px`,
            transform: `rotate(${rotation}deg)`
        }}
        ></img>
    );
}


export default TextureComponent;