import './Item.css';

function Item(props){
    // const ItemName = "Nirma";
    const ItemName = props.name;

    return (
        <div>
            <h1 className="nirma">{ItemName}</h1>
            {props.children} 
            {/* the content inside the component is not bydefault visible we have to make it visible using above mehtod  */}
        </div>
    )
}

export default Item;