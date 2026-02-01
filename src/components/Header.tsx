import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/i18n";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fi", label: "Suomi", flag: "🇫🇮" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const currentLang = languages.find((l) => l.code === language);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                EU
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-lg leading-tight">
                EUGet Solutions
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Oy
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Language Switcher & CTA */}
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLang?.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={language === lang.code ? "bg-secondary" : ""}
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:flex"
            >
              {t.nav.contact}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
