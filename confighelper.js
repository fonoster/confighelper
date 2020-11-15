#!/usr/bin/env node
const { createConfig } = require('@fonos/certs/dist/certs')

const endpoint = process.env.ENDPOINT || 'fonos.local'

createConfig(endpoint, '/certs')
