import { useEffect, useState } from "react";

const frames = Object.values(
  import.meta.glob("../assets/animations/*.png", {
    eager: true,
    import: "default",
  })
);

function AvatarAnimation() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
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
  }, []);

  return (
    <img
      src={frames[currentFrame]}
      alt="Avatar"
      style={{
        width: "500px",
      }}
    />
  );
} 

export default AvatarAnimation;