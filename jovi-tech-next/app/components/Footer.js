"use client";

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="text-center text-gray-500 text-sm py-6 mt-10 border-t border-gray-200">
      <p>© {ano} Jovi Tech. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
