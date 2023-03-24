import React, {useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'
import WorkItem from '../utils/workItem/WorkItem'
import Loading from '../utils/loading/Loading'
import axios from 'axios'
import Filters from './Filters'
import LoadMore from './LoadMore'
import {Link} from 'react-router-dom'


function Works() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.worksAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.worksAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const checkAll = () =>{
        products.forEach(product => {
            product.checked = !isCheck
        })
        setProducts([...products])
        setIsCheck(!isCheck)
    }

    const deleteAll = () =>{
        products.forEach(product => {
            if(product.checked) deleteProduct(product._id, product.images.public_id)
        })
    }

    // if(loading) return <div><Loading /></div>
    return (
        <>
        
        {
            isAdmin && 
            <div className="delete-all">
                
                <Link id='addblog' to="/CreateWork">Add New Work</Link>
            </div>
        }

        <div className="products">
            {
                products.map(product => {
                    return <WorkItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                })
            } 
        </div>

        <LoadMore />
        {products.length === 0 }
        {/* {products.length === 0 && <Loading />} */}
        </>
    )
}

export default Works
