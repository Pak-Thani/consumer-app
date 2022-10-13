// import Link from 'next/link'
// import ProductCards from '../../components/productCards'
// import customSection from  '../../constant/customSection.json'
import styles from './index.module.css'

function Home({customSection}) {
    return (
    <div className={styles.section}> 
        JGSUFGAOIFGASOFGAOSIUFA
        {/* {
            customSection.map(customSec => {
                return (
                    <div key={customSec.title} className={styles.section}>
                        <div className={styles.sectionHead}>
                            <h3>{customSec.title}</h3>
                            <Link href="/">
                                <a className={styles.a}>View More</a>
                            </Link>
                        </div>
                        <div className={styles.sectionBody}>
                            {
                                customSec["products"].map(product => {
                                    return (
                                        <div key={customSec["products"].displayName}>
                                            <ProductCards product={product} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        } */}
    </div>
    )
}
export default Home

// export async function getStaticProps() {
//     const response = await fetch('http://localhost:3004/result')
//     const data = await response.json()
//     console.log(data["data"]["customSection"])

//     return {
//         props: {
//             customSection: data["data"]["customSection"],
//         },
//     }
// }