import Link from 'next/link'
import ProductCards from '../components/productCards'
import customSection from  '../constant/customSection.json'
import styled from 'styled-components'

const Style = styled.div`
.section {
    width: 60%;
    margin: auto;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    .sectionHead {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        & a {
            color: 	#4CB654;
            text-decoration: none;
        }
    }
    .sectionBody {
        display: flex;
        margin: 0px 4px;
        overflow: auto;
        scroll-behavior: smooth;
        ::-webkit-scrollbar {
            display: none;
        }
    }
}
`

function Home({customSection}) {
    return (
    <Style>
        <div> 
            {
                customSection.map(customSec => {
                    return (
                        <div key={customSec.title} className="section">
                            <div className="sectionHead">
                                <h3>{customSec.title}</h3>
                                <Link href="/">
                                    <a>View More</a>
                                </Link>
                            </div>
                            <div className="sectionBody">
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
            }
            
        </div>
    </Style>
    )
}
export default Home

export async function getStaticProps() {
    const response = await fetch('http://localhost:3004/result')
    const data = await response.json()
    console.log(data["data"]["customSection"])

    return {
        props: {
            customSection: data["data"]["customSection"],
        },
    }
}