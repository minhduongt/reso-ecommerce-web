import { TProduct } from '@/types/product';
import { Container, Grid, Box, Link } from '@mui/material';
import React from 'react';
import ProductCard from '../product-card';
import { TSetting } from './Section';

interface ProductGridProps {
  settings?: TSetting;
  products: TProduct[];
}

const ProductGridSection = ({ products }: ProductGridProps) => {
  return (
    <Box>
      <Grid container spacing={[2, 4]}>
        {products?.map((product) => (
          <Grid key={product.product_id} item xs={6} sm={4} md={3}>
            <Link
              href={`/products/${product.product_id}`}
              aria-label={`View ${product.product_name} product page`}
            >
              <ProductCard product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGridSection;