import clsx from "clsx";
import styles from "./preventivo.module.css";

export default function PreventivoStato({ step }: { step: number }) {
  return (
    <div
      className={clsx(
        styles.preventivo__stato,
        "flex flex-row lg:flex-col gap-4 rounded-boatto justify-around lg:justify-start"
      )}
    >
      <div>
        <p
          className={clsx(
            styles.preventivo__stato__numero,
            step === 1 && styles["preventivo__stato--attivo"]
          )}
        >
          1
        </p>
        <p className={clsx("hidden sm:block")}>Informazioni Personali</p>
      </div>
      <div>
        <p
          className={clsx(
            styles.preventivo__stato__numero,
            step === 2 && styles["preventivo__stato--attivo"]
          )}
        >
          2
        </p>
        <p className={clsx("hidden sm:block")}>Dettagli Trasporto</p>
      </div>
      <div>
        <p
          className={clsx(
            styles.preventivo__stato__numero,
            step === 3 && styles["preventivo__stato--attivo"]
          )}
        >
          3
        </p>
        <p className={clsx("hidden sm:block")}>Riepilogo Dati</p>
      </div>
    </div>
  );
}
