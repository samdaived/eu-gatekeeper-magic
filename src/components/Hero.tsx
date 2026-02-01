import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Ship, TrendingUp } from "lucide-react";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center hero-gradient relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      {/* EU Stars Pattern */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <div className="relative w-48 h-48">
          {[...Array(12)].map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x = 80 + 70 * Math.cos(angle);
            const y = 80 + 70 * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute w-4 h-4 text-accent"
                style={{ left: x, top: y }}
              >
                ★
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-5xl">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
              <img
                src={logo}
                alt="EU Stars Pattern"
                className="w-1/2 md:w-48 lg:w-56 flex-shrink-0 max-h-48 md:max-h-64 object-contain"
              />
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-slide-up leading-tight">
                  {t.hero.title}
                </h1>

                <p
                  className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up"
                  style={{ animationDelay: "0.1s" }}
                >
                  {t.hero.subtitle}
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("contact")}
                    className="bg-accent text-accent-foreground hover:bg-accent/90 group"
                  >
                    {t.hero.cta}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    onClick={() => scrollToSection("services")}
                    className="bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/40 hover:bg-primary-foreground/30"
                  >
                    {t.hero.learnMore}
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <Ship className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">
                    27+
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    EU Countries
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">
                    500+
                  </div>
                  <div className="text-sm text-primary-foreground/60">
                    Transactions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
