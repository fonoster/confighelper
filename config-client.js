#!/usr/bin/env node
const { createClientConfig } = require('@fonos/certs/dist/certs')
const endpoint = process.env.ENDPOINT || 'fonos.local'
createClientConfig('/config', endpoint)
