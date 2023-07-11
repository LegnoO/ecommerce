import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const productID = useParams();
  console.log(productID);
  return <div>Detail</div>;
};

export default ProductDetail;
