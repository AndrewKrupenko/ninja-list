import Link from "next/link";
import Head from 'next/head'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json(); // an array of objects where each object is a user

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return ( 
        <>
            <Head>
                <title>{ ninja.name } | Ninja</title>
                <meta name="keywords" content={ninja.name} />
            </Head>
            <div>
                <h1>{ ninja.name }</h1>
                <p>Email: { ninja.email }</p>
                <p>Website: { ninja.website }</p>
                <p>City: { ninja.address.city }</p>
            </div>
            <Link href="/ninjas">
                <a className="btn">
                    Go Back To All Ninjas
                </a>
            </Link>
        </>
     );
}
 
export default Details;