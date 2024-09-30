import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';
import validatePassword from '../utils/validatePassword.js';
import validateEmail from '../utils/validateEmail.js';
import matchPasswords from '../utils/matchPasswords.js';
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
    register: (req, res) => {
        const { email, password, repassword } = req.body;

        const emailExist = User.getByEmail(email);
        if (emailExist) {
            return res.status(409).render('404', {
                title: 'Email already exist',
                message: 'Email already exist'
            });
        }
        const isValidEmail = validateEmail(email);
        const isValidPassword = validatePassword(password);
        const doPasswordMatch = matchPasswords(password, repassword);

        if (isValidEmail && isValidPassword && doPasswordMatch) {
            const hashedPassword = hashPassword(password);
            const newUser = User.addNewUser({
                email,
                password: hashedPassword
            });
            res.status(302).redirect('/api/login');
        } else {
            res.status(400).render('404', {
                title: 'invalid email or password',
                message: 'Invalid email or password'
            });
        }
    },
    login: (req, res) => {
        const { email, password } = req.body;
        const emailExist = User.getByEmail(email);
        if (!emailExist) {
            return res.status(404).render('404', {
                title: 'User not found',
                message: 'User not found, please register!'
            });
        }
        bcrypt.compare(password, emailExist.password, (err, isValid) => {
            if (err) {
                console.error(err);
            }
            if (isValid) {
                const token = jwt.sign(
                    { email: emailExist.email },
                    process.env.JWT_SECRET
                );
                if (token) {
                    res.cookie('token', token, { httpOnly: true });
                    res.status(200).redirect('/api/products');
                }
            } else {
                res.status(409).render('404', {
                    title: 'Invalid password or email',
                    message: 'Invalid password or email'
                });
            }
        });
    },
    logout: (req, res) => {
        res.clearCookie('token');
        res.status(200).redirect('/api/products');
    },

    getRegisterForm: (req, res) => {
        res.status(200).render('register-form');
    },
    getLoginForm: (req, res) => {
        res.status(200).render('login-form');
    }
};

export default userControllers;
