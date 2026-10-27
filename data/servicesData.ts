export interface Subservice {
  title: string;
  description: string;
}

export interface ServiceDiscipline {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  lead: string;
  images: { src: string; alt: string }[];
  subservices: Subservice[];
  capabilities: string[]; // for backwards compatibility
  ctaText: string;
  ctaHref: string;
}

export const serviceDisciplines: ServiceDiscipline[] = [
  {
    id: "civil-structural",
    index: "/001",
    title: "Civil & Structural",
    shortTitle: "Civil & Structural",
    lead: "Foundations, buildings and structures engineered for the power grid.",
    images: [
      {
        src: "/img/engineering.jpeg",
        alt: "Steel building frame rising beside a tower crane",
      },
      {
        src: "/img/landulph.jpg",
        alt: "Substation civil engineering and foundation layout",
      },
      {
        src: "/img/infra.jpeg",
        alt: "Substation transformer bund and reinforced concrete base",
      },
    ],
    capabilities: [
      "Substation Foundations",
      "GIS & Substation Buildings",
      "Gantries & Steel Structures",
      "Cable Trenches & Drainage",
      "Access Roads & Site Layouts",
    ],
    subservices: [
      {
        title: "Substation Foundations",
        description:
          "PCD designs foundations for transformers, SGTs, switchgear and other HV plant across new and extended substations. Each design is based on ground conditions, plant loads and the constraints of the site. The result is foundations that are safe, economical and straightforward to build.",
      },
      {
        title: "GIS & Substation Buildings",
        description:
          "We provide structural design for GIS halls, control buildings and relay rooms that house critical grid equipment. Our designs account for heavy plant loads, crane access, cable entry and future expansion. Every building is coordinated with the electrical layout so equipment fits and works as intended.",
      },
      {
        title: "Gantries & Steel Structures",
        description:
          "PCD designs gantries, equipment supports and steelwork that carry overhead line connections and HV plant. We consider wind, conductor and short-circuit loads to make sure structures perform safely throughout their life. Designs are detailed for efficient fabrication and installation on site.",
      },
      {
        title: "Cable Trenches & Drainage",
        description:
          "We design cable trenches, ducts and drainage systems that protect cabling and keep substation sites dry and safe. Routes are planned around plant, foundations and access so they don’t clash with other works. Drainage designs also manage surface water and support environmental compliance.",
      },
      {
        title: "Access Roads & Site Layouts",
        description:
          "PCD plans access roads, hardstandings and site layouts for both construction and long-term operation. Our designs allow for heavy plant deliveries, including large transformers, as well as safe routes for maintenance teams. Good layouts reduce clashes on site and help keep programmes on track.",
      },
    ],
    ctaText: "Discuss a Civil Project",
    ctaHref: "/contact",
  },
  {
    id: "design-assurance",
    index: "/002",
    title: "Design Assurance",
    shortTitle: "Design Assurance",
    lead: "Independent review that gets designs safely from submission to sign-off.",
    images: [
      {
        src: "/img/civil.jpeg",
        alt: "Engineering drawings and schematics laid out for technical review",
      },
      {
        src: "/img/approach.jpg",
        alt: "Collaborative engineering design review meeting",
      },
      {
        src: "/img/gis_sub.jpg",
        alt: "Bulls Lodge 400 kV GIS Substation design assurance review",
      },
    ],
    capabilities: [
      "Design Package Review",
      "Standards & Specification Checks",
      "Constructability Reviews",
      "Comment Tracking & Close-out",
    ],
    subservices: [
      {
        title: "Design Package Review",
        description:
          "PCD carries out independent technical reviews of civil and structural design packages before they reach site. We check calculations, drawings and specifications for accuracy, safety and completeness. Issues are caught early, when they are quicker and cheaper to resolve.",
      },
      {
        title: "Standards & Specification Checks",
        description:
          "We check that designs meet client standards, technical specifications and UK regulations. Our engineers understand the requirements of major grid and infrastructure owners. This gives clients confidence that designs will pass approval first time wherever possible.",
      },
      {
        title: "Constructability Reviews",
        description:
          "Our reviews look at how a design will actually be built, not just whether it looks right on paper. We consider access, sequencing, outages and safety on live sites. This helps prevent costly redesigns and delays once work starts.",
      },
      {
        title: "Comment Tracking & Close-out",
        description:
          "PCD provides clear, actionable comments and tracks every one through each design revision. Responses and changes are recorded so decisions are fully traceable. We stay involved until every item is closed out and the design is signed off.",
      },
    ],
    ctaText: "Discuss Design Assurance",
    ctaHref: "/contact",
  },
  {
    id: "primary-works",
    index: "/003",
    title: "Primary Works",
    shortTitle: "Primary Works",
    lead: "HV plant engineering for substations and SGT connections.",
    images: [
      {
        src: "/img/p04.jpg",
        alt: "High-voltage substation insulators, switchgear and busbars",
      },
      {
        src: "/img/hero.jpg",
        alt: "Transmission pylon and overhead conductor arrangement",
      },
      {
        src: "/img/projhero.jpg",
        alt: "Substation primary equipment and transformers",
      },
    ],
    capabilities: [
      "Substation Layouts & Clearances",
      "Supergrid Transformers (SGTs)",
      "Switchgear & Busbars",
      "Earthing & Lightning Protection",
    ],
    subservices: [
      {
        title: "Substation Layouts & Clearances",
        description:
          "PCD develops substation layouts that meet electrical and safety clearances while making the best use of available space. We coordinate the positions of plant, structures, roads and cable routes from the start. This creates layouts that are safe to operate and maintain, with room for future growth.",
      },
      {
        title: "Supergrid Transformers (SGTs)",
        description:
          "We provide engineering support for SGT installations on new and existing sites. This includes plinths, bunding, oil containment, firewalls and interfaces with surrounding plant. Our designs also account for the delivery and positioning of these very large, heavy units.",
      },
      {
        title: "Switchgear & Busbars",
        description:
          "PCD designs arrangements for AIS and GIS switchgear and busbars across substation projects. Each arrangement is coordinated with civil, structural and secondary designs to avoid clashes. The aim is reliable switching equipment that is safe to install, operate and maintain.",
      },
      {
        title: "Earthing & Lightning Protection",
        description:
          "We design earthing and lightning protection systems that keep people, plant and the grid safe. Designs are based on site conditions and fault levels to control step and touch voltages. Every system is integrated with foundations and structures across the site.",
      },
    ],
    ctaText: "Discuss Primary Works",
    ctaHref: "/contact",
  },
  {
    id: "secondary-works",
    index: "/004",
    title: "Secondary Works (Protection & Control)",
    shortTitle: "Secondary Works",
    lead: "Protection and control systems that keep the grid safe and reliable.",
    images: [
      {
        src: "/img/s04.jpg",
        alt: "Substation control room lined with electrical panels and protection relays",
      },
      {
        src: "/img/p03.jpg",
        alt: "Substation control panels and protection schematics",
      },
      {
        src: "/img/position.jpg",
        alt: "Relay racks, marshalling cabinets and secondary wiring",
      },
    ],
    capabilities: [
      "Protection Scheme Design",
      "Control & Relay Panels",
      "Wiring Diagrams & Cable Schedules",
      "SCADA Interfaces",
      "Testing & Commissioning Support",
    ],
    subservices: [
      {
        title: "Protection Scheme Design",
        description:
          "PCD designs protection schemes that detect faults quickly and isolate them before they spread. Our schemes are coordinated with the wider network to keep the grid stable and secure. Each design is developed to meet the client’s protection standards and operating philosophy.",
      },
      {
        title: "Control & Relay Panels",
        description:
          "We design control and relay panels for the reliable monitoring and operation of substation plant. Panel layouts are clear, logical and built for safe access during maintenance. Designs are coordinated with protection schemes, wiring and building layouts.",
      },
      {
        title: "Wiring Diagrams & Cable Schedules",
        description:
          "PCD produces clear, accurate wiring diagrams and cable schedules ready for installation on site. Good documentation reduces errors during construction and speeds up testing. It also gives asset owners reliable records for the operating life of the substation.",
      },
      {
        title: "SCADA Interfaces",
        description:
          "We integrate substation control systems with SCADA so operators can monitor and control plant remotely. Our designs make sure signals, alarms and controls are mapped correctly. This supports safe, efficient operation of the network from control centres.",
      },
      {
        title: "Testing & Commissioning Support",
        description:
          "PCD supports testing and commissioning to bring new equipment safely into service. We help resolve design queries on site and check that systems perform as intended. Our involvement helps reduce delays during the critical energisation stage.",
      },
    ],
    ctaText: "Discuss Protection & Control",
    ctaHref: "/contact",
  },
  {
    id: "temporary-works",
    index: "/005",
    title: "Temporary Works",
    shortTitle: "Temporary Works",
    lead: "Safe, practical temporary works for live grid infrastructure sites.",
    images: [
      {
        src: "/img/s03.jpg",
        alt: "Scaffolding and falsework structure on construction site",
      },
      {
        src: "/img/card2.jpg",
        alt: "Excavation shoring and heavy machinery platform",
      },
      {
        src: "/img/p05.jpg",
        alt: "Temporary access roads and heavy haulage working pads",
      },
    ],
    capabilities: [
      "Excavation Support & Propping",
      "Crane & Piling Platforms",
      "Temporary Access & Working Platforms",
      "Falsework & Formwork",
    ],
    subservices: [
      {
        title: "Excavation Support & Propping",
        description:
          "PCD designs temporary support for excavations and structures on live grid sites. Our solutions protect workers, nearby plant and existing services during construction. Each design suits ground conditions, depth and the space available on site.",
      },
      {
        title: "Crane & Piling Platforms",
        description:
          "We design working platforms that safely carry cranes and piling rigs used for heavy plant and foundations. Designs are based on ground investigation and the loads of the equipment being used. A well-designed platform reduces the risk of failure and keeps lifts on schedule.",
      },
      {
        title: "Temporary Access & Working Platforms",
        description:
          "PCD designs temporary roads and working platforms that keep construction moving on restricted grid sites. We plan routes around live plant, exclusion zones and delivery requirements. This helps contractors work safely and efficiently in tight spaces.",
      },
      {
        title: "Falsework & Formwork",
        description:
          "We design falsework and formwork for the safe, accurate construction of concrete foundations and structures. Our designs account for concrete pressures, pour sequences and site conditions. The result is quality concrete work delivered safely and on programme.",
      },
    ],
    ctaText: "Discuss Temporary Works",
    ctaHref: "/contact",
  },
];
