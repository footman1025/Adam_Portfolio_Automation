import clyngDashboard from './assets/clyng-dashboard.jpg'
import clyngPlaybooks from './assets/clyng-playbooks.jpg'
import aiCallerWorkflow from './assets/ai-caller-workflow.jpg'
import linkedinWorkflow from './assets/linkedin-workflow.jpg'
import integrationWorkflows from './assets/integration-workflows.jpg'

export const profile = {
  name: 'Adam Harari',
  title: 'Senior AI & Automation Engineer',
  tagline:
    'I help E-commerce, Real Estate and SaaS companies turn messy data and scattered apps into clear dashboards and hands-off workflows.',
  pitch:
    'Clients come to me when they are losing hours pulling reports, copying data between tools, or have no visibility into revenue, churn or product performance. I build systems that give you clarity in minutes, not hours.',
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
    name: 'AI Caller Bot',
    role: 'Developer',
    category: 'Automation · Voice AI',
    icon: 'bot',
    blurb:
      'A full-scale AI calling system that qualifies leads or sells products over the phone — with its own lead search built in.',
    tags: ['Voice AI', 'n8n', 'Lead Qualification'],
    stack: ['n8n', 'OpenAI', 'Supabase', 'Voice AI', 'Webhooks'],
    description:
      'A full-scale AI calling system that qualifies leads or sells products over the phone. Sophisticated backend automation either searches Google for leads on its own or processes lists you upload — a CSV batch pipeline runs calls in parallel, while a chat-driven AI agent orchestrates voice calls, contact processing and lead search sequentially.',
    highlights: [
      'Parallel CSV batch calling with Supabase-backed state',
      'AI agent routing between voice, contact and search sub-workflows',
      'Built-in Google lead search — bring leads or let it find them',
    ],
    images: [
      { src: aiCallerWorkflow, alt: 'AI Caller Bot master workflow architecture' },
    ],
  },
  {
    name: 'LinkedIn Connection Requester',
    role: 'Developer',
    category: 'Automation · Lead Generation',
    icon: 'crm',
    blurb:
      'Finds exactly the right people and sends each one an AI-personalized LinkedIn connection request, tracked end to end.',
    tags: ['Lead Magnet', 'Outreach', 'PhantomBuster'],
    stack: ['n8n', 'OpenAI', 'Apify', 'PhantomBuster', 'Google Sheets'],
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
  {
    name: 'Clyng.io',
    role: 'End-to-End Engineer',
    category: 'SaaS · Churn Analytics',
    icon: 'chart',
    blurb:
      'Churn monitoring and automated retention playbooks for subscription e-commerce — recover customers before they leave.',
    tags: ['Churn Analytics', 'Retention Playbooks', 'Subscription E-commerce'],
    stack: ['React', 'Supabase', 'n8n', 'Stripe', 'Email & SMS Automation'],
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
    name: 'Automated Quiz Release & Grading',
    role: 'Automation Developer',
    category: 'Automation · Microsoft 365 Workflow',
    icon: 'docs',
    blurb:
      'A release, access-control, grading and notification system spanning Microsoft Forms and SharePoint.',
    tags: ['Microsoft 365', 'Education', 'Workflow'],
    stack: ['Power Automate', 'SharePoint', 'Microsoft Forms'],
    description:
      'A release, access-control, grading and notification system spanning Microsoft Forms and SharePoint. Quizzes go out on schedule to exactly the right people, submissions are graded automatically, and results land in SharePoint with notifications sent — zero manual steps for the teacher.',
    highlights: [
      'Scheduled quiz release with per-group access control',
      'Automatic grading of every submission',
      'Results stored in SharePoint with instant notifications',
    ],
    images: [],
  },
  {
    name: 'InwardStyle',
    role: 'Automation Developer',
    category: 'Automation · Airtable Client Operating System',
    icon: 'board',
    blurb:
      'A focused client system that keeps prospects, consultations, next actions and exceptions moving without burdening the owner.',
    tags: ['Airtable', 'Client Operations', 'Make.com'],
    stack: ['Airtable', 'Make.com', 'Google Calendar'],
    description:
      'A focused Airtable-based operating system that keeps prospects, consultations, next actions and exceptions moving without burdening the owner. Airtable is the single source of truth, Make.com runs the automations behind it, and Google Calendar keeps every consultation in sync.',
    highlights: [
      'Airtable as the single source of truth for every client',
      'Make.com automations drive next actions and exceptions',
      'Google Calendar sync for every consultation',
    ],
    images: [],
  },
  {
    name: 'n8n, Zapier & Make Workflows',
    role: 'Automation Engineer',
    category: 'Automation · App Integrations',
    icon: 'workflow',
    blurb:
      'Automations for the copy-paste work between your tools — leads scored and routed, invoices booked, alerts when something fails.',
    tags: ['Workflow Automation', 'Integrations', 'Error Handling'],
    stack: ['n8n', 'Zapier', 'Make', 'Slack', 'Gmail', 'Google Calendar'],
    description:
      'Automations for the copy-paste work between your tools. A new lead gets scored, added to the CRM and posted to Slack. A paid invoice updates the books and sends a thank-you. We map your process first, automate the slow parts, and add alerts for when something fails.',
    highlights: [
      'New leads scored, added to the CRM and posted to Slack automatically',
      'Paid invoices update the books and trigger a thank-you on their own',
      'Process mapped first, with failure alerts so nothing breaks silently',
    ],
    images: [
      { src: integrationWorkflows, alt: 'Apps connected through n8n, Zapier and Make workflows' },
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
