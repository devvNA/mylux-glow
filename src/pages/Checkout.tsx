import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { toast } from "sonner";
import { useEffect } from "react";

const checkoutSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  address: z.string().min(10, { message: "Address is too short." }),
  cardNumber: z
    .string()
    .regex(/^\d{16}$/, { message: "Card number must be 16 digits." }),
  expiry: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: "Format MM/YY required." }),
  cvc: z.string().regex(/^\d{3,4}$/, { message: "CVC must be 3 or 4 digits." }),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const navigate = useNavigate();

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      email: "",
      address: "",
      cardNumber: "",
      expiry: "",
      cvc: "",
    },
  });

  useEffect(() => {
    if (items.length === 0) {
      toast.error("Your bag is empty. Please add items before checking out.");
      navigate("/");
    }
  }, [items, navigate]);

  const onSubmit = (data: CheckoutFormValues) => {
    console.log("Order Processed:", data);
    clearCart();
    toast.success("Payment successful!");
    navigate("/success");
  };

  if (items.length === 0) return null;

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div>
          <h1 className="font-heading text-3xl font-semibold mb-8 text-foreground">
            Secure Checkout
          </h1>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <h2 className="font-heading text-xl mb-4 border-b border-border pb-2">
                Shipping Information
              </h2>
              <div>
                <label className="block font-body text-sm text-foreground mb-1">
                  Full Name
                </label>
                <input
                  {...form.register("fullName")}
                  className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Jane Doe"
                />
                {form.formState.errors.fullName && (
                  <p className="text-destructive text-xs mt-1">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-body text-sm text-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  {...form.register("email")}
                  className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="jane@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-destructive text-xs mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-body text-sm text-foreground mb-1">
                  Shipping Address
                </label>
                <textarea
                  {...form.register("address")}
                  className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none h-24"
                  placeholder="123 Glow Avenue..."
                />
                {form.formState.errors.address && (
                  <p className="text-destructive text-xs mt-1">
                    {form.formState.errors.address.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h2 className="font-heading text-xl mb-4 border-b border-border pb-2">
                Payment Details
              </h2>
              <div>
                <label className="block font-body text-sm text-foreground mb-1">
                  Card Number (Dummy)
                </label>
                <input
                  {...form.register("cardNumber")}
                  className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="1234567890123456"
                  maxLength={16}
                />
                {form.formState.errors.cardNumber && (
                  <p className="text-destructive text-xs mt-1">
                    {form.formState.errors.cardNumber.message}
                  </p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-body text-sm text-foreground mb-1">
                    Expiry Date
                  </label>
                  <input
                    {...form.register("expiry")}
                    className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="MM/YY"
                  />
                  {form.formState.errors.expiry && (
                    <p className="text-destructive text-xs mt-1">
                      {form.formState.errors.expiry.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block font-body text-sm text-foreground mb-1">
                    CVC
                  </label>
                  <input
                    {...form.register("cvc")}
                    className="w-full bg-transparent border border-border rounded-sm py-2 px-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                    placeholder="123"
                    maxLength={4}
                  />
                  {form.formState.errors.cvc && (
                    <p className="text-destructive text-xs mt-1">
                      {form.formState.errors.cvc.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-4 mt-8 font-heading text-sm uppercase tracking-widest hover:bg-charcoal-hover transition-colors rounded-sm"
            >
              Pay ${getTotalPrice().toFixed(2)}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-secondary/30 p-8 rounded-sm">
          <h2 className="font-heading text-2xl mb-6 text-foreground">
            Order Summary
          </h2>
          <div className="space-y-4 mb-6 pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-20 object-cover rounded-sm"
                />
                <div className="flex-1">
                  <h4 className="font-heading text-sm text-foreground">
                    {item.name}
                  </h4>
                  <p className="font-body text-xs text-muted-foreground mr-2">
                    Qty: {item.quantity}
                  </p>
                </div>
                <span className="font-heading text-sm font-medium">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-muted-foreground font-body text-sm">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-muted-foreground font-body text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-foreground font-heading text-lg font-semibold pt-4">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
