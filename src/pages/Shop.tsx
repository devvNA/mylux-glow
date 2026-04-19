import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { productsData } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SortOption = "featured" | "bestselling" | "price-asc" | "price-desc";

const Shop = () => {
  const [activeConcern, setActiveConcern] = useState<string>("All");
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allConcerns = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(productsData.flatMap((p) => p.concernTags || []))),
    ];
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...productsData];

    // Filter by Concern
    if (activeConcern !== "All") {
      result = result.filter((p) => p.concernTags?.includes(activeConcern));
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q),
      );
    }

    // Sort
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => a.numericPrice - b.numericPrice);
        break;
      case "price-desc":
        result.sort((a, b) => b.numericPrice - a.numericPrice);
        break;
      case "bestselling":
        // simple simulation or static sort (id based for demo)
        result.sort((a, b) => Number(a.id) - Number(b.id));
        break;
      case "featured":
      default:
        // default data order
        break;
    }

    return result;
  }, [activeConcern, sortOption, searchQuery]);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4"
          >
            The Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-body text-muted-foreground text-sm md:text-base max-w-lg mx-auto"
          >
            Curated essentials for your ritual. Pure, potent, and elegantly
            formulated for luminous skin.
          </motion.p>
        </div>

        {/* Filters and Utilities Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-border pb-6">
          {/* Concerns Filter */}
          <div className="flex bg-secondary/50 p-1 rounded-sm overflow-x-auto hide-scrollbar">
            {allConcerns.map((concern) => (
              <button
                key={concern}
                onClick={() => setActiveConcern(concern)}
                className={`flex-shrink-0 px-5 py-2 font-heading text-xs tracking-widest uppercase transition-all rounded-sm ${
                  activeConcern === concern
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-black/5"
                }`}
              >
                {concern}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            {/* Search */}
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 border border-border bg-transparent rounded-sm text-sm font-body text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/60 w-full sm:w-48"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative group">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="appearance-none bg-transparent border border-border px-4 py-2 pr-8 font-heading text-xs uppercase tracking-widest text-foreground outline-none cursor-pointer rounded-sm hover:border-primary transition-colors w-full"
              >
                <option value="featured">Featured</option>
                <option value="bestselling">Bestselling</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              {/* Custom caret */}
              <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border-l border-b border-muted-foreground w-2 h-2 -rotate-45" />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="wait">
          {filteredAndSortedProducts.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
            >
              {filteredAndSortedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-32 flex flex-col items-center justify-center text-center"
            >
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                No products found
              </h3>
              <p className="font-body text-muted-foreground text-sm max-w-md mx-auto mb-8">
                We couldn't find anything matching your current filters. Try
                adjusting your search query or concern category.
              </p>
              <button
                onClick={() => {
                  setActiveConcern("All");
                  setSearchQuery("");
                }}
                className="bg-primary text-primary-foreground px-8 py-3 font-heading text-xs tracking-widest uppercase transition-colors hover:bg-charcoal-hover rounded-sm shadow-sm"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Shop;
