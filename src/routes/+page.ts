import { env } from '$env/dynamic/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({fetch}) => {

    async function fetchSomething() {
        const res = await fetch(env.PUBLIC_BACKEND_URL + `/todos`,
            {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type':'application/json',
                    'credentials': 'same-origin'
                },
                credentials: 'include'
            },
        
        )
        return res.json()
    }

    return {
        todos: await fetchSomething()
    }
}