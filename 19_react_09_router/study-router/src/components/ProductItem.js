import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const { product } = props;

  return (
    <Link className="ProductItem" to={'/product/' + product.id}>
      <ul>
        <li>상품명: {product.name}</li>
        <li>상세설명: {product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
};

export default ProductItem;
