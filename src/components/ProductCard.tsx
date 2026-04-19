import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCartStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`Added: ${product.name} to bag`);
  };

  return (
    <div className="flex flex-col h-full w-full">
      <Link
        to={`/products/${product.slug}`}
        className="block relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-secondary"
      >
        <motion.img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* Hover overlay with quick-view feel */}
        <motion.div
          className="absolute inset-0 bg-foreground/0 flex items-end justify-center pb-6"
          whileHover={{ backgroundColor: "hsla(0,0%,13%,0.08)" }}
          transition={{ duration: 0.4 }}
        />
      </Link>
      <Link to={`/products/${product.slug}`}>
        <h3 className="font-heading text-sm font-medium text-foreground mb-1 transition-colors duration-300 group-hover:text-charcoal-hover">
          {product.name}
        </h3>
      </Link>
      <p className="font-body text-xs text-muted-foreground mb-4 flex-grow">
        {product.desc}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-heading text-sm font-semibold text-foreground">
          {product.price}
        </span>
        <motion.button
          onClick={handleAdd}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-primary-foreground px-4 py-2 font-heading text-[10px] tracking-widest uppercase transition-colors duration-300 hover:bg-charcoal-hover"
        >
          Add to Bag
        </motion.button>
      </div>
    </div>
  );
};

export default ProductCard;
