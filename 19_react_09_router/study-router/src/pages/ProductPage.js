import { useNavigate } from 'react-router-dom';
import ProductList from '../components/ProductList';

const ProductPage = ({ products }) => {
  const navigate = useNavigate();

  return (
    <main className="ProductPage">
      <div>여기는 상품 목록</div>
      <button onClick={() => navigate(1)}>앞으로 이동</button>

      <ProductList products={products} />
    </main>
  );
};

export default ProductPage;
