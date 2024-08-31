import React from 'react'

function Card(props) {
    return (
        <div>
            {props.children}
            {/* the content inside the component is not bydefault visible we have to make it visible using above mehtod  */}

        </div>
    )
}

export default Card;