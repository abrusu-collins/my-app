function CarMap(props){

let cars =props.cars;

    return(
        <ul>
{        cars.map((car)=><li>I am a {car.brand}</li>)
}        </ul>
    );
}

export default CarMap;