import fs from 'node:fs';
import path from 'node:path';

const API_URL = 'http://localhost:20128/v1/images/generations';
const API_KEY = 'sk-b3a81036624ac7f5-l0yjhu-6d5d0d22';
const OUTPUT_DIR = path.resolve(process.cwd(), 'public/images');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

const IMAGES = [
  {
    filename: 'hero-corporate.png',
    prompt: 'Ultra-realistic professional editorial photography of a modern Vietnamese corporate law firm in Ho Chi Minh City, elegant navy and warm ivory interior, oak wood conference table, Vietnamese legal professionals in formal business attire reviewing documents, natural window lighting, authentic office environment, sophisticated premium legal brand aesthetic, 35mm photography, realistic skin texture, cinematic composition, high resolution, no logos, no watermarks, no artificial text'
  },
  {
    filename: 'hero-premium.png',
    prompt: 'Cinematic wide-angle interior photography of an ultra-luxury Vietnamese law firm penthouse in Ho Chi Minh City at dusk, floor-to-ceiling glass windows with Saigon skyline bokeh, dark obsidian and brushed champagne gold accents, prestigious legal library, elegant warm ambient architectural lighting, high-end 8k editorial look, no text, no watermark'
  },
  {
    filename: 'about-firm.png',
    prompt: 'Architectural photography of an elite law firm reception and lounge in Vietnam, dark navy acoustic wall panels, polished travertine stone floor, warm brass accent lighting, minimalist executive aesthetic, prestigious legal consultancy, 35mm lens, high resolution'
  },
  {
    filename: 'about-philosophy.png',
    prompt: 'Prestigious law firm library and private conference room, bound classic legal treatises, solid dark walnut table, soft golden lamp light, dignified supreme justice and integrity atmosphere, editorial architectural shot'
  },
  {
    filename: 'consultation-meeting.png',
    prompt: 'Vietnamese senior male lawyer in tailored charcoal suit consulting with clients in a high-end private law office room, confidential atmosphere, open contract folder and coffee cup on table, natural daylight, candid editorial photography, realistic skin textures, 50mm f/1.8'
  },
  {
    filename: 'consultation-meeting-2.png',
    prompt: 'Vietnamese female attorney and colleague examining legal dossier in a luxury glass conference room, sophisticated corporate law firm, professional attire, soft focus background, authentic workplace documentary style'
  },
  {
    filename: 'lawyer-research-1.png',
    prompt: 'Experienced Vietnamese senior lawyer in modern spectacles and bespoke suit carefully reading thick legal code volumes and annotated contracts at a grand wooden desk, warm study lamp, dignified scholarly atmosphere'
  },
  {
    filename: 'lawyer-research-2.png',
    prompt: 'Vietnamese female corporate counsel in navy suit analyzing legal paperwork with digital tablet beside leather dossier, bright contemporary law office, thoughtful professional expression'
  },
  {
    filename: 'desk-contract-1.png',
    prompt: 'Macro luxury still-life of a corporate legal contract with signature lines, premium golden fountain pen resting on paper, dark polished mahogany table, soft office bokeh, 35mm editorial macro'
  },
  {
    filename: 'desk-contract-2.png',
    prompt: 'Executive law desk vignette with brass justice scales ornament, bound legal books, pristine legal documents with ribbon seal, sophisticated moody lighting'
  },
  {
    filename: 'architecture-exterior.png',
    prompt: 'Modern luxury glass and steel commercial tower in District 1 Ho Chi Minh City at blue hour, home to top corporate law firms, sleek urban architectural photography, reflection of city lights'
  },
  {
    filename: 'architecture-interior.png',
    prompt: 'Grand double-height lobby of an international legal firm, sweeping marble staircase, bronze details, serene natural light flowing from skylight, high-end minimalist corporate design'
  },
  {
    filename: 'practice-corporate.png',
    prompt: 'Corporate business boardroom in Vietnam with executives signing strategic merger agreement, crystal glass, executive suits, high-rise panoramic view, editorial photography'
  },
  {
    filename: 'practice-registration.png',
    prompt: 'Close-up of business registration documents, corporate certificates, company seal stamp, and legal stamps neatly organized on clean granite desk, sharp professional focus'
  },
  {
    filename: 'practice-contracts.png',
    prompt: 'Bilingual international commercial contract being reviewed with yellow highlighter and fountain pen, precision legal compliance review, corporate lawyer hands'
  },
  {
    filename: 'practice-investment.png',
    prompt: 'Foreign direct investment advisory scene, architectural masterplan blueprint of high-tech industrial park, investment portfolio, Vietnamese and international partners discussing'
  },
  {
    filename: 'practice-realestate.png',
    prompt: 'Real estate legal transaction setting, land title red book dossier, architectural model of premium property development, legal deed review'
  },
  {
    filename: 'practice-family.png',
    prompt: 'Warm, empathetic, dignified private family legal counseling room, warm beige and wood tones, comfortable armchairs, soft indoor plant, confidential setting'
  },
  {
    filename: 'practice-labor.png',
    prompt: 'Human resources and labor law compliance audit, corporate personnel regulation handbook, employment contracts on conference desk, bright professional office'
  },
  {
    filename: 'practice-dispute.png',
    prompt: 'Commercial arbitration and litigation setting, solemn hearing chamber table with legal briefs, wooden gavel, official dispute resolution dockets'
  },
  {
    filename: 'lawyer-1.png',
    prompt: 'Editorial portrait of distinguished Vietnamese senior managing partner attorney, male in his 40s, tailored charcoal grey suit, white shirt, calm authoritative expression, subtle law library background, soft studio portrait lighting, 85mm lens'
  },
  {
    filename: 'lawyer-2.png',
    prompt: 'Editorial portrait of Vietnamese female senior partner lawyer, 30s, elegant navy blazer, poised confident demeanor, subtle modern law firm interior background, beautiful natural lighting'
  },
  {
    filename: 'lawyer-3.png',
    prompt: 'Editorial portrait of veteran Vietnamese litigation lawyer, male in his 50s, refined spectacles, dark tailored three-piece suit, dignified and trustworthy, soft warm lighting'
  },
  {
    filename: 'lawyer-4.png',
    prompt: 'Editorial portrait of Vietnamese female investment and banking attorney, 30s, smart cream blazer, warm professional smile, modern corporate backdrop'
  },
  {
    filename: 'blog-1.png',
    prompt: 'Corporate governance and legal compliance conceptual photography, corporate statute documents, wooden gavel, modern office desk'
  },
  {
    filename: 'blog-2.png',
    prompt: 'Mergers and acquisitions M&A transaction agreement signing, handshake between business leaders, corporate boardroom'
  },
  {
    filename: 'blog-3.png',
    prompt: 'Real estate legal due diligence and land title verification, architectural blueprints and official land documentation'
  },
  {
    filename: 'blog-4.png',
    prompt: 'Labor code regulations and employment contract compliance review, corporate HR office setting'
  },
  {
    filename: 'blog-5.png',
    prompt: 'Intellectual property and patent law concept, certificate of invention, corporate brand registration documents'
  },
  {
    filename: 'blog-6.png',
    prompt: 'Foreign direct investment in Vietnam, high-rise cityscape of Ho Chi Minh City with financial towers and harbor'
  }
];

