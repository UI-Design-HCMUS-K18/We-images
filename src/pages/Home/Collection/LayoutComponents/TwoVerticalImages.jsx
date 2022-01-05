export default function TwoVerticalImages({ src1, src2 }) {
  return (
    <>
      <div style={{
        width: "100%", paddingTop: "100%", marginBottom: "2px",
        backgroundImage: src1,
        backgroundPosition: "center", backgroundSize: "cover"
      }} />
      <div style={{
        width: "100%", paddingTop: "100%", marginTop: "2px",
        backgroundImage: src2,
        backgroundPosition: "center", backgroundSize: "cover"
      }} />
    </>
  );
}