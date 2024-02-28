import Container from '@/components/Container'
import HeroImage from '@/components/Hero/HeroImage'
import HeroSection from '@/components/Hero/HeroSection'

export default function Home() {
    return (
        <main className="max-h-screen h-screen overflow-hidden">
            <Container
                className="grid justify-center md:grid-cols-2 md:items-center"
            >
                <HeroSection />
                <HeroImage />
            </Container>
        </main>
    )
}
