export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white mb-2">Dara Automation</h3>
                <p className="text-sm">Monitoring and Automation Services.</p>
            </div>
            
            <div className="flex gap-6 text-sm">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#products" className="hover:text-white transition-colors">Products</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} Dara Automation.</p>
                <p>All rights reserved. Erbil, Iraq.</p>
            </div>
        </div>
      </div>
    </footer>
  );
}
