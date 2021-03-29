import styles from '../../styles/Ninjas.module.css'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => { // this runs before the component Ninjas rendered

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { ninjas : data }
    }

}

const Ninjas = ({ ninjas }) => {
    return ( 
        <>
            <Head>
                <title>Ninjas List </title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>All Ninjas</h1>

                {ninjas.map(ninja => (
                    <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                        <a className={styles.single}>
                            <h3>{ ninja.name }</h3>
                        </a>
                    </Link>
                ))}

            </div>
        </>
     );
}
 
export default Ninjas;