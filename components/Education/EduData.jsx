import USJPLogo from '@/public/images/usjp-logo.png';
import UoMLogo from '@/public/images/uom-logo.png';
import SLIMLogo from '@/public/images/slim-logo.png';
import SchoolLogo from '@/public/images/stc-logo.png';

export const eduData = {
    mainData: {
        title: "Education",
        title2: "My Education",
    },
    education: [
        {
            image: USJPLogo,
            degree: 'Bachelor of Information and Communication Technology',
            specialization: 'Software Technology Specialization',
            university: 'University of Sri Jayewardenepura',
            date: '2022 - Present',
            status: 'Ongoing'
        },
        {
            image: UoMLogo,
            degree: 'CCNA Reading (CCNA 200-301)',
            specialization: 'Professional Certification Course',
            university: 'Cisco Networking Center - University Of Moratuwa',
            date: '2025 - Present',
            status: 'Ongoing'
        },
        {
            image: SLIMLogo,
            degree: 'Certificated in Digital Marketing',
            specialization: 'Professional Certification Course',
            university: 'Sri Lanka Institute of Marketing',
            date: '2023',
            status: 'Completed'
        },
        {
            image: SchoolLogo,
            degree: 'G.C.E Advanced Level',
            specialization: 'Technology Stream',
            university: 'St. Thomas\' College - Matale',
            date: '2020',
            status: 'Completed',
            results: '2A, 1B',
            rank: 'District Rank: 4'
        },
        {
            image: SchoolLogo,
            degree: 'G.C.E Ordinary Level',
            university: 'St. Thomas\' College - Matale',
            date: '2017',
            status: 'Completed',
            results: '7A, 2B',
        },
    ],
};