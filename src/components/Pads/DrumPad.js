const DrumPad = ({ name, keyPress, handleTrigger }) => {
    return ( 
        <div className="drum-pad">
            <button className="drum-trigger" onMouseDown={handleTrigger}>{ keyPress }</button>
            <label><h3>{ name }</h3></label>
        </div>
    );
}

export default DrumPad;