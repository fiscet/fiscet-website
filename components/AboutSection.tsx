import Link from 'next/link';
import { SectionTitle } from './SectionTitle';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-x-32">
      <div className="about-desc flex-2/3">
        <div>
          <SectionTitle className="text-3xl">About</SectionTitle>
          <p>
            <strong>Expertise in Modern Technologies:</strong> With proficiency
            in Next.js and leading CMS platforms
          </p>
        </div>
      </div>
      <div className="about-cta flex-1/3">
        <Link href="#contact">
          <Button size="lg" className="bg-fis-logo mt-8 text-lg px-6 py-3">
            Let&lsquo;s Work Together
          </Button>
        </Link>
      </div>
    </div>
  );
}
