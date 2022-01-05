export default function HorizonetalImage({ src }) {
  return (<div style={{
    width: "100%", paddingTop: "calc(50% - 4px)",
    backgroundImage: src,
    backgroundPosition: "center", backgroundSize: "cover",
  }} />)
}