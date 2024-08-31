
import './ItemDate.css'

function ItemDate(props) {
    // const day = 21;
    // const month = "August";
    // const year = 2002;
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div className='mfg-date'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}

export default ItemDate;

