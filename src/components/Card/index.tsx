import Image from "next/image";
import styles from "./styles.module.css";

type CardProps = {
  title: string;
  description: string;
  image: string;
  availability: string[];
  price: number;
};

export function Card({ title, description, image, availability, price }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        className={styles.image}
        src={image}
        alt={title}
        width={120}
        height={120}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className={styles.details}>
        {availability.map((tag) => {
          if (tag === "Disponível") {
            return <span key={tag} className={styles.available}>{tag}</span>
          }

          return <span key={tag} className={styles.unavalable}>{tag}</span>
        })}

        <span>R$ {price}</span>
      </div>
    </div>
  )
}