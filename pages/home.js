import Link from 'next/link'
import ProductCards from '../components/productCards'
import customSection from  '../constant/customSection.json'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
    const [data, setData] = useState(null)

    useEffect ( ()=>{
        axios.get( "http://localhost:3004/result" )
        .then( (res) => {
        setData([...res.data["data"]["customSection"]])
        } )
        .catch((error) => {
        })
    }, [])

    return (
    <Style>
        <div> 
            {
                data !== null && data.map((res) => {
                return (
                    <div key={res.title} className="section">
                        <div className="sectionHead">
                            <h3>{res.title}</h3>
                            <Link href="/">
                                <a>View More</a>
                            </Link>
                        </div>
                        <div className="sectionBody">
                            {
                                res["products"].map(product => {
                                    return (
                                        <div key={product.displayName}>
                                            <ProductCards product={product} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )})
            }
        </div>
    </Style>
    )
}

export default Home

