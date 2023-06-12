const AirtablePlus = require('airtable-plus')

const API_KEY = process.env.AIRTABLE;

export const registrationsAirtable = new AirtablePlus({
  baseID: 'app6xKL76rT2AlnKB',
  apiKey: API_KEY,
  tableName: 'Registrations',
})
