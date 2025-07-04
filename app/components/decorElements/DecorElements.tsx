import styles from "./DecorElements.module.scss";

function DecorElements() {
  return (
    <div className={styles.decorElements}>
      <div className={styles.codeFlare}></div>
      <div className={styles.gridLines}></div>
      <div className={styles.codeBlock1}>{"{"}</div>
      <div className={styles.codeBlock2}>{"}"}</div>
      <div className={styles.codeBlock3}>{"<>"}</div>
      <div className={styles.codeBlock4}>{"/>"}</div>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      <div className={styles.codeSymbol1}>{"()"}</div>
      <div className={styles.codeSymbol2}>{"[]"}</div>
      <div className={styles.codeSymbol3}>{"=>"}</div>
      <div className={styles.dotPattern}></div>
    </div>
  );
}

export default DecorElements;
