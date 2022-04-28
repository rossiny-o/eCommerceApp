import './Main.scss';
import './products.js';
import { Header } from './components/HeaderComponent';
import {Product} from './components/CardComponent';
import {product1} from './Product';


function Main() {
 return (
   <div>
    
    <Header className="mb-2 pb-2" />

    <div> 
      
      Json Render: {product1.description}
      
    
    </div>
    <Product />

    
  </div>
  );
}

export default Main;
