import React from 'react'
import { useRouter } from 'next/router'
// route => /docs/a/b/c
export default () => {
    const router = useRouter()
    const { params } = router.query
    // params === ['a', 'b', 'c']
    console.log(params);
    return (
        <div>
            <h1>Docs</h1>

            {params.map(p => (
                <div key="p">
                    <h1>
                        <strong>{p}</strong>
                    </h1>
                </div>
            ))}
        </div>
    )
}