async function generateImage(item, index, total) {
  const filePath = path.join(OUTPUT_DIR, item.filename);
  if (fs.existsSync(filePath)) {
    console.log(`[${index + 1}/${total}] Skipped (already exists): ${item.filename}`);
    return;
  }

  console.log(`[${index + 1}/${total}] Generating ${item.filename}...`);
  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'ag/gemini-3.1-flash-image',
        prompt: item.prompt,
        n: 1,
        size: 'auto',
        quality: 'auto',
        background: 'auto',
        image_detail: 'high',
        output_format: 'png'
      })
    });

    if (!res.ok) {
      const txt = await res.text();
      throw new Error(`HTTP ${res.status}: ${txt}`);
    }

    const data = await res.json();
    if (data.data && data.data[0] && data.data[0].b64_json) {
      const buffer = Buffer.from(data.data[0].b64_json, 'base64');
      fs.writeFileSync(filePath, buffer);
      console.log(`[${index + 1}/${total}] Saved ${item.filename} (${buffer.length} bytes)`);
    } else if (data.data && data.data[0] && data.data[0].url) {
      const imgRes = await fetch(data.data[0].url);
      const arrayBuffer = await imgRes.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(filePath, buffer);
      console.log(`[${index + 1}/${total}] Downloaded & Saved ${item.filename} (${buffer.length} bytes)`);
    } else {
      console.warn(`[${index + 1}/${total}] Unexpected response structure:`, JSON.stringify(data).substring(0, 200));
    }
  } catch (err) {
    console.error(`[${index + 1}/${total}] Failed to generate ${item.filename}:`, err.message);
  }
}

async function run() {
  console.log(`Starting image generation for ${IMAGES.length} assets...`);
  // Process in small batches of 2 concurrent requests to be polite to the local server
  const concurrency = 2;
  for (let i = 0; i < IMAGES.length; i += concurrency) {
    const batch = IMAGES.slice(i, i + concurrency);
    await Promise.all(batch.map((item, idx) => generateImage(item, i + idx, IMAGES.length)));
  }
  console.log('All image generation completed.');
}

run();
