import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Phone, Shield, Heart, Award, Users, Smile, Star } from "lucide-react";
import heroImage from "@/assets/hero-dental-clinic.jpg";
import dentalOffice from "@/assets/dental-office-interior.jpg";

const HomePage = () => {
  const services = [
    {
      icon: Shield,
      title: "General Dentistry",
      description: "Comprehensive oral health care including cleanings, fillings, and check-ups."
    },
    {
      icon: Star,
      title: "Cosmetic Dentistry", 
      description: "Teeth whitening, veneers, and smile makeovers to enhance your appearance."
    },
    {
      icon: Smile,
      title: "Orthodontics",
      description: "Braces, Invisalign, and aligners to straighten your teeth effectively."
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Oral exams, gum care, and children's dentistry for long-term health."
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Experienced Dentists",
      description: "Over 20 years of combined experience in advanced dental care."
    },
    {
      icon: Shield,
      title: "Modern Technology", 
      description: "State-of-the-art equipment for precise and comfortable treatments."
    },
    {
      icon: Users,
      title: "Patient-First Approach",
      description: "Personalized care plans tailored to your individual needs."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern dental clinic with happy patients and professional dentist"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Smile, <span className="text-secondary">Our Priority</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Trusted dental care with advanced treatments and compassionate service for you and your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white gap-2 px-8 py-6 text-lg">
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary gap-2 px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From routine cleanings to advanced cosmetic procedures, we offer complete dental care for the entire family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="bg-dental-mint-light p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-secondary/20 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-secondary mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose SmileCare?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We believe every smile deserves personalized, gentle care. Our commitment to excellence 
                and patient comfort sets us apart.
              </p>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white p-3 rounded-lg shadow-soft">
                      <item.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={dentalOffice}
                alt="Modern dental office interior with advanced equipment"
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-medium">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">20+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Schedule your consultation today and discover the difference personalized dental care can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2 px-8 py-6">
              <Calendar className="w-5 h-5" />
              Book Your Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 gap-2 px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;