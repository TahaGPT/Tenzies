export default function Die(props) {
  return (
    <button
      className={`dieComp${props.isHeld ? " isHeld" : ""}`}
      onClick={props.hold}
    >
      {props.val}
    </button>
  );
}
