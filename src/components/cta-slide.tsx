import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CTASlide() {
  const actionSteps = [
    { 
      icon: '🎯', 
      title: 'Schedule Your Live Demo', 
      description: 'Industry-specific demonstration, real workflow examples, Q&A session, 45-60 minutes focused discussion'
    },
    { 
      icon: '📊', 
      title: 'Custom ROI Analysis', 
      description: 'Based on current operations, specific savings calculations, implementation timeline, investment justification materials'
    },
    { 
      icon: '📞', 
      title: 'Reference Customer Connections', 
      description: 'Speak with customers in your industry, firsthand experiences, real-world results, build decision confidence'
    },
    { 
      icon: '🚀', 
      title: 'Implementation Planning', 
      description: '30-day detailed timeline, data migration strategy, training plan, go-live support and success metrics'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Ready to Transform Your <span className="text-appello-secondary">Operations?</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Take the Next Step Toward Operational Excellence
        </h2>
      </div>

      {/* Action Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {actionSteps.map((step, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg appello-callout text-white mb-3">{step.title}</h3>
                  <p className="appello-body text-appello-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Message */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto mt-16">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🛠️</div>
            <div className="text-left">
              <h3 className="text-xl appello-callout text-white mb-3">We Handle the Heavy Lifting</h3>
              <p className="appello-body text-appello-gray mb-4">
                Form Creation • Data Upload • System Integration • Zapier Connections. You focus on your business while we handle the technical setup.
              </p>
              <p className="appello-body text-appello-secondary text-sm">
                🤝 Why Choose Appello? Real People • Direct Access • Canadian & American Support • We Do the Heavy Lifting • Industry Recognition
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl appello-callout text-white mb-4">Corey Shelson</h3>
            <p className="text-appello-secondary appello-body mb-4">CEO & Co-Founder</p>
            <div className="space-y-2">
              <p className="text-appello-gray appello-body text-sm">corey@useappello.com</p>
              <Button className="bg-appello-secondary hover:bg-appello-primary text-white w-full">
                Schedule with Corey
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl appello-callout text-white mb-4">Ian Haase</h3>
            <p className="text-appello-secondary appello-body mb-4">VP Sales</p>
            <div className="space-y-2">
              <p className="text-appello-gray appello-body text-sm">ian@useappello.com</p>
              <Button className="bg-appello-secondary hover:bg-appello-primary text-white w-full">
                Schedule with Ian
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Final CTAs */}
      <div className="text-center mt-16 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-appello-secondary hover:bg-appello-primary text-white px-8 py-4 text-lg appello-callout">
            Book Your Demo Today →
          </Button>
          <Button size="lg" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white px-8 py-4 text-lg appello-callout">
            Talk to Our Customers
          </Button>
        </div>
        
        <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-3xl mx-auto">
          <CardContent className="p-6 text-center">
            <p className="appello-body text-white text-lg">
              &ldquo;Stop settling for software that wasn&apos;t built for you. Appello is the ONLY platform purpose-built for ICI subcontractors. See the difference in your demo.&rdquo;
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
