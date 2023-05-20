import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert'

import "react-datepicker/dist/react-datepicker.css";

export default class CreateStock extends Component {
    constructor(props) {
        super(props);


        this.onChangeItemcode = this.onChangeItemcode.bind(this);
        this.onChangeProductname = this.onChangeProductname.bind(this);
        this.onChangeDiscription = this.onChangeDiscription.bind(this);
        this.onChangeUnitprice = this.onChangeUnitprice.bind(this);
        this.onChangeqty = this.onChangeqty.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Itemcode: '',
            Productname: '',
            Discription: '',
            Unitprice: '',
            qty: '',
            Stock: []
        }
    }

    //set the Itemcode

    onChangeItemcode(e) {
        this.setState({
            Itemcode: e.target.value
        })
    }

    //set the Productname

    onChangeProductname(e) {
            this.setState({
                Productname: e.target.value
            })
        }
        //set Discription
    onChangeDiscription(e) {
        this.setState({
            Discription: e.target.value
        })
    }

    //set Unitprice

    onChangeUnitprice(e) {
        this.setState({
            Unitprice: e.target.value
        })
    }

    //Set qty

    onChangeqty(e) {
        this.setState({
            qty: e.target.value
        })
    }





    //submit Function

    onSubmit(e) {
        e.preventDefault();

        const Stock = {
            Itemcode: this.state.Itemcode,
            Productname: this.state.Productname,
            Discription: this.state.Discription,
            Unitprice: this.state.Unitprice,
            qty: this.state.qty
        }

        console.log(Stock);

        axios.post('http://localhost:5000/Stock/add', Stock)
            .then(res => console.log(res.data));


        swal({
                title: "Done!",
                text: "Rate Successfully Added",
                icon: "success",
                button: "Okay!"
            })
            .then((value) => {
                swal(window.location = '/Stock/');
            });

        // window.location = '/create';

    }

    render() 
    {
        return ( <div  >
            <div class = "row ">
            <div class = "col-6" >
            <br/>{ <img src="https://www.clipartkey.com/mpngs/m/169-1693853_inventory-control-software-market-inventory-management.png" width="30%" height="50%" /> }
            </div> <div class = "col-6" >
            <div div class = "myformstyle" >
            <div className = "card-body" 
             style = {
                { marginLeft: '10%' }} >

            <div className = "col-md-8 mt-4 mx-auto" > </div> 
            <h3 className = "text-center" > 
            <font face = "Comic sans MS" size = "6" > New Rate </font>
            </h3 > <br></br>
            
            <br></br>
            
             <form onSubmit = { this.onSubmit } >
                        <div className = "form-group" style = {{ marginBottom: '15px' }} >
                            <label style = {{ marginBottom: '5px' }} > Flexibility Rate </label> 
                            <input type = "number"
                            required className = "form-control"
                            name = "Item Code "
                            placeholder = "1 - 5"
                            value = { this.state.Itemcode }
                            onChange = { this.onChangeItemcode }/> 
                        </div>
                        <div className = "form-group" >
                            <label> Availability Rate : </label> <
                            input type = "number"
                            required className = "form-control"
                            name = "Product Name"
                            placeholder = "1 - 5"
                            value = { this.state.Productname }
                            onChange = { this.onChangeProductname }/> 
                        </div > 
                        <div className = "form-group" >
                            <label> Humanity Rate : </label> <
                            input type = "number"
                            required className = "form-control"
                            name = "Description"
                            placeholder = "1 - 5"
                            value = { this.state.Discription }
                            onChange = { this.onChangeDiscription }/> 
                        </div >


                        <div className = "form-group" >
                            <label > Quality of Service : </label> <
                            input type = "Text"
                            required className = "form-control"
                            name = "Unit Price"
                            placeholder = "Enter here"
                            value = { this.state.Unitprice }
                            onChange = { this.onChangeUnitprice }/> 
                        </div>


                        <div className = "form-group" >
                            <label > Satisfaction Level: </label> <
                            input type = "Text"
                            required className = "form-control"
                            name = "Qty"
                            placeholder = "Enter here"
                            value = { this.state.qty }
                            onChange = { this.onChangeqty }
                            /> 
                        </div >

                        <div className = "form-group" >
                            <input type = "submit"
                            value = "Add Rate"
                            className = "btn btn-primary" / >
            </div>
            {" "} </form >  </div> </div > </div>
             </div ><br/> <br/>  </div>
        );
    }
}
