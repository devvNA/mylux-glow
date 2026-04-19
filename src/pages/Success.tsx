import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Success = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full bg-secondary/30 p-10 rounded-sm text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
          className="flex justify-center mb-6 text-primary"
        >
          <CheckCircle size={64} strokeWidth={1.5} />
        </motion.div>
        <h1 className="font-heading text-3xl font-semibold mb-4 text-foreground">
          Order Confirmed
        </h1>
        <p className="font-body text-muted-foreground mb-8 text-sm leading-relaxed">
          Thank you for your purchase. Your order is being processed and
          perfectly packaged. You will receive an email confirmation shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground px-8 py-3 font-heading text-xs uppercase tracking-widest hover:bg-charcoal-hover transition-colors rounded-sm"
        >
          Return to Shop
        </Link>
      </motion.div>
    </div>
  );
};

export default Success;
