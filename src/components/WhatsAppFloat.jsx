
export default function WhatsAppFloat({ phone = '+50300000000', message = 'Hola' }) {
  const url = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-soft hover:scale-105 transition"
      title="WhatsApp"
    >
      <span className="text-white text-2xl">✆</span>
    </a>
  );
}
