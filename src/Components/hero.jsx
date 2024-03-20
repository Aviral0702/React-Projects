const HeroSection=()=>{
    return(<main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND
                WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST 
                AND WE’RE HERE TO HELP YOU WITH OUR
                 SHOES.
            </p>
            <div className="btn">
                <button className="s
                hop">Shop Now</button>
                <button className="cat">Category</button>
            </div>
            <div className="end">
                <p className="last-head">Also available on</p>
                <div className="end-logos">
                    <img src="public/images/flipkart.png" alt="flipkart-logo" />
                    <img src="public/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="public/images/shoe_image.png" alt="heroimg"></img>
        </div>
    </main>);
}
export default HeroSection;
