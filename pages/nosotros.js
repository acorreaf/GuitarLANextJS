import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>  
        <Layout
          title={'Nosotros'}
          description={'Nosotros, Venta de Guitarras, Blog y otras cosas mas'}
        >
          <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

            <div className={styles.contenido}>
                <Image src={'/img/nosotros.jpg'} width={1000} height={800} alt="Imagen de Nosotros" />

                <div className={styles.texto}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat imperdiet ipsum sed pretium. Phasellus porta at massa a luctus. Cras sed semper justo, quis aliquet tellus.Phasellus cursus efficitur libero, quis porta risus dictum a. Ut ante nulla, pretium nec nisi eu, efficitur tincidunt dolor. Vestibulum ut metus pharetra, luctus justo non, elementum mi.</p>

                    <p>Integer vel tortor massa. Suspendisse euismod elementum ex, non luctus quam placerat et. Pellentesque sit amet ipsum facilisis, mollis ante at, imperdiet neque. Nulla congue, sem nec egestas sodales, dui purus vestibulum turpis, efficitur iaculis eros elit non odio. Nullam vehicula consequat facilisis. Vivamus efficitur egestas ex, sit amet lacinia neque euismod at.</p>
                </div>
            </div>
          </main>
        </Layout>
    </>
  )
}
