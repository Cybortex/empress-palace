const fs = require('fs');
const path = require('path');

const catalogRaw = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'nigerian_fashion_reference_catalogue_v2.json'), 'utf8'));
const rawProducts = catalogRaw.products;

console.log(`Loaded ${rawProducts.length} raw reference products.`);

// Configuration for all 40 entries
const entriesConfig = [
  {
    id: "REF-001",
    product_name: "The Amara Corset Silhouette",
    slug: "the-amara-corset-silhouette",
    category: "Two-Piece Sets",
    price: 48000,
    compare_at_price: 58000,
    is_featured: true,
    is_new_arrival: true,
    description: "An off-shoulder Ankara-inspired corset silhouette with structured tailoring and vivid geometric patterning. Designed to accentuate natural poise when paired with high-waisted trousers or fluid occasion skirts, this striking separate moves effortlessly from chic daytime art exhibitions to lively evening gatherings across the city.",
    colors: [{ name: "Imperial Gold & Ochre", hex: "#C6A15B" }, { name: "Midnight Charcoal", hex: "#241C20" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "REF-002",
    product_name: "The Monochrome Muse Jumpsuit",
    slug: "the-monochrome-muse-jumpsuit",
    category: "Luxury Dresses",
    price: 88000,
    compare_at_price: 110000,
    is_featured: true,
    is_new_arrival: false,
    description: "A contemporary black-and-white patterned jumpsuit with an elongated, clean profile and tailored proportions. Celebrating modern graphic contrast, this versatile design offers effortless sophistication for gallery openings, upscale networking receptions, and creative cocktail evenings where timeless monochrome makes a quiet yet unforgettable statement.",
    colors: [{ name: "Monochrome Onyx", hex: "#241C20" }, { name: "Ivory White", hex: "#FFFFFF" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-003",
    product_name: "The Zuri Royale Gown",
    slug: "the-zuri-royale-gown",
    category: "Ankara Gowns",
    price: 78000,
    compare_at_price: 92000,
    is_featured: true,
    is_new_arrival: true,
    description: "A regal occasion gown featuring a contrasting structured bodice gracefully paired with a bold African-print mermaid skirt. Expressing sculptural drama and feminine poise, this sweeping piece is an exquisite choice for luxury weddings, formal galas, and milestone ceremonies that call for unforgettable regal grandeur.",
    colors: [{ name: "Amber Sunburst", hex: "#C6A15B" }, { name: "Rose Crimson", hex: "#A83263" }],
    sizes: ["S", "M", "L", "XL", "Custom"]
  },
  {
    id: "REF-004",
    product_name: "The Noir Bloom Playsuit",
    slug: "the-noir-bloom-playsuit",
    category: "Casual Dresses",
    price: 34000,
    compare_at_price: 42000,
    is_featured: false,
    is_new_arrival: true,
    description: "A breezy monochrome printed playsuit highlighted by an off-shoulder neckline and soft statement sleeves. Capturing playful sophistication with relaxed charm, this easy-wearing piece is tailored for sunny garden brunches, weekend resort stays, and casual rooftop celebrations under golden hour skies.",
    colors: [{ name: "Black & Cream Bloom", hex: "#241C20" }],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "REF-005",
    product_name: "The Ruffle Empress Gown",
    slug: "the-ruffle-empress-gown",
    category: "Ankara Gowns",
    price: 85000,
    compare_at_price: 95000,
    is_featured: true,
    is_new_arrival: false,
    description: "A form-fitting African-print evening gown rendered with cascading ruffle accents and an alluring high slit. Balancing stately elegance with contemporary flair, it commands the room at black-tie receptions, cultural balls, and celebratory banquets where expressive silhouettes take center stage.",
    colors: [{ name: "Magenta Royal", hex: "#A83263" }, { name: "Gold Filigree", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-006",
    product_name: "The Adesewa Statement Dress",
    slug: "the-adesewa-statement-dress",
    category: "Ankara Dresses",
    price: 52000,
    compare_at_price: 64000,
    is_featured: true,
    is_new_arrival: false,
    description: "A vibrant patterned Ankara midi dress finished with an expansive A-line skirt and sculpted puff sleeves. Exuding youthful confidence and cultural grace, this signature garment shines at family celebrations, traditional engagement festivities, and upscale afternoon garden parties.",
    colors: [{ name: "Cobalt Azure", hex: "#2B4C7E" }, { name: "Warm Gold", hex: "#C6A15B" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "REF-007",
    product_name: "The Abeni Wrap Silhouette",
    slug: "the-abeni-wrap-silhouette",
    category: "Ankara Dresses",
    price: 46000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: true,
    description: "A timeless wrap dress cut from expressive Ankara print that contours the waist and drapes fluidly along the hemline. An essential staple of versatile luxury, it transitions flawlessly from high-stakes corporate lunches to intimate twilight dinners with friends.",
    colors: [{ name: "Sunset Orange & Navy", hex: "#A83263" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-008",
    product_name: "The Turquoise Belle Peplum Set",
    slug: "the-turquoise-belle-peplum-set",
    category: "Two-Piece Sets",
    price: 62000,
    compare_at_price: 74000,
    is_featured: true,
    is_new_arrival: false,
    description: "A jewel-toned two-piece set combining a flared peplum bodice with a sharp pencil skirt in intricate African motifs. Flattering and deeply dignified, this tailored co-ord is ideal for executive conferences, church services, and high-society celebratory luncheons.",
    colors: [{ name: "Turquoise Jewel", hex: "#2E8B9A" }, { name: "Champagne Gold", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-009",
    product_name: "The Golden Hour Mini Dress",
    slug: "the-golden-hour-mini-dress",
    category: "Casual Dresses",
    price: 36000,
    compare_at_price: 44000,
    is_featured: false,
    is_new_arrival: true,
    description: "A sun-drenched Ankara mini dress showcasing clean geometric lines and vibrant warm tones. Designed for joyful effortless styling, it pairs naturally with strappy sandals or sculptural heels for afternoon festivals, poolside birthdays, and tropical vacations.",
    colors: [{ name: "Sunburst Ochre", hex: "#C6A15B" }, { name: "Blush Pink", hex: "#E8A9BD" }],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "REF-010",
    product_name: "The Lagos Kimono Wrap",
    slug: "the-lagos-kimono-wrap",
    category: "Casual Dresses",
    price: 42000,
    compare_at_price: null,
    is_featured: true,
    is_new_arrival: false,
    description: "A fluid kimono-inspired dress celebrating voluminous sleeves and an adjustable fabric sash. Infusing relaxed resort glamour into contemporary African styling, this versatile silhouette is well suited for breezy weekend retreats, intimate salon visits, and cosmopolitan café dates.",
    colors: [{ name: "Indigo Mosaic", hex: "#241C20" }, { name: "Rose Silk", hex: "#A83263" }],
    sizes: ["S/M", "L/XL"]
  },
  {
    id: "REF-011",
    product_name: "The Kemi High-Waist Ensemble",
    slug: "the-kemi-high-waist-ensemble",
    category: "Two-Piece Sets",
    price: 49000,
    compare_at_price: 58000,
    is_featured: false,
    is_new_arrival: false,
    description: "A dynamic separates combination centering a high-waisted flared Ankara skirt with coordinating structured top detailing. Perfect for women who appreciate playful mix-and-match versatility, this look brings radiant poise to cultural showcases, gallery exhibitions, and summer celebrations.",
    colors: [{ name: "African Earth & Clay", hex: "#C6A15B" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "REF-012",
    product_name: "The Kemi Patchwork Trench Coat",
    slug: "the-kemi-patchwork-trench-coat",
    category: "Luxury Dresses",
    price: 98000,
    compare_at_price: 125000,
    is_featured: true,
    is_new_arrival: true,
    description: "An avant-garde outerwear statement combining tonal Ankara patchwork blocks into a striking tailored coat silhouette. A wearable art piece that commands attention, it layers effortlessly over monochrome slips for high-fashion runway shows, red-carpet events, and premier international fashion gatherings.",
    colors: [{ name: "Heritage Patchwork", hex: "#A83263" }, { name: "Gilded Obsidian", hex: "#241C20" }],
    sizes: ["S", "M", "L"]
  },
  {
    id: "REF-013",
    product_name: "The Imani Blue Lace-Trim Gown",
    slug: "the-imani-blue-lace-trim-gown",
    category: "Luxury Dresses",
    price: 115000,
    compare_at_price: 140000,
    is_featured: true,
    is_new_arrival: false,
    description: "A sumptuous sapphire Ankara creation adorned with delicate French lace inserts along the neckline and hem. Radiating regal nobility and refined texture, this luxury dress is tailored specifically for high-profile banquet evenings, wedding guest opulence, and dignitary receptions.",
    colors: [{ name: "Royal Sapphire", hex: "#1D3557" }, { name: "Champagne Trim", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-014",
    product_name: "The Eko Blue Co-ord Set",
    slug: "the-eko-blue-co-ord-set",
    category: "Two-Piece Sets",
    price: 58000,
    compare_at_price: 68000,
    is_featured: false,
    is_new_arrival: true,
    description: "A tailored two-piece set featuring a crisp cropped jacket and matching high-waisted shorts in rich indigo Ankara wax prints. Designed for bold modern tastemakers, this co-ord delivers polished panache at fashion week lounges, curated pop-ups, and rooftop soirées.",
    colors: [{ name: "Deep Eko Azure", hex: "#241C20" }, { name: "Sky Gold", hex: "#C6A15B" }],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "REF-015",
    product_name: "The Eko Statement Tunic",
    slug: "the-eko-statement-tunic",
    category: "Casual Dresses",
    price: 38000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "An easy-fitting oversized tunic shirt boasting graphic African prints with a crisp collar and elongated cuffs. Balancing street-smart modernity with artisanal pride, it works effortlessly worn as a mini dress or styled over trousers for creative workdays and weekend escapes.",
    colors: [{ name: "Geometric Sun", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-016",
    product_name: "The Chiffon Blossom Trio",
    slug: "the-chiffon-blossom-trio",
    category: "African Heritage & Editorial",
    price: 72000,
    compare_at_price: null,
    is_featured: true,
    is_new_arrival: false,
    description: "A collaborative bridal party study featuring airy chiffon sleeves fused with ornate Ankara prints. Documented as an editorial reference for synchronized bridesmaid couture, this design provides timeless inspiration for traditional wedding festivities and royal family bridal courts.",
    colors: [{ name: "Blush Garden", hex: "#E8A9BD" }, { name: "Imperial Magenta", hex: "#A83263" }],
    sizes: ["Made-to-Order Reference"]
  },
  {
    id: "REF-017",
    product_name: "The Ankara Shift Dress",
    slug: "the-ankara-shift-dress",
    category: "Ankara Dresses",
    price: 44000,
    compare_at_price: 52000,
    is_featured: false,
    is_new_arrival: true,
    description: "A clean-lined shift dress displaying kaleidoscopic wax patterns that drape straight from the shoulder to just above the knee. A flattering and unfussy design that pairs seamlessly with minimalist jewelry for church services, business luncheons, and celebratory weekend gatherings.",
    colors: [{ name: "Jewel Kaleidoscope", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: "REF-018",
    product_name: "The Off-Shoulder Occasion Gown",
    slug: "the-off-shoulder-occasion-gown",
    category: "Ankara Gowns",
    price: 89000,
    compare_at_price: 105000,
    is_featured: true,
    is_new_arrival: false,
    description: "A sweeping off-shoulder evening gown highlighted by a sculpted sweetheart décolletage and an architectural trumpet hem. Tailored to turn heads with stately charisma, this piece is an extraordinary companion for state dinners, premiere awards nights, and grand anniversary galas.",
    colors: [{ name: "Burgundy Gold", hex: "#A83263" }, { name: "Onyx Black", hex: "#241C20" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-019",
    product_name: "The Mix & Match Pencil Dress",
    slug: "the-mix-and-match-pencil-dress",
    category: "Ankara Dresses",
    price: 54000,
    compare_at_price: 65000,
    is_featured: false,
    is_new_arrival: false,
    description: "A tailored pencil dress featuring contrasting side panels that sculpt the waist and lengthen the frame. Merging corporate polish with rich African textile dynamism, it is an empowering ensemble for executive boardrooms, corporate presentations, and after-work cocktail receptions.",
    colors: [{ name: "Indigo & Amber", hex: "#1D3557" }, { name: "Champagne", hex: "#C6A15B" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "REF-020",
    product_name: "The Ankara Maxi Movement",
    slug: "the-ankara-maxi-movement",
    category: "African Heritage & Editorial",
    price: 68000,
    compare_at_price: null,
    is_featured: true,
    is_new_arrival: false,
    description: "A sweeping tiered maxi skirt study documented for its kinetic volume and expressive swirl of African motifs. Celebrated in fashion editorial spreads for dramatic movement, it serves as rich inspiration for destination resort wear and stately outdoor cultural festivals.",
    colors: [{ name: "Sunset Gold", hex: "#C6A15B" }],
    sizes: ["One Size Reference"]
  },
  {
    id: "REF-022",
    product_name: "The Heritage Family Collection",
    slug: "the-heritage-family-collection",
    category: "African Heritage & Editorial",
    price: 95000,
    compare_at_price: null,
    is_featured: true,
    is_new_arrival: false,
    description: "An authentic multigenerational family portrait showcasing cohesive Nigerian Ankara styling across varying ages. This visual reference illustrates the deeply communal beauty of African occasion dressing, perfect for celebratory naming ceremonies, milestone jubilees, and sacred holiday gatherings.",
    colors: [{ name: "Family Loom Coral", hex: "#A83263" }],
    sizes: ["Curated Family Archive"]
  },
  {
    id: "REF-023",
    product_name: "The Heritage Print Midi",
    slug: "the-heritage-print-midi",
    category: "Ankara Dresses",
    price: 49000,
    compare_at_price: 59000,
    is_featured: false,
    is_new_arrival: true,
    description: "A tailored midi dress showcasing traditional wax motifs with fitted waist darts and elegant three-quarter sleeves. Uniting everyday comfort with timeless cultural refinement, it is well suited for Sunday family gatherings, christenings, and festive afternoon engagements.",
    colors: [{ name: "Forest Emerald & Gold", hex: "#2A6F4E" }, { name: "Warm Ochre", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-024",
    product_name: "The Heritage Print Flounce Dress",
    slug: "the-heritage-print-flounce-dress",
    category: "Ankara Dresses",
    price: 51000,
    compare_at_price: 62000,
    is_featured: false,
    is_new_arrival: false,
    description: "An asymmetrical flounce hem dress designed in heritage Ankara tones that celebrate natural feminine movement. A radiant and welcoming look, this creation effortlessly brightens cultural symposiums, upscale brunch celebrations, traditional naming festivities, and celebratory family reunions throughout the sunny weekend.",
    colors: [{ name: "Terra Cotta & Blue", hex: "#A83263" }],
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: "REF-025",
    product_name: "The Ankara Fabric Archive",
    slug: "the-ankara-fabric-archive",
    category: "African Heritage & Editorial",
    price: 65000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A close-up documentary study of raw unsewn African wax cotton, honoring the density of weave and brilliant saturation of wax printing. A vital reference for bespoke atelier clients exploring customized patterns for private couture commissions and ceremonial bridal attire.",
    colors: [{ name: "Raw Loom Ochre", hex: "#C6A15B" }],
    sizes: ["Bespoke Yardage Reference"]
  },
  {
    id: "REF-026",
    product_name: "The Ankara Signature Silhouette",
    slug: "the-ankara-signature-silhouette",
    category: "Ankara Dresses",
    price: 56000,
    compare_at_price: 68000,
    is_featured: true,
    is_new_arrival: true,
    description: "A sculpted fit-and-flare dress displaying high-contrast geometric African wax print with neat boat-neckline tailoring and a defined waist. Designed to exude self-assured grace, it offers an impeccable statement for graduation celebrations, literary book launches, corporate anniversary banquets, and elegant afternoon tea gatherings.",
    colors: [{ name: "Imperial Rose & Black", hex: "#A83263" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-027",
    product_name: "The Monostrap Ankara Dress",
    slug: "the-monostrap-ankara-dress",
    category: "Ankara Dresses",
    price: 59000,
    compare_at_price: 72000,
    is_featured: true,
    is_new_arrival: false,
    description: "An architectural one-shoulder Ankara dress crafted with a cascading shoulder drape, striking geometric motifs, and a tailored contour skirt. Daring yet completely tasteful, this asymmetric piece sparkles at cocktail fundraisers, film premieres, celebratory awards evenings, and high-style open-air garden galas.",
    colors: [{ name: "Sunlit Gold & Bronze", hex: "#C6A15B" }],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: "REF-028",
    product_name: "The Cowrie Print Sovereign Gown",
    slug: "the-cowrie-print-sovereign-gown",
    category: "Ankara Gowns",
    price: 92000,
    compare_at_price: 115000,
    is_featured: true,
    is_new_arrival: true,
    description: "A breathtaking full-length gown centered on sacred cowrie shell iconography woven into regal African print. Symbolizing abundance and ancient African royalty, this monumental gown creates an indelible impression at royal coronations, luxury weddings, and historic commemorative galas.",
    colors: [{ name: "Sacred Cowrie Gold", hex: "#C6A15B" }, { name: "Deep Charcoal", hex: "#241C20" }],
    sizes: ["S", "M", "L", "XL", "Custom"]
  },
  {
    id: "REF-029",
    product_name: "The Sunday Grace Occasion Dress",
    slug: "the-sunday-grace-occasion-dress",
    category: "Luxury Dresses",
    price: 82000,
    compare_at_price: 98000,
    is_featured: false,
    is_new_arrival: false,
    description: "A refined celebration dress featuring structured shoulders, delicate lace neck trim, and radiant African print detailing. Embodying understated majesty and impeccable decorum, it is a quintessential attire for christenings, milestone wedding anniversaries, and high-table receptions.",
    colors: [{ name: "Royal Purple & Gold", hex: "#A83263" }, { name: "Champagne", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-030",
    product_name: "The Artisan Tailoring Benchmark",
    slug: "the-artisan-tailoring-benchmark",
    category: "African Heritage & Editorial",
    price: 75000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A studio reference capturing the painstaking finishing stages of an bespoke African dress on a dressmaker mannequin. Exemplifying the dedication of Nigerian couture houses, it stands as an editorial tribute to hand-cut pattern alignment and artisanal craftsmanship.",
    colors: [{ name: "Studio Beige & Ochre", hex: "#C6A15B" }],
    sizes: ["Editorial Archive"]
  },
  {
    id: "REF-031",
    product_name: "The Noir Net Fusion Study",
    slug: "the-noir-net-fusion-study",
    category: "African Heritage & Editorial",
    price: 78000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: true,
    description: "An innovative textile concept overlaying sheer black fishnet over saturated African wax prints for a seductive optical depth. Documented as a runway and atelier concept study, this reference inspires boundary-pushing couture eveningwear and editorial photo shoots.",
    colors: [{ name: "Noir Veil", hex: "#241C20" }, { name: "Rose Gold", hex: "#A83263" }],
    sizes: ["Concept Reference"]
  },
  {
    id: "REF-032",
    product_name: "The Lagos Fashion Week Runway Look",
    slug: "the-lagos-fashion-week-runway-look",
    category: "African Heritage & Editorial",
    price: 110000,
    compare_at_price: 135000,
    is_featured: true,
    is_new_arrival: false,
    description: "A runway photograph captured live during Lagos Fashion and Design Week, celebrating avant-garde African tailoring on the global stage. Capturing dynamic editorial movement, this reference showcases high-fashion experimentation for red carpets and museum retrospective collections.",
    colors: [{ name: "Runway Crimson", hex: "#A83263" }],
    sizes: ["Runway Sample Reference"]
  },
  {
    id: "REF-033",
    product_name: "The Sovereign Circle Portrait",
    slug: "the-sovereign-circle-portrait",
    category: "African Heritage & Editorial",
    price: 88000,
    compare_at_price: null,
    is_featured: true,
    is_new_arrival: false,
    description: "A distinguished group portrait of modern Nigerian women styled in coordinated Ankara eveningwear with matching gele crowns. An inspiring visual reference celebrating sisterhood, communal celebration, and the rich cultural pageantry of African wedding guest style.",
    colors: [{ name: "Celebration Gold & Plum", hex: "#C6A15B" }],
    sizes: ["Heritage Portrait Reference"]
  },
  {
    id: "REF-034",
    product_name: "The States & Capital Peplum Blouse",
    slug: "the-states-and-capital-peplum-blouse",
    category: "Two-Piece Sets",
    price: 45000,
    compare_at_price: 55000,
    is_featured: false,
    is_new_arrival: false,
    description: "A tailored peplum blouse named in honor of Nigerian geography, patterned in striking heritage motifs with a sculpted waistline. Designed to style effortlessly with fitted trousers or flowing wraps, it brings dignified African pride to diplomatic and cultural events.",
    colors: [{ name: "Federal Emerald", hex: "#2A6F4E" }, { name: "Gold Dust", hex: "#C6A15B" }],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "REF-035",
    product_name: "The African Nature Editorial Look",
    slug: "the-african-nature-editorial-look",
    category: "African Heritage & Editorial",
    price: 85000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: true,
    description: "A fine-art editorial image framing authentic Ankara styling within the lush botanical landscapes of West Africa. Honoring the organic inspiration behind traditional textile dyes and hand-drawn cultural motifs, this editorial reference inspires sustainable eco-conscious luxury collections and resort runway presentations.",
    colors: [{ name: "Botanical Flora", hex: "#2A6F4E" }],
    sizes: ["Editorial Archive"]
  },
  {
    id: "REF-036",
    product_name: "The Harmony Trio Reference",
    slug: "the-harmony-trio-reference",
    category: "African Heritage & Editorial",
    price: 82000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A stylized trio reference documenting the interplay of complementary African prints worn across varied silhouettes. Providing visual guidance for coordinated bridal entourages and family portraits, it captures the warmth and collaborative joy of African ceremonial dressing.",
    colors: [{ name: "Trio Multi-Tone", hex: "#C6A15B" }],
    sizes: ["Ensemble Reference"]
  },
  {
    id: "REF-037",
    product_name: "The Ankara Radiance Texture Study",
    slug: "the-ankara-radiance-texture-study",
    category: "African Heritage & Editorial",
    price: 62000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A vibrant close-up photograph capturing the tactile richness of authentic wax-print cotton. Used in our visual catalog to highlight the saturated pigments and symbolic linework that make African heritage textiles world-renowned for emotional resonance and timeless prestige.",
    colors: [{ name: "Radiant Sunlight", hex: "#C6A15B" }],
    sizes: ["Fabric Reference"]
  },
  {
    id: "REF-038",
    product_name: "The Portrait of Grace Study",
    slug: "the-portrait-of-grace-study",
    category: "African Heritage & Editorial",
    price: 76000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "An intimate portrait of a Black woman radiating natural confidence and dignity in bespoke African occasion wear. Documenting radiant skin luminescence, sculptural headwear, and graceful posture, this lifestyle reference is an ode to effortless personal beauty and serene self-expression across celebratory gatherings.",
    colors: [{ name: "Warm Cocoa & Gold", hex: "#C6A15B" }],
    sizes: ["Portrait Reference"]
  },
  {
    id: "REF-039",
    product_name: "The Community Walkathon Lifestyle Story",
    slug: "the-community-walkathon-lifestyle-story",
    category: "African Heritage & Editorial",
    price: 60000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A spontaneous lifestyle documentary image capturing everyday Ankara wear in an energetic civic setting. Demonstrating the durable breathability and everyday elegance of African cotton wax, it celebrates the living culture of contemporary Nigerian street style.",
    colors: [{ name: "Civic Coral", hex: "#A83263" }],
    sizes: ["Lifestyle Archive"]
  },
  {
    id: "REF-040",
    product_name: "The Everyday Heritage Streetscape",
    slug: "the-everyday-heritage-streetscape",
    category: "African Heritage & Editorial",
    price: 64000,
    compare_at_price: null,
    is_featured: false,
    is_new_arrival: false,
    description: "A vibrant candid street scene reflecting the effortless integration of African prints into modern metropolitan living. An evocative visual reference for our casual resort collections, it celebrates the vibrant pulse of everyday Nigerian sartorial brilliance.",
    colors: [{ name: "Urban Terra Cotta", hex: "#C6A15B" }],
    sizes: ["Documentary Archive"]
  },
  {
    id: "REF-041",
    product_name: "The Ankara Heritage Handbag",
    slug: "the-ankara-heritage-handbag",
    category: "Two-Piece Sets",
    price: 42000,
    compare_at_price: 52000,
    is_featured: true,
    is_new_arrival: true,
    description: "A structured artisan handbag enveloped in vivid African wax prints with polished metallic hardware fittings. An exquisite finishing touch to elevate any monochromatic look or complement patterned separates, this statement accessory brings cultural pride to both daywear and evening soirées.",
    colors: [{ name: "Imperial Print", hex: "#A83263" }, { name: "Polished Gold", hex: "#C6A15B" }],
    sizes: ["One Size"]
  }
];

// Verify word counts
console.log('Verifying all 40 descriptions:');
let hasError = false;
const slugs = new Set();
const ids = new Set();

const finalProducts = entriesConfig.map(cfg => {
  const raw = rawProducts.find(r => r.id === cfg.id);
  if (!raw) {
    console.error(`Missing raw product for ${cfg.id}`);
    hasError = true;
  }
  
  if (ids.has(cfg.id)) {
    console.error(`Duplicate id: ${cfg.id}`);
    hasError = true;
  }
  ids.add(cfg.id);

  if (slugs.has(cfg.slug)) {
    console.error(`Duplicate slug: ${cfg.slug}`);
    hasError = true;
  }
  slugs.add(cfg.slug);

  const words = cfg.description.trim().split(/\s+/).length;
  if (words < 35 || words > 65) {
    console.error(`Word count violation in ${cfg.id}: ${words} words! Must be 35-65.`);
    hasError = true;
  }

  const validCategories = [
    "Ankara Dresses",
    "Ankara Gowns",
    "Two-Piece Sets",
    "Luxury Dresses",
    "Casual Dresses",
    "African Heritage & Editorial"
  ];

  if (!validCategories.includes(cfg.category)) {
    console.error(`Invalid category in ${cfg.id}: ${cfg.category}`);
    hasError = true;
  }

  return {
    id: cfg.id,
    slug: cfg.slug,
    sku: `EP-${cfg.id.replace('REF-', 'NG-')}`,
    name: cfg.product_name,
    product_name: cfg.product_name,
    subtitle: raw.reference_style || cfg.product_name,
    description: cfg.description,
    product_description: cfg.description,
    category: cfg.category,
    price: cfg.price,
    compare_at_price: cfg.compare_at_price,
    regularPrice: cfg.compare_at_price || cfg.price,
    salePrice: cfg.compare_at_price ? cfg.price : undefined,
    product_image_link: raw.product_image_link,
    source: raw.source,
    reference_only: true,
    is_featured: cfg.is_featured,
    is_new_arrival: cfg.is_new_arrival,
    is_best_seller: cfg.id === "REF-003" || cfg.id === "REF-001" || cfg.id === "REF-006" || cfg.id === "REF-008" || cfg.id === "REF-028",
    images: {
      primary: raw.product_image_link,
      front: raw.product_image_link,
      back: raw.product_image_link,
      side: raw.product_image_link,
      detail: raw.product_image_link
    },
    sizes: cfg.sizes,
    colors: cfg.colors,
    inStock: true,
    totalStock: 25,
    rating: 4.9,
    reviewCount: 18,
    tags: [cfg.category, "Nigerian Fashion", "African Heritage", "Boutique Reference"],
    fabricAndMaterials: [
      "Visual Reference Model for Demonstration",
      "Authentic Contemporary Nigerian Style Silhouette",
      "Curated from Verified Visual Reference Archive"
    ],
    sizeAndFit: {
      modelStats: "Demonstration catalog reference model",
      fitType: "Structured & flowing contemporary silhouette",
      length: "Standard length relative to style category",
      recommendation: "Refer to Empress Palace boutique sizing chart"
    },
    careInstructions: [
      "Specialist dry cleaning or gentle hand wash recommended for wax prints",
      "Do not bleach or tumble dry",
      "Cool iron on reverse side to protect textile luster"
    ],
    deliveryAndReturns: {
      delivery: "Complimentary white-glove express courier across Abuja on qualifying orders.",
      returns: "14-day boutique return or size exchange for pristine, unworn pieces.",
      packaging: "Delivered in signature Empress Palace gold-embossed keepsake presentation box."
    },
    relatedSlugs: []
  };
});

if (hasError) {
  console.error("Validation failed! Not writing file.");
  process.exit(1);
}

console.log(`Validation SUCCESS! Exactly ${finalProducts.length} items validated.`);

// Populate relatedSlugs
finalProducts.forEach((p, idx) => {
  const sameCat = finalProducts.filter(other => other.category === p.category && other.id !== p.id);
  const picked = sameCat.slice(0, 3).map(o => o.slug);
  p.relatedSlugs = picked.length >= 2 ? picked : finalProducts.filter(o => o.id !== p.id).slice(0, 3).map(o => o.slug);
});

// Generate TypeScript code
const tsContent = `// Centralized Fashion Catalogue Dataset
// Generated with exactly 40 verified Nigerian fashion reference entries.
// All entries are demonstration visual references (reference_only = true).

export interface ProductColor {
  name: string;
  hex: string;
  previewImage?: string;
}

export type FashionCategory =
  | "Ankara Dresses"
  | "Ankara Gowns"
  | "Two-Piece Sets"
  | "Luxury Dresses"
  | "Casual Dresses"
  | "African Heritage & Editorial";

export interface Product {
  id: string;
  slug: string;
  sku: string;
  name: string;
  product_name: string;
  subtitle: string;
  description: string;
  product_description: string;
  category: FashionCategory;
  price: number;
  compare_at_price: number | null;
  regularPrice: number;
  salePrice?: number;
  product_image_link: string;
  source: string;
  reference_only: boolean;
  is_featured: boolean;
  is_new_arrival: boolean;
  is_best_seller: boolean;
  images: {
    primary: string;
    front?: string;
    back?: string;
    side?: string;
    detail?: string;
  };
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
  totalStock: number;
  rating: number;
  reviewCount: number;
  tags: string[];
  fabricAndMaterials: string[];
  sizeAndFit: {
    modelStats: string;
    fitType: string;
    length: string;
    recommendation: string;
  };
  careInstructions: string[];
  deliveryAndReturns: {
    delivery: string;
    returns: string;
    packaging: string;
  };
  relatedSlugs: string[];
}

export const FASHION_CATEGORIES: FashionCategory[] = [
  "Ankara Dresses",
  "Ankara Gowns",
  "Two-Piece Sets",
  "Luxury Dresses",
  "Casual Dresses",
  "African Heritage & Editorial"
];

export const PRODUCTS: Product[] = ${JSON.stringify(finalProducts, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'src', 'data', 'products.ts'), tsContent, 'utf8');
console.log('Successfully written src/data/products.ts!');
