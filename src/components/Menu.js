import React, { Component } from 'react';
import '../css/Menu.css';

const Data = (props) => {
    const arrayBufferToBase64 = (buffer) => {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
      };

    return(
            <div className="mx-auto w-100 row col-sm-12 h mt-5">
                <div className="border mx-5 col-sm card-color h overflow-auto">
                    <img src={{uri: 'data:image/png;base64' + arrayBufferToBase64(props.menuitems.image.data)}} />
                    <p class="card-text">{props.menuitems.itemname}</p>
                    <p className="card-text"><b>Location:</b> {props.menuitems.location}</p>
                    <p className="card-text"><b>Price:</b> {props.menuitems.price}</p>
                    <p className="card-text"><b>SellerName: </b>{props.menuitems.sellername}</p>
                    <p className="card-text"><b>Category: </b>{props.menuitems.category}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div> 
            
)}

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            menu: [],
            flag: false
        }
    }

    async componentDidMount() {

        // //GetToken
        // const uToken = "https://dishes-backend.herokuapp.com/api/user/token";
        // const uTokenResponse = await fetch(uToken, {
        //     method: 'GET',
        //     headers: {
        //         'Content-type': 'application/json',
        //     }
        // });
        // const Tokendata = await uTokenResponse.json();
        // const token = Tokendata.token;

        //Fetching Menuitems
        const Murl = "https://dishes-backend.herokuapp.com/api/menu/list";
        const MenuResponse = await fetch(Murl, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
                // 'x-access-token': token
            }
        });
        const menudata = await MenuResponse.json();
        this.setState({ menu: menudata, loading: false })
        console.log(this.state.menu);
    }

    


    menulist() {
        return this.state.menu.map(menudata => {
            return <Data menuitems={menudata} />
        })
    }


    render() {
        return (
            <div>
                <center><h1>Menu</h1></center>
                {this.state.loading || !this.state.menu ? (
                    <div>Loading...</div>
                ) : (
                        <div>
                            {this.menulist()}
                        </div>
                    )}
            </div>

        )
    }
}

export default Menu;