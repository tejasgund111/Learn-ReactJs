import Card from "./Card";

function Tours({ tours, removeTour }) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan With Me</h2>
            </div>

            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                        // key is there for unique identifiers
                        // code will run perfectly,even if we dont pass key
                        // but we have to pass always key if we are using map is a better practice
                    })
                }
            </div>

        </div>
    );
}

export default Tours;