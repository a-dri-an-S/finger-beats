import DrumPad from "./DrumPad";

const DrumPads = () => {
    return (
        <main className="tone-drums">
            <h1>Finger Drums</h1>
            <div className="tone-drums-pads">
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
                <DrumPad />
            </div>

        </main>
    );
}

export default DrumPads;