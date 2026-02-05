//Portfolio Section tumbnail images enter here
import PortfolioImg1 from '@/public/images/CareerPulse.jpg';
import PortfolioImg2 from '@/public/images/SparkChat.png';
import PortfolioImg3 from '@/public/images/CertificateGenerator.jpg';
import PortfolioImg4 from '@/public/images/SmartCafeteria.jpg';
import PortfolioImg5 from '@/public/images/my-portfolio.png';
import PortfolioImg6 from '@/public/images/auruduapp.png';

//Portfolio Section main images enter here
import ProjectImage1 from '@/public/images/CareerPulse-main.jpg';
import ProjectImage2 from '@/public/images/SparkChat-main.png';
import ProjectImage3 from '@/public/images/CertificateGenerator-main.png';
import ProjectImage4 from '@/public/images/SmartCafeteria-main.jpg';
import ProjectImage5 from '@/public/images/my-portfolio-main.png';
import ProjectImage6 from '@/public/images/auruduapp-main.png';

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "Driven by a commitment to excellence, here’s a showcase of projects crafted to meet the highest standards."
    },

    navigationList: [
        {
            title: "Mobile Apps",
            classes: "mobile-apps",
            dataFilter: ".mobile-apps"
        },
        {
            title: "UI/UX Design",
            classes: "ui-ux",
            dataFilter: ".ui-ux"
        },
        {
            title: "Web Development",
            classes: "web-dev",
            dataFilter: ".web-dev"
        },
        {
            title: "Software Development",
            classes: "soft-dev",
            dataFilter: ".soft-dev"
        },
        {
            title: "IoT Projects",
            classes: "iot-dev",
            dataFilter: ".iot-dev"
        },
    ],


    projects: [
        {
            projectTitle: 'Blockchain-Based Land Deed Verification System',
            slug: 'blockchain-land-deed',
            description: 'Designed a permissioned blockchain system to securely verify land deeds in Sri Lanka. Uses cryptographic hashing and smart contracts to prevent fraud, ensure data integrity, and enable fast verification while complying with personal data protection requirements.',
            keywords: 'Blockchain, Hyperledger Fabric, Docker, Smart Contracts',
            categories: ['web-dev', 'soft-dev'],
            tools: ['Hyperledger Fabric', 'Docker', 'SHA-256', 'Blockchain'],
            services: 'Land Deed Verification',
            client: 'University Project',
            duration: 'Jun 2025 - Present',
            githubUrl: '#',
            behanceUrl: '#',
            liveUrl: '#',
            imageSrc: PortfolioImg5,
            mainImage: ProjectImage5,
            images: [
                { image: ProjectImage5 },
                { image: ProjectImage5 },
            ]
        },
        {
            projectTitle: 'Career Pulse',
            slug: 'career-pulse',
            description: 'A Flutter based mobile app developed as a university group project to support students in their internship journey. It provides personalized skill recommendations and internship matching using LinkedIn API based CV analysis. Built with Firebase and OpenAI to enhance career readiness through intelligent suggestions.',
            keywords: 'mobile app development, UI design, flutter, linkedin api, openai',
            categories: ['mobile-apps', 'ui-ux'],
            tools: ['Flutter', 'Figma', 'Firebase', 'OpenAI'],
            services: 'Finding Internships, CV Suggetions',
            client: 'Universtiy Project',
            duration: 'Jun 2024 - Nov 2024',
            githubUrl: 'https://github.com/CyborLK/CareerPulse-Mobile-App',
            behanceUrl: 'https://www.behance.net/gallery/216843619/CareerPulse-Mobile-App',
            liveUrl: 'https://drive.google.com/drive/folders/1eTCEJDzN1jcXA8oYkQTLCrqS60lGPP3p?usp=sharing',
            imageSrc: PortfolioImg1,
            mainImage: ProjectImage1,
            images: [
                { image: ProjectImage1 },
                { image: ProjectImage1 },
            ]
        },
        {
            projectTitle: 'SparkChat',
            slug: 'spark-chat',
            description: 'An innovative real-time messaging platform utilizing React for the frontend and Ballerina for the backend. SparkChat addresses challenges in real-time communication with features like WebSocket-based instant messaging, JWT-secured authentication, and MongoDB for scalable data management. Developed as part of the Innovate with Ballerina event in collaboration with an amazing team.',
            keywords: 'web development, real-time messaging, websockets, jwt, mongodb',
            categories: ['web-dev', 'ui-ux'],
            tools: ['React', 'Figma', 'Ballerina', 'MongoDB'],
            services: 'Real-time messaging platform',
            client: 'Competition Project',
            duration: 'Jan 2025 - Mar 2025',
            githubUrl: 'https://github.com/CyborLK/iwb083-code-alphaz',
            behanceUrl: 'https://www.behance.net/gallery/221512501/SparkChat-Innovative-real-time-messaging-platform',
            liveUrl: 'https://project1-demo.com',
            videoUrl: 'https://www.youtube.com/embed/TQBCvCmLzlk?si=JzsCo6YFjEsqs6ro',
            imageSrc: PortfolioImg2,
            mainImage: ProjectImage2,
            images: [
                { image: ProjectImage2 },
                { image: ProjectImage2 },
            ]
        },
        {
            projectTitle: 'Nekath Seettuwa 2025',
            slug: 'nekath-seettuwa',
            description: 'A personal Android app created for Sinhala and Tamil New Year 2025. The app shows correct Nekath times, helps users find the correct directions using a built-in compass, and includes a playlist of Aurudu songs. Designed to make New Year traditions easier to follow using a simple and user friendly mobile app.',
            keywords: 'Mobile App, Flutter, Android App, Figma, Compass',
            categories: ['mobile-apps', 'ui-ux'],
            tools: ['Flutter', 'Figma'],
            services: 'Aurudu Nekath App',
            client: 'Personal Project',
            duration: 'Mar 2025 - April 2025',
            githubUrl: 'https://github.com/CyborLK/aurudu_app',
            behanceUrl: 'https://www.behance.net/gallery/224320881/Nekath-Seettuwa-2025-Sinhala-Tamil-New-Year-App',
            liveUrl: 'https://github.com/CyborLK/aurudu_app/releases/tag/v1.0.1',
            imageSrc: PortfolioImg6,
            mainImage: ProjectImage6,
            images: [
                { image: ProjectImage6 },
                { image: ProjectImage6 },
            ]
        },
        {
            projectTitle: 'Certificate Generator',
            slug: 'certificate-generator',
            description: 'A Python script to automatically generate personalized certificates from a template image and a CSV file containing names. The script centers each name horizontally on the certificate for professional presentation.',
            keywords: 'python, python script, certificate generator',
            categories: ['soft-dev'],
            tools: ['Python 3', 'Pillow (PIL)', 'pandas', 'tqdm'],
            services: 'Certificate Name Generation',
            client: 'ICT Society USJP',
            duration: '24 hours',
            githubUrl: 'https://github.com/CyborLK/Certificate-Generator',
            videoUrl: 'https://www.youtube.com/embed/EiWK1qi090M?si=MNEBGXXZW_CCKQS4',
            imageSrc: PortfolioImg3,
            mainImage: ProjectImage3,
            images: [
                { image: ProjectImage3 },
                { image: ProjectImage3 },
            ]
        },
        {
            projectTitle: 'Cafeteria Automation System',
            slug: 'cafeteria-automation',
            description: 'The Cafeteria Automation System is an innovative solution designed to enhance the dining experience through seamless automation and efficient management. By integrating queue management, store inventory tracking, digital payments, and table seating reservations, this system eliminates long wait times, streamlines order processing, and ensures a hassle-free cafeteria experience.',
            keywords: 'IoT, Arduino, Digital Control Systems',
            categories: ['iot-dev'],
            tools: ['Arduino'],
            services: 'Digital Control Systems',
            client: 'University Project',
            duration: '2 months',
            githubUrl: 'https://github.com/CyborLK/Cafeteria_Automation_System',
            videoUrl: 'https://www.youtube.com/embed/UOEE1JIRQfk?si=Hv3qJ8o2u9qANLpq',
            imageSrc: PortfolioImg4,
            mainImage: ProjectImage4,
            images: [
                { image: ProjectImage4 },
                { image: ProjectImage4 },
            ]
        },
        {
            projectTitle: 'Portfolio',
            slug: 'my-portfolio',
            description: 'This is my personal portfolio website built with Next.js and SCSS, showcasing my skills, projects, and experience in web development. The site is designed to be fast, responsive, and modern, providing a seamless user experience.',
            keywords: 'Website, Portfolio, Web Development, Next.js',
            categories: ['web-dev'],
            tools: ['Next.js, SCSS, Figma, Vercel'],
            services: 'Personal Portfolio Website',
            client: 'Personal Project',
            duration: '4 months',
            githubUrl: 'https://github.com/CyborLK/my-portfolio-2.0',
            liveUrl: 'https://www.nadundaluwatta.me/',
            imageSrc: PortfolioImg5,
            mainImage: ProjectImage5,
            images: [
                { image: ProjectImage5 },
                { image: ProjectImage5 },
            ]
        },
    ]
};