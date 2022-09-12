import styles from "../styles/Caraousel.module.css";
import Image from "next/image";
import {useState, useEffect} from "react"

export default function Caraousel(){

const [index, setIndex] = useState(0);
const array =["/3.jpg","/6.jpg","/2.jpg","/5.jpg","/1.jpg"]

function loop(count){
  if(count==array.length){
    return count=0;
  }
  if(count<0){
    return count=array.length-1;
  }
  return count;
}

  useEffect(() => {
    const interval = setInterval(() => setIndex => (count => loop =>(count)+1), 2000);
    return () => clearInterval(interval)
  })

  return (
    <div className={styles.main}>
      <button className={`${styles.prev} ${styles.button}`} 
        onClick={()=>setIndex(count=> count-1)}>&#8592;</button>

      <button className={`${styles.next} ${styles.button}`}
        onClick={()=>setIndex(count=> count+1)}>&#8594;</button>
        
      <div className={styles.container}>
        <Image src={array[index]} layout="fill" objectFit="contain" alt=" "/>  
      </div>
    </div>
    
  )

}