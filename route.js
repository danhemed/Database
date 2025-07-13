import express from "express";
import pool from "./db.js";

const router = express.Router();

async function getFromDB(sql) {
    const [rows] = await pool.query(sql);
    return rows;
}

router.get('/question1', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT COUNT(*) FROM orders WHERE status = "shipped"');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/question2', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT COUNT(*) FROM customers WHERE country = "USA"');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});


router.get('/question3', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT MAX(amount) AS highest_payment FROM payments');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/question4', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT * FROM employees WHERE jobTitle = "Sales Rep"');
        res.send(rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/question5', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT AVG(creditLimit) FROM customers');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/question6', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT COUNT(DISTINCT productLine) AS different_product FROM productlines');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

router.get('/question7', async (req, res) => {
    try {
        const rows = await getFromDB('SELECT c.customerName FROM customers AS c LEFT JOIN orders AS o ON o.customerNumber = c.customerNumber WHERE o.status = "Cancelled"');
        res.json(rows);
    } catch (err) {
        console.log(err);
    }
});

export default router;
