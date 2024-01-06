const { default: axios } = require("axios");
const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.API_KEYS)
const cryptoToken = process.env.CRYPTO;
