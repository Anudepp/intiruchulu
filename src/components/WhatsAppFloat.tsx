import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const phoneNumber = '919347977431';
  const message = encodeURIComponent('Hi! I would like to order from Inti Ruchulu.');
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
