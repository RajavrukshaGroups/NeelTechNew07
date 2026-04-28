import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Database, ChevronRight, ExternalLink } from "lucide-react";

export default function SitemapPage() {
  const sections = [
    {
      title: "Main Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about-us" },
        { name: "Our Services", path: "/our-services" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Blogs", path: "/blogs" },
        { name: "Success Stories", path: "/success-stories" },
      ]
    },
    {
      title: "System Administrator",
      links: [
        { name: "MCSE Training", path: "/mcse-training-certification-course" },
        { name: "Linux Administrator", path: "/linux-training-certification-course" },
        { name: "CCNA", path: "/ccna-training-certification-course" },
        { name: "Intune & O365", path: "/intune-training-certification-course" },
      ]
    },
    {
      title: "Automation",
      links: [
        { name: "Windows Powershell", path: "/powershell-training-certification-course" },
        { name: "Python", path: "/python-training-certification-course" },
      ]
    },
    {
      title: "Cloud Technology",
      links: [
        { name: "Microsoft Azure", path: "/microsoft-azure-training-certification-course" },
        { name: "Entra ID", path: "/microsoft-entra-id-training-certification-course" },
        { name: "AWS", path: "/aws-training-certification-course" },
        { name: "Google Cloud", path: "/google-cloud-gcp-training-certification-course" },
        { name: "Azure Sentinel", path: "/azure-sentinel-training-certification-course" },
      ]
    },
    {
      title: "DevOps",
      links: [
        { name: "AWS DevOps", path: "/aws-devops-training-certification-course" },
        { name: "Azure DevOps", path: "/azure-devops-training-certification-course" },
      ]
    },
    {
      title: "Cyber Security",
      links: [
        { name: "Ethical Hacking", path: "/cyber-security-training-certification-course" },
      ]
    },
    {
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms & Conditions", path: "/terms-conditions" },
        { name: "Refund Policy", path: "/refund-policy" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <nav className="bg-white border-b border-slate-100 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
              <Database size={18} />
            </div>
            <span className="font-bold text-blue-900 italic">Neel Technologies</span>
          </Link> */}
          <Link to="/" className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Sitemap</h1>
            <p className="text-slate-600 text-lg">Comprehensive list of all training modules and technical resources.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                  <div className="w-2 h-6 bg-blue-600 rounded-full" />
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.links.map((link, lidx) => (
                    <Link 
                      key={lidx} 
                      to={link.path} 
                      className="group flex items-center justify-between text-slate-600 font-medium hover:text-blue-600 transition-all"
                    >
                      <span className="group-hover:pl-2 transition-all">{link.name}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

           <div className="mt-16 text-center">
            <a 
              href="/sitemap.xml" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase tracking-widest"
            >
              XML Search Engine Sitemap <ExternalLink size={12} />
            </a>
          </div> 
        </motion.div>
      </main>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© 2026 Neel Technologies. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
