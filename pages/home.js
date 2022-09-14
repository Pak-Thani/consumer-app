import Link from 'next/link'
import ProductCards from '../components/productCards'
import styles from '../styles/Home.module.css'
import customSection from  '../constant/customSection.json'
import styled from 'styled-components'

const Style = styled.div`
.section {
    width: 60%;
    margin: auto;
    .sectionHead {
        display: flex;
        justify-content: space-between;
        align-items: center;
    & a {
        color: 	rgb(76,182,84);
        }
    }
    .sectionBody {
        display: flex;
        flex-direction: ;
        margin: 0px 4px;
    }
}

`

function Home({users}) {
    return (
    <Style>
        <div className="section">
            <div className="sectionHead">
                <h3>Today's Recommended</h3>
                <a>View More</a>
            </div>
            <div className="sectionBody">
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
        <div className="section">
            <div className="sectionHead">
                <h3>Today's Recommended</h3>
                <a>View More</a>
            </div>
            <div className="sectionBody">
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
    </Style>
    )
}
export default Home

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // const data = customSection
    console.log(data)

    return {
        props: {
            users: data,
        },
    }
}