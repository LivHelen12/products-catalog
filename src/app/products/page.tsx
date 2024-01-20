import Link from "next/link";

import { list } from "../_services/notion/product";
import { Card } from "@/components/Card";
import styles from "./styles.module.css";

export default async function Products() {
  const products = await list();

  return (
    <div>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <div key={product.id}>
            <Link href={`products/${product.sku}`}>
              <Card
                title={product.name}
                description={product.description}
                image={product.imageUrl}
                availability={product.availability}
                price={product.salesPrice}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}