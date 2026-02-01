import { Mail, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <a
              href="mailto:service@eugetsolutions.com"
              className="bg-card rounded-2xl p-8 card-elevated group cursor-pointer border border-border"
            >
              <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.contact.email}
              </h3>
              <p className="text-primary font-medium mb-4 group-hover:underline">
                service@eugetsolutions.com
              </p>
              <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors">
                <span className="text-sm">{t.contact.email}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Address Card */}
            <div className="bg-card rounded-2xl p-8 card-elevated border border-border">
              <div className="w-16 h-16 rounded-xl hero-gradient flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.contact.address}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ida Aalbergin tie 1 a E 132
                <br />
                00400 Helsinki
                <br />
                Finland 🇫🇮
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              asChild
              className="group"
            >
              <a href="mailto:service@eugetsolutions.com">
                {t.contact.email}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
