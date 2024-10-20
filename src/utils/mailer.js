

import nodemailer from 'nodemailer'
import { User } from '@/models/user.model'
import bcrypt from 'bcrypt'
import { NextResponse } from 'next/server'

export const sendEmail = async ({ email, password, emailType, userId }) => {

    try {
        const hashed = await bcrypt.hash(userId.toString(), 10)

        if (emailType === 'VERIFY') {

            await User.findByIdAndUpdate(userId, { verifyToken: hashed, verifyTokenExpiry: Date.now() + 3600000 })
        }
        else if (emailType === 'RESET') {
            await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashed, forgotPasswordTokenExpiry: Date.now() + 3600000 })
        }

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: "12c60f5c2b417b",
                pass: "8870cba8bb8cc1"
            }
        });
        const mailOptions ={
            from:'vivekroy567@gmail.com',
            to:email,
            subject: emailType ==='VERIFY' ? 'Verify your email' :'Reset your password',
            html:`
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #333;">${emailType === 'VERIFY' ? 'Verify Your Email' : 'Reset Your Password'}</h2>
            <p style="font-size: 16px; color: #555;">
                Click the button below to ${emailType === 'VERIFY' ? 'verify your email' : 'reset your password'}:
            </p>
            <a href="${process.env.DOMAIN}/verifyemail?token=${hashed}" 
               style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px;">
               ${emailType === 'VERIFY' ? 'Verify Email' : 'Reset Password'}
            </a>
            <p style="font-size: 12px; color: #999; margin-top: 20px;">
                If you didn't request this, you can ignore this email.
            </p>
        </div>
    `
        }

        const res = await transport.sendMail(mailOptions)

        return NextResponse({success:true,message:"Email sent successfully"})

    } catch (error) {
        console.log(error.message)
        return NextResponse.json({ success: false, message: "Server error" })
    }
}