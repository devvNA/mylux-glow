import { useParams, useNavigate, Link } from "react-router-dom";
import { productsData } from "@/data/products";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCartStore();

  const product = productsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
        <h1 className="font-heading text-4xl mb-4 text-foreground">
          Product Not Found
        </h1>
        <p className="font-body text-muted-foreground mb-8">
          The item you're looking for doesn't exist or has been removed.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-primary text-primary-foreground px-8 py-3 font-heading text-xs tracking-widest uppercase rounded-sm"
        >
          Return Home
        </button>
      </div>
    );
  }

  const handleAdd = () => {
    // Add product minus optional fields that aren't expected by the cart type normally, but since we extended Product in cartStore it's fine.
    // Wait, cartStore Product has `numericPrice` and `quantity`. productsData has `numericPrice`. It matches.
    addToCart(product);
    toast.success(`Added: ${product.name} to bag`);
  };

  const relatedProducts = product.relatedProductIds
    ? productsData.filter((p) => product.relatedProductIds?.includes(p.id))
    : [];

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8 mt-4">
        <nav className="flex items-center text-xs font-body text-muted-foreground gap-2">
          <Link
            to="/"
            className="hover:text-foreground transition-colors flex items-center gap-1"
          >
            <ArrowLeft size={12} />
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-foreground capitalize">Products</span>
          <ChevronRight size={12} />
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-[4/5] bg-secondary rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {product.concernTags && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.concernTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-heading uppercase tracking-widest text-primary border border-border px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              {product.name}
            </h1>
            <p className="font-heading text-xl text-foreground mb-6">
              {product.price}
            </p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-10">
              {product.desc}
            </p>

            <button
              onClick={handleAdd}
              className="w-full bg-primary text-primary-foreground py-4 font-heading text-xs tracking-widest uppercase transition-colors hover:bg-charcoal-hover rounded-sm shadow-sm mb-12"
            >
              Add to Bag
            </button>

            {/* Details Accordion style / Sections */}
            <div className="space-y-8 border-t border-border pt-8">
              {product.benefits && (
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm font-body text-muted-foreground"
                      >
                        <span className="block mt-1.5 w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.howToUse && (
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                    How to Use
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {product.howToUse}
                  </p>
                </div>
              )}

              {product.ingredients && (
                <div>
                  <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                    Ingredients
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed bg-secondary/30 p-4 rounded-sm">
                    {product.ingredients}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-32">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-8 text-center">
            Perfect Pairings
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div key={p.id} className="group cursor-pointer">
                <Link
                  to={`/products/${p.slug}`}
                  className="block relative aspect-[4/5] overflow-hidden rounded-sm mb-4 bg-secondary"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <Link to={`/products/${p.slug}`}>
                  <h3 className="font-heading text-sm font-medium text-foreground mb-1 group-hover:text-muted-foreground transition-colors">
                    {p.name}
                  </h3>
                </Link>
                <p className="font-heading text-sm text-muted-foreground">
                  {p.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
