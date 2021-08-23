const DrumPad = ({ name, handleTrigger }) => {
    return ( 
        <div className="drum-pad">
            <button className="drum-trigger" onMouseDown={handleTrigger}/>
            <label><h3>{ name }</h3></label>
        </div>
    );
}

export default DrumPad;