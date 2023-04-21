import Layout from "@/components/layout"
import Link from "next/link"

export default function Page404() {
  return (
    <Layout
        title='Pagina no Encontrada'
    >
        <p className="error">404 Pagina no Encontrada</p>
        <Link href="/" legacyBehavior>
            <a className="error-enlace">Ir a inicio</a>
        </Link>
    </Layout>
  )
}
