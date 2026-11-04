// Persistent storage for student enquiries / leads (Stored in src/data/enquiries.json)
import fs from "fs";
import path from "path";
import { EnquiryLead } from "./databaseSeedData";

const ENQUIRIES_FILE = path.join(process.cwd(), "src", "data", "enquiries.json");

function readEnquiries(): EnquiryLead[] {
  try {
    if (fs.existsSync(ENQUIRIES_FILE)) {
      const raw = fs.readFileSync(ENQUIRIES_FILE, "utf8");
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (err) {
    console.error("Error reading enquiries file:", err);
  }
  return [];
}

function writeEnquiries(leads: EnquiryLead[]): void {
  try {
    const dir = path.dirname(ENQUIRIES_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(leads, null, 2), "utf8");
  } catch (err) {
    console.error("Error writing enquiries file:", err);
  }
}

export function getMemoryLeads(): EnquiryLead[] {
  return readEnquiries();
}

export function addMemoryLead(lead: EnquiryLead): void {
  const leads = readEnquiries();
  // Put newest lead at top
  const existingIdx = leads.findIndex((l) => l.id === lead.id);
  if (existingIdx !== -1) {
    leads[existingIdx] = lead;
  } else {
    leads.unshift(lead);
  }
  writeEnquiries(leads);
}

export function updateMemoryLead(id: string, updates: Partial<EnquiryLead>): EnquiryLead | null {
  const leads = readEnquiries();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;
  leads[index] = { ...leads[index], ...updates };
  writeEnquiries(leads);
  return leads[index];
}

export function deleteMemoryLead(id: string): boolean {
  const leads = readEnquiries();
  const prevLen = leads.length;
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length < prevLen) {
    writeEnquiries(filtered);
    return true;
  }
  return false;
}
