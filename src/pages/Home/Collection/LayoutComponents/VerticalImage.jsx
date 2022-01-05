export default function VerticalImage({ src }) {
  return (<div style={{
    width: "50%", paddingTop: "100%",
    backgroundImage: src,
    backgroundPosition: "center", backgroundSize: "cover"
  }} />)
}