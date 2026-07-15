import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919884004650"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="whatsapp-fab__ring" aria-hidden="true" />
      <MessageCircle strokeWidth={2} />
    </motion.a>
  );
}
