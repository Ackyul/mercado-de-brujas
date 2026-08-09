import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl || databaseUrl.includes('user:password')) {
  console.warn('⚠️  DATABASE_URL no está configurado o tiene valores por defecto de ejemplo.');
}

const sql = neon(databaseUrl || 'postgresql://placeholder:placeholder@localhost/placeholder');
export const db = drizzle(sql);
