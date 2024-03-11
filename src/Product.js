import React ,{ useState,useEffect } from "react";
import axios from "axios";
export default function Product(){
    const baseURL = "http://127.0.0.1:5000"
    const myInpurRef1 = React.createRef()
    const myInpurRef2 = React.createRef()
    const myInpurRef3 = React.createRef()
    const [newProductName, setNewProductName] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductId, setNewProductId] = useState("");
    const [product,setProduct]=useState([])
    React.useEffect(()=>{
        console.log("request to api")
        axios.get(baseURL+"/products")
        .then((response) => {
            setProduct(response.data)
          })
        .catch(error => {
            console.error('Error fetching data:', error);
          })
    },[])

    const deleteProduct=(id)=>{
        console.log(id)
        axios.delete(baseURL+"/products/"+id)
        .then((response) => {
            setProduct(response.data)
        })
        .catch(error => {
            console.error("Error deleting product:", error);
        })
    }

    const updateProduct = (id) => {
        const data = {
            name  : newProductName,
            price : newProductPrice
        }
        axios.put(`${baseURL}/products/${id}`, data)
            .then((response) => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("Error updating product:", error);
            });
    };

    const addProduct=()=>{
        console.log(parseInt(myInpurRef1.current.value))
        console.log(myInpurRef2.current.value)
        console.log(parseInt(myInpurRef3.current.value))
        const data={
            id    : newProductId,
            name  : newProductName,
            price : newProductPrice
        }
        axios.post(baseURL+"/products/",data)
        .then((respone) => {
            setProduct(respone.data)
        })
        .catch(error => {
            console.error("Error adding product:", error);
        });
    }

    const show_product = product.map((item) => {
        var num = item.id
        return (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                    <button onClick={() => deleteProduct(num)}>delete</button>
                </td>
    
            </tr>
        )
    })

    return (<div>
        <>Product List</>
        <table border='1'>
            <thead><tr><td>id</td><td>name</td><td>price</td></tr></thead>
            <tbody>{show_product}</tbody>
        </table>
        <br/>
        <>Add or Update Product</><br/>
        <input
                type="number"
                placeholder="Product Id"
                value={newProductId}
                onChange={e => setNewProductId(parseInt(e.target.value))}
                ref={myInpurRef1}
            /><br/>
        <input
                type="text"
                placeholder="Product Name"
                value={newProductName}
                onChange={e => setNewProductName(e.target.value)}
                ref={myInpurRef2}
            /><br/>
        <input
                type="number"
                placeholder="Product Price"
                value={newProductPrice}
                onChange={e => setNewProductPrice(parseInt(e.target.value))}
                ref={myInpurRef3}
            /><br/>
        <button onClick={addProduct.bind(this)}>Add Product</button>
        <button onClick={()=>updateProduct(newProductId)}>Update Product</button>
    </div>)

}