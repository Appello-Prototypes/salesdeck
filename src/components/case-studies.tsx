import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Play, CheckCircle } from 'lucide-react'

// SLIDE 12: RIVAL INSULATION CASE STUDY
export function RivalSlide() {
  const metrics = [
    'Complex Union Wage Rules Handled',
    'Digital Safety Compliance Implemented', 
    'Automated Payroll Processing',
    'Strategic US Market Validation'
  ]

  const solutions = [
    'Advanced Payroll Module: Custom union wage rule configuration',
    'Compliance Tracking: Automated safety and certification management',
    'Time Tracking: Union-compliant timesheet processing',
    'Reporting: Specialized union payroll and compliance reports'
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Case Study: <span className="text-appello-secondary">Rival Insulation</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Complex Union Operations Made Simple
        </h2>
      </div>

      {/* Company Details */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl appello-callout text-white mb-4">Company Profile</h3>
              <ul className="space-y-2 appello-body text-appello-gray text-sm">
                <li>🇺🇸 United States Operations</li>
                <li>👷 75+ unionized field workers</li>
                <li>🤝 CSIA Local 25 signatory</li>
                <li>📋 Complex collective bargaining agreements</li>
                <li>🎯 Strategic US market validation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl appello-callout text-white mb-4">Challenge</h3>
              <p className="appello-body text-appello-gray text-sm leading-relaxed">
                Rival Insulation struggled with union wage calculations, multiple rates, overtime rules, benefits, prevailing wage compliance for government projects, and complex payroll reporting required by union agreements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Player Placeholder */}
      <Card className="bg-appello-navy/50 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="aspect-video bg-appello-navy/80 rounded-lg flex items-center justify-center relative">
            <Button className="bg-appello-secondary hover:bg-appello-primary text-white p-6 rounded-full">
              <Play className="w-8 h-8" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="appello-body text-white text-sm">
                Watch Chris Tremberth from Rival Insulation explain how Appello handles their complex union operations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-xl appello-callout text-white mb-6 text-center">Results Achieved</h3>
            <div className="space-y-3">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="appello-body text-appello-gray text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-xl appello-callout text-white mb-6 text-center">Solution Points</h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <div key={index} className="text-appello-gray text-sm appello-body">
                  • {solution}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-5xl text-appello-secondary mb-4">&ldquo;</div>
          <p className="text-lg appello-body text-white italic mb-6 leading-relaxed">
            Appello understands the complexity of union operations. They built exactly what we needed for our workforce, and the results speak for themselves.
          </p>
          <div className="text-appello-secondary appello-callout">
            — Chris Tremberth, Operations Manager, Rival Insulation
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// SLIDE 13: THERMEC INSULATION CASE STUDY
export function ThermecSlide() {
  const metrics = [
    { metric: '8hrs → 2hrs', label: 'Weekly Payroll Time' },
    { metric: '10+ hrs/week', label: 'Admin Time Saved' },
    { metric: '100%', label: 'Field Worker Adoption' },
    { metric: '2 weeks', label: 'Go-Live Timeline' }
  ]

  const solutions = [
    'Digital Time Tracking: Mobile app for field workers',
    'Real-time Job Costing: Automated cost tracking and reporting',
    'Safety Management: Digital forms and compliance tracking',
    'Sage 50 Integration: Seamless accounting system connection'
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Case Study: <span className="text-appello-secondary">Thermec Insulation</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Operational Efficiency Transformation
        </h2>
      </div>

      {/* Company Details */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl appello-callout text-white mb-4">Company Profile</h3>
              <ul className="space-y-2 appello-body text-appello-gray text-sm">
                <li>🇨🇦 Ottawa, Canada</li>
                <li>👷 45 field workers</li>
                <li>🏆 First Appello customer</li>
                <li>💼 Sage 50 integration success</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl appello-callout text-white mb-4">Challenge</h3>
              <p className="appello-body text-appello-gray text-sm leading-relaxed">
                Thermec was experiencing rapid growth but manual processes were bottlenecks. Paper timesheets caused payroll delays, Excel-based job costing had no real-time visibility.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Video Player */}
      <Card className="bg-appello-navy/50 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="aspect-video bg-appello-navy/80 rounded-lg flex items-center justify-center relative">
            <Button className="bg-appello-secondary hover:bg-appello-primary text-white p-6 rounded-full">
              <Play className="w-8 h-8" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="appello-body text-white text-sm">
                Watch Andrew Martin from Thermec Insulation share how Appello transformed their operations
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-green-500/10 border-green-500/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-2xl appello-headline text-green-400 mb-2">{metric.metric}</div>
              <p className="appello-body text-white text-sm">{metric.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Solutions */}
      <Card className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-xl appello-callout text-white mb-6 text-center">Solution Implementation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="appello-body text-appello-gray text-sm">{solution}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Testimonial */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-5xl text-appello-secondary mb-4">&ldquo;</div>
          <p className="text-lg appello-body text-white italic mb-6 leading-relaxed">
            Moving our timesheets, project costing, and reporting into Appello cut hours of admin work every week. My team isn&apos;t going back.
          </p>
          <div className="text-appello-secondary appello-callout">
            — Andrew Martin, Thermec Insulation
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// SLIDE 14: THOMAS GROUP CASE STUDY
export function ThomasSlide() {
  const metrics = [
    'Enterprise Scale Validation',
    '~200 Power Users Supported',
    'Multiple Location Management', 
    'Complex Project Coordination'
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Case Study: <span className="text-appello-secondary">Thomas Group</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Enterprise Scalability Proven
        </h2>
      </div>

      {/* Company Details */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl appello-callout text-white mb-4">🇨🇦 Canada • ~1,100 total employees • ~200 power users</h3>
          <p className="appello-body text-appello-gray leading-relaxed">
            Enterprise-scale mechanical insulation contractor with multiple locations across Canada. Thomas Group needed to manage workforce across multiple locations with complex project requirements and enterprise-scale operational visibility.
          </p>
        </CardContent>
      </Card>

      {/* Video Player */}
      <Card className="bg-appello-navy/50 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="aspect-video bg-appello-navy/80 rounded-lg flex items-center justify-center relative">
            <Button className="bg-appello-secondary hover:bg-appello-primary text-white p-6 rounded-full">
              <Play className="w-8 h-8" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="appello-body text-white text-sm">
                Watch Thomas Group leadership discuss enterprise-scale workforce management transformation
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <p className="appello-body text-white text-sm">{metric}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonial & Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="text-4xl text-appello-secondary mb-4">&ldquo;</div>
            <p className="appello-body text-white italic mb-4">
              Appello transformed how we manage our workforce. We have visibility we never had before across all our locations and projects.
            </p>
            <div className="text-appello-secondary appello-callout text-sm">
              — Operations Manager, Thomas Group
            </div>
          </CardContent>
        </Card>

        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-lg appello-callout text-white mb-4">Strategic Impact</h3>
            <p className="appello-body text-appello-gray text-sm leading-relaxed">
              Thomas Group validates Appello&apos;s enterprise scalability, proving the platform works for the largest contractors in the mechanical insulation industry and enables complex workforce management at scale.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// SLIDE 15: VANOSS INSULATION CASE STUDY
export function VanossSlide() {
  const metrics = [
    'Real-time Crew Visibility',
    'Eliminated Payroll Chaos',
    '100% Digital Compliance',
    'Foundation For Growth'
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Case Study: <span className="text-appello-secondary">Vanoss Insulation</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          From Chaos to Control - Complete Digital Transformation
        </h2>
      </div>

      {/* Company Details */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl appello-callout text-white mb-4">🇨🇦 London, Ontario • ~50 field workers • Matt Vanoss as minority partner/investor</h3>
          <p className="appello-body text-appello-gray leading-relaxed">
            Foundation customer for Appello&apos;s development: third-generation family business transitioning from manual processes including whiteboard scheduling, paper-based systems, and limited digital capabilities.
          </p>
        </CardContent>
      </Card>

      {/* Video Player */}
      <Card className="bg-appello-navy/50 border-appello-secondary/30 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8">
          <div className="aspect-video bg-appello-navy/80 rounded-lg flex items-center justify-center relative">
            <Button className="bg-appello-secondary hover:bg-appello-primary text-white p-6 rounded-full">
              <Play className="w-8 h-8" />
            </Button>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="appello-body text-white text-sm">
                Watch Matt Vanoss, Owner & Minority Partner, share the complete digital transformation journey
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-lg appello-callout text-red-400 mb-4">Before: Manual Chaos</h3>
            <ul className="space-y-2 appello-body text-appello-gray text-sm">
              <li>📋 Whiteboard scheduling</li>
              <li>📄 Paper-based systems</li>
              <li>⏰ Payroll delays</li>
              <li>📊 No real-time visibility</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-500/10 border-green-500/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-lg appello-callout text-green-400 mb-4">After: Digital Control</h3>
            <div className="space-y-2">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="appello-body text-appello-gray text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonial & Strategic Impact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <div className="text-4xl text-appello-secondary mb-4">&ldquo;</div>
            <p className="appello-body text-white italic mb-4">
              We built this together from the ground up. Every feature was tested with real field workers and real projects.
            </p>
            <div className="text-appello-secondary appello-callout text-sm">
              — Matt Vanoss, Owner & Minority Partner
            </div>
          </CardContent>
        </Card>

        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8">
            <h3 className="text-lg appello-callout text-white mb-4">Strategic Impact</h3>
            <p className="appello-body text-appello-gray text-sm leading-relaxed">
              Vanoss became the foundation customer and strategic partner that enabled Appello&apos;s development, with Matt Vanoss as minority partner/investor providing ongoing industry expertise.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// SLIDE 16: PRICING & VALUE
export function PricingSlide() {
  const pricing = [
    { icon: '💰', title: 'Simple Pricing Structure', description: 'Pay only for what you use, access to entire platform included, implementation and training included, ongoing support included' },
    { icon: '🎯', title: 'Flexible Investment', description: 'Start with timesheets & payroll, expand based on your needs, complete platform access, white-glove implementation' }
  ]

  const comparison = [
    { solution: 'Point Solutions', annual: '$15,000-25,000', implementation: '$5,000-15,000', hidden: 'Integration, maintenance', total: '$75,000-125,000' },
    { solution: 'Enterprise Software', annual: '$50,000-150,000', implementation: '$25,000-100,000', hidden: 'Customization, consulting', total: '$200,000-550,000' },
    { solution: 'Appello', annual: 'Start with timesheets', implementation: 'Included', hidden: 'None', total: 'TBD based on usage' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Transparent, <span className="text-appello-secondary">Scalable Investment</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Pricing That Pays for Itself
        </h2>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {pricing.map((price, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-3xl mb-4">{price.icon}</div>
              <h3 className="text-xl appello-callout text-white mb-4">{price.title}</h3>
              <p className="appello-body text-appello-gray text-sm leading-relaxed">{price.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <Card className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
        <CardContent className="p-8">
          <h3 className="text-xl appello-callout text-white mb-6 text-center">3-Year Cost Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-appello-gray/20">
                  <th className="text-left p-3 appello-callout text-white">Solution Type</th>
                  <th className="text-center p-3 appello-callout text-white">Annual Cost</th>
                  <th className="text-center p-3 appello-callout text-white">Implementation</th>
                  <th className="text-center p-3 appello-callout text-white">Hidden Costs</th>
                  <th className="text-center p-3 appello-callout text-white">Total 3-Year Cost</th>
                </tr>
              </thead>
              <tbody className="appello-body">
                {comparison.map((row, index) => (
                  <tr key={index} className={`border-b border-appello-gray/10 ${row.solution === 'Appello' ? 'bg-appello-secondary/10' : ''}`}>
                    <td className="p-3 text-appello-gray">{row.solution}</td>
                    <td className="p-3 text-center text-appello-gray">{row.annual}</td>
                    <td className="p-3 text-center text-appello-gray">{row.implementation}</td>
                    <td className="p-3 text-center text-appello-gray">{row.hidden}</td>
                    <td className="p-3 text-center appello-callout text-white">{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* What's Included */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">🛡️</div>
          <h3 className="text-xl appello-callout text-white mb-4">What&apos;s Included</h3>
          <p className="appello-body text-appello-gray">
            Setup & Training • Direct Support • All Integrations • Regular Updates • No Hidden Fees
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

// SLIDE 17: NEXT STEPS
export function NextStepsSlide() {
  const steps = [
    { icon: '🎯', title: 'Schedule Your Live Demo', description: 'Industry-specific demonstration, real workflow examples, Q&A session, 45-60 minutes focused discussion' },
    { icon: '📊', title: 'Custom ROI Analysis', description: 'Based on current operations, specific savings calculations, implementation timeline, investment justification materials' },
    { icon: '📞', title: 'Reference Customer Connections', description: 'Speak with customers in your industry, firsthand experiences, real-world results, build decision confidence' },
    { icon: '🚀', title: 'Implementation Planning', description: '30-day detailed timeline, data migration strategy, training plan, go-live support and success metrics' }
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
        {steps.map((step, index) => (
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

      {/* Support Highlight */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-6xl mx-auto">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-xl appello-callout text-white mb-4">🤝 Why Choose Appello?</h3>
            <p className="appello-body text-appello-gray">
              Real People • Direct Access • Canadian & American Support • We Do the Heavy Lifting • Industry Recognition
            </p>
            <p className="appello-body text-appello-secondary text-sm mt-4">
              When you call, you talk to the people who built the software and understand your business. Featured in industry publications and speaking at major trade conferences.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl appello-callout text-white mb-2">Corey Shelson</h3>
            <p className="text-appello-secondary appello-body mb-4">CEO & Co-Founder</p>
            <div className="space-y-3">
              <p className="text-appello-gray appello-body text-sm">corey@useappello.com</p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-appello-secondary hover:bg-appello-primary text-white flex-1">
                  📧 Email
                </Button>
                <Button size="sm" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white flex-1">
                  📅 Calendar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl appello-callout text-white mb-2">Ian Haase</h3>
            <p className="text-appello-secondary appello-body mb-4">VP Sales</p>
            <div className="space-y-3">
              <p className="text-appello-gray appello-body text-sm">ian@useappello.com</p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-appello-secondary hover:bg-appello-primary text-white flex-1">
                  📧 Email
                </Button>
                <Button size="sm" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white flex-1">
                  📅 Calendar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// SLIDE 18: FINAL CTA
export function FinalCTASlide() {
  const stats = [
    { icon: '📞', title: 'Real Human Support', subtitle: 'No call centers, no chatbots' },
    { icon: '⚡', title: '2-4 Week Implementation', subtitle: 'Start with timesheets, expand over time' },
    { icon: '⭐', title: '5-Star G2 Rating', subtitle: 'Customer satisfaction proven' },
    { icon: '🇨🇦🇺🇸', title: 'Canadian & American', subtitle: 'Dedicated local support' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Join <span className="text-appello-secondary">25 Companies</span> Who Chose 5-Star Support
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Ready to stop managing your business with Excel and paper?
        </h2>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift">
            <CardContent className="p-6 text-center">
              <div className="text-3xl mb-4">{stat.icon}</div>
              <h3 className="text-lg appello-callout text-white mb-2">{stat.title}</h3>
              <p className="appello-body text-appello-gray text-sm">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Final Testimonial */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-5xl text-appello-secondary mb-4">&ldquo;</div>
          <p className="text-xl appello-body text-white italic mb-6 leading-relaxed">
            Stop settling for software that wasn&apos;t built for you. Join the 25 ICI subcontractors who found the ONLY platform purpose-built for Tier 2/3 subcontractors. Schedule your demo and see why Appello is different.
          </p>
        </CardContent>
      </Card>

      {/* Transformation Message */}
      <Card className="bg-appello-primary/20 border-appello-primary/50 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-xl appello-callout text-white mb-4">Transform Your Operations Starting Next Week</h3>
          <p className="appello-body text-appello-gray">
            While your competitors wrestle with spreadsheets, you&apos;ll have real-time visibility, automated processes, and direct access to our team
          </p>
        </CardContent>
      </Card>

      {/* Final CTAs */}
      <div className="text-center space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-appello-secondary hover:bg-appello-primary text-white px-12 py-6 text-xl appello-callout">
            Book Your Demo Today →
          </Button>
          <Button size="lg" variant="outline" className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white px-12 py-6 text-xl appello-callout">
            Call Now: (555) 123-4567
          </Button>
        </div>
        
        <p className="appello-body text-appello-gray text-sm">
          🛡️ No pressure, no commitments. Just see what&apos;s possible for your business.
        </p>
      </div>
    </div>
  )
}
