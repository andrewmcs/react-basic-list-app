function DessertsList(props) {

    // Inside the DessertsList  component, remove the null and instead return a ul element that contains a list of li elements, 
    // where each li text is a dessert with the following format: ${dessertName} - ${dessertCalories} cal.

    // The list should be sorted by calories in an ascending manner and any desserts with more than 500 calories should be excluded. 
    // For that you have to use a combination of map, filter and sort array operators.
    const desserts = props.data;

    const lowCalDesserts = desserts.filter((dessert) => {
        return dessert.calories < 500;
    });

    const lowCalDessertsSorted = lowCalDesserts.sort((a, b) => { return a.calories - b.calories; })

    return (
        <ul>
            {
                lowCalDessertsSorted.map((dessert) => {
                    return <li>{dessert.name} - {dessert.calories} cal</li>;
                })
            }
        </ul>
    );

}

export default DessertsList;
