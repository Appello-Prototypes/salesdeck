import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

// SLIDE 5: IMPLEMENTATION PROCESS
export function ImplementationSlide() {
  const timeline = [
    { week: 'Week 1', title: 'Foundation Setup', description: 'Data migration, user setup, timesheet & payroll focus, CSV imports from existing systems' },
    { week: 'Week 2-4', title: 'Training & Go-Live', description: 'System configuration, integration connections, comprehensive user training, go-live support' },
    { week: 'Week 5+', title: 'Module Expansion', description: 'Weekly working sessions to adopt additional modules based on biggest improvement opportunities' }
  ]

  const benefits = [
    { icon: '📞', title: 'Dedicated Direct Contact', description: 'Personal phone numbers, founder access, no call centers, real people' },
    { icon: '🔗', title: 'Native Integrations', description: 'QuickBooks Online/Desktop, Sage (50/100/300/Intacct), Vista by Viewpoint, Spectrum by Viewpoint' },
    { icon: '⚡', title: 'Plus Zapier', description: '7,500+ connections, workflow automation, RESTful API, Trimble App XChange Partner' }
  ]

  return (
    <div className="h-full flex items-center">
      <div className="w-full space-y-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl appello-headline text-white">
            Start with <span className="text-appello-secondary">Timesheets</span>, Expand at Your Pace
          </h1>
          <h2 className="text-lg appello-callout text-appello-secondary">
            Our Proven Onboarding Process - We Do the Heavy Lifting
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeline.map((step, index) => (
            <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all">
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <div className="w-8 h-8 bg-appello-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-white appello-callout text-sm">{index + 1}</span>
                  </div>
                  <Badge className="bg-appello-primary text-white px-2 py-1 text-xs">{step.week}</Badge>
                </div>
                <h3 className="text-sm appello-callout text-white mb-2 text-center">{step.title}</h3>
                <p className="appello-body text-appello-gray text-xs text-center leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Message */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto">
        <CardContent className="p-8">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">🛠️</div>
            <div className="text-left">
              <h3 className="text-xl appello-callout text-white mb-3">We Handle the Heavy Lifting</h3>
              <p className="appello-body text-appello-gray">
                Form Creation • Data Upload • System Integration • Zapier Connections. You focus on your business while we handle the technical setup.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-3">{benefit.icon}</div>
                <h3 className="text-sm appello-callout text-white mb-2">{benefit.title}</h3>
                <p className="appello-body text-appello-gray text-xs leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// SLIDE 6: COMPLETE SOLUTION OVERVIEW
export function ModulesSlide() {
  const modules = [
    { icon: '🏗️', title: 'Project & Job Management', description: 'Digital job files, milestone tracking, interactive mapping, multi-customer flexibility' },
    { icon: '👥', title: 'Workforce Scheduling', description: 'Gantt-style views, handles all job types (2-hour service calls to multi-year projects), trade-level scheduling' },
    { icon: '⏰', title: 'Time Tracking & Payroll', description: 'Electronic timesheets with GPS, rule-based CBA calculations, union & prevailing wages' },
    { icon: '🛡️', title: 'Safety & Compliance', description: 'Custom form builder, COR certification support, AI policy writer, regulatory automation' },
    { icon: '🔧', title: 'Equipment & Asset Management', description: 'QR code tracking, lifecycle management, geolocation check-in/out, maintenance alerts' },
    { icon: '🤖', title: 'AI-Powered Intelligence', description: 'Vectorized pricing database, estimate generation, multilingual support, automated insights' }
  ]

  const comingSoon = [
    { icon: '🚀', title: 'Service & Dispatch', description: 'Centralized service requests, automated invoicing, customer signatures' },
    { icon: '📦', title: 'Supply Chain Management', description: 'Purchase orders, inventory tracking, supplier performance management' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Pay Only for What You <span className="text-appello-secondary">Use</span>, Access Everything
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          10 Integrated Modules Under One Roof
        </h2>
      </div>

      {/* Main Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {modules.map((module, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{module.icon}</span>
                </div>
                <h3 className="text-lg appello-callout text-white mb-3">{module.title}</h3>
              </div>
              <p className="appello-body text-appello-gray text-sm text-center leading-relaxed">{module.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Integration Benefits */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-4xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl appello-callout text-white mb-4">✅ Integration Benefits You Get Immediately</h3>
          <p className="appello-body text-appello-gray">
            Single source of truth • Seamless data flow • No duplicate entry • Real-time visibility
          </p>
        </CardContent>
      </Card>

      {/* Implementation Approach */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="appello-callout text-white mb-2">Start with Timesheets & Payroll</h3>
            <p className="appello-body text-appello-gray text-sm">Most companies begin here to streamline their biggest pain point</p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="appello-callout text-white mb-2">Expand Based on Impact</h3>
            <p className="appello-body text-appello-gray text-sm">Add modules based on biggest improvement opportunities identified during onboarding</p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="appello-callout text-white mb-2">Full Platform Access</h3>
            <p className="appello-body text-appello-gray text-sm">Pay only for what you use, but access the entire platform from day one</p>
          </CardContent>
        </Card>
      </div>

      {/* Coming Soon */}
      <div className="mt-16">
        <h3 className="text-2xl appello-callout text-center text-white mb-8">Coming Soon</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comingSoon.map((module, index) => (
            <Card key={index} className="bg-appello-gray/10 border-appello-gray/30 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">{module.icon}</div>
                <h3 className="text-lg appello-callout text-white mb-3">{module.title}</h3>
                <p className="appello-body text-appello-gray text-sm">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// SLIDE 7: COMPETITIVE ADVANTAGE
export function CompetitiveSlide() {
  const advantages = [
    { icon: '🎯', title: 'ONLY True ICI Subcontractor Platform', description: 'Purpose-built for Tier 2/3 subcontractors (Mechanical, Electrical, Insulation, HVAC, Fire Protection), not adapted from GC or residential software' },
    { icon: '🏭', title: 'Government Contract Specialist', description: 'COR certification, Davis-Bacon compliance, certified payroll (WH-347), Green Book requirements built-in, not added on' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Why <span className="text-appello-secondary">Appello</span> vs. Everyone Else
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Clear Competitive Differentiation
        </h2>
      </div>

      {/* Comparison Table */}
      <Card className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm max-w-6xl mx-auto">
        <CardContent className="p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-appello-gray/20">
                  <th className="text-left p-3 appello-callout text-white">Feature</th>
                  <th className="text-center p-3 appello-callout text-appello-secondary">Appello</th>
                  <th className="text-center p-3 appello-callout text-appello-gray">Procore</th>
                  <th className="text-center p-3 appello-callout text-appello-gray">ServiceTitan</th>
                  <th className="text-center p-3 appello-callout text-appello-gray">Point Solutions</th>
                </tr>
              </thead>
              <tbody className="appello-body">
                <tr className="border-b border-appello-gray/10">
                  <td className="p-3 text-appello-gray">Built for ICI Subcontractors</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗ (GC Focus)</td>
                  <td className="p-3 text-center text-red-400">✗ (Residential)</td>
                  <td className="p-3 text-center text-red-400">✗ (Generic)</td>
                </tr>
                <tr className="border-b border-appello-gray/10">
                  <td className="p-3 text-appello-gray">Union Workforce Management</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗</td>
                  <td className="p-3 text-center text-red-400">✗</td>
                  <td className="p-3 text-center text-red-400">✗</td>
                </tr>
                <tr className="border-b border-appello-gray/10">
                  <td className="p-3 text-appello-gray">Government Contract Compliance</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗ (Limited)</td>
                  <td className="p-3 text-center text-red-400">✗ (None)</td>
                  <td className="p-3 text-center text-red-400">✗ (None)</td>
                </tr>
                <tr className="border-b border-appello-gray/10">
                  <td className="p-3 text-appello-gray">Real Human Support</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗ (Call Centers)</td>
                  <td className="p-3 text-center text-red-400">✗ (Chatbots)</td>
                  <td className="p-3 text-center text-red-400">✗ (Varies)</td>
                </tr>
                <tr className="border-b border-appello-gray/10">
                  <td className="p-3 text-appello-gray">Fast Implementation (2-4 weeks)</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗ (3-6 Months)</td>
                  <td className="p-3 text-center text-red-400">✗ (2-4 Months)</td>
                  <td className="p-3 text-center text-red-400">✗ (Multiple Systems)</td>
                </tr>
                <tr>
                  <td className="p-3 text-appello-gray">5-Star G2 Rating</td>
                  <td className="p-3 text-center text-green-400">✓</td>
                  <td className="p-3 text-center text-red-400">✗ (Mixed)</td>
                  <td className="p-3 text-center text-red-400">✗ (Mixed)</td>
                  <td className="p-3 text-center text-red-400">✗ (Limited)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {advantages.map((advantage, index) => (
          <Card key={index} className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{advantage.icon}</div>
                <div>
                  <h3 className="text-lg appello-callout text-white mb-3">{advantage.title}</h3>
                  <p className="appello-body text-appello-gray text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// SLIDE 8: MARKET GAP ANALYSIS
export function GapSlide() {
  const gaps = [
    { icon: '🏢', title: 'Procore Problem', description: 'Built for GCs managing subs, not subs managing people. Subs hate using it - too expensive, too complex, wrong workflows' },
    { icon: '🏠', title: 'ServiceTitan Problem', description: 'Residential service focus. Can&apos;t handle multi-year projects, union wages, or government compliance requirements' },
    { icon: '🔧', title: 'Point Solutions Problem', description: 'Workyard, ClockShark, FieldWire - each solves one piece. You need 5+ systems, constant data entry, no integration' },
    { icon: '📊', title: 'Generic Software Problem', description: 'Jonas, Foundation, Sage - accounting-focused. Missing field operations, safety compliance, modern mobile experience' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          The Only Platform Built for <span className="text-appello-secondary">YOUR Business</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Why Every Other Solution Falls Short for ICI Subcontractors
        </h2>
      </div>

      {/* Gap Analysis Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {gaps.map((gap, index) => (
          <Card key={index} className="bg-red-500/10 border-red-500/30 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{gap.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg appello-callout text-white mb-3">{gap.title}</h3>
                  <p className="appello-body text-appello-gray text-sm leading-relaxed">{gap.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Market Gap Visualization */}
      <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm max-w-5xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl appello-callout text-white mb-4">The ICI Subcontractor Sweet Spot</h3>
          <p className="appello-body text-appello-gray mb-6">
            Too complex for residential tools, too specialized for GC platforms, too field-focused for accounting software
          </p>
        </CardContent>
      </Card>

      {/* Unique Positioning */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-6xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">🎯</div>
          <h3 className="text-2xl appello-headline text-white mb-4">ONLY Appello</h3>
          <p className="text-lg appello-body text-appello-secondary">
            Purpose-built for Tier 2/3 ICI subcontractors. Mechanical, Electrical, Insulation, HVAC, Fire Protection. Union & Merit Shop. Government & Private. 2-hour service calls to multi-year projects.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

// SLIDE 9: AI CAPABILITIES
export function AISlide() {
  const capabilities = [
    { icon: '🧠', title: 'Vectorized Pricing Intelligence', description: 'Pinecone-powered database with manufacturer price books, converts unstructured quote requests into structured estimates' },
    { icon: '🎯', title: 'Streamlined Estimating', description: 'Quote letter templates, standardized worksheets, estimate calendar, deal flow tracking (not takeoff software)' },
    { icon: '📊', title: 'Automated Documentation', description: 'AI note-taking, multilingual translations, policy writing, compliance documentation' },
    { icon: '🔮', title: 'Advanced Analytics', description: 'Budget overrun prediction, certification expiry alerts, safety compliance forecasting, capacity planning' }
  ]

  const details = [
    { icon: '🤖', title: 'AI-Native Architecture', description: 'All data objects designed for AI accessibility, predictive intelligence across all business operations' },
    { icon: '⚡', title: 'Real-Time Intelligence', description: 'Automated insights from unified data architecture, proactive decision support, human-in-the-loop refinement' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          The <span className="text-appello-secondary">Future</span> is Already Here
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Advanced AI Capabilities Setting Industry Standards
        </h2>
      </div>

      {/* AI Capabilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {capabilities.map((capability, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <div>
                  <h3 className="text-lg appello-callout text-white mb-3">{capability.title}</h3>
                  <p className="appello-body text-appello-gray text-sm leading-relaxed">{capability.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Competitive Message */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-5xl mx-auto mt-16">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">🚀</div>
          <h3 className="text-xl appello-callout text-white mb-4">Industry-First AI Integration</h3>
          <p className="appello-body text-appello-gray">
            While competitors add AI as an afterthought, Appello was built with AI-first architecture. Our Apex and Atlas systems provide intelligence no other construction platform can match.
          </p>
        </CardContent>
      </Card>

      {/* Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {details.map((detail, index) => (
          <Card key={index} className="bg-appello-primary/10 border-appello-primary/30 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-3xl mb-4">{detail.icon}</div>
              <h3 className="text-lg appello-callout text-white mb-3">{detail.title}</h3>
              <p className="appello-body text-appello-gray text-sm leading-relaxed">{detail.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// SLIDE 10: ROI DEMONSTRATION
export function ROISlide() {
  const metrics = [
    { title: 'Start with Timesheets & Payroll', subtitle: 'Your biggest pain point', color: 'bg-appello-secondary' },
    { title: '30% Administrative Overhead Savings', subtitle: 'Proven with customers', color: 'bg-green-600' },
    { title: '2-4 weeks to See Results', subtitle: 'Immediate impact', color: 'bg-appello-primary' },
    { title: 'Expand Based on Impact', subtitle: 'Add modules as you see value', color: 'bg-purple-600' }
  ]

  const benefits = [
    { icon: '⏰', title: 'Administrative Time Savings', before: '15+ hours/week', after: '<1 hour/week', value: '$21,000-$35,000 annually' },
    { icon: '💰', title: 'Improved Job Profitability', before: 'Poor visibility', after: '5-8% margin improvement', value: '$100,000-$160,000 on $2M revenue' },
    { icon: '📄', title: 'Government Contract Ready', before: 'Manual compliance', after: 'Automated COR & WH-347', value: 'Audit-ready documentation' },
    { icon: '🛡️', title: 'Compliance Cost Savings', before: 'Manual safety tracking', after: 'Automated compliance', value: '$10,000-$25,000 annual savings' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Real Numbers from <span className="text-appello-secondary">Real Customers</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Quantified Return on Investment
        </h2>
      </div>

      {/* ROI Calculator */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {metrics.map((metric, index) => (
          <Card key={index} className={`${metric.color}/20 border-${metric.color.split('-')[1]}-500/30 backdrop-blur-sm`}>
            <CardContent className="p-6 text-center">
              <h3 className="text-lg appello-callout text-white mb-2">{metric.title}</h3>
              <p className="appello-body text-appello-gray text-sm">{metric.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg appello-callout text-white mb-3">{benefit.title}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-red-400">Before: {benefit.before}</span>
                      <span className="text-green-400">After: {benefit.after}</span>
                    </div>
                    <p className="appello-body text-appello-secondary text-sm font-semibold">Value: {benefit.value}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Line */}
      <Card className="bg-appello-secondary/20 border-appello-secondary/50 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">💡</div>
          <h3 className="text-2xl appello-headline text-white mb-4">The Math is Simple</h3>
          <p className="text-lg appello-body text-appello-secondary">
            Even with conservative estimates, Appello pays for itself in the first month and delivers $263,000+ in net value annually
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

// SLIDE 11: CUSTOMER SUCCESS OVERVIEW
export function CustomersSlide() {
  const customers = [
    { icon: '🏭', company: 'Rival Insulation', type: 'Union Operations', workers: '75+ unionized workers', highlight: 'Strategic US market validation', details: 'Complex union wage rules, digital safety compliance' },
    { icon: '📈', company: 'Thermec Insulation', type: 'Growth Enablement', workers: '45 field workers', highlight: 'First customer success', details: '8hrs→2hrs payroll time, real-time job costing' },
    { icon: '🚀', company: 'Vanoss Insulation', type: 'Digital Transformation', workers: '~50 workers', highlight: 'Minority partner relationship', details: 'Whiteboard to digital scheduling' },
    { icon: '⚡', company: 'Thomas Group', type: 'Enterprise Scale', workers: '~1,100 employees', highlight: 'Enterprise scalability proof', details: '~200 power users' }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6">
        <h1 className="text-5xl appello-headline text-white">
          Proven Results Across <span className="text-appello-secondary">Customer Types</span>
        </h1>
        <h2 className="text-2xl appello-callout text-appello-secondary">
          Success Stories from Real Customers
        </h2>
      </div>

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {customers.map((customer, index) => (
          <Card key={index} className="bg-appello-white/5 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/10 transition-all hover-lift">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-appello-secondary/20 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">{customer.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg appello-callout text-white mb-2">{customer.company}</h3>
                  <Badge className="bg-appello-secondary text-white mb-3">{customer.type}</Badge>
                  <p className="appello-body text-appello-gray text-sm mb-2">{customer.workers}</p>
                  <p className="appello-body text-appello-secondary text-sm font-semibold mb-2">{customer.highlight}</p>
                  <p className="appello-body text-appello-gray text-xs">{customer.details}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <p className="appello-body text-white italic mb-4">
              &ldquo;Appello understands the complexity of union operations.&rdquo;
            </p>
            <p className="text-appello-secondary appello-callout text-sm">— Chris Tremberth, Operations Manager</p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-secondary/10 border-appello-secondary/30 backdrop-blur-sm">
          <CardContent className="p-6 text-center">
            <p className="appello-body text-white italic mb-4">
              &ldquo;My team isn&apos;t going back to the old way.&rdquo;
            </p>
            <p className="text-appello-secondary appello-callout text-sm">— Andrew Martin, Thermec</p>
          </CardContent>
        </Card>
      </div>

      {/* Reference Message */}
      <Card className="bg-appello-primary/20 border-appello-primary/50 backdrop-blur-sm max-w-4xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="text-3xl mb-4">📞</div>
          <h3 className="text-xl appello-callout text-white mb-4">Talk to Our Customers Directly</h3>
          <p className="appello-body text-appello-gray">
            We&apos;ll connect you with reference customers in your specific trade who can share their real-world experience
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
