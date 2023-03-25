import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import Homepage from '../headers/Landingpage'
import Aboutme from '../headers/Aboutme'
import Servicepage from '../headers/Sevicepage'
import CreateWork from './createWorks/CreateWork'
import Works from './works/Works'
import DetailWork from './detailWork/DetailWork'

import CreateStock from './Rate/create-Stock.component'
import StockList from './Rate/Stock-list.component'
import EditStock from './Rate/edit-Stock.component'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/Aboutme" exact component={Aboutme} />
            <Route path="/Servicepage" exact component={Servicepage} />
            <Route path="/Products" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} />
            <Route path="/DetailWork/:id" exact component={DetailWork} />

            <Route path="/Stock-add/" exact component={CreateStock} />
            <Route path="/Stock/" exact component={StockList} />
            <Route path="/Stock-Edit/:id" exact component={EditStock} />


            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/CreateWork" exact component={isAdmin ? CreateWork : NotFound} />
            <Route path="/Works" exact component={isAdmin ? Works : NotFound} />

            <Route path="/history" exact component={isLogged ? OrderHistory : NotFound} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : NotFound} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages
