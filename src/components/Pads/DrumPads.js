import DrumPad from "./DrumPad";

const DrumPads = ({ 
    handleKickTrigger, 
    handleSnareTrigger, 
    handleOHatTrigger, 
    handleCHatTrigger, 
    handleCymbalTrigger, 
    handleShakerTrigger, 
    handleTriangleTrigger, 
    handleClapTrigger 
    }) => {
    return (
        <div className="tone-drum-pads">
            <DrumPad name={"Kck"} handleTrigger={handleKickTrigger}/>
            <DrumPad name={"Snr"} handleTrigger={handleSnareTrigger}/>
            <DrumPad name={"O Hi-Ht"} handleTrigger={handleOHatTrigger}/>
            <DrumPad name={"C Hi-Hat"} handleTrigger={handleCHatTrigger}/>
            <DrumPad name={"Cymbl"} handleTrigger={handleCymbalTrigger}/>
            <DrumPad name={"Shkr"} handleTrigger={handleShakerTrigger}/>
            <DrumPad name={"Trngl"} handleTrigger={handleTriangleTrigger}/>
            <DrumPad name={"Clp"} handleTrigger={handleClapTrigger}/>
        </div>
    );
}

export default DrumPads;