# Project Architecture

Follow this directory structure strictly.

```
src/
  assets/
    images/
    icons/
    logos/

  components/
    layout/
      Navbar.jsx
      Footer.jsx
    ui/
      Button.jsx
      Card.jsx
      SectionTitle.jsx
      ScrollReveal.jsx
    social/
      SocialIcons.jsx

  context/
    AuthContext.jsx

  firebase/
    config.js

  pages/
    Home/
      Home.jsx
      sections/
        Hero.jsx
        Welcome.jsx
        Programs.jsx
        Gallery.jsx
        Connect.jsx
        Testimonials.jsx

    ForStudents/
      index.jsx
      icons.jsx
      sections/
        FridayNights.jsx
        SpecialEvents.jsx
        HomeGroups.jsx
        EnglishClass.jsx
        Volunteer.jsx

    About/
      About.jsx
      sections/
        Hero.jsx
        WhoWeAre.jsx
        Mission.jsx
        OurRoots.jsx
        MeetTeam.jsx

    Partner/
      Partner.jsx
      sections/
        PartnerHero.jsx
        PartnerIntro.jsx
        WaysToPartner.jsx
        PartnerBanner.jsx
        PartnerContact.jsx

    Admin/
      AdminLogin.jsx
      AdminDashboard.jsx
      ProtectedRoute.jsx
      sections/
        EventsEditor.jsx
        LinksEditor.jsx

    Privacy/
      Privacy.jsx

  data/
    testimonials.js
    events.js
    programs.js

  App.jsx
  main.jsx
  index.css
```

## Page Composition Rules

Each page should be built from **section components**.

Example (`Home.jsx`):

```jsx
<Navbar />
<Hero />
<Welcome />
<Programs />
<Gallery />
<Connect />
<Testimonials />
<Footer />
```

Do NOT place large JSX blocks directly inside page files.

Each section must live in:

```
pages/PageName/sections/
```

## Component Guidelines

Use components for UI elements reused across **multiple pages**.

Examples: Button, Card, SectionTitle, ScrollReveal, Navbar, Footer

- Reusable components → `components/ui/`
- Layout components → `components/layout/`

## Auth & Firebase

- Firebase config lives in `src/firebase/config.js`
- Auth state is managed via React context in `src/context/AuthContext.jsx`
- Protected admin routes use `pages/Admin/ProtectedRoute.jsx`
