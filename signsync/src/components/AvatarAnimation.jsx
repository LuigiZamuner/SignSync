import { useEffect, useState } from "react";

const frames = Object.entries(
  import.meta.glob("../assets/animations/*.png", {
    eager: true,
    import: "default",
  })
)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, value]) => value);

function AvatarAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [loaded, setLoaded] = useState(false);

  // Pré-carrega todas as imagens
  useEffect(() => {
    Promise.all(
      frames.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      )
    ).then(() => {
      setLoaded(true);
    });
  }, []);

  // Inicia a animação somente após carregar tudo
  useEffect(() => {
    if (!loaded) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev >= frames.length - 1) {
          clearInterval(interval);
          return prev;
        }

        return prev + 1;
      });
    }, 42);

    return () => clearInterval(interval);
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <img
      src={frames[currentFrame]}
      alt="Avatar"
      style={{
        width: "500px",
        display: "block",
      }}
    />
  );
}

export default AvatarAnimation;