/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default ({note}) => {
    return (
        <div>
            <div sx={{ variant: 'containers.page' }}>
                <h1>{note.title}</h1>
            </div>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
    )
}


export async function getServerSideProps({params, res}) {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`,{
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*',
        },
      } )
    
      const {data} = await response.json()
    
    if (!data) {
      return {
        props: {}
      }
    }
    return {
        props: { note: data }
    }
  }