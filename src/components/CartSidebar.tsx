import { Minus, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const CartSidebar = () => {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalQuantity,
  } = useCartStore();
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    closeCart();
    navigate("/checkout");
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="w-full flex flex-col sm:max-w-md bg-background/95 backdrop-blur-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-heading text-2xl tracking-wide text-foreground">
            Your Bag ({getTotalQuantity()})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto pr-2 -mr-2">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground gap-4">
              <span className="font-body">Your bag is empty.</span>
              <button
                onClick={closeCart}
                className="font-heading text-sm uppercase tracking-widest text-primary hover:text-foreground transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="w-20 h-24 rounded-sm overflow-hidden bg-secondary flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-heading text-sm text-foreground mb-1">
                          {item.name}
                        </h4>
                        <p className="font-body text-xs text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex justify-between items-end mt-4">
                      <div className="flex items-center border border-border rounded-sm">
                        <button
                          disabled={item.quantity === 1}
                          title="Decrease quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-body text-sm w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          title="Increase quantity"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-1 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-heading text-sm font-semibold">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="pt-6 border-t border-border mt-auto">
            <div className="flex justify-between items-center mb-6 text-foreground">
              <span className="font-heading font-medium tracking-wide">
                Subtotal
              </span>
              <span className="font-heading text-lg font-semibold">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckoutClick}
              className="w-full bg-primary text-primary-foreground py-4 font-heading text-sm uppercase tracking-widest hover:bg-charcoal-hover transition-colors rounded-sm"
            >
              Checkout
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSidebar;
