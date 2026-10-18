import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Hello: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = spring({ frame, fps, config: { damping: 12 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", justifyContent: "center", alignItems: "center" }}>
      <div style={{ color: "white", fontSize: 120, fontWeight: 700, fontFamily: "sans-serif", opacity, transform: `scale(${scale})` }}>
        Remotion
      </div>
    </AbsoluteFill>
  );
};
