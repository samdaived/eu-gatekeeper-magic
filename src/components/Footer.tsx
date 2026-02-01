import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Company Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
              <span className="text-accent-foreground font-bold">EU</span>
            </div>
            <div>
              <div className="text-primary-foreground font-semibold">
                EUGet Solutions Oy
              </div>
              <div className="text-primary-foreground/60 text-sm">
                {t.footer.businessId}: 3457736-9
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="text-center md:text-right text-primary-foreground/60 text-sm">
            <div>Ida Aalbergin tie 1 a E 132</div>
            <div>00400 Helsinki, Finland</div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-primary-foreground/40 text-sm">
            © {currentYear} EUGet Solutions Oy. {t.footer.rights}
          </div>
          <a
            href="mailto:service@eugetsolutions.com"
            className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
          >
            service@eugetsolutions.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
