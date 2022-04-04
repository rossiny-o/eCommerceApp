import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './products.json';


function App() {
 return (
    <div className="App">
      {/* navbar */}
      <nav className='bg-success'>
        <div className='container mb-5 p-3'>
          <div className='row'>
           <div className='col-3'>
              <h3>eCommerce</h3>
           </div>
           <div className='col d-flex flex-row-reverse p-2'>
             <button href='#' className='mx-3 text-success btn-warning'>Cart</button>
             <button href='#' className='text-success btn-warning'>Login</button>
           </div>
          </div>
        </div>
      </nav>

      {/* main */}
        <main>
          <div className='container '>
            <div className='row mb-4 my-4'>
              <div className='col d-flex justify-content-center '>
                {/* dropdown button */}
                <div className='dropdown'>
                  <button className='w-auto btn btn-success py-3 dropdown-toggle ' data-bs-toggle='dropdown'>Categories</button>
                  <ul className='dropdown-menu'>
                    <li><a className='dropdown-item' href={0}>Item 1</a></li>
                    <li><a className='dropdown-item' href= {0}>Item 2</a></li>
                    <li><a className='dropdown-item' href={0}>Item 3</a></li>
                  </ul>
                </div>
                <input type='search' className='w-auto p-3' placeholder='Search Here...'></input>
                <button className='btn btn-success w-auto p-3'>Search</button>
              </div>
            </div>
            <div className='row mb-4 my-45'>
              <div className='col-4'>
                <div className="card text-center w-100 h-100">
              <h5 className="card-header bg-success text-white pt-2">Card title</h5>
              <img src="images\BlueGirlFINAL.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                  
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-success">View</button>
              </div>
                </div>
              </div>
              {/* 2 */}
              <div className='col-4'>
                <div className="card text-center">
              <h5 className="card-header bg-success text-white pt-2">Card title</h5>
              <img src="images\BlueGirlFINAL.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                  
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-success">View</button>
              </div>
                </div>
              </div>
              {/* 3 */}
              <div className='col-4'>
                <div className="card text-center">
              <h5 className="card-header bg-success text-white pt-2">Card title</h5>
              <img src="images\BlueGirlFINAL.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                  
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <button className="btn btn-success">View</button>
              </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      {/* footer */}
      <div className='footer '>
        <div className='container-fluid bg-success'></div>
      </div>
    </div>
  );
}

export default App;
