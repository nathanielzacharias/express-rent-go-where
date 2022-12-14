require("dotenv").config();
const mongoose = require("mongoose");
const Homes = require("../models/homes");

const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@${process.env.ATLAS_CLUSTER}`;
const dbName = `${process.env.DB_NAME}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: dbName,
  })
  .then(() => {
    console.log("Mongo connection is working");
  })
  .catch((err) => {
    console.log("error conneting to db: ", err);
  });

const homeData = [
  {
    address: "Mountbatten Rd · D15",
    bedrooms: "5 Beds",
    year: "2016 · Freehold",
    price: "$20,000/mo",
    bathrooms: "6 Baths",
    propSqf: "5,000 sqft / 464.51 sqm",
    originalPoster: "jgoerzen@gmail.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/20657240/UPHO.87905811.V800/Miro-Newton-Novena-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821974.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23345533/UPHO.126821942.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23345533/UPHO.126821973.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.133232977.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "65 Lloyd Rd · D9",
    bedrooms: "2 Beds",
    year: "2017 · Freehold",
    price: "$9,500/mo",
    bathrooms: "3 Baths",
    propSqf: "1,808 sqft / 167.97 sqm",
    originalPoster: "dkeeler@verizon.net",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821968.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984918.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984922.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984923.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984927.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "156 Mariam Way · D17",
    bedrooms: "2 Beds",
    year: "2000 · Freehold",
    price: "$4,250/mo",
    bathrooms: "2 Baths",
    propSqf: "990 sqft / 91.97 sqm",
    originalPoster: "ilial@att.net",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.137208595.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23234801/UPHO.137208584.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23234801/UPHO.125406024.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.125406034.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/5112/ZPPHO.96888382.R550X550/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
    ],
  },
  {
    address: "57A Edgedale Plains · D19",
    bedrooms: "3 Beds",
    year: "2016 · 99 years",
    price: "$4,500/mo",
    bathrooms: "2 Baths",
    propSqf: "990 sqft / 91.97 sqm",
    originalPoster: "mrdvt@hotmail.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341103.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341112.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341109.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/17559712/UPHO.107341101.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341100.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "150 Prince Charles Cres · D3",
    bedrooms: "3 Beds",
    year: "2002 · 99 years",
    price: "$6,500/mo",
    bathrooms: "2 Baths",
    propSqf: "1,152 sqft / 107.02 sqm",
    originalPoster: "noneme@att.net",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "1 Tg Rhu Rd · D15",
    bedrooms: "4 Beds",
    year: "Freehold",
    price: "$12,800/mo",
    bathrooms: "5 Baths",
    propSqf: "2,411 sqft / 223.99 sqm",
    originalPoster: "jimxugle@comcast.net",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "343 Upp Bt Timah Rd · D21",
    bedrooms: "3 Beds",
    year: "Freehold",
    price: "$5,500/mo",
    bathrooms: "2 Baths",
    propSqf: "1,400 sqft / 130.06 sqm",
    originalPoster: "khris@hotmail.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "8 Scotts Rd · D9",
    bedrooms: "1 Bed",
    year: "2010 · Freehold",
    price: "$5,500/mo",
    bathrooms: "1 Bath",
    propSqf: "624 sqft / 57.97 sqm",
    originalPoster: "luvirini@mac.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/24116693/UPHO.136792305.V800/Hyll-on-Holland-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341103.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341112.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341109.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/17559712/UPHO.107341101.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341100.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "12 Mount Elizabeth · D9",
    bedrooms: "5 Beds",
    year: "1980 · Freehold",
    price: "$14,000/mo",
    bathrooms: "4 Baths",
    propSqf: "2,928 sqft / 272.02 sqm",
    originalPoster: "jimmichie@verizon.net",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/23570764/UPHO.129753795.V800/Wilshire-Residences-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "139 Lor K Telok Kurau · D15",
    bedrooms: "3 Beds",
    year: "1998 · Freehold",
    price: "$4,300/mo",
    bathrooms: "2 Baths",
    propSqf: "1,356 sqft / 125.98 sqm",
    originalPoster: "guialbu@yahoo.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24091217/UPHO.136459121.V800/The-Brownstone-Sembawang-Yishun-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24131433/UPHO.136984053.V800/The-Landmark-Alexandra-Commonwealth-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/20657240/UPHO.87905811.V800/Miro-Newton-Novena-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821974.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23345533/UPHO.126821942.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23345533/UPHO.126821973.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.133232977.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "5 Jurong Lake Link · D22",
    bedrooms: "2 Beds",
    year: "2018 · 99 years",
    price: "$5,000/mo",
    bathrooms: "2 Baths",
    propSqf: "732 sqft / 68 sqm",
    originalPoster: "aegreene@att.net",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23958306/UPHO.134768203.V800/Costa-Rhu-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821968.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984918.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984922.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984923.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/19495/ZPPHO.96984927.R550X550/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "2 Sing Joo Walk · D8",
    bedrooms: "1 Bed",
    year: "2014 · Freehold",
    price: "$3,800/mo",
    bathrooms: "1 Bath",
    propSqf: "463 sqft / 43.01 sqm",
    originalPoster: "amanda@gmail.net",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24147118/UPHO.137195024.V800/Juniper-Hill-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.137208595.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23234801/UPHO.137208584.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23234801/UPHO.125406024.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23234801/UPHO.125406034.V800/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/projectnet-project/5112/ZPPHO.96888382.R550X550/Vertis-East-Coast-Marine-Parade-Singapore.jpg",
    ],
  },
  {
    address: "12 Amber Rd · D15",
    bedrooms: "1 Bed",
    year: "2022 · Freehold",
    price: "$4,200/mo",
    bathrooms: "1 Bath",
    propSqf: "484 sqft / 44.97 sqm",
    originalPoster: "psichel@msn.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24076564/UPHO.136742993.V800/Twin-Waterfalls-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341103.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341112.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341109.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/17559712/UPHO.107341101.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/17559712/UPHO.107341100.V800/Ardmore-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "178 Joo Chiat Terrace · D15",
    bedrooms: "3 Beds",
    year: "2009 · Freehold",
    price: "$5,800/mo",
    bathrooms: "3 Baths",
    propSqf: "1,130 sqft / 104.98 sqm",
    originalPoster: "lbecchi@verizon.net",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/24046076/UPHO.135897142.V800/Bartley-Vue-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/20657240/UPHO.87905811.V800/Miro-Newton-Novena-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.126821974.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23345533/UPHO.126821942.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23345533/UPHO.126821973.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23345533/UPHO.133232977.V800/Lloyd-SixtyFive-Orchard-River-Valley-Singapore.jpg",
    ],
  },
  {
    address: "83 Flora Dr · D17",
    bedrooms: "4 Beds",
    year: "99 years",
    price: "$6,000/mo",
    bathrooms: "3 Baths",
    propSqf: "1,593 sqft / 147.99 sqm",
    originalPoster: "akoblin@yahoo.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/23602508/UPHO.130174319.V800/Goodwood-Residence-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "10 Robin Walk · D10",
    bedrooms: "3 Beds",
    year: "Freehold",
    price: "$7,500/mo",
    bathrooms: "4 Baths",
    propSqf: "1,625 sqft / 150.97 sqm",
    originalPoster: "akoblin@yahoo.com",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/24060288/UPHO.136090630.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "10 Shelford Rd · D11",
    bedrooms: "1 Bed",
    year: "2014 · Freehold",
    price: "$3,300/mo",
    bathrooms: "1 Bath",
    propSqf: "474 sqft / 44.04 sqm",
    originalPoster: "emmanuel@me.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/23644270/UPHO.130718877.V800/The-Reef-at-King%E2%80%99s-Dock-Harbourfront-Telok-Blangah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "Race Course Rd · D8",
    bedrooms: "1 Bed",
    year: "",
    price: "$2,999/mo",
    bathrooms: "1 Bath",
    propSqf: "1,400 sqft / 130.06 sqm",
    originalPoster: "wsnyder@msn.com",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/24097321/UPHO.136539586.V800/Cape-Royale-Harbourfront-Telok-Blangah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "8 Lor 7 Geylang · D14",
    bedrooms: "2 Beds",
    year: "Freehold",
    price: "$4,200/mo",
    bathrooms: "2 Baths",
    propSqf: "1,066 sqft / 99.03 sqm",
    originalPoster: "wikinerd@mac.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "65 Choa Chu Kang Rd · D23",
    bedrooms: "4 Beds",
    year: "99 years",
    price: "$9,000/mo",
    bathrooms: "3 Baths",
    propSqf: "3,200 sqft / 297.29 sqm",
    originalPoster: "seano@hotmail.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/23569208/UPHO.130151901.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "101 Keng Lee Rd · D8",
    bedrooms: "1 Bed",
    year: "2009 · Freehold",
    price: "$4,500/mo",
    bathrooms: "1 Bath",
    propSqf: "517 sqft / 48.03 sqm",
    originalPoster: "dawnsong@comcast.net",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24153881/UPHO.137286434.V800/Perfect-Ten-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "48 St. Thomas Walk · D9",
    bedrooms: "1 Bed",
    year: "2013 · Freehold",
    price: "$3,400/mo",
    bathrooms: "1 Bath",
    propSqf: "355 sqft / 32.98 sqm",
    originalPoster: "dawnsong@comcast.net",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/24097321/UPHO.136539586.V800/Cape-Royale-Harbourfront-Telok-Blangah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "6 Dover Rise · D5",
    bedrooms: "3 Beds",
    year: "2000 · 99 years",
    price: "$7,777/mo",
    bathrooms: "3 Baths",
    propSqf: "1,313 sqft / 121.98 sqm",
    originalPoster: "fraterk@yahoo.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "49 Hindhede Walk · D21",
    bedrooms: "3 Beds",
    year: "1998 · 999 years",
    price: "$4,600/mo",
    bathrooms: "3 Baths",
    propSqf: "1,109 sqft / 103.03 sqm",
    originalPoster: "skippy@gmail.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24078632/UPHO.136304624.V800/The-Panorama-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "4 Marina Boulevard · D1",
    bedrooms: "4 Beds",
    year: "2008 · 99 years",
    price: "$15,800/mo",
    bathrooms: "4 Baths",
    propSqf: "2,200 sqft / 204.39 sqm",
    originalPoster: "tskirvin@yahoo.ca",
    images: [
      "https://sg2-cdn.pgimgs.com/listing/23859495/UPHO.133500013.V800/Peak-Residence-Newton-Novena-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "21 Delta Rd · D3",
    bedrooms: "2 Beds",
    year: "2007 · 99 years",
    price: "$5,800/mo",
    bathrooms: "2 Baths",
    propSqf: "883 sqft / 82.03 sqm",
    originalPoster: "bdthomas@optonline.net",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/23309686/UPHO.126400827.V800/The-Hyde-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "55 Changi Rd · D14",
    bedrooms: "2 Beds",
    year: "2016 · Freehold",
    price: "$4,600/mo",
    bathrooms: "1 Bath",
    propSqf: "1,130 sqft / 104.98 sqm",
    originalPoster: "jlbaumga@sbcglobal.net",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24110791/UPHO.136708145.V800/Sky-Eden-Bedok-Bedok-Upper-East-Coast-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
  {
    address: "61 Cairnhill Circle · D9",
    bedrooms: "2 Beds",
    year: "2015 · Freehold",
    price: "$5,200/mo",
    bathrooms: "2 Baths",
    propSqf: "829 sqft / 77.02 sqm",
    originalPoster: "rupak@yahoo.ca",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/24001158/UPHO.135335322.V800/Sky-Habitat-Ang-Mo-Kio-Bishan-Thomson-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733364.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733366.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/23569186/UPHO.129733367.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/23569186/UPHO.129733368.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/23569186/UPHO.129733369.V800/Leedon-Green-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
    ],
  },
  {
    address: "5A Shenton Way · D1",
    bedrooms: "2 Beds",
    year: "2017 · 99 years",
    price: "$7,000/mo",
    bathrooms: "2 Baths",
    propSqf: "1,152 sqft / 107.02 sqm",
    originalPoster: "bigmauler@icloud.com",
    images: [
      "https://sg-rpfs.pgimgs.com/listing/24144526/UPHO.137157815.V800/Kovan-Residences-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24048345/UPHO.135926631.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135933763.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135926633.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24048345/UPHO.135926635.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24048345/UPHO.135933764.V800/Bellewaters-Hougang-Punggol-Sengkang-Singapore.jpg",
    ],
  },
  {
    address: "7 Ardmore Pk · D10",
    bedrooms: "4 Beds",
    year: "2013 · Freehold",
    price: "$37,000/mo",
    bathrooms: "4 Baths",
    propSqf: "3,186 sqft / 295.99 sqm",
    originalPoster: "tbeck@gmail.com",
    images: [
      "https://sg1-cdn.pgimgs.com/listing/23889805/UPHO.133879311.V800/The-Hyde-Tanglin-Holland-Bukit-Timah-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.137052747.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg-rpfs.pgimgs.com/listing/24124536/UPHO.136892630.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892629.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg2-cdn.pgimgs.com/listing/24124536/UPHO.136892632.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
      "https://sg1-cdn.pgimgs.com/listing/24124536/UPHO.136892634.V800/The-Sail-Marina-Bay-Boat-Quay-Raffles-Place-Marina-Singapore.jpg",
    ],
  },
];

const seedDB = async () => {
  await Homes.deleteMany({});
  await Homes.insertMany(homeData);
  console.log("seeding done");
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log("closing connection");
});
