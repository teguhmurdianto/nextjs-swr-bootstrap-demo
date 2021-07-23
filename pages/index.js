import Head from 'next/head'
// import Image from 'next/image'

import usePosts from '../data/use-posts'

export default function Home() {
  const { posts, loading } = usePosts()

  return (
    <>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          &nbsp;Bootstrap
        </a>
      </div>
    </nav>
    <div className="container">
      <Head>
        <title>Next Swr Bootstrap</title>
        <meta name="description" content="tmurdianto next-swr-bootstrap" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
            { loading ? 
              <tr><td colSpan="3">Loading...</td></tr> : 
              posts.map( post => {
                return (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                )
              })
            }

            </tbody>
          </table>
          </div>
      </div>
    </div>
    </>
  )
}
