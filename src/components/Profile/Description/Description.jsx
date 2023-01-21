import c from "./Description.module.css";

function Description() {
  return (
    <div>
      <h3 className={c.name}>Alexandre</h3>
      <div>
        <p className={c.username}>@alex11</p>
      </div>
    </div>
  );
}

export default Description;
