export default function TwoVerticalImages({ src1, src2 }) {
  return (
    <>
      <div style={{
        width: "100%", paddingTop: "50%", marginRight: "2px",
        backgroundImage: src1,
        backgroundPosition: "center", backgroundSize: "cover"
      }} />
      <div style={{
        width: "100%", paddingTop: "50%", marginLeft: "2px",
        backgroundImage: src2,
        backgroundPosition: "center", backgroundSize: "cover"
      }} />
    </>
  );
}