import React from 'react'
import Link from 'gatsby-link'

const CityList = props => {
  const list = props.cities.map(city =>
    <CityListItem key={city.internalId} value={city} />
  )
  return <ul>{list}</ul>
}

const CityListItem = props => {
  const url = `/map?id=${props.value.internalId}`
  const name = `${props.value.name}, ${props.value.country}`
  return <li><Link to={url}>{name}</Link></li>
}

const IndexPage = ({ data }) => {
  const cities = data.allCitiesJson.edges.map(v => v.node)

  return (
    <div>
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              {data.site.siteMetadata.name}
            </h1>
            <h2 className="subtitle">
              Mapa de potenciales asentamientos informales y barrios precarios
            </h2>
            <p>
              El mapa está elaborado a partir de la aplicación de técnicas de&nbsp;
              <em>machine learning</em> en imágenes satelitales y otros datos
              georreferenciados.
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Explorar</h1>
          <h2 className="subtitle">Haz clic sobre el nombre de una ciudad para explorar el mapa.</h2>
          <CityList cities={cities} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Accede a los datos</h1>
          <p>
            Aquí podrás acceder a los datos presentados en el mapa, tanto la capa
            vectorial de las áreas precarias detectadas, como así también otros datos
            analíticos generados, agrupados por ciudad y fecha de actualización.
          </p>
          <Link className="button is-primary" to="/data">Ver Datos</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Publicaciones</h1>
          <p>En esta página podrás descargar y leer publicaciones sobre la
            metodología de detección.</p>
          <Link className="button is-primary" to="/publications">Ver Publicaciones</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Prensa</h1>
          <em>[Acá van las notas publicadas del proyecto]</em>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <em>[Acá van los logos de los sponsors]</em>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Licencia</h1>
          <p>
            <em>[Texto sobre licencia de la página, el uso de los datos, y las
              publicaciones]</em>
          </p>
          <Link className="button is-primary" to="/license">Ver Licencia</Link>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h1 className="title">Contacto</h1>
          <em>[Acá va la sección de contacto]</em>
        </div>
      </section>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        name
      }
    }
    allCitiesJson {
      edges {
        node {
          internalId
          name
          country
          path
        }
      }
    }
  }
`

export default IndexPage
