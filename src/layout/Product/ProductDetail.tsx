import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchSingleProduct } from '~/features/productSlice';
import { useAppDispatch, useAppSelector } from '~/app/hooks';

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  const { product } = useAppSelector((state) => state.product);

  console.log(product);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  return <div>Detail</div>;
};

export default ProductDetail;
