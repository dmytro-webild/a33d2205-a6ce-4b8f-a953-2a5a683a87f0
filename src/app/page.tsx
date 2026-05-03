"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Location",          id: "location"},
      ]}
      brandName="Sinia"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="Sinia Restaurant"
      description="Dining experience by the lake in Mitrovica"
      tag="Elevated Lakeside Dining"
      buttons={[
        {
          text: "Book a Table",          href: "#contact"},
        {
          text: "Explore Menu",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/island-sunset_395237-42.jpg",          imageAlt: "Cinematic lake landscape"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-clean-interior-design_23-2151929379.jpg",          imageAlt: "Luxury interior setup"}
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Top rated dining experience"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Sinia Restaurant offers a unique dining experience by the Akumulues Lake, combining traditional flavors with a peaceful natural atmosphere."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/female-chef-garnishing-dish_23-2148763143.jpg",          alt: "Gourmet dish"},
      ]}
    />
  </div>

  <div id="experience" data-section="experience">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      metrics={[
        {
          id: "1",          value: "100%",          title: "Lake View",          description: "Serene waterfront atmosphere",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-photo-sea-sky_58702-11557.jpg"},
        {
          id: "2",          value: "Fresh",          title: "Lake-to-Table",          description: "Authentic flavors of Kosovo",          imageSrc: "http://img.b2bpic.net/free-photo/people-cooking-professional-food-recipe-restaurant-kitchen-using-fresh-vegetables-prepare-gourmet-meal-diverse-team-cooks-making-authentic-menu-dish-gastronomy-cuisine-service_482257-43501.jpg"},
        {
          id: "3",          value: "Modern",          title: "Culinary Art",          description: "Traditional recipes refined",          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-salad-with-crackers-cream-cheese_114579-1998.jpg"},
      ]}
      title="A place where nature meets taste"
      description="Experience our serene location and curated culinary offerings."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Grilled Meat Plate",          price: "18€",          variant: "Traditional",          imageSrc: "http://img.b2bpic.net/free-photo/chopped-pieces-fried-meat-with-potatoes-pumpkin_140725-9788.jpg"},
        {
          id: "2",          name: "Fresh Lake Fish",          price: "22€",          variant: "Signature",          imageSrc: "http://img.b2bpic.net/free-photo/seabass-barramundi-fish-meat-steak_1203-9944.jpg"},
        {
          id: "3",          name: "Traditional Salad",          price: "9€",          variant: "Healthy",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-salad-arrangement-with-dark-tableware_23-2148537231.jpg"},
        {
          id: "4",          name: "Regional Wine Selection",          price: "25€",          variant: "Beverage",          imageSrc: "http://img.b2bpic.net/free-photo/charming-african-american-woman-model-black-jacket-waist-bag-relaxing-cafe-free-time_627829-5344.jpg"},
        {
          id: "5",          name: "Homemade Dessert",          price: "7€",          variant: "Sweet",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-apple-cake-with-ice-cream-decorated-with-fresh-strawberry-sauce-plate-wood_141793-11082.jpg"},
        {
          id: "6",          name: "Artisan Bread Basket",          price: "5€",          variant: "Side",          imageSrc: "http://img.b2bpic.net/free-photo/floral-wedding-table-arrangement-top-view_23-2148966226.jpg"},
      ]}
      title="Our Signature Menu"
      description="Culinary excellence by the lake."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Gallery Scene 1",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-sitting-bar-counter_23-2147861962.jpg"},
        {
          id: "2",          name: "Gallery Scene 2",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157810.jpg"},
        {
          id: "3",          name: "Gallery Scene 3",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-chef-seasoning-salad_23-2148471932.jpg"},
        {
          id: "4",          name: "Gallery Scene 4",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-female-sitting-pier-playing-guitar-cromwell-new-zealand_181624-31077.jpg"},
        {
          id: "5",          name: "Gallery Scene 5",          imageSrc: "http://img.b2bpic.net/free-photo/cracker-cake-with-cranberries-top-inside-purple-plate-cream_140725-29942.jpg"},
      ]}
      cardTitle="Restaurant Atmosphere"
      cardTag="Gallery"
      cardAnimation="opacity"
    />
  </div>

  <div id="location" data-section="location">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      text="Visit us at Liqeni Akumulues, Mitrovica e Veriut 40000, Kosovo."
      buttons={[
        {
          text: "Get Directions",          href: "https://maps.google.com"},
        {
          text: "Call Now",          href: "tel:+38344000000"},
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <BlogCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Reserve your table today"
      description="Enjoy a lakeside dining experience at Sinia Restaurant."
      blogs={[
        {
          id: "1",          category: "Reservations",          title: "Book Your Dinner",          excerpt: "Secure your table for an evening by the lake.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-pasta-kitchen-tools-including-roller-with-leaves-bowl-black-textured-background_176474-3998.jpg",          authorName: "Sinia Team",          authorAvatar: "http://img.b2bpic.net/free-photo/sexy-brunette-girl-seductive-black-clothes-smokes-hookah-while-sitting-counter-nightclub_613910-19138.jpg",          date: "Open Daily"},
        {
          id: "2",          category: "Events",          title: "Host Your Events",          excerpt: "Ideal for romantic dinners and celebrations.",          imageSrc: "http://img.b2bpic.net/free-photo/happy-couple-enjoying-time-together-restaurant_23-2147891181.jpg",          authorName: "Sinia Team",          authorAvatar: "http://img.b2bpic.net/free-photo/rustic-christmas-served-wooden-table-with-vintage-silverware-candles-fir-twigs_8353-6154.jpg",          date: "Available Now"},
        {
          id: "3",          category: "Offers",          title: "Special Menus",          excerpt: "Seasonal traditional ingredients.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-spaghetti-with-fork-tomato-ricotta-cheese-round-black-plate_176474-3455.jpg",          authorName: "Sinia Team",          authorAvatar: "http://img.b2bpic.net/free-photo/virtual-love-cute-blonde-girl-red-dress-distance-date-with-candles-holding-wine-glass_140725-163866.jpg",          date: "Weekly Menu"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="Sinia"
      columns={[
        {
          title: "Location",          items: [
            {
              label: "Mitrovica e Veriut, Kosovo",              href: "#location"},
          ],
        },
        {
          title: "Links",          items: [
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Book Table",              href: "#contact"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Facebook",              href: "#"},
            {
              label: "Instagram",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 Sinia Restaurant. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
