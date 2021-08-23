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
            <DrumPad keyPress={"[q]"} name={"Kck"} handleTrigger={handleKickTrigger}/>
            <DrumPad keyPress={"[w]"} name={"Snr"} handleTrigger={handleSnareTrigger}/>
            <DrumPad keyPress={"[e]"} name={"O Hi-Ht"} handleTrigger={handleOHatTrigger}/>
            <DrumPad keyPress={"[r]"} name={"C Hi-Hat"} handleTrigger={handleCHatTrigger}/>
            <DrumPad keyPress={"[a]"} name={"Cymbl"} handleTrigger={handleCymbalTrigger}/>
            <DrumPad keyPress={"[s]"} name={"Shkr"} handleTrigger={handleShakerTrigger}/>
            <DrumPad keyPress={"[d]"} name={"Trngl"} handleTrigger={handleTriangleTrigger}/>
            <DrumPad keyPress={"[f]"} name={"Clp"} handleTrigger={handleClapTrigger}/>
        </div>
    );
}

export default DrumPads;