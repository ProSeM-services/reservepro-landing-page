import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  CheckCircle,
  Users,
  Calendar,
  BarChart3,
  ArrowRight,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Image
            alt="Reserve Pro Dashboard"
            className=""
            height="10"
            src="/logo-horizontal.png"
            width="150"
          />
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Características
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Precios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonios
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    📅 Sistema de Reservas
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Gestiona todas tus reservas en un solo lugar
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Reserve Pro es la plataforma completa para gestionar
                    reservas, clientes y recursos. Simplifica tu negocio y
                    aumenta tus ingresos con nuestro sistema intuitivo.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="h-11 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white"
                    asChild
                  >
                    <Link
                      href=" https://reserve-pro-backoffice.vercel.app/"
                      target="_blank"
                    >
                      Probar Reserve Pro
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="h-11">
                    Ver demo en vivo
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sin tarjeta de crédito
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Configuración inmediata
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Soporte incluido
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Reserve Pro Dashboard"
                  className="mx-auto overflow-hidden rounded-xl object-cover object-center shadow-2xl"
                  height="550"
                  src="/landing.png"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Características</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Todo lo que necesitas para gestionar reservas
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Reserve Pro integra todas las herramientas que necesitas para
                  administrar tu negocio de reservas de manera eficiente y
                  profesional.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Reservas en Tiempo Real</h3>
                  <p className="text-center text-muted-foreground">
                    Sistema de reservas online 24/7. Tus clientes pueden
                    reservar en cualquier momento y tú recibes notificaciones
                    instantáneas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Gestión Completa</h3>
                  <p className="text-center text-muted-foreground">
                    Administra clientes, recursos, horarios y pagos desde un
                    panel central. Control total de tu negocio en una sola
                    plataforma.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="rounded-full bg-blue-100 p-3">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Reportes y Analytics</h3>
                  <p className="text-center text-muted-foreground">
                    Obtén insights valiosos sobre tu negocio con reportes
                    detallados de ingresos, ocupación y tendencias de reservas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                  Perfecto para cualquier tipo de negocio
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">
                        Restaurantes y Cafeterías
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Gestiona mesas, horarios y reservas de comensales
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">
                        Salones de Belleza y Spas
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Programa citas, servicios y gestiona tu equipo
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Consultorios Médicos</h4>
                      <p className="text-muted-foreground text-sm">
                        Organiza consultas, pacientes y horarios médicos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Centros Deportivos</h4>
                      <p className="text-muted-foreground text-sm">
                        Reserva de canchas, clases y equipamiento deportivo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="bg-blue-100 rounded-lg p-4 text-center">
                    <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <p className="text-sm font-medium">Restaurantes</p>
                  </div>
                  <div className="bg-green-100 rounded-lg p-4 text-center">
                    <Users className="h-8 w-8 mx-auto mb-2 text-green-600" />
                    <p className="text-sm font-medium">Salones</p>
                  </div>
                  <div className="bg-purple-100 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <p className="text-sm font-medium">Consultorios</p>
                  </div>
                  <div className="bg-orange-100 rounded-lg p-4 text-center">
                    <BarChart3 className="h-8 w-8 mx-auto mb-2 text-orange-600" />
                    <p className="text-sm font-medium">Deportivos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-blue-600">5,000+</div>
                <p className="text-muted-foreground">Reservas gestionadas</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-blue-600">99.9%</div>
                <p className="text-muted-foreground">
                  Disponibilidad del sistema
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="text-4xl font-bold text-blue-600">24/7</div>
                <p className="text-muted-foreground">Acceso a tu sistema</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Testimonios</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Lo que dicen nuestros clientes
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Reserve Pro ha revolucionado la gestión de nuestro
                    restaurante. Hemos reducido las cancelaciones en un 60% y
                    aumentado nuestra ocupación significativamente."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/restaurant-owner-avatar.png"
                      width="40"
                    />
                    <div>
                      <p className="text-sm font-medium">Ana Martínez</p>
                      <p className="text-xs text-muted-foreground">
                        Propietaria, Restaurante El Jardín
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-blue-600 text-blue-600"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Como centro médico, necesitábamos un sistema confiable.
                    Reserve Pro nos ha permitido organizar mejor las consultas y
                    reducir los tiempos de espera de nuestros pacientes."
                  </p>
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/doctor-avatar.png"
                      width="40"
                    />
                    <div>
                      <p className="text-sm font-medium">Dr. Roberto Silva</p>
                      <p className="text-xs text-muted-foreground">
                        Director, Clínica Salud Integral
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary">Precios</Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Planes para cada tipo de negocio
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Elige el plan que mejor se adapte a las necesidades de tu
                  negocio. Todos incluyen soporte técnico.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {/* Free Plan */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Free</h3>
                    <div className="text-4xl font-bold">$0</div>
                    <p className="text-muted-foreground">Para empezar</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Hasta 50 reservas/mes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />1
                        usuario
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Soporte por email
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Reportes básicos
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">
                      Comenzar gratis
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Plan */}
              <Card className="relative border-blue-600">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 text-white">
                  Más Popular
                </Badge>
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Basic</h3>
                    <div className="text-4xl font-bold">
                      $29<span className="text-lg font-normal">/mes</span>
                    </div>
                    <p className="text-muted-foreground">
                      Para negocios pequeños
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Hasta 500 reservas/mes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />3
                        usuarios
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Soporte prioritario
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Reportes avanzados
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Notificaciones SMS
                      </li>
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white">
                      Elegir Basic
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold">Premium</h3>
                    <div className="text-4xl font-bold">
                      $79<span className="text-lg font-normal">/mes</span>
                    </div>
                    <p className="text-muted-foreground">
                      Para negocios grandes
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Reservas ilimitadas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Usuarios ilimitados
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Soporte 24/7
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        API personalizada
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Integración completa
                      </li>
                    </ul>
                    <Button className="w-full" variant="outline">
                      Elegir Premium
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-500 text-primary-foreground">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  ¿Listo para optimizar tus reservas?
                </h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a cientos de negocios que ya están transformando su
                  gestión de reservas. Comienza a usar Reserve Pro hoy mismo.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-11 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white"
                  asChild
                >
                  <Link
                    href="https://reserve-pro-backoffice.vercel.app/"
                    target="_blank"
                  >
                    Comenzar ahora gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 border-primary-foreground/20 text-foreground "
                >
                  Agendar demostración
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/60">
                Sin compromiso • Configuración gratuita • Soporte incluido
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto  px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit">
                    Contacto
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    ¿Tienes preguntas? Estamos aquí para ayudarte
                  </h2>
                  <p className="text-muted-foreground">
                    Nuestro equipo de expertos está listo para ayudarte a
                    implementar Reserve Pro en tu negocio. Contáctanos para una
                    demostración personalizada.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">
                        Demostración gratuita de 30 minutos
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">
                        Configuración personalizada
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-100 p-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                      </div>
                      <span className="text-sm">Soporte técnico incluido</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium mb-2"
                          >
                            Nombre
                          </label>
                          <Input id="firstName" placeholder="Tu nombre" />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium mb-2"
                          >
                            Apellido
                          </label>
                          <Input id="lastName" placeholder="Tu apellido" />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-2"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="business"
                          className="block text-sm font-medium mb-2"
                        >
                          Tipo de negocio
                        </label>
                        <Input
                          id="business"
                          placeholder="Ej: Restaurante, Salón de belleza..."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2"
                        >
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 text-white">
                        Enviar mensaje
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 Reserve Pro. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacidad
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://reserve-pro-backoffice.vercel.app/"
            target="_blank"
          >
            Acceder al Sistema
          </Link>
        </nav>
      </footer>
    </div>
  );
}
