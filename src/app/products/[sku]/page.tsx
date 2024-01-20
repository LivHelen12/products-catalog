import { get } from "@/app/_services/notion/product";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default async function ProductDetail({ params }: { params: { sku: string } }) {
  const product = await get(params.sku);

  return (
    <>
      <div className={styles.buttonContainer}>
        <Link href="/" className={styles.button}>Lista de produtos</Link>
      </div>

      <div className={styles.informations}>
        <div>
          <Image
            className={styles.image}
            src={product.imageUrl}
            alt={product.name}
            width={300}
            height={300}
          />
        </div>

        <div className={styles.description}>
          <h1>{product.name}</h1>

          <p><b>Descrição:</b> {product.description}</p>
          <p><b>Tipo:</b> {product.type}</p>
          <p><b>Sub-tipo:</b> {product.subType}</p>
          <p><b>Preço:</b> R$ {product.salesPrice}</p>
          <p><b>Fornecedor:</b> {product.supplier}</p>
          <p><b>SKU:</b> {product.sku}</p>
          <p><b>Estoque:</b> {product.availability}</p>
        </div>
      </div>
    </>
  )
}