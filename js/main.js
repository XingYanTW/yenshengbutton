let sounds = [];

async function fetchData() {
    try {
        const res = await fetch("sounds/info.json");
        const jsonData = await res.json();
        sounds = jsonData.sounds;

        sounds.forEach(sound => {
            const btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = sound.name;
            document.getElementById('buttons').appendChild(btn);
            btn.addEventListener('click', async () => {
                try {
                    const audio = new Audio(`sounds/${sound.file}.mp3`);
                    await audio.play();
                } catch (err) {
                    console.error("Failed to play sound:", err);
                }
            });
        });
    } catch (e) {
        console.error(e);
    }
}

fetchData();
