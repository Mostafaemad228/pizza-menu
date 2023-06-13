
function Footer() {

    const getTime = new Date().getHours()

    const openHour = 12
    const closeHour = 23
    return (
        <div className="footer">
            <div className="order">
                <p> {getTime >= openHour && getTime <= closeHour ?
                    <span className="open">resturant is open now</span> : <span className="close">resturant is close now</span>}
                    we are open from {openHour}:00 PM until {closeHour}:00 Pm; visite our site from here <a href="#!" > Pizza@pizza.com</a>
                </p>
                <button type="" className="btn"> Order </button>
            </div>

        </div>
    )
}

export default Footer
