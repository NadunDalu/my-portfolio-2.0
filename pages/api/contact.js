import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message, subject } = req.body;
        const to = process.env.MAIL_TO_ADDRESS;

        const body = `
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `;

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: process.env.MAIL_USE_TLS === 'true', // Convert env string to boolean
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
        });

        try {
            await transporter.sendMail({
                from: email,
                to,
                cc: process.env.MAIL_CC_ADDRESS || undefined,
                bcc: process.env.MAIL_BCC_ADDRESS || undefined,
                subject: `New Inquiry: ${subject}`,
                html: body,
            });
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error("Email send error:", error.message);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).end();
    }
}
