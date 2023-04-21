import Layout from '@/components/layout'
import Guitarra from '@/components/guitarra'
import Post from '@/components/post'
import Curso from '@/components/curso'

import styles from '../styles/grid.module.css'

export default function Home({ guitarras, posts, cursos }) {
  return (
      <>
        <Layout
          title={'Inicio'}
          description={'Venta de Guitarras, Blog de Musica y otras cosas mas'}
        >
          <main className='contenedor'>
              <h1 className='heading'>Nuestra Coleccion</h1>

              <div className={styles.grid}>
                  {guitarras.map(guitarra => (
                      <Guitarra 
                        key={guitarra.id}
                        guitarra={guitarra.attributes}
                      />
                  ))}
              </div>

          </main>

          <Curso 
            cursos={cursos.attributes}
          />

          <section className='contenedor'>
              <h2 className='heading'>Blog</h2>
              <div className={styles.grid}>
                {posts?.map(post => (
                    <Post 
                      key={post.id}
                      post={post.attributes}
                    />
                ))}
              </div>

          </section>
        </Layout>
      </>
  )
}

export async function getStaticProps() {
    const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
    const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
    const urlCursos = `${process.env.API_URL}/curso?populate=imagen`

    const [ resGuitarras, resPosts, resCursos ] = await Promise.all([
      fetch(urlGuitarras),
      fetch(urlPosts),
      fetch(urlCursos)
    ])

    const [ { data: guitarras }, { data:posts }, { data:cursos } ] = await Promise.all([
      resGuitarras.json(),
      resPosts.json(),
      resCursos.json()
    ])

    return {
      props: {
        guitarras,
        posts, 
        cursos
      }
    }
}