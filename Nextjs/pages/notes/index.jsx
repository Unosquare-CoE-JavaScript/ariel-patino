/** @jsxImportSource theme-ui */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../../src/components/button/button.module.css'

export default ({notes}) => {
    const router = useRouter();

    return (
        <div sx={{ variant: 'containers.page' }}>
            <h1>My Notes</h1>

            <div sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                {notes.map(note => (
                    <div key={note.id} sx={{ width: '33%', p: 2 }}>
                        <Link href="/notes/[id]" as={`/notes/${note.id}`}>
                            <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                                <div sx={{ variant: 'containers.card', }}>
                                    <strong>{note.title}</strong>
                                </div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <div>
                <button onClick={e => router.push('/')}>
                    Go Home
                </button>
                <button onClick={e => router.push('/notes/[id]', `/notes/${notes[2].id}`)} className={styles.button}>
                    Notes 2
                </button>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`http://localhost:3000/api/note/`)
    const {data} = await res.json()
    return {
      props: {notes: data}
    }
  }