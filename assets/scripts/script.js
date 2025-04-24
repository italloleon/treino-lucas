function playSound(name) {
    const audio = new Audio(`assets/audio/${name}.mp3`);
    audio.play();
}