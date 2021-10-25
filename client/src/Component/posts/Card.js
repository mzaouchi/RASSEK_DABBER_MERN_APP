
function Card(){
    return (
        <div >
        <div className="containerCard">
          <div className="card">
            <figure className="card__thumb">
              <img    style={{width:"100%"}} src="https://scontent.xx.fbcdn.net/v/t1.15752-9/s206x206/245228349_916336215649588_8390190795148864985_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=aee45a&_nc_ohc=AIbSJZYVpoEAX_9kYTY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=e1892539c882e8ecbbb7f34ff5e609d2&oe=618873B5" alt="" className="card__image" />
              <figcaption className="card__caption">
                <h2 className="card__title">NASA Has Found Hundreds Of Potential New Planets</h2>
                <p className="card__snippet">NASA released a list of 219 new “planet candidates” discovered by the Kepler space telescope, 10 of which are similar to Earth’s size and may be habitable by other life forms.</p>
                <a href className="card__button">Read more</a>
              </figcaption>
            </figure>
          </div>
        
        
        </div>
        
      </div>
    )
}
export default Card