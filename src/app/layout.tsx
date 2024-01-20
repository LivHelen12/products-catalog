import { ReactNode } from "react";
import { Container } from "@/components/Container";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function ProductLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html>
      <body>
        <section>
          <Container>
            {children}
          </Container>
        </section>
      </body>
    </html>
  )
}