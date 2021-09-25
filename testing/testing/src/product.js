import React , { useEffect ,useState} from 'react'
import { Link } from 'react-router-dom'
import { showProducts } from './axios/product'
const Product = () => {
    const [products, setProducts] = useState([])

useEffect(async () => {

    await showProducts().then((res) => setProducts(res.data))
    
}, [])
console.log(products)

    const showOrder = () => {

    }
    return (
        <div>
            {products.map(p => (
            <p>{p.name} <Link to="/order"><svg style={{"height": "30px"}}xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg></Link> </p>

            )
            )}
        </div>
    )
}

export default Product
