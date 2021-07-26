import { jsx } from 'theme-ui'
import Link from 'next/link'

export default () => (
    <div sx={{ height: `calc(100vh - 60px)` }}>
        <h1>Index page</h1>
        <div sx={{ variant: 'containers.page', display: 'flex', alignItems: 'center', height: '100%' }}>
            <h1 sx={{ fontSize: 8, my: 0 }}>This is a really dope note taking app.</h1>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </div>
    </div>
)

