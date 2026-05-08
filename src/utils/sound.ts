let audioEnabled = false;

export const enableAudio = () => {
  audioEnabled = true;
};

const createTone = (
  frequency: number,
  duration: number,
  volume: number,
  type: OscillatorType = "sine"
) => {
  if (!audioEnabled) return;

  const ctx = new (window.AudioContext ||
    (window as any).webkitAudioContext)();

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

  gainNode.gain.setValueAtTime(volume, ctx.currentTime);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();

  gainNode.gain.exponentialRampToValueAtTime(
    0.0001,
    ctx.currentTime + duration
  );

  oscillator.stop(ctx.currentTime + duration);
};

export const playTap = () => {
  createTone(520, 0.08, 0.030, "sine");
};

export const playSwoosh = () => {
  createTone(320, 0.18, 0.030, "triangle");
  setTimeout(() => {
    createTone(420, 0.12, 0.030, "triangle");
  }, 40);
};