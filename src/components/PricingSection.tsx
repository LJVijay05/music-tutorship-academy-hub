
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Star, Crown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter Plan",
      price: billingCycle === "monthly" ? 9599 : 8159, // 15% off for yearly
      originalPrice: billingCycle === "monthly" ? null : 9599,
      period: billingCycle === "monthly" ? "Per month" : "Per month (billed annually)",
      description: "For aspiring music producers getting started",
      popular: false,
      premium: false,
      features: [
        "15 students per batch",
        "Weekly live sessions",
        "Basic DAW training",
        "Monthly feedback sessions",
        "Access to sample libraries",
        "Certificate of completion",
        "Alumni network access",
        "Email support"
      ]
    },
    {
      id: "growth",
      name: "Growth Plan",
      price: billingCycle === "monthly" ? 16000 : 12800, // 20% off for yearly
      originalPrice: billingCycle === "monthly" ? null : 16000,
      period: billingCycle === "monthly" ? "Per month" : "Per month (billed annually)",
      description: "For serious producers ready to scale their skills",
      popular: true,
      premium: false,
      features: [
        "Everything in Starter, plus:",
        "One-on-one mentorship",
        "4 intensive sessions monthly",
        "Advanced mixing techniques",
        "Industry networking",
        "Custom project development",
        "Priority support",
        "Flexible scheduling",
        "WhatsApp mentor access"
      ]
    },
    {
      id: "custom",
      name: "Premium Elite",
      price: null,
      originalPrice: null,
      period: "Let's talk",
      description: "For professionals managing high-volume production workflows",
      popular: false,
      premium: true,
      features: [
        "Everything in Growth, plus:",
        "Unlimited mentorship sessions",
        "Full white-labeling",
        "API & Integration support",
        "Dedicated manager",
        "Custom feature development",
        "Team onboarding & training",
        "24/7 priority support",
        "Industry partnerships"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full blur-2xl animate-sparkle"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-zoom-in-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto] drop-shadow-2xl">
              Choose Your
            </span>
            <span className="text-gray-900 ml-4 drop-shadow-lg">Musical Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Select the perfect plan that matches your musical aspirations and budget
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 animate-slide-in-from-top" style={{ animationDelay: '0.2s' }}>
          <div className="bg-white p-2 rounded-full shadow-lg border border-gray-200">
            <div className="flex">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-purple-600 to-red-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative animate-stagger-fade hover:scale-105 transition-all duration-500 ${
                plan.popular ? "lg:-mt-8" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-purple-600 to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg animate-bounce-in">
                    <Star className="w-4 h-4 fill-current animate-sparkle" />
                    Popular
                  </div>
                </div>
              )}

              {/* Premium Corner Badge */}
              {plan.premium && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-20">
                  <div className="absolute top-4 right-[-32px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 text-amber-900 px-8 py-2 text-xs font-bold transform rotate-45 shadow-xl animate-golden-glow">
                    <Crown className="w-3 h-3 inline mr-1" />
                    ELITE
                  </div>
                </div>
              )}

              <Card
                className={`h-full relative overflow-hidden border-0 shadow-xl transition-all duration-500 group hover:shadow-2xl ${
                  plan.popular
                    ? "bg-gradient-to-br from-purple-50 via-white to-red-50 ring-2 ring-purple-200"
                    : plan.premium
                    ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-white ring-2 ring-amber-200 animate-golden-glow"
                    : "bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-red-50"
                }`}
              >
                <CardContent className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-3 ${
                      plan.premium ? "text-amber-700" : "text-gray-900"
                    }`}>
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      {plan.price ? (
                        <div>
                          {plan.originalPrice && (
                            <div className="text-lg text-gray-400 line-through mb-1">
                              ₹{plan.originalPrice.toLocaleString()}
                            </div>
                          )}
                          <div className={`text-5xl font-bold mb-2 ${
                            plan.premium ? "text-amber-600" : plan.popular ? "text-purple-600" : "text-gray-900"
                          }`}>
                            ₹{plan.price.toLocaleString()}
                          </div>
                          <div className="text-gray-500 font-medium">
                            {plan.period}
                          </div>
                          {billingCycle === "yearly" && (
                            <div className="text-green-600 text-sm font-semibold mt-2">
                              Save ₹{((plan.originalPrice || 0) - plan.price) * 12} annually
                            </div>
                          )}
                        </div>
                      ) : (
                        <div>
                          <div className={`text-4xl font-bold mb-2 ${
                            plan.premium ? "text-amber-600" : "text-gray-900"
                          }`}>
                            {plan.period}
                          </div>
                          <div className="text-gray-500 font-medium">
                            Custom pricing for your needs
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    <h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-yellow-500" />
                      Features
                    </h5>
                    <div className="text-sm text-gray-600 mb-4">
                      {plan.id === "starter" ? "Includes:" : 
                       plan.id === "growth" ? "Includes everything in Starter, plus:" :
                       "Includes everything in Growth, plus:"}
                    </div>
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.premium ? "text-amber-500" : plan.popular ? "text-purple-500" : "text-green-500"
                          }`} />
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                      plan.premium
                        ? "bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-amber-900 animate-golden-glow"
                        : plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-red-600 hover:from-purple-700 hover:to-red-700 text-white animate-premium-glow"
                        : "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white"
                    }`}
                    asChild
                  >
                    <Link to="/enrollment">
                      {plan.price ? "Start Free Trial" : "Contact Sales"}
                    </Link>
                  </Button>

                  {plan.price && (
                    <p className="text-center text-sm text-gray-500 mt-3">
                      No credit card required
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-slide-in-from-bottom" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg text-gray-600 mb-6">
            Not sure which plan is right for you? We're here to help.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-red-300 text-red-600 hover:border-red-600 hover:text-red-700 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-xl"
            asChild
          >
            <Link to="/contact">
              Get Personalized Recommendation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
