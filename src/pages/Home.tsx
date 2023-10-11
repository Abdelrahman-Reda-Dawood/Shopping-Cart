export function Home() {
  return (
 <section id="hero" className="hero d-flex align-items-center section-bg">
    <div className="container-fluid">
        <div className="gy-5">
           <div className="text-center text-lg-center">
          <img src="imgs/heroimg.png" className="img-fluid w-full t-3" alt="hero img" />
        </div>
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center align-items-lg-center text-center text-lg-center">
            <h2 >Enjoy New Technologies
              <br/>
              Newest Iphone</h2>
          <p className="mt-10">Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
          <div className="d-flex">
            <a href="https://www.youtube.com/watch?v=X1b3C2081-Q&pp=ygUJaXBob25lIDEy" target="_blank" className="glightbox btn-watch-video d-flex align-items-center text-decoration-none"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>     
      </div>
    </div>
  </section>
  )
}
console.log(<img src="public/imgs/heroicon.png"/>);