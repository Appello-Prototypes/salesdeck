'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft, ChevronRight, Play, TrendingUp, Users, Star, HelpCircle, Pause } from 'lucide-react'
import { ProblemSlide, SolutionSlide, BenefitsSlide, CTASlide } from '@/components/slides'

const slides = [
  { id: 1, title: 'Transform Your Business', subtitle: 'Revolutionary Solutions for Modern Challenges', type: 'intro' },
  { id: 2, title: 'The Challenge', subtitle: 'What\'s Holding Your Business Back?', type: 'problem' },
  { id: 3, title: 'Our Solution', subtitle: 'Cutting-Edge Technology That Delivers Results', type: 'solution' },
  { id: 4, title: 'Benefits & Features', subtitle: 'Why Choose Our Platform?', type: 'benefits' },
  { id: 5, title: 'Ready to Get Started?', subtitle: 'Join Thousands of Satisfied Customers', type: 'cta' }
]

export default function SalesDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [showHelp, setShowHelp] = useState(false)

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlay])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prevSlide()
      } else if (e.key === 'Escape') {
        setIsAutoPlay(false)
      } else if (e.key >= '1' && e.key <= '5') {
        const slideIndex = parseInt(e.key) - 1
        if (slideIndex < slides.length) {
          goToSlide(slideIndex)
        }
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const goToSlide = (index: number) => setCurrentSlide(index)

  const renderSlideContent = () => {
    switch (slides[currentSlide].type) {
      case 'intro': return <IntroSlide />
      case 'problem': return <ProblemSlide />
      case 'solution': return <SolutionSlide />
      case 'benefits': return <BenefitsSlide />
      case 'cta': return <CTASlide />
      default: return <IntroSlide />
    }
  }

  return (
    <div className="min-h-screen bg-appello-navy text-appello-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-appello-primary/90 backdrop-blur-md border-b border-appello-secondary/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/Appello-Logo-White.svg" 
              alt="Appello" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-appello-secondary scale-125' 
                    : 'bg-white/30 hover:bg-appello-secondary/50'
                }`} />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setShowHelp(!showHelp)} className="text-white hover:bg-appello-secondary/20">
              <HelpCircle className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAutoPlay(!isAutoPlay)} className="text-white hover:bg-appello-secondary/20">
              {isAutoPlay ? <Pause className="w-4 h-4 text-appello-secondary" /> : <Play className="w-4 h-4" />}
            </Button>
            <span className="text-sm text-white/70">{currentSlide + 1} / {slides.length}</span>
          </div>
        </div>
      </nav>

      {showHelp && (
        <div className="fixed inset-0 z-50 bg-appello-navy/80 backdrop-blur-sm flex items-center justify-center p-6">
          <Card className="bg-appello-white border-appello-secondary/20 max-w-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl appello-headline">Navigation Help</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowHelp(false)} className="text-appello-navy hover:bg-appello-secondary/10">✕</Button>
              </div>
              <div className="space-y-4 text-appello-navy">
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">←→</Badge><span className="appello-body">Arrow keys to navigate</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">Space</Badge><span className="appello-body">Next slide</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">1-5</Badge><span className="appello-body">Jump to specific slide</span></div>
                <div className="flex items-center space-x-3"><Badge className="bg-appello-secondary text-white px-3 py-1">ESC</Badge><span className="appello-body">Stop auto-play</span></div>
                <Separator className="bg-appello-gray/20 my-4" />
                <p className="text-sm text-appello-gray">Click on cards and elements to interact with them</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <main className="pt-20 min-h-screen flex items-center justify-center p-6">
        <div className="w-full max-w-6xl">
          <div className="mb-8">
            <Progress value={((currentSlide + 1) / slides.length) * 100} className="h-2 bg-appello-primary/20">
              <div className="h-full bg-appello-secondary transition-all" />
            </Progress>
          </div>
          <div className="relative">{renderSlideContent()}</div>
          <div className="flex justify-between items-center mt-12">
            <Button 
              onClick={prevSlide} 
              disabled={currentSlide === 0} 
              variant="outline" 
              className="border-appello-secondary text-appello-secondary hover:bg-appello-secondary hover:text-white disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />Previous
            </Button>
            <div className="text-center">
              <h3 className="text-lg appello-callout text-white mb-1">{slides[currentSlide].title}</h3>
              <p className="text-appello-gray text-sm">{slides[currentSlide].subtitle}</p>
            </div>
            <Button 
              onClick={nextSlide} 
              disabled={currentSlide === slides.length - 1} 
              className="bg-appello-secondary hover:bg-appello-primary text-white disabled:opacity-50"
            >
              Next<ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

function IntroSlide() {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="space-y-6">
        <div className="appello-callout-bubble inline-block">
          Construction Technology Solutions
        </div>
        <h1 className="text-6xl appello-headline text-white mb-4">
          Transform Your <span className="text-appello-secondary">Construction Business</span>
        </h1>
        <p className="text-xl appello-body text-appello-gray max-w-4xl mx-auto leading-relaxed">
          Streamline operations, boost efficiency, and scale your ICI contracting business with real-time insights and powerful automation tools
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all hover-lift">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-appello-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl appello-callout text-white mb-2">40% Faster</h3>
            <p className="text-appello-gray appello-body">Project completion time</p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all hover-lift">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-appello-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl appello-callout text-white mb-2">500+</h3>
            <p className="text-appello-gray appello-body">ICI contractors served</p>
          </CardContent>
        </Card>
        
        <Card className="bg-appello-white/10 border-appello-secondary/30 backdrop-blur-sm hover:bg-appello-white/20 transition-all hover-lift">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-appello-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl appello-callout text-white mb-2">4.8/5</h3>
            <p className="text-appello-gray appello-body">Customer satisfaction</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-12">
        <Badge className="bg-appello-primary text-white px-6 py-3 text-sm appello-callout rounded-full">
          🏗️ Built specifically for Industrial, Commercial & Institutional contractors
        </Badge>
      </div>
    </div>
  )
}
