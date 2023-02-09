import './cards.css'


export const Cards = ({texto, image}) => {

    return(
        <>
        <div className='cards'>

        <div className='card'>
            <div className='card-top'>
                <img src={image} alt={texto} id='images'/>
            </div>
            <div className='card-bottom'>
                <h3>{texto}</h3>
            </div>
            </div>
        </div>
        </>
    )
}