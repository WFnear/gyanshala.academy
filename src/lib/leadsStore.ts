// Shared in-memory store for leads when Supabase is running locally
import { EnquiryLead } from "./databaseSeedData";

// Global reference for Next.js hot reload persistence
declare global {
  var __GYANSHALA_LEADS__: EnquiryLead[] | undefined;
}

if (!global.__GYANSHALA_LEADS__) {
  global.__GYANSHALA_LEADS__ = [];
}

export function getMemoryLeads(): EnquiryLead[] {
  return global.__GYANSHALA_LEADS__ || [];
}

export function addMemoryLead(lead: EnquiryLead): void {
  if (!global.__GYANSHALA_LEADS__) {
    global.__GYANSHALA_LEADS__ = [];
  }
  global.__GYANSHALA_LEADS__.unshift(lead);
}

export function updateMemoryLead(id: string, updates: Partial<EnquiryLead>): EnquiryLead | null {
  if (!global.__GYANSHALA_LEADS__) return null;
  const index = global.__GYANSHALA_LEADS__.findIndex((l) => l.id === id);
  if (index === -1) return null;
  global.__GYANSHALA_LEADS__[index] = { ...global.__GYANSHALA_LEADS__[index], ...updates };
  return global.__GYANSHALA_LEADS__[index];
}

export function deleteMemoryLead(id: string): boolean {
  if (!global.__GYANSHALA_LEADS__) return false;
  const prevLen = global.__GYANSHALA_LEADS__.length;
  global.__GYANSHALA_LEADS__ = global.__GYANSHALA_LEADS__.filter((l) => l.id !== id);
  return global.__GYANSHALA_LEADS__.length < prevLen;
}
