import clyngDashboard from './assets/clyng-dashboard.jpg'
import clyngPlaybooks from './assets/clyng-playbooks.jpg'
import aiCallerWorkflow from './assets/ai-caller-workflow.jpg'
import linkedinWorkflow from './assets/linkedin-workflow.jpg'

export const profile = {
  name: 'Adam Harari',
  title: 'Senior AI & Automation Engineer',
  tagline:
    'I help E-commerce, Real Estate and SaaS companies turn messy data and scattered apps into clear dashboards and hands-off workflows.',
  pitch:
    'Clients come to me when they are losing hours pulling reports, copying data between tools, or have no visibility into revenue, churn or product performance. I build systems that give you clarity in minutes, not hours.',
  email: 'luckyman428623@gmail.com',
  rate: '$80/hr',
  experience: '8+ years',
}

export const stats = [
  { value: '8+', label: 'Years of experience' },
  { value: '28%', label: 'Churn cut for a subscription brand' },
  { value: '100%', label: 'On-time, milestone-based delivery' },
]

export const services = [
  {
    icon: 'workflow',
    title: 'Workflow Automation',
    text: 'End-to-end automations in n8n, Make, Zapier and Zoho Flow with multi-step logic and solid error handling.',
  },
  {
    icon: 'api',
    title: 'API & App Integrations',
    text: 'Custom API and webhook connections that sync CRMs, forms, payments and databases with no duplicates or lost records.',
  },
  {
    icon: 'bot',
    title: 'AI Agents & Chatbots',
    text: 'Agents on OpenAI, Claude and Gemini that handle support, sales and ops on WhatsApp, Slack or your website.',
  },
  {
    icon: 'docs',
    title: 'RAG & Document AI',
    text: 'LangChain pipelines with Pinecone or Chroma so agents answer from your own documents and extract data at scale.',
  },
  {
    icon: 'crm',
    title: 'CRM & Marketing Automation',
    text: 'Zoho CRM, GoHighLevel and HubSpot pipelines, nurture sequences, lead routing and booking reminders that run on their own.',
  },
  {
    icon: 'database',
    title: 'SQL & Data Engineering',
    text: 'Reliable queries and data models in SQL, Postgres, Snowflake and Supabase that your reporting can trust.',
  },
  {
    icon: 'chart',
    title: 'BI Dashboards',
    text: 'Power BI and Tableau executive dashboards that show revenue, churn and performance at a glance.',
  },
  {
    icon: 'cart',
    title: 'E-commerce Analytics',
    text: 'Shopify, Recharge, Amazon and Walmart data unified into one clear view of sales, subscriptions and products.',
  },
  {
    icon: 'board',
    title: 'Project & Ops Automation',
    text: 'Monday and Airtable boards wired to update tasks, statuses and projects automatically.',
  },
]

export const projects = [
  {
    name: 'Clyng.io',
    role: 'End-to-End Engineer',
    tags: ['Churn Analytics', 'Retention Playbooks', 'Subscription E-commerce'],
    description:
      'Subscription e-commerce owners struggle with churn, so I built a platform that both monitors it and takes action to retain customers — because keeping a customer is far cheaper than acquiring a new one. Clyng tracks voluntary and involuntary churn, recovered revenue and conversion in a live dashboard, and runs automated retention playbooks that engage at-risk subscribers the moment they cancel.',
    highlights: [
      'Real-time churn & revenue dashboard with 15-minute auto-sync',
      'Automated retention playbooks triggered by cancellations',
      'Recovery attribution across emails, SMS, discounts and calls',
    ],
    images: [
      { src: clyngDashboard, alt: 'Clyng.io live churn and revenue dashboard' },
      { src: clyngPlaybooks, alt: 'Clyng.io automated retention playbooks' },
    ],
  },
  {
    name: 'AI Caller Bot',
    role: 'Developer',
    tags: ['Voice AI', 'n8n', 'Lead Qualification'],
    description:
      'A full-scale AI calling system that qualifies leads or sells products over the phone. Sophisticated backend automation either searches Google for leads on its own or processes lists you upload — a CSV batch pipeline runs calls in parallel, while a chat-driven AI agent orchestrates voice calls, contact processing and lead search sequentially.',
    highlights: [
      'Parallel CSV batch calling with Supabase-backed state',
      'AI agent routing between voice, contact and search sub-workflows',
      'Built-in Google lead search — bring leads or let it find them',
    ],
    images: [
      { src: aiCallerWorkflow, alt: 'AI Caller Bot master workflow in n8n' },
    ],
  },
  {
    name: 'LinkedIn Connection Requester',
    role: 'Developer',
    tags: ['Lead Magnet', 'Outreach', 'PhantomBuster'],
    description:
      'Finds exactly the people you need and sends each one a personalized LinkedIn connection request, so the moment they accept you can strike up a real conversation. It scrapes targeted prospects, loops through each one to generate a personalized message with AI, logs everything to Google Sheets and triggers the outreach — it works for landing jobs or sales. The possibilities are endless.',
    highlights: [
      'Targeted prospect scraping from a simple form submission',
      'AI-personalized message for every single connection request',
      'Google Sheets tracking + automated sending via PhantomBuster',
    ],
    images: [
      { src: linkedinWorkflow, alt: 'LinkedIn outreach automation workflow' },
    ],
  },
]

export const tools = [
  'n8n', 'Make', 'Zapier', 'Zoho', 'Monday', 'GoHighLevel', 'HubSpot',
  'Airtable', 'Supabase', 'Postgres', 'Snowflake', 'Power BI', 'Tableau',
  'OpenAI', 'Claude', 'Gemini', 'LangChain', 'Pinecone', 'Chroma',
]

export const reasons = [
  {
    title: '100% on-time delivery',
    text: 'Milestone-based progress, so you always know where the project stands.',
  },
  {
    title: 'You own everything',
    text: 'All workflows, code and credentials are yours from day one.',
  },
  {
    title: 'Clear documentation',
    text: 'Docs your team can actually run, maintain and extend without me.',
  },
  {
    title: 'Post-launch support',
    text: "I don't disappear after handover — I stay available to keep things running.",
  },
]
