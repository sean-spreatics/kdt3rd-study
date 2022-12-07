import { useParams, useNavigate } from 'react-router-dom';

const ProductDetailPage = ({ products }) => {
  console.log(products); // 배열

  const { productId } = useParams();
  console.log(productId);

  const navigate = useNavigate();

  const [targetProduct] = products.filter((p) => p.id === Number(productId));
  // [targetProduct] => [ { } ] or []
  // targetProduct => { } or undefined
  console.log(targetProduct);
  // {postId: 2, id: 7, name: 'repellat consequatur praesentium vel minus molestias voluptatum', email: 'Dallas@ole.me', body: 'maiores sed dolores similique labore et inventore … corporis molestiae mollitia quia et magnam dolor'}

  if (!targetProduct) {
    return <div className="ProductDetailPage">존재하지 않는 상품입니다.</div>;
  }

  return (
    <main className="ProductDetailPage">
      <div>여기는 상품 디테일 페이지</div>

      <button onClick={() => navigate(-1)}>목록보기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기</button>

      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
};

export default ProductDetailPage;
