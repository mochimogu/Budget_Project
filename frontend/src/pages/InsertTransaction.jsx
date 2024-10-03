import { useState } from "react"
import { InsertData } from "../util/formUtil";


export default function TransactionForm() {

    const [formData, setFormData] = useState({
        item : "",
        quantity : "",
        amount : "",
        type : "",
    })

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });

      };

    return (
        <div className="mt-3">
            <form onSubmit={ (e)=> {
                e.preventDefault();

                InsertData(formData);
            }}>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Item</span>
                    <input type="text" className="form-control" placeholder="item..." 
                        aria-label="item" 
                        aria-describedby="addon-wrapping" 
                        value={formData.item}
                        onChange={handleChanges}
                        name="item"
                    />
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Quantity</span>
                    <input type="number" className="form-control" 
                        placeholder="quantity..." 
                        aria-label="quantity" 
                        aria-describedby="addon-wrapping" 
                        value={formData.quanity}
                        onChange={handleChanges}
                        name="quantity"
                    />
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Amount</span>
                    <input type="number" className="form-control" 
                        placeholder="$$$" aria-label="Amount" 
                        aria-describedby="addon-wrapping" 
                        value={formData.amount}
                        onChange={handleChanges}
                        name="amount"
                    />
                    <span className="input-group-text">.00</span>
                </div>
                <div className="mb-3 input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Type</span>
                    <select className="form-select" aria-label="Default select example" 
                        value={formData.type} 
                        onChange={handleChanges} 
                        name="type"
                    >
                        <option value="" disabled hidden>Select Type</option>
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="misc">Misc</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )




}


