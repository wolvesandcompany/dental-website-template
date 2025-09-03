import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Star,
  Smile,
  Heart,
  Scissors,
  Calendar,
  Phone,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Shield,
      title: "General Dentistry",
      description: "Comprehensive oral health care for the whole family",
      treatments: [
        "Regular cleanings and checkups",
        "Dental fillings and restorations",
        "Root canal therapy",
        "Tooth extractions",
        "Gum disease treatment",
        "Oral cancer screening",
      ],
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Star,
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with advanced aesthetic treatments",
      treatments: [
        "Professional teeth whitening",
        "Porcelain veneers",
        "Smile makeovers",
        "Tooth bonding",
        "Gum contouring",
        "Full mouth reconstruction",
      ],
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Smile,
      title: "Orthodontics",
      description: "Straighten teeth for improved function and appearance",
      treatments: [
        "Traditional metal braces",
        "Clear ceramic braces",
        "Invisalign clear aligners",
        "Retainers and maintenance",
        "Early interceptive treatment",
        "Adult orthodontics",
      ],
      color: "bg-green-50 text-green-600",
    },
    {
      icon: Scissors,
      title: "Implants & Restorations",
      description: "Replace missing teeth with permanent solutions",
      treatments: [
        "Single dental implants",
        "Multiple implant restoration",
        "All-on-4 implant dentures",
        "Dental crowns and bridges",
        "Dentures and partials",
        "Implant maintenance",
      ],
      color: "bg-orange-50 text-orange-600",
    },
    {
      icon: Heart,
      title: "Preventive Care",
      description: "Maintain optimal oral health with preventive treatments",
      treatments: [
        "Pediatric dentistry",
        "Dental sealants",
        "Fluoride treatments",
        "Oral hygiene education",
        "Custom mouthguards",
        "Nutrition counseling",
      ],
      color: "bg-pink-50 text-pink-600",
    },
    {
      icon: Clock,
      title: "Emergency Dentistry",
      description: "Urgent dental care when you need it most",
      treatments: [
        "Severe tooth pain relief",
        "Dental trauma treatment",
        "Lost filling replacement",
        "Broken tooth repair",
        "Abscess treatment",
        "After-hours emergency care",
      ],
      color: "bg-red-50 text-red-600",
    },
  ];

  const benefits = [
    "State-of-the-art dental technology",
    "Gentle, pain-free procedures",
    "Flexible financing options",
    "Same-day appointments available",
    "Comprehensive treatment planning",
    "Experienced, caring dental team",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-secondary">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Comprehensive dental care tailored to your unique needs, from
            routine cleanings to complex restorative procedures.
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white gap-2 px-8 py-6"
          >
            <Calendar className="w-5 h-5" />
            Schedule Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-strong transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`p-4 rounded-full w-16 h-16 mx-auto mb-4 ${service.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-8 h-8 mx-auto" />
                  </div>
                  <CardTitle className="text-xl text-primary mb-2">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {treatment}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-gradient-primary hover:bg-gradient-primary/90">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-dental-mint-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Our Dental Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine advanced technology with compassionate care to deliver
              exceptional results for every patient.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-soft"
              >
                <Award className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Treatment Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a systematic approach to ensure you receive the best
              possible care at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Comprehensive examination and discussion of your dental needs and goals.",
              },
              {
                step: "02",
                title: "Treatment Planning",
                description:
                  "Customized treatment plan with clear timelines and cost estimates.",
              },
              {
                step: "03",
                title: "Treatment",
                description:
                  "Gentle, precise treatment using the latest dental technology.",
              },
              {
                step: "04",
                title: "Follow-up",
                description:
                  "Ongoing care and maintenance to ensure lasting results.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Schedule your consultation today and take the first step toward
            optimal oral health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 gap-2 px-8 py-6"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-primary hover:bg-white/90 gap-2 px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              Call for Questions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
