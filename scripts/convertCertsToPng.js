import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const certsDir = path.join(__dirname, '../public/certificates')

const files = ['cert-js', 'cert-git', 'cert-frontend', 'cert-tesda']

async function convertAll() {
  for (const name of files) {
    const svgPath = path.join(certsDir, `${name}.svg`)
    const pngPath = path.join(certsDir, `${name}.png`)
    
    if (fs.existsSync(svgPath)) {
      const svgBuffer = fs.readFileSync(svgPath)
      await sharp(svgBuffer)
        .resize(1200, 840)
        .png({ quality: 95 })
        .toFile(pngPath)
      console.log(`Successfully generated ${name}.png`)
    }
  }
}

convertAll().catch(console.error)
