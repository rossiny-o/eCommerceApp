import './Main.scss';
import './products.json';
import { Header } from './components/HeaderComponent';
import {Product} from './components/CardComponent';


function Main() {
 return (
   <body>
    <Header className="mb-2 pb-2" />
    <Product />
  </body>
  );
}

export default Main;
