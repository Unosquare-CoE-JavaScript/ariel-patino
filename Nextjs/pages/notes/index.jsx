import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../../src/components/button/button.module.css'

export default () => {
    const notes = new Array(15).fill(1).map((e, i) => ({ id: i, title: `This is my note ${i}` }))
    const router = useRouter()
    const id = 2

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
                <button onClick={e => router.push('/notes/[id]', `/notes/${id}`)} className={styles.button}>
                    Notes 2
                </button>
            </div>
        </div>
    )
}