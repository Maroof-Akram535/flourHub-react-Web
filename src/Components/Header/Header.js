import React from 'react'
import '../../Assests/styles/Header.css';
export default function Header() {
  return (
    <React.Fragment>
      <header>
        <nav className="navbar navbar-default">
          <div className="container">
            <img src="http://www.needlework.ru/UserFiles/Image/Logotypes/heineken_logo_machine_embroidery_design.jpg" alt="" className="brand-logo" />
            <h1>Brand name</h1>
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Beer <span className="sr-only">(current)</span></a></li>
                <li><a href="#">More beer</a></li>
                <li><a href="#">Another Beer</a></li>
                <li><a href="#">Home brewed</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <section className="row dummy-fill">
        <div className="container">
          <div className="col-md-12">
            <h2>This amazing article</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum odio omnis, deserunt voluptatibus, inventore magni fugiat ut sit quasi tempora voluptatum rerum pariatur fugit voluptas accusamus recusandae. Rem harum repudiandae optio, voluptates quidem consectetur tempore! Est id dolores recusandae maiores optio facere, illum quam qui nihil temporibus odit et, eum reiciendis. Nisi repellendus, ipsam, dolorem delectus labore repudiandae nihil at placeat cum excepturi ratione alias minus tenetur iusto? Voluptas repudiandae commodi non, adipisci maiores earum architecto dolore delectus eum dolores veniam vel deserunt error ipsa accusantium quis eos dicta neque, rem temporibus laboriosam aut odio impedit. Eos repellat reprehenderit delectus, esse laudantium id et ex aperiam? Debitis ab, ut quam dicta deserunt minus corrupti voluptas non, tempore quas, voluptatum, sunt omnis praesentium quae saepe nemo accusantium ullam voluptatem similique. Blanditiis esse enim saepe dolores ex exercitationem, sit asperiores impedit eligendi, nemo quod explicabo nobis numquam velit libero perspiciatis nesciunt magnam vitae magni accusantium dolorum provident corporis reprehenderit! Et velit nihil molestias non ratione culpa autem repellat mollitia iste voluptatum, totam ut modi, illum molestiae atque dolorum est ipsum itaque temporibus odit? Labore, aliquid facilis, culpa nulla animi vel incidunt earum optio, quo sequi maxime rem repudiandae quidem laudantium possimus ex.</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
