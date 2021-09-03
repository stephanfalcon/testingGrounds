import Card from "./card"


const loopProps = (data) => {
    let cardArray = []
    for(let i = 0; i<data.length;i++){
       cardArray.push(<Card id= {"modal"+i} name={data[i].name} title={data[i].title} bio={data[i].bio} photo={data[i].photo_url}/>) 
    }
    return(<div className="row">{cardArray}</div>)
}



const Container = (props) => {

    let p = props.data

    return(
        <div className="container">
            <h1>Executive Leadership</h1>
            {loopProps(p)}
        </div>
    )
}

export default Container