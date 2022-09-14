import Link from 'next/link'
import ProductCards from '../components/productCards'
import styles from '../styles/Home.module.css'

function Home({users}) {
    return (
    <div className={styles.section}>
        <div className={styles.sectionHead}>
            <h3>Today's Recommended</h3>
            <a>View More</a>
        </div>
        <div className={styles.sectionBody}>
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <ProductCards user={user} />
                        </div>
                    )
                })
            }
        </div>

    </div>
    )
}
export default Home

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        },
    }
}